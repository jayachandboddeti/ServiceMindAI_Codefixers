import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Lightbulb, 
  Code2, 
  Rocket, 
  Target, 
  Award, 
  CheckCircle2, 
  Compass, 
  Globe2, 
  Cpu,
  Layers,
  Heart
} from 'lucide-react';

export default function DomainInnovationSection() {
  const advantagesList = [
    "Personalized 1-on-1 pacing for every student",
    "Dynamic difficulty that scales up or down instantly",
    "Immediate, non-punitive pedagogical feedback",
    "Deep conceptual understanding over rote memorization",
    "Automated identification of hidden prerequisite gaps",
    "Supports multiple learning speeds and cognitive styles",
    "Encouragement engine with growth mindset messaging",
    "Native multilingual support (English, Hindi, Telugu, Spanish)",
    "Reduces repetitive monitoring burden for teachers",
    "Scales seamlessly to millions of learners simultaneously"
  ];

  const techStack = [
    { title: "Frontend Client", tools: "React.js, Tailwind CSS, Vite, Web Speech API, Canvas Confetti", color: "indigo" },
    { title: "Backend Services", tools: "Python, FastAPI / Flask, Asynchronous Event Worker", color: "cyan" },
    { title: "AI & Cognitive Logic", tools: "Rule-Based Adaptive Engine + NLP Semantic Analysis (LLM API)", color: "purple" },
    { title: "Data & Telemetry", tools: "PostgreSQL, Firebase Firestore, JSON Telemetry Logs", color: "emerald" },
    { title: "Speech & Regional NLP", tools: "Speech-to-Text, Neural TTS, Multilingual Translation API", color: "amber" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* 1. Core Innovation Banner (Section 30) */}
      <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-cyan-950/80 border border-indigo-500/40 rounded-3xl p-8 sm:p-12 mb-16 text-center shadow-2xl relative overflow-hidden">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Section 30 • Core Breakthrough Innovation</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white max-w-4xl mx-auto leading-tight">
          The Strongest Innovation Isn't Just Adding AI to Education.
        </h3>
        <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          The AI builds a <span className="text-cyan-300 font-bold">continuously changing cognitive model</span> of how each student learns: what they know, what they don't know, why they make mistakes, how confident they are, and how they prefer to learn.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold">
          <span className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-indigo-300">
            What They Know
          </span>
          <span className="text-slate-500 py-2">+</span>
          <span className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-rose-300">
            What They Don't Know
          </span>
          <span className="text-slate-500 py-2">+</span>
          <span className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-purple-300">
            Why Mistakes Occur (DNA)
          </span>
          <span className="text-slate-500 py-2">+</span>
          <span className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 text-amber-300">
            Confidence Metacognition
          </span>
          <span className="text-slate-500 py-2">➔</span>
          <span className="bg-emerald-600 px-4 py-2 rounded-xl text-white font-bold shadow-lg">
            Exact Next Optimal Activity
          </span>
        </div>
      </div>

      {/* 2. Theme & Domain Justification (Section 31) */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-slate-900/60 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Hackathon Theme Domain</span>
              <h4 className="text-xl font-bold text-white">Artificial Intelligence</h4>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-medium bg-slate-950 p-4 rounded-xl border border-slate-800">
            "AI analyzes student performance, identifies learning gaps, and adapts questions, explanations, and difficulty levels for personalized learning."
          </p>
        </div>

        <div className="bg-slate-900/60 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 font-bold">Complementary Theme</span>
              <h4 className="text-xl font-bold text-white">Data Science & Analytics</h4>
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-medium bg-slate-950 p-4 rounded-xl border border-slate-800">
            "Analyzes student performance data to identify learning patterns, track progress, detect weaknesses, and provide personalized recommendations."
          </p>
        </div>
      </div>

      {/* 3. Tech Stack Matrix (Section 23) */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase text-cyan-400 font-bold">Section 23 • Engineering Stack</span>
          <h3 className="text-2xl font-bold text-white mt-1">Honest, Battle-Tested Technology Architecture</h3>
          <p className="text-xs text-slate-400 mt-1">No fluff. Only technologies designed for high performance and fast Vercel edge deployment.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techStack.map((tech, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold uppercase text-indigo-400">{tech.title}</span>
              <p className="text-xs text-slate-300 font-mono leading-relaxed">{tech.tools}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Advantages & Safety Feature (Section 28 & 29) */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        {/* 10 Advantages */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Section 29 • 10 Core Advantages</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-6">Built for Tangible Student Outcomes</h3>

          <div className="grid sm:grid-cols-2 gap-3 text-xs">
            {advantagesList.map((adv, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Emotional Guardian (Section 28) */}
        <div className="lg:col-span-5 bg-slate-900/60 border border-pink-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-pink-500/10 rounded-xl text-pink-400 border border-pink-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-pink-400 font-bold">Section 28 • Wellbeing Guardian</span>
                <h4 className="text-lg font-bold text-white">Student Safety Feature</h4>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If a student expresses distress or concerns, the AI does not attempt to act as an unverified therapist. Instead, it gently pauses the curriculum and encourages connecting with a trusted parent, teacher, or guardian.
            </p>

            <div className="mt-4 p-4 bg-pink-950/30 rounded-2xl border border-pink-800/30 text-xs text-pink-200 italic">
              "You're doing great, and it's okay to take a break. Remember, you can always talk to your parents or teacher whenever you feel overwhelmed."
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-pink-400" />
            <span>Child safety & ethical AI compliance built into every interaction</span>
          </div>
        </div>
      </div>

      {/* 5. Future Scope & Roadmap (Section 32) */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/30">
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-indigo-400 font-bold">Section 32 • Expansion Roadmap</span>
            <h4 className="text-xl font-bold text-white">From Prototype to Nationwide Platform</h4>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <strong className="text-white block font-bold mb-1">KG ➔ Class 12 Full Spectrum</strong>
            <p className="text-slate-400">Expansion from Math to Physics, Chemistry, Biology, Social Studies & Coding.</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <strong className="text-white block font-bold mb-1">Conversational Voice Tutor</strong>
            <p className="text-slate-400">Ultra low-latency audio duplex with natural interruption and emotional pitch.</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <strong className="text-white block font-bold mb-1">Predictive Gap Detection</strong>
            <p className="text-slate-400">Anticipates stumbling blocks 3 lessons in advance using graph neural networks.</p>
          </div>
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <strong className="text-white block font-bold mb-1">Regional Language AI Models</strong>
            <p className="text-slate-400">Localized fine-tuned LLMs for 22+ regional Indian & global languages.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
