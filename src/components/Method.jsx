"use client";
import React from "react";

const steps = [
  {
    step: "01",
    title: "Understand",
    description: "Identify core operational challenges. We break down your organizational bottlenecks, workflow redundancies, and financial overhead before configuring any codebase structure.",
    icon: (
      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Architect",
    description: "Design the optimal technical solution. We model custom multi-agent system state boundaries, data ingestion flows, and secure transaction pipelines engineered specifically for your balance sheets.",
    icon: (
      <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Build",
    description: "Develop highly scalable systems. Our studio translates architectural briefs into clean source code using deterministic frameworks built to absorb intense processing stress safely.",
    icon: (
      <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Deploy",
    description: "Launch and integrate seamlessly. We handle the end-to-end orchestration, embedding production-ready infrastructure, secure data streams, and localized transaction webhooks smoothly.",
    icon: (
      <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Optimize",
    description: "Monitor, improve, and scale. We continuously watch resource degradation, track workflow completion latencies, and optimize parameters to preserve performance as your organization grows.",
    icon: (
      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Method() {
  return (
    <section id="method" className="py-24 border-b border-zinc-900 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">// OPERATIONAL METHODOLOGY</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3 mb-4">
            A Framework Engineered for Business Outcomes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our systematic process eliminates predictable agency detours, aligns engineering resources directly with your operational goals, and ships measurable value at every technical layer.
          </p>
        </div>

        {/* Audit-Compliant Structural Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-800 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Meta Header Information */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 p-2.5">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 font-bold">
                    STEP // {step.step}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contextual Action Anchor (Fulfills Section 11 Framework) */}
        <div className="pt-6 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-zinc-500 text-center sm:text-left">
            Eliminate operational assumptions. Build with technical confidence.
          </p>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center text-xs font-mono font-bold bg-zinc-950 hover:bg-zinc-900 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 px-6 py-3 rounded-xl transition-all duration-200"
          >
            Schedule A Discovery Call &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}