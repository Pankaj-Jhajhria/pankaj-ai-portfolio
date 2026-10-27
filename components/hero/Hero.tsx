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

      {/* Ambient gradient meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-copper-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wide mb-6 backdrop-blur-md shadow-sm shadow-amber-500/10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>Available for AI / ML & GenAI Internships</span>
        </div>

        {/* Primary Name Header */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3">
          <span className="text-metallic-gold drop-shadow-sm">
            {PERSONAL_INFO.name.toUpperCase()}
          </span>
        </h1>

        {/* Professional Title & Positioning */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400 font-mono tracking-tight mb-3">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-slate-400 tracking-wider uppercase max-w-2xl mx-auto">
            {PERSONAL_INFO.positioning}
          </p>
        </div>

        {/* Supporting Hook */}
        <div className="max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-lg sm:text-xl font-medium text-slate-200">
            “{PERSONAL_INFO.tagline}”
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Artificial Intelligence & Data Science student at IIITDM Kurnool. I translate machine learning theory into working, evaluated software—spanning evidence-grounded RAG docents, out-of-core data systems handling 5M+ reviews, and multimodal vision architectures.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          <a
            href="#featured-projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-100 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] hover:border-amber-400/40 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
          >
            <FileDown className="w-4 h-4 text-amber-400" />
            <span>Download Resume (PDF)</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] backdrop-blur-md transition-all"
            title="Inspect Source Code on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Subtle Social Links */}
        <div className="flex items-center justify-center space-x-6 text-xs text-slate-400 mb-12">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn /pankaj-jhajhria</span>
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={PERSONAL_INFO.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 hover:text-slate-200 transition-colors"
          >
            <span>X @PkFlamer</span>
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center space-x-1.5 hover:text-amber-400 transition-colors font-mono"
          >
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </div>

        {/* Quick Highlights / Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-white/[0.08]">
          <div className="p-3.5 rounded-xl glass-panel text-left">
            <div className="text-xl font-bold font-mono text-amber-400">100.0%</div>
            <div className="text-xs text-slate-400 mt-0.5">Recall@5 (MuseGuide RAG)</div>
          </div>
          <div className="p-3.5 rounded-xl glass-panel text-left">
            <div className="text-xl font-bold font-mono text-cyan-400">2,043,926</div>
            <div className="text-xs text-slate-400 mt-0.5">Test Reviews Evaluated</div>
          </div>
          <div className="p-3.5 rounded-xl glass-panel text-left">
            <div className="text-xl font-bold font-mono text-amber-400">4 Models</div>
            <div className="text-xs text-slate-400 mt-0.5">Live Vision Benchmark App</div>
          </div>
          <div className="p-3.5 rounded-xl glass-panel text-left">
            <div className="text-xl font-bold font-mono text-cyan-400">14.7 ms</div>
            <div className="text-xs text-slate-400 mt-0.5">Steady-State Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
}
