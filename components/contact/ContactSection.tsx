import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

export default function ContactSection() {
  const mailtoSubject = encodeURIComponent("AI/ML Internship Inquiry — [Company Name]");
  const mailtoBody = encodeURIComponent("Hi Pankaj,\n\nI reviewed your AI/ML portfolio and would love to discuss an internship opportunity at...\n\nBest regards,\n");
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section id="contact" className="py-24 relative bg-[#f8fbfc] border-t border-[#e1ebf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#0284c7] mb-2 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Open to AI Engineer, Machine Learning, and Generative AI internship discussions, technical collaborations, and research inquiries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Direct Email Card */}
          <div className="md:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#e1ebf2] relative overflow-hidden space-y-6 shadow-xs hover:border-[#66c4ff] transition-all">
            <div>
              <span className="text-xs font-mono font-bold text-[#d97706] uppercase tracking-wider">
                DIRECT INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f1e2e] mt-1 mb-2">
                Start a Conversation
              </h3>
              <p className="text-sm text-[#5a7385] leading-relaxed">
                Feel free to reach out directly via email for internship opportunities, technical deep-dives on my projects, or questions regarding my research and implementations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f0f8ff] border border-[#d0e7f9] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-[#66F4FF]/30 text-[#007a87]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#7d99aa] font-semibold">Primary Email</div>
                  <div className="text-sm font-mono text-[#0f1e2e] font-bold">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <a
                href={mailtoUrl}
                className="p-2 text-[#7d99aa] hover:text-[#0284c7] transition-colors"
                title="Send email"
                aria-label="Send email"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            <a
              href={mailtoUrl}
              className="w-full inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#0f1e2e] bg-gradient-to-r from-[#FFC067] via-[#FFD28E] to-[#FFC067] hover:from-[#ffb44d] hover:to-[#ffa834] shadow-md shadow-[#FFC067]/30 border border-[#FFC067] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Email Message</span>
            </a>

            <div className="flex items-center space-x-2 text-xs text-[#7d99aa] pt-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Based in {PERSONAL_INFO.location} · Open to Remote &amp; On-Site Internships</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="md:col-span-5 space-y-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-white border border-[#e1ebf2] flex items-center justify-between group block shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#f0f8ff] text-[#006bb8] group-hover:text-[#0284c7] transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f1e2e] group-hover:text-[#0284c7] transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs text-[#7d99aa] font-mono">
                    @Pankaj-Jhajhria
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7d99aa] group-hover:text-[#0284c7] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-white border border-[#e1ebf2] flex items-center justify-between group block shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#66F4FF]/20 text-[#007a87] group-hover:text-[#007a87] transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f1e2e] group-hover:text-[#0284c7] transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-[#7d99aa] font-mono">
                    /in/pankaj-jhajhria
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7d99aa] group-hover:text-[#0284c7] transition-colors" />
            </a>

            <a
              href={PERSONAL_INFO.x}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-white border border-[#e1ebf2] flex items-center justify-between group block shadow-xs hover:border-[#FFC067] hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-2xl bg-[#fff9f0] text-[#d97706] group-hover:text-[#b86200] transition-colors">
                  <span className="font-bold text-base">𝕏</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f1e2e] group-hover:text-[#d97706] transition-colors">
                    X (Twitter)
                  </div>
                  <div className="text-xs text-[#7d99aa] font-mono">
                    @PkFlamer
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#7d99aa] group-hover:text-[#d97706] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
