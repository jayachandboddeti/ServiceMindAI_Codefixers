# Adaptive AI Tutor API

FastAPI + SQLite backend for the Class 3 Fractions MVP. It persists learners,
sessions, answer telemetry, mastery, mistake patterns, teach-back evaluations,
and teacher/parent summaries.

## Run locally

```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Open `http://localhost:8000/docs` for the interactive API documentation.

## Core flow

1. `POST /api/students` creates (or returns) a learner.
2. `POST /api/sessions` starts a fractions session and returns the first activity.
3. `POST /api/sessions/{session_id}/answers` records an answer, classifies the
   learning signal, updates mastery, and returns the personalized next activity.
4. `POST /api/sessions/{session_id}/teach-back` evaluates the learner's free-text explanation.
5. `GET /api/students/{student_id}/learning-map` and dashboard routes return stored insights.

The app deliberately uses transparent rules for the MVP. Replace
`evaluate_teach_back` with a guarded LLM evaluator later, while keeping the
same response schema and human-review safeguards.
