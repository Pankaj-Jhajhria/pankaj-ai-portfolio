import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Wrench, CheckCircle, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-700 mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tools, frameworks, and methodologies substantiated by working implementations.
          </p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-between shadow-xs hover:border-amber-400 transition-all"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  {cat.description}
                </p>

                {/* Active Skills */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono font-semibold text-amber-800 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Applied in Projects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.activeSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200 hover:border-amber-400 hover:bg-amber-50 hover:text-amber-900 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Exploring Skills */}
                {cat.exploringSkills && cat.exploringSkills.length > 0 && (
                  <div className="pt-3 border-t border-slate-200">
                    <div className="text-[11px] font-mono font-semibold text-sky-800 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-sky-700" />
                      <span>Currently Exploring</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.exploringSkills.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-sky-50 text-sky-800 border border-sky-200"
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
