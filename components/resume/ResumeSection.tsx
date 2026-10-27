import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { FileDown, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-50/60 via-slate-50 to-amber-50/40 border border-amber-200/80 shadow-xs relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>Curated &amp; ATS-Compliant</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
                Inspect or Download My Resume
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                A concise, high-density, one-page resume targeted for AI Engineer, Machine Learning Engineer, and Generative AI internship opportunities—featuring verified project metrics, grounded RAG architectures, and multimodal perception work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>One-Page ATS Standard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Grounded Project Metrics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Live &amp; Verified Hyperlinks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Pankaj_Jhajhria_AI_ML_Resume.pdf"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-sky-500 shadow-xs backdrop-blur-md transition-all"
              >
                <ExternalLink className="w-4 h-4 text-sky-700" />
                <span>View PDF in Browser</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
