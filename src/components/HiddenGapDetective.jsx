import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ArrowDown, 
  RotateCcw, 
  Compass, 
  CornerDownRight, 
  BrainCircuit,
  Zap
} from 'lucide-react';

export default function HiddenGapDetective() {
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    {
      step: 1,
      title: "Initial Problem: Linear Equation",
      badge: "Target Grade 6 Concept",
      problem: "Solve for x: x + 5 = 12",
      studentResponse: "Student answers x = 8 (Incorrect)",
      status: "Student fails equation twice",
      aiThought: "Is the student struggling with isolating variables, or with basic arithmetic subtraction (12 - 5)?"
    },
    {
      step: 2,
      title: "Prerequisite Gap Diagnostic Probe",
      badge: "Hidden Gap Detection",
      problem: "Quick Check: What is 12 - 5?",
      studentResponse: "Student hesitates for 14s and answers 8 again",
      status: "Root Cause Pinpointed",
      aiThought: "Aha! The student's algebra reasoning was conceptually fine, but their basic subtraction fact retrieval has a foundational deficit."
    },
    {
      step: 3,
      title: "2-Minute Prerequisite Subtraction Booster",
      badge: "Foundational Repair",
      problem: "Visual Number Line: 12 - 5 = 7 (Counting backward from 12)",
      studentResponse: "Student practices 3 quick number line subtraction problems",
      status: "Subtraction Mastered (100%)",
      aiThought: "Foundational prerequisite is now solid and reinforced with visual number line intuition."
    },
    {
      step: 4,
      title: "Seamless Return to Algebra with Full Mastery",
      badge: "Concept Reconnected",
      problem: "Solve for x: x + 5 = 12 ➔ x = 12 - 5 ➔ x = 7",
      studentResponse: "Student answers x = 7 in 4 seconds with 'Very Confident' 😎",
      status: "Goal Achieved & Profile Updated",
      aiThought: "Algebra concept unlocked permanently! Gap successfully bridged without frustration."
    }
  ];

  return (
    <section id="hidden-gap" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Search className="w-3.5 h-3.5" />
          <span>Section 12 • Deep Intelligence</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Hidden Learning-Gap Detection
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          When a student fails a difficult topic, simply repeating more hard questions creates frustration. Our AI investigates foundational prerequisites, repairs the hidden gap, and returns to the main topic.
        </p>
      </div>

      {/* Interactive Step-by-Step Prerequisite Flow */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400">Interactive Case Study</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              The Algebra-to-Subtraction Detective Loop
            </h3>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400">Stage {currentStage + 1} of 4</span>
            <button
              onClick={() => setCurrentStage((prev) => (prev + 1) % stages.length)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-4 py-2 rounded-xl transition flex items-center space-x-1.5 shadow-lg shadow-emerald-600/30"
            >
              <span>{currentStage < 3 ? "Next Remedial Step" : "Restart Detective Loop"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4 Stage Stepper Pipeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {stages.map((stage, idx) => {
            const isActive = currentStage === idx;
            const isCompleted = currentStage > idx;
            return (
              <div
                key={idx}
                onClick={() => setCurrentStage(idx)}
                className={`cursor-pointer p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? "bg-emerald-950/30 border-emerald-500 shadow-lg shadow-emerald-950/50 scale-[1.02]"
                    : isCompleted
                    ? "bg-slate-950/60 border-slate-800 text-slate-400"
                    : "bg-slate-950/30 border-slate-800/60 text-slate-500 opacity-60"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isActive ? "bg-emerald-500 text-slate-950" : isCompleted ? "bg-emerald-900 text-emerald-300" : "bg-slate-900 text-slate-500"
                    }`}>
                      {isCompleted ? "✓" : idx + 1}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-emerald-400">
                      {stage.badge}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{stage.title}</h4>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className={isActive ? "text-emerald-300 font-semibold" : "text-slate-500"}>
                    {stage.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Stage View */}
        <div className="bg-slate-950 rounded-2xl border border-indigo-500/30 p-6">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left: Problem & Response */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold uppercase bg-indigo-950 text-indigo-300 px-3 py-1 rounded-lg border border-indigo-800">
                  Active Screen: {stages[currentStage].title}
                </span>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 uppercase font-mono">Current Challenge:</p>
                <p className="text-lg font-mono font-bold text-cyan-300 mt-1">
                  {stages[currentStage].problem}
                </p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 uppercase font-mono">Student Action / Observation:</p>
                <p className="text-sm font-semibold text-white mt-1">
                  {stages[currentStage].studentResponse}
                </p>
              </div>
            </div>

            {/* Right: AI Detective Internal Reasoning */}
            <div className="bg-emerald-950/20 p-5 rounded-2xl border border-emerald-500/30 space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <BrainCircuit className="w-4 h-4" />
                <span>AI Prerequisite Diagnostic Engine</span>
              </div>
              <p className="text-sm text-emerald-100 leading-relaxed italic">
                "{stages[currentStage].aiThought}"
              </p>
              <div className="p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span className="font-semibold text-white">Prerequisite Tree:</span>
                <span className="text-cyan-300 font-mono">Grade 6 Algebra ➔ Grade 2 Subtraction ➔ Resolved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
