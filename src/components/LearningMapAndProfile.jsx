import React, { useState } from 'react';
import { 
  Map, 
  User, 
  Flame, 
  Award, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  TrendingUp, 
  Calendar,
  Smile
} from 'lucide-react';
import { LEARNING_MAP_DATA } from '../data/mockData';

export default function LearningMapAndProfile() {
  const [selectedNode, setSelectedNode] = useState(LEARNING_MAP_DATA[3].id); // Addition default

  const activeNode = LEARNING_MAP_DATA.find((n) => n.id === selectedNode) || LEARNING_MAP_DATA[0];

  return (
    <section id="learning-map" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Map className="w-3.5 h-3.5" />
          <span>Sections 14, 15, 17 & 18</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Personal Learning Map & Student Profile
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Students always know where they stand with intuitive visual knowledge graphs, spaced "Forget-Me-Not" revision cycles, and encouraging habit streaks.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left 7 cols: Interactive Knowledge Map & Spaced Revision */}
        <div className="lg:col-span-7 space-y-8">
          {/* 14. Personal Knowledge Map */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Section 14 • Knowledge Graph</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Topic: Grade 3 Fractions Map</h3>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1"><span className="text-emerald-400">🟢</span> Strong</span>
                <span className="flex items-center gap-1"><span className="text-amber-400">🟡</span> Developing</span>
                <span className="flex items-center gap-1"><span className="text-rose-400">🔴</span> Needs Help</span>
              </div>
            </div>

            {/* Tree Nodes List */}
            <div className="space-y-3 mb-6">
              {LEARNING_MAP_DATA.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/20 scale-[1.01]"
                        : "bg-slate-950/60 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{node.icon}</span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{node.name}</h4>
                        <p className="text-xs text-slate-400">{node.description}</p>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 ml-3">
                      <span className="text-sm font-extrabold text-cyan-300">{node.score}%</span>
                      <span className="block text-[10px] text-slate-500 uppercase font-mono">Mastery</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono text-slate-400">Selected Concept:</span>
                <p className="text-sm font-bold text-indigo-300 mt-0.5">{activeNode.name}</p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition shadow-md shadow-indigo-600/30">
                Launch 3-Min Practice
              </button>
            </div>
          </div>

          {/* 15. Forget-Me-Not Spaced Revision */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 border border-cyan-500/30">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold">Section 15 • Spaced Repetition</span>
                <h4 className="text-lg font-bold text-white">Forget-Me-Not Micro Revision</h4>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              "You learned <strong>Equivalent Fractions</strong> 7 days ago. Let's do a fast 45-second check to solidify long-term memory!"
            </p>
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-slate-400">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Next scheduled revision: Today (Due)</span>
              </div>
              <span className="text-cyan-300 font-bold bg-cyan-950 px-2.5 py-1 rounded-lg border border-cyan-800">
                2 Quick Questions
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Student Learning Profile & Gamification */}
        <div className="lg:col-span-5 space-y-8">
          {/* 18. Student Learning Profile Card (Rahul) */}
          <div className="bg-slate-900/80 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center space-x-4 pb-6 border-b border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl font-bold text-white">
                  👨‍🎓
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-extrabold text-white">Rahul Sharma</h3>
                  <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Active Learner
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Grade 3 • Section 18 Profile Data</p>
              </div>
            </div>

            {/* Profile Table Matrix */}
            <div className="divide-y divide-slate-800/80 text-xs my-4">
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Overall Level</span>
                <span className="font-bold text-white bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">Intermediate</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Fractions Concept</span>
                <span className="font-bold text-emerald-400">🟢 Strong (93%)</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Multiplication</span>
                <span className="font-bold text-amber-400">🟡 Developing (68%)</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Word Problems</span>
                <span className="font-bold text-rose-400">🔴 Weak (42%)</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Average Confidence</span>
                <span className="font-bold text-cyan-300">🙂 Medium-High</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Common Mistake Pattern</span>
                <span className="font-bold text-purple-300">Calculation Slips</span>
              </div>
              <div className="py-2.5 flex justify-between items-center">
                <span className="text-slate-400">Preferred Teaching Style</span>
                <span className="font-bold text-indigo-300">📊 Visual (Pizza/Diagrams)</span>
              </div>
            </div>

            {/* Growth Encouragement Banner */}
            <div className="p-4 bg-indigo-950/40 rounded-2xl border border-indigo-500/30 text-xs text-slate-300 flex items-start space-x-3">
              <Smile className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Growth Mindset Feedback:</strong>
                "You're close, Rahul! Let's look at the step where things changed."
              </div>
            </div>
          </div>

          {/* 17. LeetCode-Style Consistency Streak Grid */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Flame className="w-6 h-6 text-amber-500 animate-bounce" />
                <div>
                  <h4 className="text-base font-bold text-white">14-Day Learning Streak</h4>
                  <p className="text-[11px] text-slate-400">Consistent daily micro-learning</p>
                </div>
              </div>
              <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-bold">
                Level 3 Habit
              </span>
            </div>

            {/* 28-day Heatmap Grid */}
            <div className="grid grid-cols-7 gap-1.5 justify-center py-2">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`h-5 rounded-md transition-all duration-300 hover:scale-125 ${
                    i > 20
                      ? "bg-amber-400 shadow-sm shadow-amber-400/50"
                      : i % 3 === 0
                      ? "bg-amber-500"
                      : i % 2 === 0
                      ? "bg-amber-700/60"
                      : "bg-slate-800"
                  }`}
                  title={`Day ${i + 1}: ${i > 20 ? 'Active 3 lessons' : 'Completed practice'}`}
                />
              ))}
            </div>
            <p className="text-[11px] text-slate-500 text-center mt-2">
              🔥 2 short fraction puzzles remaining to complete today's streak
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
