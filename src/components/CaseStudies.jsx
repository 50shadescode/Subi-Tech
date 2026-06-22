"use client";
import React from "react";

const caseStudies = [
  {
    company: "Elpis Wellness",
    tag: "HEALTH COMPLIANCE // REVENUE ENGINE",
    status: "Live Production ↗",
    isLive: true,
    url: "https://www.elpiswellness.co.ke/",
    headline: "High-Compliance Infrastructure & Automated Revenue Engine",
    challenge: "Fragmented onboarding systems and manual processing overhead slowing down service monetization loops.",
    approach: "Architected a secure content architecture leveraging a headless Sanity.io backend and structured automated background notification pipelines. Engineered customized transactional payment integrations directly into the service layer, linking booking triggers seamlessly with instant transaction verification APIs.",
    outcome: "Transformed a manual onboarding cycle into a fully automated, low-latency transaction engine that completely eliminates operational overhead and captures immediate revenue at the point of service selection.",
  },
  {
    company: "254 Convex Comm LTD",
    tag: "TECHNOLOGY-DRIVEN COMMERCE // B2B",
    status: "Live Production ↗",
    isLive: true,
    url: "https://254convexcomltd.co.ke/",
    headline: "Technology-Driven Commerce & Enterprise Procurement Engine",
    challenge: "Bidding friction, high-latency search parsing, and slow corporate procurement cycles stalling pipeline conversions.",
    approach: "Engineered a high-performance e-commerce architecture optimized for low-latency product indexing and secure data handling. Integrated customized, multi-tier payment pathways to handle instant regional financial settlements alongside an automated quotation pipeline designed to convert corporate procurement requests instantly.",
    outcome: "Transformed a traditional supply model into a modern, automated B2B partner ecosystem, eliminating manual bidding friction and accelerating the corporate sales cycle through instant quotes.",
  },
  {
    company: "Zuri-Connect",
    tag: "ALGORITHMIC MATCHING // ANTI-FRAUD",
    status: "Live Production ↗",
    isLive: true,
    url: "https://www.zuri-connect.com",
    headline: "High-Trust Matching Ecosystem & Anti-Fraud Identity Architecture",
    challenge: "Account spoofing, marketplace vulnerability windows, and high user friction across matchmaking loops.",
    approach: "Engineered an advanced, multi-variable matching algorithm coupled with a strict cryptographic identity-verification framework to systematically filter fraud patterns and optimize profile authenticity. Architected intentional routing logic optimized for scheduling high-impact connections.",
    outcome: "Delivered a premium, high-integrity platform that directly addresses critical marketplace vulnerabilities, minimizes user fatigue, and effectively eliminates scam vectors.",
  },
  {
    company: "PwanyStay",
    tag: "LOCALIZED VACATION TRUST // SGR TRAVEL",
    status: "In Development",
    isLive: false,
    headline: "High-Trust Coastal Stays & SGR Travel Integration",
    challenge: "Listing vulnerabilities and fragmented regional transit tracking causing synchronization drops for arriving travelers.",
    approach: "Developed a secure marketplace leveraging the MERN stack, featuring a strict property verification pipeline to completely eliminate listing fraud. Built smooth data-sync workflows to tie property stays directly to localized transport and SGR arrival timelines.",
    outcome: "Delivered a high-trust platform that guarantees guest safety and seamless convenience, allowing travelers to book verified stays and coordinate arrival transit without friction.",
  },
  {
    company: "KiliRide",
    tag: "TRANSIT LOGISTICS // RESERVATION ENGINE",
    status: "In Development",
    isLive: false,
    headline: "Transit Logistics Ecosystem & Reservation Engine",
    challenge: "Unoptimized regional fleet asset utilization rates and un-synchronized reservation state workflows.",
    approach: "High-performance calculation engines managing real-time rental matrices and secure reservation state workflows built to coordinate local commuter services smoothly.",
    outcome: "An automated logistics scheduling network that optimizes asset utilization and eliminates regional transit coordination friction across commuter lifecycles.",
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 border-b border-zinc-900 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Header Block */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            // PROVEN DEPLOYMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Systems Operating & Staging
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-2">
            Every engagement looks different, but the pattern is the same: clarify the operational problem, ship high-performance architecture fast, and secure concrete business value.
          </p>
        </div>

        {/* Dynamic Responsive Balanced Layout Grid (Fixes Section 5 Card Problem) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, index) => (
            <article
              key={index}
              className={`flex flex-col justify-between rounded-xl border border-zinc-900 bg-zinc-950/20 px-6 py-6 shadow-sm transition-all duration-300 hover:border-zinc-800 ${
                index === 0 || index === 4
                  ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-zinc-950/60 via-zinc-950/40 to-emerald-950/5"
                  : ""
              }`}
            >
              <div>
                {/* Meta Meta Labels */}
                <div className="flex justify-between items-center gap-4 mb-4">
                  <p className="text-xs font-mono font-bold tracking-wider text-emerald-400">
                    {cs.company}
                  </p>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    cs.isLive 
                      ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5' 
                      : 'border-amber-500/20 text-amber-400 bg-amber-500/5'
                  }`}>
                    {cs.status}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-6 text-white tracking-tight leading-snug">
                  {cs.headline}
                </h3>
                
                {/* Audit Architecture Text Stack */}
                <div className="space-y-4 mb-6 text-xs sm:text-sm">
                  <p className="text-zinc-400 leading-relaxed">
                    <strong className="block text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-1">// THE CHALLENGE</strong>
                    {cs.challenge}
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    <strong className="block text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-1">// OUR APPROACH</strong>
                    {cs.approach}
                  </p>
                </div>
              </div>

              {/* Action and Impact Footnote Box */}
              <div className="pt-4 border-t border-zinc-900 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-zinc-400 text-xs leading-relaxed max-w-2xl">
                  <strong className="text-emerald-400/80 font-mono text-[10px] uppercase tracking-wider block sm:inline sm:mr-1">// BUSINESS OUTCOME:</strong> 
                  {cs.outcome}
                </p>
                
                {cs.isLive ? (
                  <a 
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 transition-colors shrink-0 whitespace-nowrap inline-flex items-center gap-1 self-end sm:self-center"
                  >
                    Launch Site &rarr;
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-zinc-600 italic bg-zinc-900/10 px-2 py-0.5 rounded border border-zinc-900/40 self-end sm:self-center">
                    // Pipeline Lock
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}