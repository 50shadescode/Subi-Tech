"use client";
import React, { useState } from "react";

export default function StudioDNA() {
  const [activeTab, setActiveTab] = useState("ai");

  // Grouped tech stacks mirroring your true production suite
  const techStacks = {
    ai: {
      label: "AI & ML Infrastructure",
      tags: ["Python", "FastAPI", "NLP Core", "Large Language Models", "Agentic Frameworks", "Vector Databases", "LlamaIndex / LangChain"],
    },
    backend: {
      label: "Systems & Backend",
      tags: ["Node.js", "Express.js", "MongoDB", "Django", "REST APIs", "Docker", "M-Pesa / Financial Webhooks"],
    },
    frontend: {
      label: "Frontend & Mobile",
      tags: ["Next.js", "React", "Tailwind CSS", "Flutter", "TypeScript", "State Management", "Chrome DevTools Optimization"],
    },
  };

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 border-t border-slate-900">
      
      {/* Part 1: Technologies We Master Matrix */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Stack</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-2">
            Technologies We Master
          </h2>
          <p className="text-sm text-slate-500 mt-2">Grouped by architectural deployment layer.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
          {Object.keys(techStacks).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 outline-none border ${
                activeTab === key
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                  : "bg-slate-950/40 border-slate-900 text-slate-500 hover:text-slate-300 hover:border-slate-800"
              }`}
            >
              {techStacks[key].label}
            </button>
          ))}
        </div>

        {/* Dynamic Badges Array */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto min-h-[80px] p-6 bg-slate-950/10 border border-slate-900/60 rounded-2xl backdrop-blur-sm">
          {techStacks[activeTab].tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-950 text-slate-300 border border-slate-800/60 shadow-sm transition-all duration-200 hover:border-slate-700 hover:text-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 mr-2 group-hover:bg-emerald-400" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Part 2: Authenticated Leadership Framework */}
      <div>
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mt-2">
            Our Studio Ecosystem
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            No corporate fluff placeholders. Real engineers shipping verified production architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: Founder Core Profile */}
          <div className="relative rounded-2xl border border-slate-900 bg-slate-950/20 p-8 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-xs font-mono font-bold text-slate-800 select-none">
              FOUNDER // CORE
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-emerald-400 font-mono block mb-1">
                  Director / Founder
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  Martin Odhiambo Otieno
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Full-stack systems and AI automation architect. Specializes in building modern product applications, complex multi-agent frameworks, and integrating regional data networks into shippable platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Partners Core Profile */}
          <div className="relative rounded-2xl border border-slate-900 bg-slate-950/20 p-8 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-xs font-mono font-bold text-slate-800 select-none">
              PARTNER // INFRA
            </div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-indigo-400 font-mono block mb-1">
                  Systems Collaboration
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  Engineering Network
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Backed by dedicated engineering partners specializing in distributed cloud databases, robust MLOps pipelining, and high-performance server side infrastructure to ensure systems run reliably at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}