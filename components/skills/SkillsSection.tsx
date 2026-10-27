import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Wrench, CheckCircle, Sparkles } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative border-t border-[#e1ebf2] bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#008da5] mb-2 font-bold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Tools, frameworks, and methodologies substantiated by working implementations.
          </p>
        </div>

        {/* 4 Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-[#e1ebf2] relative overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all"
            >
              <div>
                <h3 className="text-lg font-extrabold text-[#0f1e2e] mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#5a7385] mb-5">
                  {cat.description}
                </p>

                {/* Active Skills */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono font-bold text-[#d97706] uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#d97706]" />
                    <span>Applied in Projects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.activeSkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#f0f8ff] text-[#006bb8] border border-[#d0e7f9] hover:bg-[#FFC067]/20 hover:border-[#FFC067] hover:text-[#b86200] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Exploring Skills */}
                {cat.exploringSkills && cat.exploringSkills.length > 0 && (
                  <div className="pt-3 border-t border-[#e1ebf2]">
                    <div className="text-[11px] font-mono font-bold text-[#007a87] uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                      <Sparkles className="w-3 h-3 text-[#007a87]" />
                      <span>Currently Exploring</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.exploringSkills.map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#66F4FF]/15 text-[#007a87] border border-[#66F4FF]/40"
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
