import React from 'react';
import { EXPERIENCE_EDUCATION } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function ExperienceSection() {
  const { experience, education, certifications } = EXPERIENCE_EDUCATION;

  return (
    <section id="experience" className="py-20 relative bg-[#f8fbfc] border-t border-[#e1ebf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#d97706] mb-2 font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Startup leadership, academic curriculum, and data analytics job simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-extrabold text-[#0f1e2e] flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-[#d97706]" />
              <span>Professional Experience</span>
            </h3>

            {experience.map((exp, idx) => (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-[#e1ebf2] relative overflow-hidden shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-[#0f1e2e]">
                    {exp.role} ·{' '}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d97706] hover:text-[#b86200] hover:underline inline-flex items-center space-x-1"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#7d99aa]">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#7d99aa] mb-4">
                  {exp.location}
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-[#5a7385] flex items-start space-x-2 leading-relaxed">
                      <span className="text-[#d97706] font-bold mt-0.5">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Certifications Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#e1ebf2] shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all">
              <h3 className="text-base font-extrabold text-[#0f1e2e] flex items-center space-x-2 mb-3">
                <Award className="w-4 h-4 text-[#0284c7]" />
                <span>Simulations &amp; Certifications</span>
              </h3>
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#0f1e2e]">{cert.title}</span>
                    <span className="text-xs font-mono text-[#7d99aa]">{cert.date}</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-[#0284c7]">{cert.issuer}</div>
                  <p className="text-xs text-[#5a7385] leading-relaxed pt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-extrabold text-[#0f1e2e] flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-[#0284c7]" />
              <span>Academic Background</span>
            </h3>

            <div className="p-7 rounded-3xl bg-white border border-[#e1ebf2] space-y-4 shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all">
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#66F4FF]/20 text-[#007a87] border border-[#66F4FF]/50">
                  UNDERGRADUATE DEGREE
                </span>
                <h4 className="text-lg font-extrabold text-[#0f1e2e] mt-2">
                  {education.degree}
                </h4>
                <div className="text-sm text-[#5a7385] font-semibold mt-0.5">
                  {education.institution}
                </div>
                <div className="text-xs font-mono font-bold text-[#d97706] mt-1">
                  {education.period} · {education.location}
                </div>
              </div>

              <div className="pt-4 border-t border-[#e1ebf2]">
                <div className="text-xs font-mono font-bold text-[#7d99aa] mb-2 uppercase tracking-wider">
                  Relevant Rigorous Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-[#f0f8ff] text-[#006bb8] border border-[#d0e7f9]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
