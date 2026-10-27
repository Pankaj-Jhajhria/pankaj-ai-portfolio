'use client';

import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Menu, X, FileDown, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Focus', href: '#focus' },
  { name: 'Featured Projects', href: '#featured-projects' },
  { name: 'All Projects', href: '#all-projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-[#e1ebf2] shadow-xs py-3'
          : 'bg-[#fcfdfd]/80 backdrop-blur-xs py-4 border-b border-[#e1ebf2]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-[#0f1e2e] focus:outline-none"
            aria-label="Pankaj Jhajhria Home"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFC067] via-[#66F4FF] to-[#66C4FF] p-[1.5px] shadow-sm shadow-[#66C4FF]/20">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-extrabold text-xs tracking-wider text-[#0f1e2e] group-hover:text-[#0284c7] transition-colors">
                PJ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-[#0f1e2e] group-hover:text-[#0284c7] transition-colors">
                Pankaj Jhajhria
              </span>
              <span className="text-[11px] text-[#0284c7] font-mono font-medium tracking-wider">
                AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-white/70 border border-[#e1ebf2] p-1 rounded-full shadow-xs" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-semibold text-[#5a7385] hover:text-[#0f1e2e] hover:bg-[#66c4ff]/15 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#7d99aa] hover:text-[#0f1e2e] hover:bg-[#66c4ff]/10 rounded-full transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#7d99aa] hover:text-[#0284c7] hover:bg-[#66c4ff]/10 rounded-full transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 text-xs font-bold text-[#0f1e2e] bg-gradient-to-r from-[#FFC067] via-[#FFD28E] to-[#FFC067] hover:from-[#ffb44d] hover:to-[#ffa834] rounded-full shadow-xs hover:shadow-md hover:shadow-[#FFC067]/30 transition-all border border-[#FFC067]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
              className="p-2 text-[#d97706] hover:bg-[#66c4ff]/10 rounded-full"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5a7385] hover:text-[#0f1e2e] hover:bg-[#66c4ff]/10 rounded-full focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/98 backdrop-blur-xl border-b border-[#e1ebf2] px-4 pt-3 pb-6 shadow-lg transition-all">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-[#5a7385] hover:text-[#0f1e2e] hover:bg-[#66c4ff]/10 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#e1ebf2] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#7d99aa] hover:text-[#0f1e2e]"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[#7d99aa] hover:text-[#0284c7]"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-bold text-[#0f1e2e] bg-[#FFC067] hover:bg-[#ffb44d] rounded-full shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
