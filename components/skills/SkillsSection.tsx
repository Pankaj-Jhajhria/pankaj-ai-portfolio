import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Wrench, CheckCircle, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Tools, frameworks, and methodologies substantiated by working implementations.
          </p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 mb-5">
                  {cat.description}
                </p>

                {/* Active Skills */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono text-amber-400/90 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>Applied in Projects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.activeSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:border-amber-400/40 hover:bg-white/[0.07] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Exploring Skills */}
                {cat.exploringSkills && cat.exploringSkills.length > 0 && (
                  <div className="pt-3 border-t border-white/[0.05]">
                    <div className="text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Currently Exploring</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.exploringSkills.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/20 text-cyan-300 border border-cyan-800/30"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
