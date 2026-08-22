import React, { useState } from 'react';
import { 
  Layers, 
  BrainCircuit, 
  Workflow, 
  Database, 
  Sliders, 
  Cpu, 
  Code, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileJson
} from 'lucide-react';

export default function ArchitectureAndFlow() {
  const [activeTab, setActiveTab] = useState("architecture"); // "architecture" | "flow" | "rules" | "telemetry"
  const [testScore, setTestScore] = useState(65);

  const architectureLayers = [
    {
      layer: "Layer 1",
      name: "User Interface & Experience",
      desc: "Interactive Question Arena, Metacognition Confidence Selector, Teach-Back Voice & Text Sandbox, Dynamic Visual Slices.",
      color: "border-indigo-500/40 bg-indigo-950/20 text-indigo-300"
    },
    {
      layer: "Layer 2",
      name: "Student Dynamic Model",
      desc: "Stores real-time Skill Level, Mastery Graph, Mistake DNA History, Confidence Distribution, Learning Style Affinities.",
      color: "border-cyan-500/40 bg-cyan-950/20 text-cyan-300"
    },
    {
      layer: "Layer 3",
      name: "Adaptive AI Reasoning Engine",
      desc: "Decides Next Question, Difficulty Scaling, Explanation Style (Visual vs Analogy), Prerequisite Backtracking & Teach-Back triggers.",
      color: "border-purple-500/40 bg-purple-950/20 text-purple-300"
    },
    {
      layer: "Layer 4",
      name: "Content & Pedagogical Engine",
      desc: "Curated Question Bank, Contextual Real-World Analogies, Interactive Pizza Visualizers, Multilingual Translatables (Hindi, Telugu, Spanish).",
      color: "border-amber-500/40 bg-amber-950/20 text-amber-300"
    },
    {
      layer: "Layer 5",
      name: "Analytics & Telemetry Pipeline",
      desc: "Tracks Improvement Velocities, Common Mistake Patterns, Learning Gap Diagnostics, Teacher Classroom Heatmaps & Parent Reports.",
      color: "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
    }
  ];

  const getAdaptiveAction = (score) => {
    if (score < 40) {
      return {
        action: "Reduce Difficulty ➔ Trigger Visual/Analogy Explanation ➔ Provide Foundational Practice",
        badge: "Remedial & Support Mode",
        badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40"
      };
    } else if (score <= 70) {
      return {
        action: "Maintain Moderate Difficulty ➔ Reinforce with Targeted Practice ➔ Verify Confidence",
        badge: "Consolidation Mode",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40"
      };
    } else {
      return {
        action: "Increase Difficulty ➔ Skip Rote Drills ➔ Elevate to Higher-Order Reasoning Challenge",
        badge: "Acceleration Mode",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
      };
    }
  };

  const currentAction = getAdaptiveAction(testScore);

  const sampleTelemetryJson = {
    student_id: "STU-8829-RAHUL",
    session_id: "SESS-2026-08-22",
    topic: "Grade 3 Fractions",
    question_id: "Q-FRAC-004",
    difficulty: "Medium",
    answer_selected: "1/4",
    is_correct: true,
    confidence_level: "very_confident",
    response_time_ms: 3200,
    mistake_dna: null,
    explanation_quality: "High (Understands Equal Parts)",
    mastery_score: 93.5,
    preferred_modality: "Visual (Diagram)",
    language_locale: "en-US",
    timestamp: "2026-08-22T23:45:00Z"
  };

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/40 border border-indigo-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Sections 19, 20, 21, 24 & 25</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          System Architecture & Adaptive Engine
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Powered by a 5-layer pedagogical architecture combining Level 1 adaptive rule-based routing with Level 2 deep NLP reasoning.
        </p>

        {/* Tab Selector */}
        <div className="mt-8 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === "architecture" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:text-white"
            }`}
          >
            5-Layer AI Architecture (Sec 20)
          </button>
          <button
            onClick={() => setActiveTab("flow")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === "flow" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:text-white"
            }`}
          >
            System Pipeline Flow (Sec 19)
          </button>
          <button
            onClick={() => setActiveTab("rules")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === "rules" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:text-white"
            }`}
          >
            Adaptive Rule Engine (Sec 21)
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === "telemetry" ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "text-slate-400 hover:text-white"
            }`}
          >
            Data Telemetry Schema (Sec 25)
          </button>
        </div>
      </div>

      {/* TAB 1: 5-LAYER AI ARCHITECTURE */}
      {activeTab === "architecture" && (
        <div className="space-y-4 max-w-4xl mx-auto">
          {architectureLayers.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${item.color} backdrop-blur-xl transition hover:scale-[1.01] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
            >
              <div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold uppercase bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    {item.layer}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-slate-500 font-mono text-xs hidden sm:block">↓</span>
            </div>
          ))}

          {/* Level 1 vs Level 2 Intelligence Callout */}
          <div className="mt-8 p-6 bg-slate-900/60 border border-slate-800 rounded-3xl grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold text-xs uppercase mb-2">
                <Sliders className="w-4 h-4" />
                <span>Level 1 — Adaptive Logic (Rule-Engine)</span>
              </div>
              <p className="text-xs text-slate-300">
                Deterministic performance-to-difficulty mapping, rapid micro-adjustments, and latency-free routing.
              </p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-indigo-500/30">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs uppercase mb-2">
                <BrainCircuit className="w-4 h-4" />
                <span>Level 2 — AI NLP Analysis (Deep Cognition)</span>
              </div>
              <p className="text-xs text-slate-300">
                Natural-language Teach-Back evaluation, semantic error analysis, and cross-topic prerequisite gap tracing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SYSTEM PIPELINE FLOW (SECTION 19) */}
      {activeTab === "flow" && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl max-w-4xl mx-auto text-center">
          <div className="text-xs font-mono uppercase text-cyan-400 mb-6 font-bold">
            Interactive Section 19 System Loop
          </div>

          <div className="flex flex-col items-center space-y-3 font-mono text-xs">
            <div className="w-48 py-2.5 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">
              👨‍🎓 Student
            </div>
            <span className="text-slate-500">↓</span>
            <div className="w-56 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl">
              Start Learning
            </div>
            <span className="text-slate-500">↓</span>
            <div className="w-64 py-2 bg-cyan-950 border border-cyan-500/40 text-cyan-300 rounded-xl font-bold">
              Initial Level Assessment
            </div>
            <span className="text-slate-500">↓</span>
            <div className="w-72 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl">
              Student Learning Profile Updated
            </div>
            <span className="text-slate-500">↓</span>
            <div className="w-80 py-3 bg-purple-950/80 border border-purple-500 text-purple-200 rounded-2xl font-bold shadow-lg shadow-purple-950/50">
              ⚡ Adaptive AI Engine
            </div>

            {/* 3 Branches */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-2">
              <div className="p-2.5 bg-slate-950 border border-emerald-500/40 text-emerald-300 rounded-xl">
                🟢 Easy Level
              </div>
              <div className="p-2.5 bg-slate-950 border border-amber-500/40 text-amber-300 rounded-xl">
                🟡 Medium Level
              </div>
              <div className="p-2.5 bg-slate-950 border border-rose-500/40 text-rose-300 rounded-xl">
                🔴 Hard Level
              </div>
            </div>

            <span className="text-slate-500">↓</span>
            <div className="w-64 py-2 bg-slate-950 border border-slate-800 text-slate-200 rounded-xl">
              Student Submits Answer & Confidence
            </div>
            <span className="text-slate-500">↓</span>
            <div className="w-72 py-2 bg-indigo-950 border border-indigo-500 text-indigo-200 rounded-xl font-bold">
              Analyze Performance & Mistake DNA
            </div>

            {/* 3 Outcome Branches */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-2">
              <div className="p-2 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-xl text-[11px]">
                <strong>Correct:</strong> Increase Difficulty
              </div>
              <div className="p-2 bg-rose-950/60 border border-rose-500/40 text-rose-300 rounded-xl text-[11px]">
                <strong>Incorrect:</strong> Explain Concept
              </div>
              <div className="p-2 bg-purple-950/60 border border-purple-500/40 text-purple-300 rounded-xl text-[11px]">
                <strong>Unsure:</strong> Reassess Metacognition
              </div>
            </div>

            <span className="text-slate-500">↓</span>
            <div className="w-64 py-2.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg">
              Next Personalized Activity
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ADAPTIVE RULE ENGINE PLAYGROUND (SECTION 21) */}
      {activeTab === "rules" && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl max-w-4xl mx-auto">
          <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-6">
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Section 21 • Adaptive Logic Simulator</span>
              <h3 className="text-xl font-bold text-white mt-0.5">Interactive Threshold Decision Rules</h3>
            </div>
            <span className="text-xs bg-indigo-950 text-indigo-300 border border-indigo-800 px-3 py-1 rounded-full font-bold">
              Live Slider
            </span>
          </div>

          <div className="space-y-6">
            {/* Slider Control */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-300">Simulated Student Accuracy Score:</span>
                <span className="text-lg font-extrabold text-cyan-400 font-mono">{testScore}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={testScore}
                onChange={(e) => setTestScore(Number(e.target.value))}
                className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>0% - Struggling</span>
                <span>40% - Midpoint</span>
                <span>70% - Threshold</span>
                <span>100% - Mastery</span>
              </div>
            </div>

            {/* AI Decision Output Box */}
            <div className="p-6 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono uppercase text-slate-400">Rule Triggered:</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentAction.badgeColor}`}>
                  {currentAction.badge}
                </span>
              </div>
              <p className="text-base sm:text-lg font-bold text-white">
                {currentAction.action}
              </p>
            </div>

            {/* Rule Reference Table */}
            <div className="divide-y divide-slate-800 text-xs text-slate-300">
              <div className="py-2.5 flex justify-between">
                <span className="font-mono text-rose-400">If score &lt; 40%</span>
                <span>➔ Reduce difficulty + Give visual explanation</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-mono text-amber-400">If score = 40–70%</span>
                <span>➔ Keep similar difficulty + Give targeted practice</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-mono text-emerald-400">If score &gt; 70%</span>
                <span>➔ Increase difficulty + Unlock reasoning challenge</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-mono text-cyan-400">If correct + low confidence</span>
                <span>➔ Ask explanation follow-up question</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="font-mono text-purple-400">If wrong + high confidence</span>
                <span>➔ Check for conceptual misconception</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TELEMETRY SCHEMA VIEWER (SECTION 25) */}
      {activeTab === "telemetry" && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div className="flex items-center space-x-2">
              <FileJson className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Section 25: Student Telemetry Record Schema
              </h3>
            </div>
            <span className="text-xs bg-slate-950 text-slate-400 px-3 py-1 rounded-lg border border-slate-800 font-mono">
              JSON Event Log
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Every student interaction creates a fine-grained telemetry record ingested by the Analytics & Student Model layers for machine learning analytics.
          </p>

          <pre className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto">
            {JSON.stringify(sampleTelemetryJson, null, 2)}
          </pre>
        </div>
      )}
    </section>
  );
}
