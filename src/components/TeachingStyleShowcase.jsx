import React, { useState } from 'react';
import { 
  BookOpen, 
  PieChart, 
  Globe2, 
  Gamepad2, 
  Mic, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { TEACHING_STYLES } from '../data/mockData';

export default function TeachingStyleShowcase({ activeLang, setActiveLang }) {
  const [activeStyle, setActiveStyle] = useState("visual");
  const [interactiveSlices, setInteractiveSlices] = useState(4);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const styleDetails = {
    simple: {
      title: "Simple & Clear Explanation",
      badge: "Textual Clarity",
      quote: "A fraction is simply a part of a whole thing. The number on top (Numerator) is how many pieces you have. The number on the bottom (Denominator) is the total number of equal pieces in the whole object.",
      visual: (
        <div className="flex items-center justify-center p-6 bg-slate-900 rounded-2xl border border-slate-800">
          <div className="text-center font-mono space-y-2">
            <div className="text-3xl font-extrabold text-cyan-400">1 (Numerator: Parts you have)</div>
            <div className="h-1 bg-slate-500 rounded-full w-48 mx-auto my-2"></div>
            <div className="text-3xl font-extrabold text-indigo-400">2 (Denominator: Total parts)</div>
          </div>
        </div>
      )
    },
    visual: {
      title: "Visual Diagram & Pizza Slices",
      badge: "Visual Learners",
      quote: "Look at this circle pizza! Sliced right in the middle into 2 equal halves. The shaded blue half is 1/2 of the entire pizza.",
      visual: (
        <div className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4">
          <div className="w-36 h-36 rounded-full border-4 border-cyan-400 bg-slate-800 relative overflow-hidden flex items-center justify-center shadow-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-cyan-500/50 border-r-2 border-dashed border-white"></div>
            <span className="relative z-10 text-white font-extrabold text-xl bg-slate-950/80 px-3 py-1 rounded-xl">1 / 2</span>
          </div>
          <p className="text-xs text-cyan-300 font-medium">1 shaded slice + 1 unshaded slice = 2 equal halves</p>
        </div>
      )
    },
    real_world: {
      title: "Real-World Everyday Analogy",
      badge: "Contextual Learners",
      quote: "Imagine sharing a chocolate bar made of 4 equal squares with your best friend. If you give them 2 squares, you gave away 2/4 of the bar, which is the exact same amount as 1/2 of the whole chocolate bar!",
      visual: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-4">
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
            <div className="h-14 bg-amber-700 rounded-lg flex items-center justify-center text-xs font-bold text-amber-200 border border-amber-500 shadow-md">1/4</div>
            <div className="h-14 bg-amber-700 rounded-lg flex items-center justify-center text-xs font-bold text-amber-200 border border-amber-500 shadow-md">1/4</div>
            <div className="h-14 bg-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-700">1/4</div>
            <div className="h-14 bg-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-700">1/4</div>
          </div>
          <p className="text-xs text-amber-300 font-medium">2 squares eaten out of 4 = 2/4 = 1/2 Chocolate Bar</p>
        </div>
      )
    },
    interactive: {
      title: "Interactive Sandbox & Slice Slider",
      badge: "Kinesthetic / Hands-On",
      quote: "Slide the slice counter below! As you increase the number of slices from 2 to 8, notice how each individual slice becomes smaller, yet 2/4 and 4/8 cover the same space as 1/2.",
      visual: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 space-y-4 text-center">
          <div className="flex justify-center items-center space-x-2">
            {[2, 4, 6, 8].map((slices) => (
              <button
                key={slices}
                onClick={() => setInteractiveSlices(slices)}
                className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition ${
                  interactiveSlices === slices
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                    : "bg-slate-950 text-slate-400 hover:text-white"
                }`}
              >
                {slices} Slices
              </button>
            ))}
          </div>
          <div className="text-sm font-semibold text-cyan-300">
            Current Fraction: {interactiveSlices / 2} / {interactiveSlices} = 1/2 of the Circle
          </div>
          <div className="w-full bg-slate-950 h-6 rounded-full overflow-hidden border border-slate-800 flex">
            <div className="w-1/2 bg-cyan-500 flex items-center justify-center text-[10px] font-bold text-slate-950">50% Shaded</div>
            <div className="w-1/2 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">50% Empty</div>
          </div>
        </div>
      )
    },
    voice: {
      title: "Audio AI Conversational Voice",
      badge: "Auditory Learners",
      quote: "Click 'Play Audio Lesson' to hear the AI speak with warm intonation, gentle pauses, and natural encouragement designed for young students.",
      visual: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-center space-y-4">
          <button
            onClick={() => {
              if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance("Let's look at equivalent fractions! Imagine cutting a pizza into 4 slices. Eating 2 slices is the exact same amount of pizza as eating 1 huge slice from a 2-slice pizza. Both are half!");
                u.onstart = () => setIsPlayingAudio(true);
                u.onend = () => setIsPlayingAudio(false);
                window.speechSynthesis.speak(u);
              }
            }}
            className="p-4 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white shadow-xl shadow-indigo-600/30 transition hover:scale-110 active:scale-95 inline-flex items-center justify-center"
          >
            <Volume2 className={`w-8 h-8 ${isPlayingAudio ? "animate-bounce" : ""}`} />
          </button>
          <p className="text-xs text-indigo-300 font-semibold">
            {isPlayingAudio ? "Streaming AI Audio Voice..." : "Click to Play Voice Explanation"}
          </p>
        </div>
      )
    },
    story: {
      title: "Story-Based Adventure: Chef Mia's Bakery",
      badge: "Narrative Learners",
      quote: "Chef Mia is making her famous strawberry tarts. Her recipe requires 1/2 cup of honey, but she only has a 1/4 cup measuring spoon. She uses 2 scoops of 1/4 cup to make 1/2 cup and saves the bakery!",
      visual: (
        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-left space-y-3">
          <div className="flex items-center space-x-2 text-pink-400 font-bold text-xs uppercase">
            <span>🧁 Chapter 1: The Great Tart Challenge</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed italic">
            "Mia carefully measured: 1/4 cup + 1/4 cup = 2/4 cup = 1/2 cup of pure honey. The aroma of sweet strawberries filled the kitchen!"
          </p>
        </div>
      )
    }
  };

  const current = styleDetails[activeStyle] || styleDetails.visual;

  return (
    <section id="teaching-styles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Section 13 & 16 • Multimodal Delivery</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          6 Personalized Teaching Styles & Multilingual Support
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          The AI doesn't just adapt *what* it teaches—it changes *how* it teaches based on whether the student prefers visual diagrams, stories, audio, analogies, or hands-on simulations.
        </p>
      </div>

      {/* 6 Teaching Modes Tab Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {TEACHING_STYLES.map((st) => {
          const isSelected = activeStyle === st.id;
          return (
            <button
              key={st.id}
              onClick={() => setActiveStyle(st.id)}
              className={`p-3.5 rounded-2xl border text-left transition duration-200 flex flex-col justify-between ${
                isSelected
                  ? "bg-cyan-600/20 border-cyan-400 text-white shadow-lg shadow-cyan-600/20 scale-105"
                  : "bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <span className="text-2xl mb-1">{st.icon}</span>
              <span className="text-xs font-bold leading-tight">{st.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Style Interactive Stage */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400">{current.badge}</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">{current.title}</h3>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xs text-slate-400">Language:</span>
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
              {["English", "Hindi", "Telugu", "Spanish"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1.5 rounded-lg transition ${
                    activeLang === lang ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 my-6 items-center">
          {/* Left: AI Lesson Dialogue */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 bg-indigo-950/30 border border-indigo-500/30 rounded-2xl">
              <span className="text-[11px] font-mono uppercase text-indigo-400 font-bold block mb-2">
                Concept: Equivalent Fractions (1/2 == 2/4)
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                "{current.quote}"
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Automatically switched when student struggled with plain text</span>
            </div>
          </div>

          {/* Right: Dynamic Visual Display */}
          <div className="lg:col-span-6">
            {current.visual}
          </div>
        </div>
      </div>
    </section>
  );
}
