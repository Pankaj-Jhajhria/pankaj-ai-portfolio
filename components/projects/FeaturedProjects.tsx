import React from 'react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { ExternalLink, CheckCircle2, BarChart2, ShieldCheck, Flame, GitFork } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-24 relative border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-700 mb-2">
            <Flame className="w-3.5 h-3.5" />
            <span>Portfolio Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Featured AI &amp; Machine Learning Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Substantial implementations with reproducible source code, verified benchmark logs, and deployed interfaces.
          </p>
        </div>

        {/* Featured Projects Cards Stack */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/60 group"
              >
                {/* Subtle top edge gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500/80 via-amber-600/60 to-sky-600/80" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Project Overview & Core Implementation */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Category & Status */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wide bg-amber-50 text-amber-800 border border-amber-200">
                        {project.category}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wide ${
                        project.status === 'Live Deployed'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-sky-50 text-sky-800 border border-sky-200'
                      }`}>
                        ● {project.status}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-600 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Problem Statement */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-xs font-mono font-semibold text-amber-800 mb-1 uppercase tracking-wider">
                        PROBLEM ADDRESSED
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Implementation & Engineering Contribution */}
                    <div>
                      <div className="text-xs font-mono font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                        IMPLEMENTATION &amp; TECHNICAL ARCHITECTURE
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {project.implementation}
                      </p>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-amber-500 shadow-xs transition-all"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Inspect Repository</span>
                      </a>

                      {project.modelRepoUrl && (
                        <a
                          href={project.modelRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all"
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
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-sm shadow-amber-500/25 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Launch Live App</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Quantitative Verified Metrics Dashboard */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-4 h-full">
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-sky-800 uppercase tracking-wider">
                          <BarChart2 className="w-4 h-4" />
                          <span>Verified Evaluation Metrics</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">TEST / SPLIT LOGS</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-center"
                          >
                            <span className="text-lg font-bold font-mono text-amber-700 tracking-tight">
                              {metric.value}
                            </span>
                            <span className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
