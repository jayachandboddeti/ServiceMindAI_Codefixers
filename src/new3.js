import React, { useState } from "react";
import {
  BookOpen,
  Mic,
  Smile,
  Flame,
  Globe,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  BarChart3,
  ChevronRight,
  RefreshCw,
  Volume2
} from "lucide-react";

export default function App() {
  const [activeLang, setActiveLang] = useState("English");
  const [explanationMode, setExplanationMode] = useState("analogy");
  const [showEmpathyDemo, setShowEmpathyDemo] = useState(false);
  const [portalTab, setPortalTab] = useState("parent");
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* 1. STICKY NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              ServiceMind AI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm text-slate-300 font-medium">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Interactive Demo</a>
            <a href="#streak" className="hover:text-white transition">Streaks</a>
            <a href="#portals" className="hover:text-white transition">Guardians & Teachers</a>
          </div>

          <div className="flex items-center space-x-4">
            {/* Multilingual Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg px-2 py-1">
              <Globe className="w-4 h-4 text-slate-400 mr-2" />
              <select
                value={activeLang}
                onChange={(e) => setActiveLang(e.target.value)}
                className="bg-transparent text-sm text-slate-200 focus:outline-none cursor-pointer"
              >
                <option value="English" className="bg-slate-900">English</option>
                <option value="Hindi" className="bg-slate-900">Hindi (हिंदी)</option>
                <option value="Spanish" className="bg-slate-900">Spanish (Español)</option>
                <option value="Telugu" className="bg-slate-900">Telugu (తెలుగు)</option>
              </select>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-600/30">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen Adaptive Learning Engine</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          An AI Tutor That Adapts to Your Pace, Language, and{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Emotions
          </span>
        </h1>

        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Stop struggling with static video lessons. Experience personalized roadmaps, real-world analogies, supportive voice AI feedback, and real-time difficulty scaling.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl transition shadow-xl shadow-indigo-500/20 flex items-center justify-center space-x-2">
            <span>Start Your Personalized Roadmap</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button 
            onClick={() => setIsListening(!isListening)}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 font-semibold flex items-center justify-center space-x-2 transition ${
              isListening ? "bg-red-500/20 border-red-500 text-red-300 animate-pulse" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>{isListening ? "Listening... Speak your doubt" : "Try Voice Assistant Demo"}</span>
          </button>
        </div>
      </section>

      {/* 3. INTERACTIVE PRODUCT DEMO TERMINAL */}
      <section id="demo" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Concept Sandbox</span>
              <h3 className="text-xl font-bold text-white mt-1">Topic: Linear Queue Data Structures</h3>
            </div>

            {/* Explanation Modes Switcher */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setExplanationMode("analogy")}
                className={`px-3 py-1.5 rounded-lg transition ${explanationMode === "analogy" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Real-World Analogy
              </button>
              <button
                onClick={() => setExplanationMode("diagram")}
                className={`px-3 py-1.5 rounded-lg transition ${explanationMode === "diagram" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Diagram / Flowchart
              </button>
              <button
                onClick={() => setExplanationMode("quiz")}
                className={`px-3 py-1.5 rounded-lg transition ${explanationMode === "quiz" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"}`}
              >
                Revision Quiz
              </button>
            </div>
          </div>

          {/* Dynamic Content Display */}
          <div className="min-h-[200px] flex items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800/80">
            {explanationMode === "analogy" && (
              <div className="space-y-3 text-slate-300">
                <p className="font-semibold text-indigo-300 flex items-center gap-2">
                  <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                  Everyday Analogy: The Ticket Counter
                </p>
                <p className="text-sm leading-relaxed">
                  Think of a queue like standing in line for movie tickets. The person who gets in line first is served first (FIFO - First In, First Out). Adding someone to the back of the line is <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">enqueue()</code>, and serving the person at the front is <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">dequeue()</code>.
                </p>
              </div>
            )}

            {explanationMode === "diagram" && (
              <div className="w-full text-center space-y-4">
                <div className="flex justify-center items-center gap-2 text-xs text-slate-400">
                  <div className="bg-slate-800 border border-indigo-500 px-4 py-3 rounded-lg text-indigo-300 font-mono">Front (Dequeue)</div>
                  <span className="text-slate-500">➔</span>
                  <div className="bg-slate-800 border border-slate-700 px-3 py-3 rounded-lg font-mono text-slate-300">[ Element 1 ]</div>
                  <div className="bg-slate-800 border border-slate-700 px-3 py-3 rounded-lg font-mono text-slate-300">[ Element 2 ]</div>
                  <span className="text-slate-500">➔</span>
                  <div className="bg-slate-800 border border-cyan-500 px-4 py-3 rounded-lg text-cyan-300 font-mono">Rear (Enqueue)</div>
                </div>
                <p className="text-xs text-slate-400">Visual Flowchart representation for FIFO operation.</p>
              </div>
            )}

            {explanationMode === "quiz" && (
              <div className="w-full space-y-4">
                <p className="text-sm font-medium text-slate-200">Revision Question: Which index changes when a new element is added to the Queue?</p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <button className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-lg text-left text-slate-300">A) Front Index</button>
                  <button 
                    onClick={() => setShowEmpathyDemo(!showEmpathyDemo)}
                    className="p-2.5 bg-slate-900 border border-slate-800 hover:border-indigo-500 rounded-lg text-left text-slate-300 flex justify-between items-center"
                  >
                    <span>B) Rear Index</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Empathic Response Trigger */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-indigo-950/30 border border-indigo-900/50 p-4 rounded-xl">
            <div className="flex items-center space-x-3">
              <Smile className="w-5 h-5 text-pink-400 flex-shrink-0" />
              <p className="text-xs text-slate-300">
                Stuck or made a mistake on the first try? See how our AI responds with support rather than penalizing you.
              </p>
            </div>
            <button
              onClick={() => setShowEmpathyDemo(!showEmpathyDemo)}
              className="text-xs bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30 px-3 py-1.5 rounded-lg whitespace-nowrap transition"
            >
              Simulate Wrong Attempt
            </button>
          </div>

          {showEmpathyDemo && (
            <div className="mt-4 p-4 bg-pink-950/40 border border-pink-800/40 rounded-xl text-xs text-pink-200 flex items-start space-x-3 animate-fade-in">
              <HeartIcon className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">AI Assistant:</span> "No worries at all! It's completely normal to get mixed up between Front and Rear when starting out. Let's break it down again with a simple 10-second flowchart!"
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. CORE FEATURES GRID */}
      <section id="features" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Engineered for Complete Understanding</h2>
          <p className="text-slate-400 text-sm mt-2">Every tool you need to bridge concept gaps and maintain momentum.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-indigo-400" />}
            title="Smart Difficulty Scaling"
            description="Our system continuously monitors your accuracy and automatically dials problem difficulty up or down in real time."
          />
          <FeatureCard
            icon={<BookOpen className="w-6 h-6 text-cyan-400" />}
            title="Dynamic Roadmaps"
            description="Goal-driven learning paths that adjust automatically based on your mastery of fundamental topics."
          />
          <FeatureCard
            icon={<Mic className="w-6 h-6 text-pink-400" />}
            title="Voice-Based AI Assistance"
            description="Speak your doubts directly in your native language and receive natural, interactive audio explanations."
          />
        </div>
      </section>

      {/* 5. GAMIFICATION & STREAKS SECTION */}
      <section id="streak" className="py-16 px-6 max-w-5xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <div className="inline-flex items-center space-x-2 text-amber-400 font-semibold text-xs bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <Flame className="w-4 h-4" />
              <span>LeetCode-Style Consistency Engine</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Build Unstoppable Daily Learning Habits</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Track daily streaks, earn milestones, and complete interactive revision quizzes designed to prevent forgetting previous topics.
            </p>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-4 w-full md:w-auto">
            <div className="flex items-center justify-center space-x-2">
              <Flame className="w-8 h-8 text-amber-500 animate-bounce" />
              <span className="text-4xl font-extrabold text-white">14</span>
              <span className="text-slate-400 text-sm font-medium">Day Streak</span>
            </div>
            {/* Heatmap Grid Mockup */}
            <div className="grid grid-cols-7 gap-1.5 justify-center pt-2">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-sm ${
                    i % 3 === 0 ? "bg-amber-500" : i % 2 === 0 ? "bg-amber-700/60" : "bg-slate-800"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500">2 lessons remaining to complete today's streak</p>
          </div>
        </div>
      </section>

      {/* 6. GUARDIAN & EDUCATOR CONTROL PORTAL */}
      <section id="portals" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Parent & Teacher Control Portal</h2>
          <p className="text-slate-400 text-sm mt-2">Transparent oversight with zero hassle.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="flex border-b border-slate-800 bg-slate-950">
            <button
              onClick={() => setPortalTab("parent")}
              className={`flex-1 py-4 text-sm font-semibold text-center border-b-2 transition ${
                portalTab === "parent" ? "border-indigo-500 text-indigo-400 bg-slate-900/50" : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              Parent Portal View
            </button>
            <button
              onClick={() => setPortalTab("teacher")}
              className={`flex-1 py-4 text-sm font-semibold text-center border-b-2 transition ${
                portalTab === "teacher" ? "border-indigo-500 text-indigo-400 bg-slate-900/50" : "border-transparent text-slate-400 hover:text-white"
              }`}
            >
              Teacher Classroom Hub
            </button>
          </div>

          <div className="p-8">
            {portalTab === "parent" ? (
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-xs">Total Study Time</p>
                  <p className="text-2xl font-bold text-white mt-1">12h 45m</p>
                  <span className="text-emerald-400 text-xs">↑ 18% from last week</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-xs">Weakness Heatmap</p>
                  <p className="text-base font-semibold text-amber-400 mt-1">Queues & Recursion</p>
                  <span className="text-slate-500 text-xs">Targeted revision auto-scheduled</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-xs">Credentials & Access</p>
                  <p className="text-base font-semibold text-indigo-300 mt-1">Managed by Parent</p>
                  <span className="text-slate-500 text-xs">Screen time limits enabled</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div>
                    <p className="font-semibold text-white">Classroom 10A - Computer Science</p>
                    <p className="text-xs text-slate-400">32 Active Students • 88% Average Concept Mastery</p>
                  </div>
                  <button className="bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs px-3 py-1.5 rounded-lg">
                    Assign Practice Task
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>© 2026 ServiceMind AI (Team CODEFIXERS). Built for SPECATHOHN 2026.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition space-y-3">
      <div className="p-3 bg-slate-950 rounded-xl w-fit border border-slate-800">{icon}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}