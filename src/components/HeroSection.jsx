import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Zap, 
  BrainCircuit, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Volume2, 
  HelpCircle,
  Sliders,
  Layers
} from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

export default function HeroSection({ activeLang, onStartDemo }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const t = TRANSLATIONS[activeLang] || TRANSLATIONS.English;

  const playVoiceGreeting = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = activeLang === 'Hindi' 
        ? "नमस्ते! मैं आपका अनुकूली AI शिक्षक हूँ। चलिए भिन्न को बहुत सरल और मजेदार तरीके से सीखते हैं।"
        : activeLang === 'Telugu'
        ? "నమస్కారం! నేను మీ అడాప్టివ్ AI ట్యూటర్. మనం భిన్నాలను చాలా సరదాగా నేర్చుకుందాం."
        : activeLang === 'Spanish'
        ? "¡Hola! Soy tu tutor de IA adaptativo. ¡Aprendamos fracciones de manera divertida y personalizada!"
        : "Hello! I am your Adaptive AI Tutor. Every student learns differently, and I am here to adapt to your unique pace and style!";
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Speech synthesis is not supported in this browser.");
    }
  };

  return (
    <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Top Banner Tag */}
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2.5 bg-slate-900/90 border border-indigo-500/30 text-indigo-300 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-950/50 mb-8 animate-fade-in hover:border-indigo-400 transition-colors cursor-pointer group">
          <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="text-slate-200">{t.heroTag}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
          <span className="text-cyan-300 font-mono text-xs">{t.classTag}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] text-white">
          {t.heroTitle}{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            {t.heroTitleHighlight}
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-3xl leading-relaxed">
          {t.heroDesc}
        </p>

        {/* Interactive CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#live-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/30 hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-base group"
          >
            <span>{t.startDemoBtn}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={playVoiceGreeting}
            className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl border font-semibold text-sm transition-all backdrop-blur-md ${
              isPlayingAudio
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-lg shadow-cyan-500/30 animate-pulse"
                : "bg-slate-900/80 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600"
            }`}
            title="Hear AI Tutor Voice"
          >
            <Volume2 className={`w-5 h-5 ${isPlayingAudio ? "text-cyan-300 animate-bounce" : "text-slate-400"}`} />
            <span>{isPlayingAudio ? "AI Speaking Lesson..." : "Hear AI Voice Tutor"}</span>
          </button>

          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 font-semibold text-sm transition"
          >
            <Layers className="w-4 h-4" />
            <span>5-Layer Architecture</span>
          </a>
        </div>

        {/* 6 Step Closed-Loop Ribbon */}
        <div className="mt-14 w-full max-w-4xl p-1 bg-gradient-to-r from-indigo-500/30 via-cyan-500/20 to-emerald-500/30 rounded-2xl shadow-2xl">
          <div className="bg-slate-950/90 rounded-[14px] px-4 py-4 sm:px-6 sm:py-5">
            <p className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3 flex items-center justify-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              Continuous Adaptive Learning Loop
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs font-semibold">
              {[
                { step: "1. Assess", desc: "Diagnostic Baseline", color: "text-indigo-300 border-indigo-500/40 bg-indigo-950/40" },
                { step: "2. Understand", desc: "Confidence Matrix", color: "text-cyan-300 border-cyan-500/40 bg-cyan-950/40" },
                { step: "3. Adapt", desc: "Dynamic Difficulty", color: "text-blue-300 border-blue-500/40 bg-blue-950/40" },
                { step: "4. Teach", desc: "6 Modality Styles", color: "text-purple-300 border-purple-500/40 bg-purple-950/40" },
                { step: "5. Evaluate", desc: "Teach-Back Depth", color: "text-amber-300 border-amber-500/40 bg-amber-950/40" },
                { step: "6. Improve", desc: "Mistake DNA Map", color: "text-emerald-300 border-emerald-500/40 bg-emerald-950/40" },
              ].map((item, idx) => (
                <div key={idx} className={`p-2.5 rounded-xl border ${item.color} flex flex-col items-center justify-center transition hover:scale-105`}>
                  <span className="font-bold">{item.step}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Metrics Proof Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 sm:p-5 rounded-2xl text-center backdrop-blur-sm hover:border-slate-700 transition">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">100%</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Real-Time Personalization</div>
            <p className="text-[11px] text-slate-500 mt-0.5">Adapts after every single answer</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 sm:p-5 rounded-2xl text-center backdrop-blur-sm hover:border-slate-700 transition">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">4 Levels</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Confidence vs Knowledge</div>
            <p className="text-[11px] text-slate-500 mt-0.5">Detects lucky guesses & misconceptions</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 sm:p-5 rounded-2xl text-center backdrop-blur-sm hover:border-slate-700 transition">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">7 Types</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Granular Mistake DNA</div>
            <p className="text-[11px] text-slate-500 mt-0.5">Diagnoses root cause, not just ❌</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 sm:p-5 rounded-2xl text-center backdrop-blur-sm hover:border-slate-700 transition">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">0 Anxiety</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">Empathetic Growth Mode</div>
            <p className="text-[11px] text-slate-500 mt-0.5">Gentle encouragement + teach-back</p>
          </div>
        </div>
      </div>
    </section>
  );
}
