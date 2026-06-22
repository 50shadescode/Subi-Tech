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
      tag: "Core Architecture",
      title: "Autonomous Agentic Workflows",
      desc: "We build rule-driven, multi-agent systems and state machines that automate complex operational loops. Moving beyond basic API wrappers into intelligent business infrastructure.",
      icon: (
        <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: 2,
      size: "md:col-span-1",
      tag: "Pipelines",
      title: "Data & ML Engineering",
      desc: "Engineering automated ingestion layers, custom scrapers, and reliable vector data streams to feed models production-grade fuel safely.",
      icon: (
        <svg className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      id: 3,
      size: "md:col-span-1",
      tag: "Product Delivery",
      title: "Full-Stack AI Engineering",
      desc: "Delivering complete end-to-end applications. We bridge the gap by anchoring complex model behavior inside high-performance web/mobile frameworks.",
      icon: (
        <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 4,
      size: "md:col-span-2",
      tag: "Scale & Integrity",
      title: "Production MLOps & Deployment",
      desc: "Containerizing workflows with Docker, managing latency, and monitoring model degradation under high real-world client volume to ensure systems remain fast and secure.",
      icon: (
        <svg className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Capabilities</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3">
          Building for the Future. <br />
          <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Intelligent Systems that Scale.
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
                
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  {item.tag}
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}