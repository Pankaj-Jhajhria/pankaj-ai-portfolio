import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GraduationCap, Code2, Compass, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative border-t border-[#e1ebf2] bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#008da5] mb-2 font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1e2e]">
            About Me &amp; How I Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5a7385]">
            Grounding AI systems in measurable benchmarks, reproducible data pipelines, and usable interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-[#5a7385] text-sm sm:text-base leading-relaxed">
            <div className="p-6 sm:p-7 rounded-3xl glass-panel relative overflow-hidden shadow-xs hover:border-[#66c4ff] transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC067]/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-lg font-bold text-[#0f1e2e] mb-3 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-[#d97706]" />
                <span>Academic &amp; Engineering Foundation</span>
              </h3>
              <p className="mb-4 text-[#5a7385]">
                I am a B.Tech student in <strong className="text-[#0f1e2e] font-semibold">Artificial Intelligence &amp; Data Science</strong> at the <strong className="text-[#0f1e2e] font-semibold">{PERSONAL_INFO.institution}</strong> ({PERSONAL_INFO.graduation}).
              </p>
              <p className="text-[#5a7385]">
                My approach to machine learning is empirical: I implement architectures to understand their mechanics, evaluate them on real-world datasets with severe skew, and report only what has been quantitatively measured. I care deeply about bridging the gap between raw research code and reproducible, interactive applications that others can use.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl glass-panel shadow-xs hover:border-[#66c4ff] transition-all">
              <h3 className="text-lg font-bold text-[#0f1e2e] mb-3 flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#0284c7]" />
                <span>Breadth with Practical Depth</span>
              </h3>
              <p className="text-[#5a7385]">
                My work spans multiple critical subfields: <strong className="text-[#0284c7] font-semibold">Generative AI &amp; RAG</strong> with citation verification and voice interaction; <strong className="text-[#d97706] font-semibold">high-throughput ML</strong> handling 5M+ records with DuckDB; and <strong className="text-[#d97706] font-semibold">multimodal deep learning</strong> fusing RGB and thermal sensor spectra in PyTorch. Alongside deep learning projects, I maintain structured problem-solving discipline in C++ and Data Structures.
              </p>
            </div>
          </div>

          {/* Right Column: Execution Principles */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-5 rounded-2xl bg-white border border-[#e1ebf2] border-l-4 border-l-[#FFC067] shadow-xs hover:shadow-md transition-all">
              <div className="text-xs font-mono font-bold text-[#d97706] mb-1">01 / PROBLEM SPECIFICATION</div>
              <h4 className="text-sm font-bold text-[#0f1e2e] mb-1">Define Clear Evaluation Objectives</h4>
              <p className="text-xs text-[#5a7385] leading-relaxed">
                Identify true bottlenecks (e.g., severe 92% background class imbalance, out-of-domain hallucinations) before choosing an architecture.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#e1ebf2] border-l-4 border-l-[#66C4FF] shadow-xs hover:shadow-md transition-all">
              <div className="text-xs font-mono font-bold text-[#0284c7] mb-1">02 / DATA ENGINEERING</div>
              <h4 className="text-sm font-bold text-[#0f1e2e] mb-1">Audited, Out-of-Core Pipelines</h4>
              <p className="text-xs text-[#5a7385] leading-relaxed">
                Inspect raw data distributions with SQL engines (DuckDB) and pandas; normalize features and audit for missing or inconsistent signals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#e1ebf2] border-l-4 border-l-[#FFC067] shadow-xs hover:shadow-md transition-all">
              <div className="text-xs font-mono font-bold text-[#d97706] mb-1">03 / QUANTITATIVE EVALUATION</div>
              <h4 className="text-sm font-bold text-[#0f1e2e] mb-1">Test Splits &amp; Failure Analysis</h4>
              <p className="text-xs text-[#5a7385] leading-relaxed">
                Measure Recall@k, MRR, Dice, and per-class confusion matrices on held-out test data. Never report training scores as test accuracy.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#e1ebf2] border-l-4 border-l-[#66C4FF] shadow-xs hover:shadow-md transition-all">
              <div className="text-xs font-mono font-bold text-[#0284c7] mb-1">04 / APPLICATION DELIVERY</div>
              <h4 className="text-sm font-bold text-[#0f1e2e] mb-1">Deployable, Tested Software</h4>
              <p className="text-xs text-[#5a7385] leading-relaxed">
                Package models with automated test suites (`pytest`), clean REST/WebSocket APIs, and interactive Streamlit web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
