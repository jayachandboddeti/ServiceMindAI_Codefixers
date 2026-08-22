import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import InteractiveMVPDemo from './components/InteractiveMVPDemo';
import ConfidenceMatrixSection from './components/ConfidenceMatrixSection';
import TeachBackSection from './components/TeachBackSection';
import MistakeDNASection from './components/MistakeDNASection';
import HiddenGapDetective from './components/HiddenGapDetective';
import TeachingStyleShowcase from './components/TeachingStyleShowcase';
import LearningMapAndProfile from './components/LearningMapAndProfile';
import ArchitectureAndFlow from './components/ArchitectureAndFlow';
import DashboardPortals from './components/DashboardPortals';
import DomainInnovationSection from './components/DomainInnovationSection';
import Footer from './components/Footer';

export default function App() {
  const [activeLang, setActiveLang] = useState("English");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white bg-grid-pattern relative overflow-x-hidden">
      {/* Background Decorative Gradients */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* 1. Header & Navigation */}
      <Navbar activeLang={activeLang} setActiveLang={setActiveLang} />

      {/* 2. Hero Section (Section 1) */}
      <HeroSection activeLang={activeLang} />

      {/* 3. Problem vs Solution & 8 Dimensions (Section 2, 3, 4, 6) */}
      <ProblemSolutionSection />

      {/* 4. Interactive Live MVP Demo: Class 3 Fractions Prototype (Section 7, 8, 22, 33) */}
      <InteractiveMVPDemo activeLang={activeLang} />

      {/* 5. Confidence vs Knowledge Detection Matrix (Section 9) */}
      <ConfidenceMatrixSection />

      {/* 6. Teach-Back Mode AI Evaluator (Section 10) */}
      <TeachBackSection />

      {/* 7. Mistake DNA Taxonomy & Pattern Analyzer (Section 11) */}
      <MistakeDNASection />

      {/* 8. Hidden Learning-Gap Detective (Section 12) */}
      <HiddenGapDetective />

      {/* 9. 6 Personalized Teaching Styles & Multilingual Showcase (Section 13 & 16) */}
      <TeachingStyleShowcase activeLang={activeLang} setActiveLang={setActiveLang} />

      {/* 10. Personal Learning Map, Rahul Profile, Streaks & Forget-Me-Not Revision (Section 14, 15, 17, 18) */}
      <LearningMapAndProfile />

      {/* 11. 5-Layer AI Architecture, Flow Pipeline, Rule Engine & Telemetry Schema (Section 19, 20, 21, 24, 25) */}
      <ArchitectureAndFlow />

      {/* 12. Teacher Hub & Parent Diagnostic Portals (Section 26 & 27) */}
      <DashboardPortals />

      {/* 13. Domain, Innovation, Safety Guardian & Tech Stack (Section 5, 23, 28, 29, 30, 31, 32) */}
      <DomainInnovationSection />

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
