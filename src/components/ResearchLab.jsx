"use client";
import React from "react";

export default function ResearchLab() {
  const experiments = [
    {
      matrix: "CORE // AGENTIC ENGINE",
      title: "Context-Aware Memory Loops",
      focus: "Developing low-latency state hydration pipelines to sustain dense conversational context profiles across asynchronous multi-agent network execution channels.",
    },
    {
      matrix: "DATA // INTEGRITY RUNTIME",
      title: "Deterministic Web-Scraping Hubs",
      focus: "Configuring robust concurrency algorithms to execute high-volume data harvesting passes without hitting IP throttling locks or memory degradation spikes.",
    },
    {
      matrix: "MLOPS // ARCHITECTURE",
      title: "Local LLM Fine-Tuning Benchmarks",
      focus: "Evaluating local open-weight model parameter sets against high-performance API clusters to achieve optimal processing cost margins for small organizations.",
    }
  ];

  return (
    <section id="research" className="py-24 border-t border-zinc-900 bg-[#030712] relative overflow-hidden">
      {/* Background radial accent glow to tie with the engineering terminal style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">// ACTIVE R&D INITIATIVES</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
            The Suby Tech <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
              Research Lab
            </span>
          </h2>
          <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
            We continuously build, break, and validate internal technical frameworks. This active experimentation allows us to ship modern, production-ready systems with predictable execution margins.
          </p>
        </div>

        {/* 3-Column Experimental Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((lab, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-zinc-900/60 bg-zinc-950/20 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 relative group"
            >
              <div>
                {/* Meta Matrix Tag */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-600 block mb-4 group-hover:text-emerald-500/60 transition-colors">
                  {lab.matrix}
                </span>
                
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {lab.title}
                </h3>
                
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {lab.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}