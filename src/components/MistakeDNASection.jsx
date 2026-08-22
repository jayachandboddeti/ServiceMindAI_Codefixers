import React, { useState } from 'react';
import { 
  Dna, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Filter, 
  AlertTriangle, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { MISTAKE_TYPES } from '../data/mockData';

export default function MistakeDNASection() {
  const [selectedMistake, setSelectedMistake] = useState(MISTAKE_TYPES[0].id);
  const [activeScenario, setActiveScenario] = useState('diff_denominators');

  const errorScenarios = [
    {
      id: "diff_denominators",
      title: "Fraction Addition: 1/3 + 1/2 = 2/5",
      studentMath: "1/3 + 1/2 = (1+1)/(3+2) = 2/5",
      detectedDNA: "Conceptual Mistake — Adding Denominators Directly",
      rootCause: "Student treats numerator and denominator as four independent whole numbers rather than parts of equal wholes.",
      targetedFix: "Visual pie superposition: Showing why 1/3 and 1/2 cannot be added until sliced into equal sixths (2/6 + 3/6 = 5/6)."
    },
    {
      id: "calc_slip",
      title: "Equivalent Scaling: 3/4 = ? / 12",
      studentMath: "3/4 = 8/12 (3 × 3 was computed instead of 3 × 3 = 9)",
      detectedDNA: "Calculation Slip — Arithmetic Multiplication",
      rootCause: "Understands ratio scaling (multiplied denominator by 3), but slipped on 3 × 3.",
      targetedFix: "Instant arithmetic prompt without downgrading fraction mastery level."
    },
    {
      id: "word_confusion",
      title: "Word Problem: 'What Fraction Remains?'",
      studentMath: "Pizza has 8 slices. 3 eaten. Student answers: 3/8",
      detectedDNA: "Misreading the Question — Eaten vs Remaining",
      rootCause: "Calculated fraction eaten (3/8) instead of fraction remaining (5/8).",
      targetedFix: "Highlights key word 'REMAINS' and prompts a subtraction complement check."
    }
  ];

  const currentType = MISTAKE_TYPES.find((m) => m.id === selectedMistake) || MISTAKE_TYPES[0];
  const currentScenario = errorScenarios.find((s) => s.id === activeScenario) || errorScenarios[0];

  return (
    <section id="mistake-dna" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/40 border border-purple-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Dna className="w-3.5 h-3.5" />
          <span>Section 11 • Granular Diagnostic Engine</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Mistake DNA: Diagnosing the Root Cause
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Instead of recording a flat "Wrong ❌", our AI tags each mistake with its precise cognitive DNA—differentiating between arithmetic slips, careless rushing, and true conceptual gaps.
        </p>
      </div>

      {/* 7 Mistake Categories Horizontal Scroll / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
        {MISTAKE_TYPES.map((item) => {
          const isSelected = selectedMistake === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedMistake(item.id)}
              className={`p-3.5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
                isSelected
                  ? "bg-purple-600/20 border-purple-400 text-white shadow-lg shadow-purple-600/20 scale-105"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <div>
                <span className="text-lg mb-1 block">🧬</span>
                <h3 className="text-xs font-bold leading-tight">{item.name}</h3>
              </div>
              <span className="text-[10px] text-slate-500 mt-2 block">Click to inspect</span>
            </button>
          );
        })}
      </div>

      {/* Active Mistake Type Detail Box */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono uppercase text-purple-400">Mistake Taxonomy Profile</span>
            <h3 className="text-xl font-bold text-white mt-0.5">{currentType.name}</h3>
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentType.badgeColor}`}>
            Active Taxonomy Tag
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-mono text-slate-400 uppercase">Description:</span>
            <p className="text-slate-200 mt-1">{currentType.description}</p>
          </div>
          <div className="bg-purple-950/30 p-4 rounded-xl border border-purple-500/30">
            <span className="text-xs font-bold text-purple-300 uppercase">AI Remediation Trigger:</span>
            <p className="text-purple-200 mt-1 font-medium">{currentType.aiAction}</p>
          </div>
        </div>
      </div>

      {/* Live Case Study: Fraction Error Pattern Detection */}
      <div className="bg-slate-900/50 border border-indigo-500/30 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400">Live Diagnostic Workbench</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Real-World Fraction Error Pattern Analyzer
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {errorScenarios.map((scen) => (
              <button
                key={scen.id}
                onClick={() => setActiveScenario(scen.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  activeScenario === scen.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-950 text-slate-400 hover:text-white"
                }`}
              >
                {scen.title.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1: Student Attempt */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400">1. Student Attempt</span>
              <p className="text-sm font-bold text-white mt-2">{currentScenario.title}</p>
              <div className="mt-3 p-3 bg-slate-900 rounded-xl font-mono text-xs text-rose-300 border border-rose-500/20">
                {currentScenario.studentMath}
              </div>
            </div>
            <div className="mt-4 text-[11px] text-slate-400">
              Triggered after 2nd consecutive similar response
            </div>
          </div>

          {/* Card 2: AI DNA Diagnosis */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-purple-500/30 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-purple-400">2. DNA Diagnosis</span>
              <p className="text-sm font-bold text-purple-300 mt-2">{currentScenario.detectedDNA}</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {currentScenario.rootCause}
              </p>
            </div>
            <div className="mt-4 text-[11px] text-purple-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pattern Locked & Stored in Profile</span>
            </div>
          </div>

          {/* Card 3: Targeted Remediation */}
          <div className="bg-indigo-950/40 p-5 rounded-2xl border border-indigo-500/40 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase text-indigo-400 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                3. Targeted Remediation
              </span>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                {currentScenario.targetedFix}
              </p>
            </div>
            <div className="mt-4 p-2.5 bg-indigo-900/40 rounded-xl text-[11px] text-cyan-300 border border-indigo-800 font-medium">
              Zero exam anxiety • Direct conceptual repair
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
