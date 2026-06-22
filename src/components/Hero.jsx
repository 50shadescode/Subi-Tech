"use client";
import React, { useState, useEffect } from 'react';

function Hero() {
  // Array of live-simulated pipeline processes to prove automated execution depth
  const logSequence = [
    { text: "$ python3 -m suby_tech.core.agent_orchestrator", color: "text-emerald-400 font-bold" },
    { text: "> [INIT] Booting multi-agent swarm clusters...", color: "text-slate-500" },
    { text: "> [DATA] Pulling production database logs & transactional nodes... SUCCESS", color: "text-slate-300" },
    { text: "> [MLOPS] Syncing contextual vector memory layers...", color: "text-slate-300" },
    { text: "> [INTEGRATION] Webhook listeners active on regional settlement APIs...", color: "text-cyan-400" },
    { text: "> [STATUS] Systems optimized. Enterprise architecture secure and ready to scale.", color: "text-emerald-400 font-semibold" }
  ];

  const [visibleLogs, setVisibleLogs] = useState([]);

  useEffect(() => {
    setVisibleLogs([logSequence[0]]);
    const timers = logSequence.slice(1).map((log, index) => {
      return setTimeout(() => {
        setVisibleLogs(prev => [...prev, log]);
      }, (index + 1) * 900);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  // Structural hard trust metrics row data matrix (Fulfills Section 1 of Audit Blueprint)
  const trustMetrics = [
    { value: "5+", label: "Production Systems Delivered" },
    { value: "2–4 Weeks", label: "MVP Delivery Framework" },
    { value: "End-to-End", label: "Development Ownership" },
    { value: "Unified", label: "Software • Data • AI Systems" }
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-900 bg-[#030712] pt-20 pb-16 lg:pt-28 lg:pb-24"
    >
      {/* Cinematic Top-Center Radial Spotlight Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="absolute top-0 h-[600px] w-full max-w-7xl bg-gradient-to-b from-emerald-500/10 via-indigo-500/5 to-transparent blur-[120px]" />
      </div>

      {/* Main Centered Container */}
      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        
        {/* Modern Minimalist Pill Badge / Small Trust Line */}
        <div className="mx-auto inline-flex items-center space-x-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-8">
          <span>Software Engineering</span>
          <span className="text-emerald-500/30">•</span>
          <span>AI Automation</span>
          <span className="text-emerald-500/30">•</span>
          <span>Data Science</span>
          <span className="text-emerald-500/30">•</span>
          <span>Data Analytics</span>
        </div>

        {/* Global Technology Studio Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
          Building Intelligent Systems <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-500 bg-clip-text text-transparent">
            For Modern Organizations
          </span>
        </h1>

        {/* Studio-Grade Value-Based Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mt-6 mb-10">
          Suby Tech designs software platforms, AI automation, and data systems that help 
          organizations operate smarter, move faster, and scale with confidence.
        </p>

        {/* Dual Premium Studio Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a
            href="https://wa.me/254726063889"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all duration-200"
          >
            Start a Project
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/50 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-900 hover:border-slate-700 transition-all duration-200"
          >
            View Selected Work
          </a>
        </div>

        {/* Audit-Compliant Above-The-Fold Hard Trust Metrics Grid (Section 1) */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-px bg-slate-900/30 border border-slate-900 rounded-2xl overflow-hidden p-2 md:p-0 backdrop-blur-sm">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="bg-[#030712] p-6 text-center flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-black text-white tracking-tight block">
                {metric.value}
              </span>
              <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider mt-1.5 block">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle Low-Hype Footnote Accent */}
        <p className="text-xs text-slate-500 mt-8 italic max-w-2xl mx-auto">
          We turn complex business challenges into scalable software, data, and automation systems that improve efficiency, accelerate growth, and deliver measurable results.
        </p>

        {/* Elite Animated System Simulation Panel */}
        <div className="mt-12 text-left relative rounded-2xl border border-slate-800/80 bg-slate-950/40 p-2 shadow-2xl shadow-indigo-500/5 backdrop-blur-sm overflow-hidden group max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          
          {/* Terminal Top Window Deck */}
          <div className="flex items-center justify-between border-b border-slate-900 px-4 py-3 bg-slate-950/80">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-slate-800" />
              <div className="h-3 w-3 rounded-full bg-slate-800" />
              <div className="h-3 w-3 rounded-full bg-slate-800" />
            </div>
            <span className="text-xs font-mono text-slate-500 select-none">suby_tech_agent_pipeline_v2.py</span>
            <div className="w-12" />
          </div>

          {/* Interactive Shell Screen Box */}
          <div className="bg-[#040814] p-6 font-mono text-xs sm:text-sm min-h-[190px] rounded-b-xl space-y-2 select-none">
            {visibleLogs.map((log, idx) => (
              <p key={idx} className={`${log.color} transition-all duration-300 animate-fadeIn`}>
                {log.text}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;