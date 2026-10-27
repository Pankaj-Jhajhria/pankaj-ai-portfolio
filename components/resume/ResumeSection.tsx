import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { FileDown, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative border-t border-[#e1ebf2] bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#fff9f0] via-white to-[#f0f9ff] border border-[#ffe1b5] shadow-xs relative overflow-hidden">
          {/* Subtle coastal glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC067]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#66F4FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#d97706] font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>Curated &amp; ATS-Compliant</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f1e2e]">
                Inspect or Download My Resume
              </h2>

              <p className="text-sm sm:text-base text-[#5a7385] leading-relaxed max-w-2xl">
                A concise, high-density, one-page resume targeted for AI Engineer, Machine Learning Engineer, and Generative AI internship opportunities—featuring verified project metrics, grounded RAG architectures, and multimodal perception work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-[#0f1e2e]">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>One-Page ATS Standard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <span>Grounded Project Metrics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>Live &amp; Verified Hyperlinks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#0f1e2e] bg-gradient-to-r from-[#FFC067] via-[#FFD28E] to-[#FFC067] hover:from-[#ffb44d] hover:to-[#ffa834] shadow-md shadow-[#FFC067]/30 border border-[#FFC067] transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#0f1e2e] bg-white hover:bg-[#f8fafc] border border-[#7d99aa]/40 hover:border-[#66c4ff] shadow-xs backdrop-blur-md transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#0284c7]" />
                <span>View PDF in Browser</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
