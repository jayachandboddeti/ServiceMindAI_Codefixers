import React, { useState } from 'react';
import { 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  BrainCircuit, 
  ArrowRight,
  Lightbulb,
  Zap
} from 'lucide-react';

export default function ConfidenceMatrixSection() {
  const [selectedQuadrant, setSelectedQuadrant] = useState('correct_low');

  const matrixQuadrants = [
    {
      id: "correct_high",
      title: "Correct + High Confidence",
      subtitle: "True Mastery & Fluidity",
      tag: "Likely Understood",
      icon: "😎",
      color: "emerald",
      border: "border-emerald-500/40 bg-emerald-950/20",
      aiInterpretation: "The student deeply grasps the concept and can apply it with confidence.",
      aiAction: "Accelerate difficulty immediately, bypass repetitive drill questions, and unlock higher-order reasoning challenges.",
      exampleScenario: "Student answers '1/2 > 1/4' correctly with 'Very Confident' 😎",
      aiDialogue: "Spot on! You demonstrated solid proportional reasoning. Let's move directly to comparing 2/3 vs 3/4."
    },
    {
      id: "correct_low",
      title: "Correct + Low Confidence",
      subtitle: "The Lucky Guess Trap",
      tag: "May Have Guessed",
      icon: "😟",
      color: "amber",
      border: "border-amber-500/40 bg-amber-950/20",
      aiInterpretation: "The student got the right answer, but isn't sure why. Possible lucky guess or fragile intuition.",
      aiAction: "Do NOT mark concept as mastered. Intercept with a quick reasoning check before moving forward.",
      exampleScenario: "Student answers '2 + 3 = 5' correctly with 'Guessing' 😟",
      aiDialogue: "You got 5! But since you felt unsure, can you explain in your own words how you combined those numbers?"
    },
    {
      id: "wrong_high",
      title: "Wrong + High Confidence",
      subtitle: "Deep-Rooted Misconception",
      tag: "Misconception Detected",
      icon: "🤯",
      color: "rose",
      border: "border-rose-500/40 bg-rose-950/20",
      aiInterpretation: "The student is confident in an incorrect mental model (e.g. believing 1/4 > 1/2 because 4 is larger than 2).",
      aiAction: "Highlight the cognitive conflict with a visual counter-example rather than just saying 'Wrong'.",
      exampleScenario: "Student claims '1/4 is bigger than 1/2' with 'Very Confident' 😎",
      aiDialogue: "I see why you picked that! 4 is indeed bigger than 2, but in fractions, dividing a pizza into 4 slices gives smaller slices than dividing it into 2. Let's look at the slices together."
    },
    {
      id: "wrong_low",
      title: "Wrong + Low Confidence",
      subtitle: "Cognitive Overload / Lost",
      tag: "Needs Foundational Support",
      icon: "😐",
      color: "purple",
      border: "border-purple-500/40 bg-purple-950/20",
      aiInterpretation: "The student lacks prerequisite background and feels lost without knowing where to begin.",
      aiAction: "Dial down difficulty, remove exam pressure, and break the concept into bite-sized micro-steps.",
      exampleScenario: "Student misses 'Equivalent Fractions' with 'Unsure' 😐",
      aiDialogue: "No worries at all! Let's take a step back and build this up together with a fun 30-second chocolate bar example."
    }
  ];

  const current = matrixQuadrants.find((q) => q.id === selectedQuadrant) || matrixQuadrants[0];

  return (
    <section id="confidence-matrix" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Section 9 • Breakthrough Feature</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Confidence vs. Knowledge Detection
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          A correct answer doesn't prove mastery, and an incorrect answer doesn't always mean lack of ability. Our AI compares metacognitive confidence with accuracy to unveil true understanding.
        </p>
      </div>

      {/* 2x2 Interactive Matrix Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {matrixQuadrants.map((item) => {
          const isSelected = selectedQuadrant === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedQuadrant(item.id)}
              className={`cursor-pointer p-6 rounded-3xl border transition-all duration-200 relative overflow-hidden ${
                isSelected
                  ? `${item.border} ring-2 ring-indigo-500/50 shadow-2xl scale-[1.01]`
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400">{item.subtitle}</p>
                  </div>
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                  item.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                  item.color === 'amber' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                  item.color === 'rose' ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' :
                  'bg-purple-500/20 text-purple-300 border-purple-500/40'
                }`}>
                  {item.tag}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.aiInterpretation}
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400">
                <span>Inspect AI Adaptive Response</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspector Box for Active Quadrant */}
      <div className="bg-slate-900/90 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400">Interactive Diagnosis Simulation</span>
            <h4 className="text-xl font-bold text-white">
              AI Handling Strategy: {current.title}
            </h4>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Left: What Happened */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
            <span className="text-[11px] font-mono uppercase text-slate-400">Sample Student Input</span>
            <p className="text-sm font-semibold text-white">{current.exampleScenario}</p>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300">
              <strong className="text-indigo-300 block mb-1">Adaptive Strategy:</strong>
              {current.aiAction}
            </div>
          </div>

          {/* Right: AI Response Dialogue */}
          <div className="bg-indigo-950/40 p-5 rounded-2xl border border-indigo-500/40 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Adaptive AI Dialogue
              </span>
              <p className="text-sm text-slate-200 mt-2 italic leading-relaxed">
                "{current.aiDialogue}"
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-cyan-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Protects student confidence while eliminating hidden gaps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
