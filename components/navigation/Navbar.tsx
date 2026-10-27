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
          ? 'bg-[#090b12]/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-slate-100 focus:outline-none"
            aria-label="Pankaj Jhajhria Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500 via-copper-600 to-amber-700 p-[1px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#0d101a] rounded-[7px] flex items-center justify-center font-bold text-sm tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors">
                PJ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-wide text-slate-200 group-hover:text-white transition-colors">
                Pankaj Jhajhria
              </span>
              <span className="text-[11px] text-amber-400 font-mono tracking-wider">
                AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-amber-400 hover:bg-white/[0.04] rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] rounded-lg transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/[0.05] rounded-lg transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm shadow-amber-500/20 transition-all font-semibold"
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
              className="p-2 text-amber-400 hover:bg-white/[0.05] rounded-lg"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg focus:outline-none"
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
        <div className="sm:hidden bg-[#0a0d17]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 pt-3 pb-6 transition-all">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 rounded-lg"
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
