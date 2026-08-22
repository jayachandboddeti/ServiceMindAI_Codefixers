import React from 'react';
import { BrainCircuit, Heart, Sparkles, ExternalLink, Code2, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-white text-sm">Adaptive AI Tutor</p>
            <p className="text-[11px] text-slate-500">Personalized Learning for Every Student • SPECATHON 2026</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
          <a href="#problem-solution" className="hover:text-white transition">Problem & Solution</a>
          <a href="#live-demo" className="hover:text-white transition">Fractions Demo</a>
          <a href="#confidence-matrix" className="hover:text-white transition">Confidence Matrix</a>
          <a href="#teach-back" className="hover:text-white transition">Teach-Back Mode</a>
          <a href="#mistake-dna" className="hover:text-white transition">Mistake DNA</a>
          <a href="#architecture" className="hover:text-white transition">AI Architecture</a>
          <a href="#portals" className="hover:text-white transition">Teacher & Parent Portals</a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-slate-400 font-medium">Built by Team CODEFIXERS (ServiceMind AI)</p>
          <p className="text-[10px] text-slate-600 mt-0.5">Ready for instant zero-config Vercel edge deployment</p>
        </div>
      </div>
    </footer>
  );
}
