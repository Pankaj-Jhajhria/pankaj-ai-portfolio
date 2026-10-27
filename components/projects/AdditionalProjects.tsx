import React from 'react';
import { ADDITIONAL_PROJECTS } from '@/data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export default function AdditionalProjects() {
  return (
    <section id="all-projects" className="py-20 relative bg-[#090b12]/50 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>Exploratory &amp; Domain Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
            Additional Projects &amp; Prototypes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Sequence modeling, competitive ML pipelines, computer vision prototypes, and algorithm implementations.
          </p>
        </div>

        {/* Grid of Additional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADDITIONAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.05] text-slate-400 border border-white/[0.08]">
                    {project.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        title="Repository"
                        aria-label={`${project.title} repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 transition-colors"
                        title="Live Application"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
