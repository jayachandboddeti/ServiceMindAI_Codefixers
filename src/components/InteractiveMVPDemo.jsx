import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  Sparkles, 
  Volume2, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  PieChart, 
  Award, 
  BrainCircuit, 
  UserCheck, 
  Flame,
  ChevronRight,
  RefreshCw,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIDENCE_LEVELS, STUDENT_JOURNEYS } from '../data/mockData';

export default function InteractiveMVPDemo({ activeLang }) {
  const [demoMode, setDemoMode] = useState("comparison"); // "comparison" | "sandbox"
  const [selectedStudent, setSelectedStudent] = useState("studentA"); // "studentA" | "studentB"
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Sandbox State
  const [sandboxQuestionIdx, setSandboxQuestionIdx] = useState(0);
  const [sandboxSelectedOption, setSandboxSelectedOption] = useState(null);
  const [sandboxConfidence, setSandboxConfidence] = useState(null);
  const [sandboxSubmitted, setSandboxSubmitted] = useState(false);
  const [sandboxScore, setSandboxScore] = useState(0);
  const [sandboxHistory, setSandboxHistory] = useState([]);
  const [interactiveSlices, setInteractiveSlices] = useState(4);
  const [shadedSlices, setShadedSlices] = useState(2);

  const activeJourney = STUDENT_JOURNEYS[selectedStudent];
  const activeStep = activeJourney.steps[currentStepIdx];

  const sandboxQuestions = [
    {
      id: 1,
      difficulty: "Basic Assessment",
      question: "What does the fraction 1/2 mean in real life?",
      options: [
        "1 part out of 2 equal parts of a whole",
        "2 parts out of 1 part",
        "Any random cut of a shape into 2 pieces"
      ],
      correctIndex: 0,
      visualType: "pizza",
      explanation: "A fraction represents equal parts of a whole. 1 is the numerator (parts taken), and 2 is the denominator (total equal parts).",
      teachBackPrompt: "Can you explain why the pieces MUST be equal?"
    },
    {
      id: 2,
      difficulty: "Visual Identification",
      question: "Look at the pizza pie below. If 2 out of 4 slices are eaten, what fraction is that?",
      options: [
        "2/4 (which is equal to 1/2)",
        "4/2 (4 parts eaten out of 2)",
        "1/4 (only one quarter)"
      ],
      correctIndex: 0,
      visualType: "interactive_pizza",
      explanation: "2 out of 4 slices is 2/4. Notice that 2/4 takes up the exact same amount of space as 1/2!",
      teachBackPrompt: "Why are 2/4 and 1/2 called equivalent fractions?"
    },
    {
      id: 3,
      difficulty: "Reasoning Challenge",
      question: "Which is larger: 1/2 of a pizza or 1/4 of the same pizza?",
      options: [
        "1/2 is larger (because dividing into fewer parts makes each piece bigger)",
        "1/4 is larger (because 4 is a bigger number than 2)",
        "Both are exactly the same size"
      ],
      correctIndex: 0,
      visualType: "comparison",
      explanation: "When the denominator is smaller (2 instead of 4), the whole is divided into fewer, larger pieces!",
      teachBackPrompt: "How would you explain this to a friend who thinks 1/4 is bigger because 4 > 2?"
    }
  ];

  const currentSandboxQ = sandboxQuestions[sandboxQuestionIdx];

  const handleSpeech = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSandboxSubmit = () => {
    if (sandboxSelectedOption === null || !sandboxConfidence) return;
    setSandboxSubmitted(true);
    const isCorrect = sandboxSelectedOption === currentSandboxQ.correctIndex;

    if (isCorrect) {
      setSandboxScore((prev) => prev + 10);
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    setSandboxHistory((prev) => [
      ...prev,
      {
        questionId: currentSandboxQ.id,
        isCorrect,
        confidence: sandboxConfidence,
        selectedOption: sandboxSelectedOption
      }
    ]);
  };

  const nextSandboxQuestion = () => {
    if (sandboxQuestionIdx < sandboxQuestions.length - 1) {
      setSandboxQuestionIdx((prev) => prev + 1);
      setSandboxSelectedOption(null);
      setSandboxConfidence(null);
      setSandboxSubmitted(false);
    } else {
      // Completed all
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    }
  };

  const resetSandbox = () => {
    setSandboxQuestionIdx(0);
    setSandboxSelectedOption(null);
    setSandboxConfidence(null);
    setSandboxSubmitted(false);
    setSandboxScore(0);
    setSandboxHistory([]);
  };

  return (
    <section id="live-demo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <BrainCircuit className="w-3.5 h-3.5" />
          <span>Interactive Demo • Section 22 & 33</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Class 3 Mathematics: Fractions Prototype
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Experience how our AI tutor adapts in real time. Compare how two students taking the exact same starting question receive completely personalized learning pathways.
        </p>

        {/* Demo Mode Switcher */}
        <div className="mt-8 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => setDemoMode("comparison")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              demoMode === "comparison"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Student A vs Student B Simulation</span>
          </button>
          <button
            onClick={() => setDemoMode("sandbox")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              demoMode === "sandbox"
                ? "bg-cyan-600 text-white shadow-lg shadow-cyan-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Play as Student (Live Interactive)</span>
          </button>
        </div>
      </div>

      {/* MODE 1: COMPARISON OF STUDENT A VS STUDENT B */}
      {demoMode === "comparison" && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {/* Student Selector Switcher */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400">Section 22 Walkthrough</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {activeJourney.name}
              </h3>
              <p className="text-xs text-slate-400 mt-1">{activeJourney.archetype}</p>
            </div>

            <div className="flex bg-slate-950 p-1 rounded-2xl border border-slate-800 text-xs font-semibold">
              <button
                onClick={() => {
                  setSelectedStudent("studentA");
                  setCurrentStepIdx(0);
                }}
                className={`px-4 py-2 rounded-xl transition flex items-center space-x-2 ${
                  selectedStudent === "studentA"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Student A (Struggling)</span>
              </button>
              <button
                onClick={() => {
                  setSelectedStudent("studentB");
                  setCurrentStepIdx(0);
                }}
                className={`px-4 py-2 rounded-xl transition flex items-center space-x-2 ${
                  selectedStudent === "studentB"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Student B (Confident Fast-Track)</span>
              </button>
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between my-6 overflow-x-auto pb-2">
            {activeJourney.steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIdx(idx)}
                className={`flex items-center space-x-2.5 px-4 py-2 rounded-xl text-xs font-semibold transition flex-shrink-0 ${
                  currentStepIdx === idx
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-950 text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center text-[10px]">
                  {idx + 1}
                </span>
                <span>Step {step.step}: {step.question.slice(0, 24)}...</span>
              </button>
            ))}
          </div>

          {/* Step Detail Stage */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Student Action Card */}
            <div className="lg:col-span-6 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono uppercase bg-slate-900 text-slate-300 px-3 py-1 rounded-lg border border-slate-800">
                    Step {activeStep.step} of 3
                  </span>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-400">Confidence Tag:</span>
                    <span className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/60 font-semibold">
                      {activeStep.confidence === "very_confident" ? "😎 Very Confident" : activeStep.confidence === "confident" ? "🙂 Confident" : "😐 Unsure"}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-4">{activeStep.question}</h4>

                {/* Multiple choice simulation */}
                <div className="space-y-2.5 mb-6">
                  {activeStep.options.map((opt, oIdx) => {
                    const isSelected = opt === activeStep.studentChoice;
                    return (
                      <div
                        key={oIdx}
                        className={`p-3.5 rounded-xl text-xs font-medium border flex items-center justify-between ${
                          isSelected
                            ? activeStep.isCorrect
                              ? "bg-emerald-950/40 border-emerald-500/60 text-emerald-200"
                              : "bg-rose-950/40 border-rose-500/60 text-rose-200"
                            : "bg-slate-900/50 border-slate-800 text-slate-400"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-5 h-5 rounded-lg bg-slate-950 flex items-center justify-center font-mono text-[10px]">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isSelected && (
                          <span className="text-[11px] font-bold uppercase tracking-wider flex items-center space-x-1">
                            {activeStep.isCorrect ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Correct Answer</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                                <span>Struggled Choice</span>
                              </>
                            )}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pizza Visual Slice for Struggling Step */}
              {selectedStudent === "studentA" && currentStepIdx === 0 && (
                <div className="p-4 bg-slate-900 rounded-xl border border-indigo-500/30 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full border-2 border-indigo-400 bg-gradient-to-r from-emerald-500 to-slate-800 flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-lg">
                    <div className="absolute inset-0 bg-emerald-500/40 w-1/2"></div>
                    <div className="relative text-[10px] font-bold text-white z-10">1/2</div>
                  </div>
                  <div className="text-xs text-slate-300">
                    <p className="font-semibold text-indigo-300">AI Visual Generation Triggered</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      "Divided into 2 equal parts. 1 slice highlighted in green = 1/2 of the whole."
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: AI Engine Adaptation Decision Card */}
            <div className="lg:col-span-6 bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-lg shadow-indigo-950/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BrainCircuit className="w-5 h-5 text-indigo-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      AI Reasoning & Adaptive Logic
                    </span>
                  </div>
                  <button
                    onClick={() => handleSpeech(activeStep.aiResponse)}
                    className="p-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900 border border-indigo-800 text-indigo-300 text-xs flex items-center space-x-1"
                    title="Listen to AI feedback"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span className="text-[10px]">Read Aloud</span>
                  </button>
                </div>

                {/* AI Diagnosis */}
                <div className="mb-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Cognitive Diagnosis:</p>
                  <p className="text-sm font-semibold text-cyan-300 mt-1">{activeStep.aiDiagnosis}</p>
                </div>

                {/* AI Tutor Response Message */}
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 mb-4">
                  <p className="text-[11px] uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Tutor Dialogue to Student:
                  </p>
                  <p className="text-sm text-slate-200 leading-relaxed italic">
                    "{activeStep.aiResponse}"
                  </p>
                </div>

                {/* Next Step Adaptive Pathway */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400">Next Activity Assigned:</span>
                    <p className="text-xs font-bold text-emerald-300 mt-0.5">{activeStep.nextDifficulty}</p>
                  </div>
                  <span className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-semibold">
                    Dynamic Branching
                  </span>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-800">
                <button
                  onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
                  disabled={currentStepIdx === 0}
                  className="text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  ← Previous Step
                </button>
                <button
                  onClick={() => setCurrentStepIdx((prev) => Math.min(activeJourney.steps.length - 1, prev + 1))}
                  disabled={currentStepIdx === activeJourney.steps.length - 1}
                  className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2 rounded-xl transition disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span>Next Adaptive Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: LIVE INTERACTIVE SANDBOX */}
      {demoMode === "sandbox" && (
        <div className="bg-slate-900/80 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400">Interactive Student Arena</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Question {sandboxQuestionIdx + 1} of {sandboxQuestions.length}: {currentSandboxQ.difficulty}
              </h3>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white">Score: {sandboxScore} pts</span>
              </div>
              <button
                onClick={resetSandbox}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white text-xs flex items-center space-x-1"
                title="Reset Sandbox"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Interactive Question Card */}
          <div className="grid lg:grid-cols-12 gap-8 my-6">
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <p className="text-base sm:text-lg font-bold text-white mb-6">
                  {currentSandboxQ.question}
                </p>

                {/* Multiple choice options */}
                <div className="space-y-3">
                  {currentSandboxQ.options.map((opt, oIdx) => {
                    const isSelected = sandboxSelectedOption === oIdx;
                    return (
                      <button
                        key={oIdx}
                        disabled={sandboxSubmitted}
                        onClick={() => setSandboxSelectedOption(oIdx)}
                        className={`w-full p-4 rounded-xl text-xs sm:text-sm font-medium border text-left transition flex items-center justify-between ${
                          isSelected
                            ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                            : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                            isSelected ? "bg-indigo-600 text-white" : "bg-slate-950 text-slate-400"
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {sandboxSubmitted && oIdx === currentSandboxQ.correctIndex && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Confidence Metacognition Selector (Section 9) */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                  <span>How confident are you in this answer? (Section 9)</span>
                  <span className="text-[10px] text-cyan-400">Metacognition Tag</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {CONFIDENCE_LEVELS.map((conf) => (
                    <button
                      key={conf.id}
                      disabled={sandboxSubmitted}
                      onClick={() => setSandboxConfidence(conf.id)}
                      className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                        sandboxConfidence === conf.id
                          ? "bg-cyan-600/20 border-cyan-400 text-white shadow-md shadow-cyan-500/20"
                          : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-xl">{conf.emoji}</span>
                      <span className="text-xs font-bold mt-1">{conf.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit & Next Button */}
              <div>
                {!sandboxSubmitted ? (
                  <button
                    disabled={sandboxSelectedOption === null || !sandboxConfidence}
                    onClick={handleSandboxSubmit}
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-indigo-500/30 disabled:opacity-30 disabled:pointer-events-none text-sm"
                  >
                    Submit & Evaluate With AI Tutor
                  </button>
                ) : (
                  <button
                    onClick={nextSandboxQuestion}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-emerald-500/30 text-sm flex items-center justify-center space-x-2"
                  >
                    <span>{sandboxQuestionIdx < sandboxQuestions.length - 1 ? "Continue to Next Adaptive Question" : "Complete Mastery Assessment 🎉"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Live Interactive Pizza / Visualizer & AI Feedback */}
            <div className="lg:col-span-5 space-y-6">
              {/* Interactive Pizza Visualizer Tool */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Interactive Fraction Visualizer</span>
                  <span className="text-xs bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 font-bold">
                    {shadedSlices} / {interactiveSlices} ({((shadedSlices / interactiveSlices) * 100).toFixed(0)}%)
                  </span>
                </div>

                {/* SVG Pizza Pie */}
                <div className="relative w-40 h-40 mx-auto my-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#1e293b"
                      strokeWidth="20"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#38bdf8"
                      strokeWidth="20"
                      strokeDasharray={`${(shadedSlices / interactiveSlices) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center font-bold text-white text-sm">
                    <span className="text-cyan-300">{shadedSlices}</span>
                    <div className="w-6 h-[2px] bg-slate-400 my-0.5"></div>
                    <span className="text-slate-300">{interactiveSlices}</span>
                  </div>
                </div>

                {/* Slices Controls */}
                <div className="space-y-3 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Denominator (Total Equal Slices):</span>
                    <div className="flex items-center space-x-2">
                      {[2, 4, 8].map((num) => (
                        <button
                          key={num}
                          onClick={() => {
                            setInteractiveSlices(num);
                            setShadedSlices(Math.min(shadedSlices, num));
                          }}
                          className={`px-2.5 py-1 rounded-lg font-mono font-bold ${
                            interactiveSlices === num ? "bg-cyan-500 text-slate-950" : "bg-slate-900 text-slate-300"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Numerator (Shaded Slices Taken):</span>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: interactiveSlices + 1 }, (_, i) => i).map((num) => (
                        <button
                          key={num}
                          onClick={() => setShadedSlices(num)}
                          className={`px-2 py-0.5 rounded font-mono font-bold ${
                            shadedSlices === num ? "bg-indigo-500 text-white" : "bg-slate-900 text-slate-400"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Real-time Evaluation Card (Visible after submit) */}
              {sandboxSubmitted && (
                <div className="bg-slate-950 p-5 rounded-2xl border border-indigo-500/40 animate-fade-in space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-indigo-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      AI Dynamic Feedback
                    </span>
                    <button
                      onClick={() => handleSpeech(currentSandboxQ.explanation)}
                      className="text-slate-400 hover:text-cyan-300 text-xs flex items-center space-x-1"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Audio</span>
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentSandboxQ.explanation}
                  </p>

                  <div className="p-3 bg-indigo-950/40 rounded-xl border border-indigo-800/40 text-xs text-indigo-200">
                    <strong>Teach-Back Challenge:</strong> "{currentSandboxQ.teachBackPrompt}"
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
