"use client";
import React, { useState } from "react";

export default function StudioDNA() {
  const [activeTab, setActiveTab] = useState("ai");

  // Grouped tech stacks structured with clear operational context
  const techStacks = {
    ai: {
      label: "AI & ML Infrastructure",
      context: "Engineered for autonomous decision-making, contextual search vector loops, and agent orchestration.",
      tags: ["Python", "FastAPI", "NLP Core", "Large Language Models", "Agentic Frameworks", "Vector Databases", "LlamaIndex / LangChain"],
    },
    backend: {
      label: "Systems & Backend",
      context: "High-throughput database nodes, secure financial pipelines, and containerized cloud runtimes.",
      tags: ["Node.js", "Express.js", "MongoDB", "Django", "REST APIs", "Docker", "M-Pesa / Financial Webhooks"],
    },
    frontend: {
      label: "Frontend & Mobile",
      context: "Low-latency user client applications engineered for sub-second page performance and fluid interfaces.",
      tags: ["Next.js", "React", "Tailwind CSS", "Flutter", "TypeScript", "State Management", "Chrome DevTools Optimization"],
    },
  };

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-900">
      
      {/* Part 1: Technologies We Master Matrix */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">// TECHNICAL ARCHITECTURE</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">
            Technologies We Master
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            We don't collect buzzwords. We deploy industry-standard engineering tools mapped by architectural runtime layers.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 md:space-x-4 mb-6">
          {Object.keys(techStacks).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2.5 text-xs font-mono font-semibold rounded-xl transition-all duration-200 outline-none border ${
                activeTab === key
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                  : "bg-slate-950/40 border-slate-900 text-slate-500 hover:text-slate-300 hover:border-slate-800"
              }`}
            >
              {techStacks[key].label}
            </button>
          ))}
        </div>

        {/* Context Layer Subtitle */}
        <p className="text-center text-xs text-slate-500 font-mono italic mb-8 max-w-xl mx-auto">
          &rarr; {techStacks[activeTab].context}
        </p>

        {/* Dynamic Badges Array */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto min-h-[120px] p-6 bg-slate-950/40 border border-slate-900 rounded-2xl backdrop-blur-sm">
          {techStacks[activeTab].tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-slate-950 text-slate-300 border border-slate-900 shadow-sm transition-all duration-300 hover:border-slate-700 hover:text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mr-2" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Part 2: Leadership Ecosystem */}
      <div>
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">// LEADERSHIP & CAPACITY</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">
            Our Studio Ecosystem
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            No corporate fluff placeholders. Real engineers shipping verified production architectures at enterprise spec.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          {/* Card 1: Founder Core Profile */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-950/20 p-8 backdrop-blur-sm overflow-hidden min-h-[260px]">
            <div className="absolute top-0 right-0 p-6 text-[10px] font-mono font-bold text-slate-700 select-none tracking-wider">
              FOUNDER // CORE
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 font-mono block mb-1">
                  DIRECTOR // SYSTEMS ENGINEER
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  Martin Odhiambo Otieno
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Full-stack systems and AI automation architect. Specializes in building modern product applications, complex multi-agent frameworks, and integrating regional data networks into production-ready platforms that drive concrete business value.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Partners Core Profile */}
          <div className="relative flex flex-col justify-between rounded-2xl border border-slate-900 bg-slate-950/20 p-8 backdrop-blur-sm overflow-hidden min-h-[260px]">
            <div className="absolute top-0 right-0 p-6 text-[10px] font-mono font-bold text-slate-700 select-none tracking-wider">
              PARTNER // INFRASTRUCTURE
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-400 font-mono block mb-1">
                  BACKEND INFRASTRUCTURE LEAD
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  Evans Kipngeno Cheruiyot
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Directs server architecture, distributed cloud database configurations, and robust MLOps automation pipelines. Manages background systems integrity to ensure platform performance scales securely under heavy multi-tenant traffic loads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}