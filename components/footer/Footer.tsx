'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-white/[0.08] bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-copper-600 p-[1px]">
              <div className="w-full h-full bg-[#0d101a] rounded-[7px] flex items-center justify-center font-bold text-xs text-amber-400">
                PJ
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-200">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                AI Engineer · IIITDM Kurnool
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-bold"
              aria-label="X"
            >
              𝕏
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center space-x-4 text-xs text-slate-500">
            <span>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-amber-400 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
