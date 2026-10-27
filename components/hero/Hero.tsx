'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowRight, FileDown, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

// Dynamically import Three.js 3D scene on client side only
const HeroScene3D = dynamic(() => import('./HeroScene3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-cyan-500/5" />
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Canvas Background */}
      <HeroScene3D />

      {/* California coastal subtle atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-[#66F4FF]/15 via-[#66C4FF]/10 to-[#FFC067]/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFC067]/12 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#66F4FF]/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Availability Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#66F4FF] text-[#007A87] text-xs font-semibold tracking-wide mb-6 backdrop-blur-md shadow-xs shadow-[#66F4FF]/20 animate-fade-in">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B4D8] animate-pulse" />
          <span>Available for AI / ML &amp; GenAI Internships</span>
        </div>

        {/* Primary Name Header */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3">
          <span className="text-[#0f1e2e] tracking-tight">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </h1>

        {/* Professional Title & Positioning */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0284c7] font-mono tracking-tight mb-3">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-[#5a7385] tracking-wider uppercase max-w-2xl mx-auto">
            {PERSONAL_INFO.positioning}
          </p>
        </div>

        {/* Supporting Hook */}
        <div className="max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-lg sm:text-xl font-bold text-[#0f1e2e]">
            “{PERSONAL_INFO.tagline}”
          </p>
          <p className="text-sm sm:text-base text-[#5a7385] leading-relaxed">
            Artificial Intelligence &amp; Data Science student at IIITDM Kurnool. I translate machine learning theory into working, evaluated software—spanning evidence-grounded RAG docents, out-of-core data systems handling 5M+ reviews, and multimodal vision architectures.
          </p>
        </div>

        {/* Modern Pill CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href="#featured-projects"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#0f1e2e] bg-gradient-to-r from-[#FFC067] via-[#FFD28E] to-[#FFC067] hover:from-[#ffb44d] hover:to-[#ffa834] shadow-md shadow-[#FFC067]/30 border border-[#FFC067] transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#0f1e2e] bg-white hover:bg-[#f8fafc] border border-[#7d99aa]/40 hover:border-[#66c4ff] shadow-xs backdrop-blur-md transition-all transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 text-[#d97706]" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full font-semibold text-sm text-[#5a7385] hover:text-[#0f1e2e] bg-white hover:bg-[#f8fafc] border border-[#7d99aa]/30 backdrop-blur-md shadow-xs transition-all"
            title="Inspect Source Code on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Subtle Social Links */}
        <div className="flex items-center justify-center space-x-6 text-xs text-[#5a7385] mb-12">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-[#0284c7] transition-colors font-medium"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn /pankaj-jhajhria</span>
          </a>
          <span className="text-[#b5c7d3]">·</span>
          <a
            href={PERSONAL_INFO.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-[#0f1e2e] transition-colors font-medium"
          >
            <span>X @PkFlamer</span>
          </a>
          <span className="text-[#b5c7d3]">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center space-x-1.5 hover:text-[#d97706] transition-colors font-mono font-semibold"
          >
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>

        {/* Quick Highlights / Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-[#e1ebf2]">
          <div className="p-4 rounded-2xl bg-white border border-[#e1ebf2] text-left shadow-xs hover:border-[#66c4ff] transition-all">
            <div className="text-xl font-bold font-mono text-[#d97706]">100.0%</div>
            <div className="text-xs text-[#5a7385] mt-0.5">Recall@5 (MuseGuide RAG)</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#e1ebf2] text-left shadow-xs hover:border-[#66c4ff] transition-all">
            <div className="text-xl font-bold font-mono text-[#0284c7]">2,043,926</div>
            <div className="text-xs text-[#5a7385] mt-0.5">Test Reviews Evaluated</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#e1ebf2] text-left shadow-xs hover:border-[#66c4ff] transition-all">
            <div className="text-xl font-bold font-mono text-[#d97706]">4 Models</div>
            <div className="text-xs text-[#5a7385] mt-0.5">Live Vision Benchmark App</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#e1ebf2] text-left shadow-xs hover:border-[#66c4ff] transition-all">
            <div className="text-xl font-bold font-mono text-[#0284c7]">14.7 ms</div>
            <div className="text-xs text-[#5a7385] mt-0.5">Steady-State Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
}
