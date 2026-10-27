import React from 'react';
import { EXPERIENCE_EDUCATION } from '@/data/portfolioData';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function ExperienceSection() {
  const { experience, education, certifications } = EXPERIENCE_EDUCATION;

  return (
    <section id="experience" className="py-20 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-700 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Startup leadership, academic curriculum, and data analytics job simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-amber-600" />
              <span>Professional Experience</span>
            </h3>

            {experience.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel relative overflow-hidden shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-slate-900">
                    {exp.role} ·{' '}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 hover:underline inline-flex items-center space-x-1"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </h4>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-500 mb-4">
                  {exp.location}
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-slate-600 flex items-start space-x-2 leading-relaxed">
                      <span className="text-amber-600 font-bold mt-0.5">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Certifications Card */}
            <div className="p-6 rounded-2xl glass-panel shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2 mb-3">
                <Award className="w-4 h-4 text-sky-700" />
                <span>Simulations &amp; Certifications</span>
              </h3>
              {certifications.map((cert, cIdx) => (
                <div key={cIdx} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{cert.title}</span>
                    <span className="text-xs font-mono text-slate-500">{cert.date}</span>
                  </div>
                  <div className="text-xs font-mono font-medium text-sky-700">{cert.issuer}</div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-sky-700" />
              <span>Academic Background</span>
            </h3>

            <div className="p-6 rounded-2xl glass-panel space-y-4 shadow-xs">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-sky-50 text-sky-800 border border-sky-200">
                  UNDERGRADUATE DEGREE
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">
                  {education.degree}
                </h4>
                <div className="text-sm text-slate-700 mt-0.5">
                  {education.institution}
                </div>
                <div className="text-xs font-mono font-semibold text-amber-700 mt-1">
                  {education.period} · {education.location}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-mono font-semibold text-slate-500 mb-2 uppercase tracking-wider">
                  Relevant Rigorous Coursework
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
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
