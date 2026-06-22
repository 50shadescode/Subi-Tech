"use client";
import React, { useState } from "react";

export default function BentoGrid() {
  // Mouse position state tracking for the global spotlight border glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, cardId) => {
    const card = document.getElementById(`bento-card-${cardId}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const capabilities = [
    {
      id: 1,
      size: "md:col-span-2",
      tag: "CORE ARCHITECTURE",
      title: "Autonomous Agentic Workflows",
      challenge: "Complex operational bottlenecks and repetitive administrative decision-making loops that drain team bandwidth.",
      solution: "Rule-driven, multi-agent LLM systems and robust state machines configured to orchestrate end-to-end background operations autonomously.",
      outcome: "Slashes manual processing overhead and drives immediate operational speed without scaling staff headcount.",
      icon: (
        <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 2,
      size: "md:col-span-1",
      tag: "DATA PIPELINES",
      title: "Data & ML Engineering",
      challenge: "Noisy transaction logs, unstructured web information, and fragmented databases that break reporting pipelines.",
      solution: "Automated ingestion pipelines, deterministic data scrapers, and highly reliable vector indexing data streams.",
      outcome: "Turns raw database traffic into safe, production-grade fuel for business intelligence and analytics models.",
      icon: (
        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: 3,
      size: "md:col-span-1",
      tag: "PRODUCT DELIVERY",
      title: "Full-Stack AI Engineering",
      challenge: "Brittle AI system experiments and basic prototype tools failing under high concurrent user checkout volume.",
      solution: "Anchoring complex model behaviors into safe, production-grade web frameworks backed by robust custom APIs.",
      outcome: "Delivers resilient, fast, and end-to-end user applications built to protect and process core transaction revenue.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 4,
      size: "md:col-span-2",
      tag: "SCALE & INTEGRITY",
      title: "Production MLOps & Deployment",
      challenge: "High system latency, server downtime risks, and model behavioral drift hidden beneath heavy transaction flow.",
      solution: "Containerizing microservices with Docker, structural cloud resource monitoring, and transaction fail-safes.",
      outcome: "Guarantees system speed, data consistency, and absolute platform availability under high enterprise user loads.",
      icon: (
        <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 relative">
      {/* Updated Header Component */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">// SOLUTIONS WE DELIVER</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
          Building for Business Outcomes. <br />
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Intelligent Infrastructure that Grows.
          </span>
        </h2>
      </div>

      {/* Grid wrapper handling the multi-weight layout asymmetry */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((item) => (
          <div
            key={item.id}
            id={`bento-card-${item.id}`}
            onMouseMove={(e) => handleMouseMove(e, item.id)}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`relative rounded-2xl border border-slate-900 bg-slate-950/20 p-8 backdrop-blur-sm transition-all duration-300 overflow-hidden group ${item.size}`}
          >
            {/* Spotlight Border Glow Tracking Element */}
            {hoveredCard === item.id && (
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16,185,129,0.06), transparent 40%)`,
                }}
              />
            )}

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Clean Geometric SVG Micro-Icon Frame */}
                <div className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 p-3 mb-6">
                  {item.icon}
                </div>
                
                <span className="block text-[10px] font-mono font-bold tracking-wider text-slate-500 mb-2">
                  {item.tag}
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-5">
                  {item.title}
                </h3>
                
                {/* Audit Framework: Challenge -> Solution -> Outcome */}
                <div className="space-y-4 font-normal text-sm text-slate-400 leading-relaxed">
                  <p>
                    <strong className="block text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-0.5">The Challenge:</strong>
                    {item.challenge}
                  </p>
                  <p>
                    <strong className="block text-[10px] font-mono text-zinc-500 tracking-wider uppercase mb-0.5">Our Implementation:</strong>
                    {item.solution}
                  </p>
                  <p className="text-zinc-300">
                    <strong className="block text-[10px] font-mono text-emerald-400/90 tracking-wider uppercase mb-0.5">Business Impact:</strong>
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}