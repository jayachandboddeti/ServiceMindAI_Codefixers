import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Send, 
  BrainCircuit, 
  CheckCircle2, 
  AlertCircle, 
  Award, 
  RefreshCw,
  Lightbulb
} from 'lucide-react';

export default function TeachBackSection() {
  const [studentInput, setStudentInput] = useState("");
  const [aiEvaluation, setAiEvaluation] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const samplePresets = [
    {
      label: "Rote Memorization Only",
      text: "It is the number at the bottom of the line.",
      analysis: {
        score: "45%",
        verdict: "Surface / Memorization",
        color: "amber",
        comment: "Correct position identified, but missing conceptual representation of total equal parts.",
        followUp: "Spot on about where it sits! Now tell me: what does that bottom number actually tell us about the pizza slices?"
      }
    },
    {
      label: "Deep Conceptual Understanding",
      text: "The denominator shows how many equal pieces the whole pizza or shape was divided into altogether.",
      analysis: {
        score: "98%",
        verdict: "Deep Conceptual Mastery",
        color: "emerald",
        comment: "Excellent! Explicitly mentions both 'equal pieces' and 'total whole'. Full understanding verified.",
        followUp: "Outstanding teaching! You explained both parts: equal slicing and total quantity. You're ready for fraction addition!"
      }
    },
    {
      label: "Partial / Misconception",
      text: "It is how many slices I ate from the box.",
      analysis: {
        score: "20%",
        verdict: "Misconception Detected",
        color: "rose",
        comment: "Confused denominator with numerator (parts taken vs total parts).",
        followUp: "Ah, close! The slices you ate is actually the top number (the Numerator). The bottom number is all the slices in the entire box before eating."
      }
    }
  ];

const handleEvaluate = async (text) => {
  const input = text || studentInput;
  if (!input.trim()) return;

  setIsEvaluating(true);
  setAiEvaluation(null);

  try {
    const response = await fetch('http://localhost:5000/api/ai-assistant', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });

    const data = await response.json();
    setAiEvaluation(data); // Stores { score, verdict, color, comment, followUp }
  } catch (error) {
    console.error('AI evaluation error:', error);
    setAiEvaluation({
      score: 'N/A',
      verdict: 'Connection Error',
      color: 'rose',
      comment: 'Unable to connect to the AI Tutor backend.',
    });
  } finally {
    setIsEvaluating(false);
  }
};

  return (
    <section id="teach-back" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-950/40 border border-pink-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Section 10 • Signature Innovation</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Teach-Back Mode: "Now You Teach Me!"
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Instead of just answering multiple choice quizzes, students explain concepts in their own words. Our AI analyzes natural language responses to catch memorization without understanding.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        {/* Dialogue Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 font-bold">
              AI
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">AI Tutor Prompt:</h3>
              <p className="text-xs text-slate-400">Evaluating conceptual depth vs rote memorization</p>
            </div>
          </div>
          <span className="text-xs bg-pink-500/10 text-pink-300 border border-pink-500/30 px-3 py-1 rounded-full font-semibold">
            NLP Semantic Analysis
          </span>
        </div>

        {/* AI Tutor Dialogue Box */}
        <div className="my-6 p-4 sm:p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-slate-200 text-sm sm:text-base leading-relaxed flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-white">"You've learned about denominators! Now, pretend I am a new student who has never seen a fraction before. Can you explain to me: what is a denominator and what does it represent?"</p>
          </div>
        </div>

        {/* Preset Responses for quick testing */}
        <div className="mb-4">
          <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">Try Sample Student Responses:</span>
          <div className="flex flex-wrap gap-2">
            {samplePresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setStudentInput(preset.text);
                  handleEvaluate(preset.text);
                }}
                className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-slate-300 hover:text-white text-xs transition"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Student Input Box */}
        <div className="relative mb-6">
          <textarea
            value={studentInput}
            onChange={(e) => setStudentInput(e.target.value)}
            placeholder="Type your explanation in your own words (e.g., 'The denominator tells us how many equal pieces make up the whole...')"
            rows={3}
            className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500 rounded-2xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition shadow-inner resize-none"
          />
          <button
            onClick={() => handleEvaluate(studentInput)}
            disabled={!studentInput.trim() || isEvaluating}
            className="mt-2 sm:mt-0 sm:absolute sm:bottom-3 sm:right-3 bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center space-x-2 disabled:opacity-30"
          >
            {isEvaluating ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            <span>{isEvaluating ? "Analyzing Reasoning..." : "Submit Explanation"}</span>
          </button>
        </div>

        {/* AI Deep Evaluation Breakdown */}
        {aiEvaluation && (
          <div className="p-6 bg-slate-950 rounded-2xl border border-indigo-500/30 animate-fade-in space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center space-x-2">
                <BrainCircuit className="w-5 h-5 text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  AI NLP Semantic Evaluation
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${
                  aiEvaluation.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                  aiEvaluation.color === 'amber' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                  'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}>
                  {aiEvaluation.verdict} ({aiEvaluation.score})
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
              <strong className="text-white block mb-1">Reasoning Analysis:</strong>
              {aiEvaluation.comment}
            </div>

            <div className="p-4 bg-indigo-950/40 rounded-xl border border-indigo-500/30 text-xs sm:text-sm text-indigo-200">
              <strong className="text-indigo-400 block mb-1">AI Tutor Follow-Up:</strong>
              "{aiEvaluation.followUp}"
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
