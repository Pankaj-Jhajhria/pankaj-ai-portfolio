import React from 'react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { ExternalLink, CheckCircle2, BarChart2, ShieldCheck, Flame, GitFork } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 relative border-t border-[#e1ebf2] bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#d97706] mb-2 font-bold">
            <Flame className="w-3.5 h-3.5" />
            <span>Portfolio Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            Featured AI &amp; Machine Learning Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Substantial implementations with reproducible source code, verified benchmark logs, and deployed interfaces.
          </p>
        </div>

        {/* Featured Projects Cards Stack */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-[#e1ebf2] p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300 hover:border-[#66c4ff] hover:shadow-xl hover:shadow-[#66c4ff]/10 group"
              >
                {/* California Coastal Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#FFC067] via-[#66F4FF] to-[#66C4FF]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Overview & Core Implementation */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Category & Status Pill Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#FFC067]/15 text-[#b86200] border border-[#FFC067]/40">
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide ${
                        project.status === 'Live Deployed'
                          ? 'bg-[#66F4FF]/20 text-[#007A87] border border-[#66F4FF]/60'
                          : 'bg-[#66C4FF]/15 text-[#006BB8] border border-[#66C4FF]/40'
                      }`}>
                        ● {project.status}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e2e] group-hover:text-[#0284c7] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#5a7385] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <div className="p-4 rounded-2xl bg-[#fff9f0] border border-[#ffe1b5]">
                      <div className="text-xs font-mono font-bold text-[#b86200] mb-1 uppercase tracking-wider">
                        PROBLEM ADDRESSED
                      </div>
                      <p className="text-xs sm:text-sm text-[#0f1e2e] leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Implementation & Engineering Contribution */}
                    <div>
                      <div className="text-xs font-mono font-bold text-[#7d99aa] mb-1.5 uppercase tracking-wider">
                        IMPLEMENTATION &amp; TECHNICAL ARCHITECTURE
                      </div>
                      <p className="text-sm text-[#5a7385] leading-relaxed">
                        {project.implementation}
                      </p>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-[#5a7385]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[#f0f8ff] text-[#006bb8] border border-[#d0e7f9]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links (Clean Pill Buttons) */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0f1e2e] bg-white hover:bg-[#f8fafc] border border-[#7d99aa]/40 hover:border-[#66c4ff] shadow-xs transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Inspect Repository</span>
                      </a>

                      {project.modelRepoUrl && (
                        <a
                          href={project.modelRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#5a7385] hover:text-[#0f1e2e] bg-white hover:bg-[#f8fafc] border border-[#7d99aa]/30 shadow-xs transition-all"
                        >
                          <GitFork className="w-3.5 h-3.5" />
                          <span>Model Training Repo</span>
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#0f1e2e] bg-gradient-to-r from-[#FFC067] via-[#FFD28E] to-[#FFC067] hover:from-[#ffb44d] hover:to-[#ffa834] shadow-md shadow-[#FFC067]/30 border border-[#FFC067] transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Launch Live App</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Quantitative Verified Metrics Dashboard */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4 h-full">
                    <div className="p-6 rounded-3xl bg-[#f0f8ff]/70 border border-[#d0e7f9] shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#d0e7f9]">
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#007a87] uppercase tracking-wider">
                          <BarChart2 className="w-4 h-4" />
                          <span>Verified Evaluation Metrics</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#7d99aa] font-bold">TEST / SPLIT LOGS</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-white border border-[#d0e7f9] shadow-xs flex flex-col justify-center"
                          >
                            <span className="text-lg font-extrabold font-mono text-[#d97706] tracking-tight">
                              {metric.value}
                            </span>
                            <span className="text-[11px] text-[#5a7385] mt-0.5 leading-snug font-medium">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[11px] text-[#5a7385] pt-2 border-t border-[#d0e7f9] flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#007a87] shrink-0" />
                        <span>All numbers verified against actual test logs &amp; benchmark reports.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
