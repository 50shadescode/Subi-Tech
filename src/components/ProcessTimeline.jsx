"use client";
import React, { useState } from "react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "We deep-dive into your operational bottleneck or product layout. No code is written until we isolate your key success levers and clarify exact data constraints.",
      bullets: ["Business Process Auditing", "Context-Window Feasibility", "Goal Mapping Testing"],
    },
    {
      num: "02",
      title: "Architecture & Design",
      desc: "Our studio constructs robust system topologies. We map data flows, plan state-machine parameters, and plan secure schema bindings before initializing the build.",
      bullets: ["Multi-Agent Orchestration Schemes", "Secure API Mapping", "Vector Store Selection"],
    },
    {
      num: "03",
      title: "Development & Integration",
      desc: "Engineering high-performance microservices. We build out Python backends, hook up Next.js/Flutter application panels, and inject production-ready models.",
      bullets: ["FastAPI Service Layering", "Full-Stack System Wireframe", "Webhook & Gateway Implementation"],
    },
    {
      num: "04",
      title: "Deployment & Launch",
      desc: "We pack services inside clean runtime containers, run rigorous latency validation suites, and move your architecture out onto live cloud environments securely.",
      bullets: ["Docker Containerization", "Automated Load Testing", "Live Deployment Scrutiny"],
    },
    {
      num: "05",
      title: "Support & Evolution",
      desc: "Continuous system verification. We actively look for context drift, optimize system call costs, and scale database structures as your actual data scale expands.",
      bullets: ["MLOps Pipeline Oversight", "System Latency Polishing", "Database Scale Adjustments"],
    },
  ];

  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-900">
      <div className="text-center mb-16">
        <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Methodology</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
          Our Engineering DNA
        </h2>
      </div>

      {/* Sleek Step Navigation Row */}
      <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-900 pb-6 mb-12">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`flex items-center space-x-3 pb-2 border-b-2 transition-all duration-200 outline-none ${
              activeStep === idx
                ? "border-emerald-500 text-white font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <span className={`text-xs font-mono px-2 py-0.5 rounded ${
              activeStep === idx ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-900 text-slate-500"
            }`}>
              {step.num}
            </span>
            <span className="text-sm hidden sm:inline">{step.title.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Display Panel for the Active Phase */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start bg-slate-950/20 border border-slate-900 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-8xl font-black text-slate-900/40 font-mono select-none pointer-events-none">
          {steps[activeStep].num}
        </div>

        {/* Left Column: Context Text */}
        <div className="md:col-span-3 space-y-4">
          <span className="text-xs font-bold tracking-wider uppercase text-emerald-400 font-mono">
            Phase {steps[activeStep].num}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {steps[activeStep].title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Right Column: Execution Checkpoints */}
        <div className="md:col-span-2 space-y-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-900 md:pl-8">
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Execution Checkpoints
          </span>
          {steps[activeStep].bullets.map((bullet, bIdx) => (
            <div key={bIdx} className="flex items-center space-x-2.5 text-sm text-slate-300">
              <svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}