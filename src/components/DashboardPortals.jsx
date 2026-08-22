import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  BarChart3, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Send,
  Shield,
  Layers
} from 'lucide-react';

export default function DashboardPortals() {
  const [activePortal, setActivePortal] = useState("teacher"); // "teacher" | "parent"
  const [taskAssigned, setTaskAssigned] = useState(false);

  const handleAssignTask = () => {
    setTaskAssigned(true);
    setTimeout(() => setTaskAssigned(false), 3000);
  };

  return (
    <section id="portals" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>Sections 26 & 27 • Stakeholder Intelligence</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Teacher & Parent Portals
        </h2>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Transform raw marks into deep, actionable insights. Teachers pinpoint classroom bottleneck concepts, while parents receive supportive, qualitative progress reports.
        </p>

        {/* Portal Switcher */}
        <div className="mt-8 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-2xl">
          <button
            onClick={() => setActivePortal("teacher")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              activePortal === "teacher"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Teacher Classroom Hub (Section 26)</span>
          </button>
          <button
            onClick={() => setActivePortal("parent")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center space-x-2 ${
              activePortal === "parent"
                ? "bg-pink-600 text-white shadow-lg shadow-pink-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Parent Diagnostic Report (Section 27)</span>
          </button>
        </div>
      </div>

      {/* PORTAL 1: TEACHER DASHBOARD */}
      {activePortal === "teacher" && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400">Classroom Overview</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Class 3A — Mathematics (Fractions Unit)
              </h3>
              <p className="text-xs text-slate-400">32 Active Students Enrolled</p>
            </div>

            <button
              onClick={handleAssignTask}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition flex items-center space-x-2 shadow-lg shadow-indigo-600/30"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{taskAssigned ? "Assigned Remedial Practice! ✓" : "1-Click Auto-Assign Remediation"}</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400">Class Average Mastery</span>
              <p className="text-2xl font-extrabold text-emerald-400 mt-1">84.2%</p>
              <span className="text-[10px] text-emerald-300">↑ 12% after adaptive drills</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400">Weakest Topic</span>
              <p className="text-lg font-bold text-rose-400 mt-1">Fraction Word Problems</p>
              <span className="text-[10px] text-slate-500">9 students need attention</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400">Top Mistake Pattern</span>
              <p className="text-lg font-bold text-purple-400 mt-1">Unlike Denominators</p>
              <span className="text-[10px] text-slate-500">Conceptual misconception</span>
            </div>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400">Avg Study Time / Day</span>
              <p className="text-2xl font-extrabold text-cyan-400 mt-1">18 Mins</p>
              <span className="text-[10px] text-cyan-300">Bite-sized micro sessions</span>
            </div>
          </div>

          {/* Individual Student Quick Roster */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5">
            <h4 className="text-sm font-bold text-white mb-4">Student Spotlight Matrix</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase font-mono">
                    <th className="pb-3">Student Name</th>
                    <th className="pb-3">Current Level</th>
                    <th className="pb-3">Strong Concepts</th>
                    <th className="pb-3">Weak Concepts</th>
                    <th className="pb-3">Confidence Trend</th>
                    <th className="pb-3">Recommended Next</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-3 font-semibold text-white">Rahul Sharma</td>
                    <td><span className="bg-slate-900 px-2 py-0.5 rounded text-indigo-300">Intermediate</span></td>
                    <td className="text-emerald-400">🟢 Numerator, Denominator</td>
                    <td className="text-rose-400">🔴 Word Problems</td>
                    <td className="text-cyan-300">🙂 Medium-High</td>
                    <td><span className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 text-[11px]">Visual Story Drill</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-white">Ananya Verma</td>
                    <td><span className="bg-slate-900 px-2 py-0.5 rounded text-emerald-300">Advanced</span></td>
                    <td className="text-emerald-400">🟢 All Basic Fractions</td>
                    <td className="text-slate-500">None detected</td>
                    <td className="text-emerald-300">😎 Very Confident</td>
                    <td><span className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 text-[11px]">Grade 4 Pre-Algebra</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-white">Karthik Reddy</td>
                    <td><span className="bg-slate-900 px-2 py-0.5 rounded text-amber-300">Needs Support</span></td>
                    <td className="text-emerald-400">🟢 Pizza Slices</td>
                    <td className="text-rose-400">🔴 Denominator Rules</td>
                    <td className="text-amber-300">😐 Unsure</td>
                    <td><span className="bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800 text-[11px]">Teach-Back Sandbox</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* PORTAL 2: PARENT DASHBOARD */}
      {activePortal === "parent" && (
        <div className="bg-slate-900/80 border border-pink-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase text-pink-400">Parent Diagnostic View</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Child: Rahul Sharma (Grade 3)
              </h3>
              <p className="text-xs text-slate-400">Weekly Progress Report • Zero Anxiety Learning</p>
            </div>

            <div className="flex items-center space-x-2 text-xs bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
              <Clock className="w-4 h-4 text-pink-400" />
              <span className="text-slate-300 font-semibold">Total Study Time: 12h 45m</span>
            </div>
          </div>

          {/* Qualitative vs Raw Score Comparison (Section 27 Innovation) */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2 opacity-70">
              <span className="text-xs font-mono text-slate-500 uppercase">Traditional Report Card Style:</span>
              <p className="text-xl font-bold text-rose-400">"Your child scored 70% in Fractions."</p>
              <p className="text-xs text-slate-400">Vague, punitive, doesn't explain what to practice or why.</p>
            </div>

            <div className="bg-pink-950/30 p-5 rounded-2xl border border-pink-500/40 space-y-2">
              <span className="text-xs font-bold text-pink-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Adaptive AI Diagnostic Insight:
              </span>
              <p className="text-base font-bold text-white leading-relaxed">
                "Your child understands basic fractions and equivalent parts with 93% accuracy, but needs gentle practice translating word stories into fraction equations."
              </p>
              <p className="text-xs text-pink-300">Actionable, encouraging, and clear for parents!</p>
            </div>
          </div>

          {/* Activity Breakdown */}
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400">Concepts Mastered This Week</span>
              <p className="text-lg font-bold text-emerald-400 mt-1">4 of 5 Topics</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400">Suggested Revision Session</span>
              <p className="text-lg font-bold text-cyan-400 mt-1">5 Mins on Sunday</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400">Screen Time Limit Status</span>
              <p className="text-lg font-bold text-indigo-300 mt-1">Healthy (25m / day cap)</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
