import React from 'react';
import { ENGINEERING_FOCUS } from '@/data/portfolioData';
import { BrainCircuit, Database, Eye, Layers, Sparkles, Check } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-amber-600" />,
  Database: <Database className="w-6 h-6 text-sky-700" />,
  Eye: <Eye className="w-6 h-6 text-amber-700" />,
  Layers: <Layers className="w-6 h-6 text-sky-800" />,
};

export default function FocusSection() {
  return (
    <section id="focus" className="py-20 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-700 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Engineering Focus Areas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Specialized technical domains where I have built, benchmarked, and deployed working systems.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ENGINEERING_FOCUS.map((focus) => {
            const isAmber = focus.primaryColor === 'amber' || focus.primaryColor === 'copper';
            return (
              <div
                key={focus.id}
                className="p-7 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between relative overflow-hidden group shadow-xs hover:border-amber-400"
              >
                {/* Subtle top edge glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] ${
                    isAmber
                      ? 'bg-gradient-to-r from-transparent via-amber-500/60 to-transparent'
                      : 'bg-gradient-to-r from-transparent via-sky-500/60 to-transparent'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-inner">
                      {ICONS[focus.iconName]}
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase font-semibold">
                      SYSTEMS ARCHITECTURE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-700 transition-colors">
                    {focus.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {focus.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-mono font-semibold text-slate-700 mb-3 tracking-wide">
                    DEMONSTRATED IN PROJECTS:
                  </div>
                  <ul className="space-y-2">
                    {focus.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isAmber ? 'text-amber-600' : 'text-sky-700'
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
