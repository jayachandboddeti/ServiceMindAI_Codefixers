import React, { useState } from 'react';
import { Sparkles, Globe, BrainCircuit, Play, Menu, X, CheckCircle2 } from 'lucide-react';

export default function Navbar({ activeLang, setActiveLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Problem & Solution", href: "#problem-solution" },
    { name: "Live MVP Demo", href: "#live-demo" },
    { name: "Confidence Matrix", href: "#confidence-matrix" },
    { name: "Teach-Back AI", href: "#teach-back" },
    { name: "Mistake DNA", href: "#mistake-dna" },
    { name: "Learning Map", href: "#learning-map" },
    { name: "Architecture", href: "#architecture" },
    { name: "Portals", href: "#portals" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <BrainCircuit className="w-6 h-6 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
              </div>
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Adaptive AI Tutor
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                MVP v1.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-tight hidden sm:block">Personalized Learning For Every Student</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm text-slate-300 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Language Selector */}
        <div className="flex items-center space-x-3">
          {/* Multilingual Selector */}
          <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-xl px-2.5 py-1.5 shadow-inner">
            <Globe className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
            <select
              value={activeLang}
              onChange={(e) => setActiveLang(e.target.value)}
              className="bg-transparent text-xs sm:text-sm text-slate-200 font-medium focus:outline-none cursor-pointer pr-1"
              aria-label="Select Language"
            >
              <option value="English" className="bg-slate-900 text-white">English</option>
              <option value="Hindi" className="bg-slate-900 text-white">हिंदी (Hindi)</option>
              <option value="Telugu" className="bg-slate-900 text-white">తెలుగు (Telugu)</option>
              <option value="Spanish" className="bg-slate-900 text-white">Español (Spanish)</option>
            </select>
          </div>

          <a
            href="#live-demo"
            className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/25 active:scale-95"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Try Fractions Demo</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 space-y-3 backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition text-sm"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Live Class 3 Fractions Demo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
