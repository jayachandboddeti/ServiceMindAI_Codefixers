"""Adaptive AI Tutor backend: Class 3 Fractions MVP.

This service uses explainable adaptive rules instead of pretending that a
complex ML model exists. Every response is persisted as telemetry so the rule
engine can build a learner profile over time.
"""

from __future__ import annotations

import os
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Literal
from uuid import uuid4

from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

DB_PATH = Path(__file__).with_name("tutor.db")
CONFIDENCE = Literal["very_confident", "confident", "unsure", "guessing"]
STYLE = Literal["simple", "visual", "real_world", "interactive", "story"]

QUESTION_BANK = [
    {
        "id": "frac-basics-1", "concept": "fraction_basics", "difficulty": 1,
        "question": "What does the fraction 1/2 mean in real life?",
        "options": ["1 part out of 2 equal parts of a whole", "2 parts out of 1 part", "Any random cut into 2 pieces"],
        "correct_option": 0,
        "explanation": "A fraction names equal parts of one whole. In 1/2, one of two equal parts is being considered.",
        "teach_back_prompt": "Why must the two pieces be equal?",
    },
    {
        "id": "frac-visual-1", "concept": "equal_parts", "difficulty": 1,
        "question": "If 2 out of 4 equal pizza slices are eaten, what fraction was eaten?",
        "options": ["2/4, which is equal to 1/2", "4/2", "1/4"],
        "correct_option": 0,
        "explanation": "Two of four equal slices is 2/4. It covers the same amount as 1/2.",
        "teach_back_prompt": "Why are 2/4 and 1/2 equivalent fractions?",
    },
    {
        "id": "frac-compare-1", "concept": "comparison", "difficulty": 2,
        "question": "Which is larger: 1/2 of a pizza or 1/4 of the same pizza?",
        "options": ["1/2, because fewer equal parts makes each part bigger", "1/4, because 4 is bigger than 2", "They are equal"],
        "correct_option": 0,
        "explanation": "When the whole is divided into fewer equal parts, each part is larger. Therefore 1/2 is larger than 1/4.",
        "teach_back_prompt": "How would you explain this to someone who thinks 1/4 is bigger because 4 is bigger than 2?",
    },
    {
        "id": "frac-word-1", "concept": "word_problems", "difficulty": 3,
        "question": "A cake has 8 equal slices. Alex eats 3 and Sam eats 2. What fraction remains?",
        "options": ["3/8", "5/8", "1/8"],
        "correct_option": 0,
        "explanation": "Five slices were eaten, so 8 − 5 = 3 slices remain: 3/8.",
        "teach_back_prompt": "Explain the two steps you used to find the remaining fraction.",
    },
]

PREREQUISITES = {"comparison": "equal_parts", "word_problems": "fraction_basics"}


class StudentCreate(BaseModel):
    name: str = Field(min_length=1, max_length=80)
    grade: int = Field(default=3, ge=1, le=12)
    preferred_language: str = Field(default="English", max_length=40)
    preferred_style: STYLE = "visual"


class SessionCreate(BaseModel):
    student_id: str
    topic: str = "fractions"


class AnswerCreate(BaseModel):
    question_id: str
    selected_option: int = Field(ge=0)
    confidence: CONFIDENCE
    response_time_ms: int | None = Field(default=None, ge=0, le=3_600_000)


class TeachBackCreate(BaseModel):
    concept: str = "equal_parts"
    explanation: str = Field(min_length=2, max_length=2000)


@contextmanager
def db():
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    try:
        yield connection
        connection.commit()
    finally:
        connection.close()


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


def init_db() -> None:
    with db() as conn:
        conn.executescript("""
        CREATE TABLE IF NOT EXISTS students (
          id TEXT PRIMARY KEY, name TEXT NOT NULL, grade INTEGER NOT NULL,
          preferred_language TEXT NOT NULL, preferred_style TEXT NOT NULL,
          created_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS sessions (
          id TEXT PRIMARY KEY, student_id TEXT NOT NULL, topic TEXT NOT NULL,
          current_difficulty INTEGER NOT NULL DEFAULT 1, created_at TEXT NOT NULL,
          FOREIGN KEY(student_id) REFERENCES students(id)
        );
        CREATE TABLE IF NOT EXISTS attempts (
          id TEXT PRIMARY KEY, session_id TEXT NOT NULL, student_id TEXT NOT NULL,
          question_id TEXT NOT NULL, concept TEXT NOT NULL, is_correct INTEGER NOT NULL,
          confidence TEXT NOT NULL, response_time_ms INTEGER, mistake_type TEXT,
          created_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS mastery (
          student_id TEXT NOT NULL, concept TEXT NOT NULL, score REAL NOT NULL,
          updated_at TEXT NOT NULL, PRIMARY KEY(student_id, concept)
        );
        """)


def public_question(question: dict) -> dict:
    return {key: value for key, value in question.items() if key != "correct_option"}


def get_question(question_id: str) -> dict:
    question = next((item for item in QUESTION_BANK if item["id"] == question_id), None)
    if not question:
        raise HTTPException(status_code=404, detail="Unknown question_id")
    return question


def student_or_404(conn: sqlite3.Connection, student_id: str) -> sqlite3.Row:
    student = conn.execute("SELECT * FROM students WHERE id = ?", (student_id,)).fetchone()
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


def session_or_404(conn: sqlite3.Connection, session_id: str) -> sqlite3.Row:
    session = conn.execute("SELECT * FROM sessions WHERE id = ?", (session_id,)).fetchone()
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    return session


def mastery_score(conn: sqlite3.Connection, student_id: str, concept: str) -> float:
    row = conn.execute("SELECT score FROM mastery WHERE student_id = ? AND concept = ?", (student_id, concept)).fetchone()
    return float(row["score"]) if row else 50.0


def update_mastery(conn: sqlite3.Connection, student_id: str, concept: str, correct: bool, confidence: str) -> float:
    current = mastery_score(conn, student_id, concept)
    delta = 12 if correct else -14
    if correct and confidence in {"unsure", "guessing"}:
        delta = 5  # correct answer without confidence is not full evidence of mastery
    if not correct and confidence == "very_confident":
        delta = -20  # confident errors are strong misconception signals
    score = max(0.0, min(100.0, current + delta))
    conn.execute("""INSERT INTO mastery(student_id, concept, score, updated_at) VALUES (?, ?, ?, ?)
      ON CONFLICT(student_id, concept) DO UPDATE SET score=excluded.score, updated_at=excluded.updated_at""",
      (student_id, concept, score, now()))
    return score


def classify_mistake(question: dict, is_correct: bool, confidence: str, response_time_ms: int | None) -> str | None:
    if is_correct and confidence in {"unsure", "guessing"}:
        return "guessing"
    if not is_correct and confidence in {"very_confident", "confident"}:
        return "conceptual"
    if not is_correct and response_time_ms is not None and response_time_ms < 1200:
        return "careless"
    if not is_correct and question["concept"] == "word_problems":
        return "misreading"
    return "needs_support" if not is_correct else None


def choose_next_activity(conn: sqlite3.Connection, student_id: str, difficulty: int, is_correct: bool, confidence: str, concept: str) -> tuple[dict, str, str]:
    prerequisite = PREREQUISITES.get(concept)
    if not is_correct and confidence in {"very_confident", "confident"} and prerequisite:
        candidates = [q for q in QUESTION_BANK if q["concept"] == prerequisite]
        return candidates[0], "prerequisite_booster", f"Let's strengthen {prerequisite.replace('_', ' ')} before returning to this challenge."
    if is_correct and confidence in {"unsure", "guessing"}:
        candidates = [q for q in QUESTION_BANK if q["concept"] == concept]
        return candidates[0], "teach_back", "You found the answer—now teach it back so we can confirm the idea feels clear."
    target_difficulty = min(3, difficulty + 1) if is_correct else max(1, difficulty - 1)
    candidates = [q for q in QUESTION_BANK if q["difficulty"] == target_difficulty]
    return candidates[0], ("advance" if is_correct else "guided_practice"), ("Great work—let's try a bigger reasoning challenge." if is_correct else "You're close. We'll use a simpler, supported example next.")


def evaluate_teach_back(explanation: str) -> dict:
    text = explanation.lower()
    mentions_equal = "equal" in text
    mentions_total = any(word in text for word in ("whole", "total", "all", "divided", "pieces", "parts"))
    confuses_numerator = any(word in text for word in ("ate", "eaten", "took", "have"))
    if mentions_equal and mentions_total:
        return {"score": 98, "verdict": "deep_conceptual_mastery", "feedback": "Excellent—your explanation connects equal parts to the total whole.", "follow_up": "Wonderful teaching. You are ready for a comparison challenge."}
    if confuses_numerator:
        return {"score": 20, "verdict": "misconception_detected", "feedback": "You described parts taken, which is the numerator. The denominator describes all equal parts in the whole.", "follow_up": "Try again using a pizza before anyone has eaten a slice."}
    if "bottom" in text:
        return {"score": 45, "verdict": "surface_memorization", "feedback": "You identified where the denominator sits, but not what it represents.", "follow_up": "What does that bottom number tell us about the total equal pieces?"}
    return {"score": 70, "verdict": "developing_explanation", "feedback": "Good effort. Add how the whole is split into equal parts to make your explanation stronger.", "follow_up": "Can you use the words 'whole' and 'equal parts' in your next explanation?"}


app = FastAPI(title="Adaptive AI Tutor API", version="1.0.0")
origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])


@app.on_event("startup")
def startup() -> None:
    init_db()


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "service": "adaptive-ai-tutor"}


@app.post("/api/students", status_code=status.HTTP_201_CREATED)
def create_student(payload: StudentCreate) -> dict:
    student_id = f"stu_{uuid4().hex[:12]}"
    with db() as conn:
        conn.execute("INSERT INTO students VALUES (?, ?, ?, ?, ?, ?)", (student_id, payload.name, payload.grade, payload.preferred_language, payload.preferred_style, now()))
    return {"id": student_id, **payload.model_dump()}


@app.post("/api/sessions", status_code=status.HTTP_201_CREATED)
def start_session(payload: SessionCreate) -> dict:
    session_id = f"ses_{uuid4().hex[:12]}"
    with db() as conn:
        student_or_404(conn, payload.student_id)
        conn.execute("INSERT INTO sessions VALUES (?, ?, ?, ?, ?)", (session_id, payload.student_id, payload.topic, 1, now()))
    return {"session_id": session_id, "topic": payload.topic, "activity": public_question(QUESTION_BANK[0])}


@app.post("/api/sessions/{session_id}/answers")
def submit_answer(session_id: str, payload: AnswerCreate) -> dict:
    question = get_question(payload.question_id)
    if payload.selected_option >= len(question["options"]):
        raise HTTPException(status_code=422, detail="selected_option is outside the option range")
    is_correct = payload.selected_option == question["correct_option"]
    with db() as conn:
        session = session_or_404(conn, session_id)
        mistake_type = classify_mistake(question, is_correct, payload.confidence, payload.response_time_ms)
        score = update_mastery(conn, session["student_id"], question["concept"], is_correct, payload.confidence)
        conn.execute("INSERT INTO attempts VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (f"att_{uuid4().hex[:12]}", session_id, session["student_id"], question["id"], question["concept"], is_correct, payload.confidence, payload.response_time_ms, mistake_type, now()))
        next_question, route, message = choose_next_activity(conn, session["student_id"], session["current_difficulty"], is_correct, payload.confidence, question["concept"])
        conn.execute("UPDATE sessions SET current_difficulty = ? WHERE id = ?", (next_question["difficulty"], session_id))
    return {"is_correct": is_correct, "confidence_interpretation": "likely_understood" if is_correct and payload.confidence in {"very_confident", "confident"} else "needs_verification" if is_correct else "needs_support", "mistake_type": mistake_type, "mastery_score": score, "feedback": question["explanation"], "adaptive_route": route, "tutor_message": message, "next_activity": public_question(next_question)}


@app.post("/api/sessions/{session_id}/teach-back")
def submit_teach_back(session_id: str, payload: TeachBackCreate) -> dict:
    evaluation = evaluate_teach_back(payload.explanation)
    with db() as conn:
        session = session_or_404(conn, session_id)
        # Teach-back improves or reduces mastery based on conceptual evidence.
        current = mastery_score(conn, session["student_id"], payload.concept)
        score = max(0, min(100, current + (evaluation["score"] - 60) * 0.25))
        conn.execute("""INSERT INTO mastery(student_id, concept, score, updated_at) VALUES (?, ?, ?, ?)
          ON CONFLICT(student_id, concept) DO UPDATE SET score=excluded.score, updated_at=excluded.updated_at""", (session["student_id"], payload.concept, score, now()))
    return {**evaluation, "mastery_score": round(score, 1)}


@app.get("/api/students/{student_id}/learning-map")
def learning_map(student_id: str) -> dict:
    concepts = ["fraction_basics", "equal_parts", "comparison", "word_problems"]
    with db() as conn:
        student_or_404(conn, student_id)
        nodes = []
        for concept in concepts:
            score = mastery_score(conn, student_id, concept)
            nodes.append({"concept": concept, "mastery_score": score, "status": "strong" if score >= 75 else "developing" if score >= 45 else "needs_attention"})
    return {"student_id": student_id, "topic": "fractions", "nodes": nodes}


@app.get("/api/students/{student_id}/parent-summary")
def parent_summary(student_id: str) -> dict:
    with db() as conn:
        student = student_or_404(conn, student_id)
        rows = conn.execute("SELECT concept, score FROM mastery WHERE student_id = ? ORDER BY score ASC", (student_id,)).fetchall()
    weakest = rows[0]["concept"].replace("_", " ") if rows else "fraction basics"
    strongest = rows[-1]["concept"].replace("_", " ") if rows else "fraction basics"
    return {"student_name": student["name"], "strength": strongest, "needs_practice": weakest, "message": f"{student['name']} is building confidence in {strongest}. A short, supportive revision on {weakest} is recommended."}


@app.get("/api/teacher/overview")
def teacher_overview() -> dict:
    with db() as conn:
        total = conn.execute("SELECT COUNT(*) AS count FROM students").fetchone()["count"]
        rows = conn.execute("SELECT concept, AVG(score) AS average FROM mastery GROUP BY concept ORDER BY average ASC").fetchall()
        mistakes = conn.execute("SELECT mistake_type, COUNT(*) AS count FROM attempts WHERE mistake_type IS NOT NULL GROUP BY mistake_type ORDER BY count DESC LIMIT 1").fetchone()
    return {"active_students": total, "weakest_topic": rows[0]["concept"] if rows else None, "class_mastery_average": round(sum(row["average"] for row in rows) / len(rows), 1) if rows else None, "top_mistake_pattern": mistakes["mistake_type"] if mistakes else None}
