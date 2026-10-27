import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

export default function ContactSection() {
  const mailtoSubject = encodeURIComponent("AI/ML Internship Inquiry — [Company Name]");
  const mailtoBody = encodeURIComponent("Hi Pankaj,\n\nI reviewed your AI/ML portfolio and would love to discuss an internship opportunity at...\n\nBest regards,\n");
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-700 mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Open to AI Engineer, Machine Learning, and Generative AI internship discussions, technical collaborations, and research inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Direct Email Card */}
          <div className="md:col-span-7 p-8 rounded-3xl glass-panel relative overflow-hidden space-y-6 shadow-xs">
            <div>
              <span className="text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider">
                DIRECT INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 mb-2">
                Start a Conversation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Feel free to reach out directly via email for internship opportunities, technical deep-dives on my projects, or questions regarding my research and implementations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Primary Email</div>
                  <div className="text-sm font-mono text-slate-900 font-semibold">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <a
                href={mailtoUrl}
                className="p-2 text-slate-400 hover:text-amber-700 transition-colors"
                title="Send email"
                aria-label="Send email"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <a
              href={mailtoUrl}
              className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md shadow-amber-500/25 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Email Message</span>
            </a>

            <div className="flex items-center space-x-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Based in {PERSONAL_INFO.location} · Open to Remote &amp; On-Site Internships</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="md:col-span-5 space-y-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group block shadow-xs hover:border-amber-400"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:text-slate-900 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    @Pankaj-Jhajhria
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group block shadow-xs hover:border-sky-400"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-sky-50 text-sky-700 group-hover:text-sky-800 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    /in/pankaj-jhajhria
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group block shadow-xs hover:border-amber-400"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-slate-100 text-slate-700 group-hover:text-slate-900 transition-colors">
                  <span className="font-bold text-base">𝕏</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    X (Twitter)
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    @PkFlamer
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
