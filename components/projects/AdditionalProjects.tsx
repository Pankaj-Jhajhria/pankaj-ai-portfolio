import React from 'react';
import { ADDITIONAL_PROJECTS } from '@/data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export default function AdditionalProjects() {
  return (
    <section id="all-projects" className="py-20 relative bg-[#f8fbfc] border-t border-[#e1ebf2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#0284c7] mb-2 font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Exploratory &amp; Domain Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            Additional Projects &amp; Prototypes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Sequence modeling, competitive ML pipelines, computer vision prototypes, and algorithm implementations.
          </p>
        </div>

        {/* Grid of Additional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADDITIONAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-7 rounded-3xl bg-white border border-[#e1ebf2] flex flex-col justify-between group shadow-xs hover:border-[#66c4ff] hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#f0f8ff] text-[#006bb8] border border-[#d0e7f9]">
                    {project.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7d99aa] hover:text-[#0f1e2e] transition-colors p-1"
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
                        className="text-[#d97706] hover:text-[#b86200] transition-colors p-1"
                        title="Live Application"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0f1e2e] mb-2 group-hover:text-[#0284c7] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5a7385] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#e1ebf2] flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-full bg-[#f0f8ff] text-[#006bb8] border border-[#d0e7f9]"
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
