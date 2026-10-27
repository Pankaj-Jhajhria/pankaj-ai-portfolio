import React from 'react';
import { ENGINEERING_FOCUS } from '@/data/portfolioData';
import { BrainCircuit, Database, Eye, Layers, Sparkles, Check } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-[#d97706]" />,
  Database: <Database className="w-6 h-6 text-[#0284c7]" />,
  Eye: <Eye className="w-6 h-6 text-[#008da5]" />,
  Layers: <Layers className="w-6 h-6 text-[#0284c7]" />,
};

export default function FocusSection() {
  return (
    <section id="focus" className="py-20 relative bg-[#f8fbfc] border-t border-[#e1ebf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#0284c7] mb-2 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            Engineering Focus Areas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Specialized technical domains where I have built, benchmarked, and deployed working systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ENGINEERING_FOCUS.map((focus) => {
            const isWarm = focus.primaryColor === 'amber' || focus.primaryColor === 'copper';
            return (
              <div
                key={focus.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#e1ebf2] flex flex-col justify-between relative overflow-hidden group shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all"
              >
                {/* Subtle top edge glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] ${
                    isWarm
                      ? 'bg-gradient-to-r from-transparent via-[#FFC067] to-transparent'
                      : 'bg-gradient-to-r from-transparent via-[#66C4FF] to-transparent'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3.5 rounded-2xl bg-[#f0f8ff] border border-[#e1ebf2] shadow-inner">
                      {ICONS[focus.iconName]}
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-[#7d99aa] uppercase font-bold">
                      SYSTEMS ARCHITECTURE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f1e2e] mb-2.5 group-hover:text-[#0284c7] transition-colors">
                    {focus.title}
                  </h3>

                  <p className="text-sm text-[#5a7385] leading-relaxed mb-6">
                    {focus.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e1ebf2]">
                  <div className="text-xs font-mono font-bold text-[#0f1e2e] mb-3 tracking-wide">
                    DEMONSTRATED IN PROJECTS:
                  </div>
                  <ul className="space-y-2">
                    {focus.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-[#5a7385]">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isWarm ? 'text-[#d97706]' : 'text-[#0284c7]'
                          }`}
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
