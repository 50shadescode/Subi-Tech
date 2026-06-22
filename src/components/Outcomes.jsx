"use client";
import React from "react";

export default function Outcomes() {
  // Audit-Compliant 4-Pillar Content Matrix (Fulfills Section 10 Blueprint)
  const corporateOutcomes = [
    {
      heading: "Business-First Thinking",
      body: "We begin with outcomes, not technology. We analyze your operational bottlenecks and financial overhead before writing a single line of code, ensuring every system delivers a measurable return on investment.",
    },
    {
      heading: "End-to-End Ownership",
      body: "From strategy to deployment. Our studio assumes absolute accountability for the complete lifecycle of your system, eliminating contractor friction and guaranteeing seamless execution.",
    },
    {
      heading: "Scalable Architecture",
      body: "Designed for long-term growth. We engineer high-performance platforms built on resilient, deterministic foundations that smoothly absorb massive concurrent transactional traffic as your operations expand.",
    },
    {
      heading: "Cross-Disciplinary Expertise",
      body: "Software, data, AI, and automation under one roof. We break down traditional technical silos to deliver unified digital ecosystems where your data pipelines and intelligent automation loops interact flawlessly.",
    },
  ];

  return (
    <section id="outcomes" className="py-24 border-b border-zinc-900 bg-[#030712] relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            // STRATEGIC ADVANTAGE
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
            Why Organizations Work <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              With Suby Tech
            </span>
          </h2>
        </div>

        {/* 2x2 Layout Matrix Grid (Resolves Section 10 Layout Balance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {corporateOutcomes.map((item, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm flex flex-col justify-between hover:border-zinc-800 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-zinc-600 block mb-4">
                  0{index + 1}.
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.heading}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section-Specific Contextual CTA (Fulfills Section 11 Framework) */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-xl border border-zinc-900 bg-zinc-950/40 gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide">
              Ready to map your business objectives to an engineered system?
            </h4>
            <p className="text-xs text-zinc-500 mt-1">
              Let's align your operational workflow with scalability.
            </p>
          </div>
          <a 
            href="#contact" 
            className="w-full sm:w-auto text-center text-xs font-mono font-bold bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-lg border border-zinc-800 transition-all duration-200 shrink-0"
          >
            See Our Work &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}