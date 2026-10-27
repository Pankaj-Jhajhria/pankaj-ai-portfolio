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
    <footer className="py-12 relative border-t border-[#e1ebf2] bg-[#f8fbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFC067] via-[#66F4FF] to-[#66C4FF] p-[1.5px] shadow-xs">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-xs text-[#0f1e2e]">
                PJ
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-[#0f1e2e]">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-[#7d99aa] font-mono font-medium">
                AI Engineer · IIITDM Kurnool
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#7d99aa] hover:text-[#0f1e2e] hover:bg-[#66c4ff]/10 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#7d99aa] hover:text-[#0284c7] hover:bg-[#66c4ff]/10 rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#7d99aa] hover:text-[#d97706] hover:bg-[#FFC067]/15 rounded-full transition-colors text-sm font-bold"
              aria-label="X"
            >
              𝕏
            </a>
          </div>

          {/* Back to Top */}
          <div className="flex items-center space-x-4 text-xs text-[#7d99aa] font-medium">
            <span>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white hover:bg-[#f0f8ff] text-[#5a7385] hover:text-[#0f1e2e] border border-[#e1ebf2] hover:border-[#66c4ff] shadow-xs transition-colors"
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
