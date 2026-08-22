import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Brain, 
  Sparkles, 
  Target, 
  Layers, 
  Shuffle, 
  BookOpen,
  Search,
  Activity
} from 'lucide-react';

export default function ProblemSolutionSection() {
  const [selectedDimension, setSelectedDimension] = useState(0);

  const eightDimensions = [
    { name: "Previous Answers", desc: "Tracks longitudinal performance over time rather than isolated questions.", icon: "🕒" },
    { name: "Mistake Taxonomy", desc: "Distinguishes between careless slips, calculation errors, and conceptual gaps.", icon: "🧬" },
    { name: "Dynamic Difficulty", desc: "Continuous micro-adjustments instead of fixed static grade buckets.", icon: "📈" },
    { name: "Confidence Metacognition", desc: "Evaluates if the student was guessing or genuinely certain.", icon: "😎" },
    { name: "Response Timing Patterns", desc: "Analyzes hesitation vs impulsive clicks to gauge processing time.", icon: "⏱️" },
    { name: "Concept Mastery Index", desc: "Maintains a live node-by-node knowledge tree of mastered prerequisites.", icon: "🌳" },
    { name: "Hidden Learning Gaps", desc: "Detects foundational deficits from earlier years (e.g. Subtraction gap in Algebra).", icon: "🔍" },
    { name: "Explanation Style Fit", desc: "Adapts between visual diagrams, real-world analogies, voice, and stories.", icon: "🎨" }
  ];

  return (
    <section id="problem-solution" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Target className="w-3.5 h-3.5" />
          <span>The Core Paradigm Shift</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Why Traditional Learning Fails & How AI Changes Everything
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          In a standard classroom of 30+ students, one teacher cannot offer individualized pacing. Traditional educational apps just repeat questions without understanding *why* a student answered the way they did.
        </p>
      </div>

      {/* Comparison Grid: Problem vs Solution */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Left: The Old Problem */}
        <div className="bg-slate-900/60 border border-rose-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-rose-500/40 transition">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">The Problem</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Students Don't Learn at the Same Pace</h3>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start space-x-3 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block">One-Size-Fits-All Pace:</strong>
                Same questions, same difficulty, same explanation delivered to every student regardless of background.
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block">The Polarized Classroom:</strong>
                Struggling students fall further behind feeling discouraged, while advanced students grow bored and disengaged.
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
              <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block">The Lucky Guess Illusion:</strong>
                Getting an answer right does not guarantee conceptual understanding—multiple choice guessing goes undetected.
              </div>
            </div>
          </div>

          {/* Traditional App Flow */}
          <div className="mt-6 pt-6 border-t border-slate-800/80">
            <p className="text-xs font-mono uppercase text-slate-500 mb-2">Traditional Educational App Workflow</p>
            <div className="flex items-center justify-between bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-400">
              <span>Question</span>
              <span>➔</span>
              <span>Answer</span>
              <span>➔</span>
              <span className="text-rose-400 font-bold">Binary (Correct / Wrong)</span>
            </div>
          </div>
        </div>

        {/* Right: The AI Solution */}
        <div className="bg-slate-900/60 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/40 transition">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">The Proposed Solution</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Dynamic, Multi-Dimensional Personalization</h3>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-start space-x-3 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block">Understands Actual Ability:</strong>
                Pinpoints exact weak and strong concepts through non-intimidating level estimation.
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block">Detects Memorization vs Understanding:</strong>
                Uses Teach-Back mode and confidence matching to verify deep conceptual grasp.
              </div>
            </div>

            <div className="flex items-start space-x-3 p-3.5 bg-slate-950/60 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-semibold block">Finds Hidden Prerequisite Gaps:</strong>
                If a student fails Algebra, it traces down to subtraction gaps, repairs them, and returns.
              </div>
            </div>
          </div>

          {/* Adaptive AI App Flow */}
          <div className="mt-6 pt-6 border-t border-slate-800/80">
            <p className="text-xs font-mono uppercase text-cyan-400 mb-2">Our Adaptive AI Workflow (Section 6)</p>
            <div className="flex flex-wrap items-center justify-between bg-indigo-950/30 px-4 py-3 rounded-xl border border-indigo-500/30 text-xs font-medium text-slate-200 gap-1.5">
              <span>Question</span>
              <span className="text-indigo-400">➔</span>
              <span>Answer</span>
              <span className="text-indigo-400">➔</span>
              <span className="text-cyan-300 font-semibold">Analyze Reasoning</span>
              <span className="text-indigo-400">➔</span>
              <span className="text-purple-300 font-semibold">Identify Learning State</span>
              <span className="text-indigo-400">➔</span>
              <span className="text-emerald-400 font-bold">Adapt Next Activity</span>
            </div>
          </div>
        </div>
      </div>

      {/* 8 Dimensions of Real-Time Analysis Interactive Selector */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase text-indigo-400 tracking-wider">8 Input Signals (Section 3)</div>
            <h3 className="text-2xl font-bold text-white mt-1">What the Adaptive AI Engine Considers on Every Turn</h3>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Click on any signal below to inspect how the AI evaluates and uses it to construct the student's next step.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {eightDimensions.map((dim, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDimension(idx)}
              className={`p-3.5 rounded-2xl text-left transition duration-200 border flex flex-col justify-between ${
                selectedDimension === idx
                  ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <span className="text-xl mb-2">{dim.icon}</span>
              <span className="text-xs font-semibold">{dim.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Dimension Detail Card */}
        <div className="p-5 bg-slate-950 rounded-2xl border border-indigo-500/30 flex items-start space-x-4">
          <div className="p-3 bg-indigo-500/10 rounded-xl text-2xl flex-shrink-0">
            {eightDimensions[selectedDimension].icon}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="text-base font-bold text-white">{eightDimensions[selectedDimension].name}</h4>
              <span className="text-[10px] uppercase font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                Active Analysis Signal
              </span>
            </div>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              {eightDimensions[selectedDimension].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
