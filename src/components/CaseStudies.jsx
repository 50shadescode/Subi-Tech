const caseStudies = [
  {
    company: "Elpis Wellness",
    tag: "HEALTH COMPLIANCE // REVENUE ENGINE",
    status: "Live Production ↗",
    isLive: true,
    url: "https://www.elpiswellness.co.ke/",
    headline: "High-Compliance Infrastructure & Automated Revenue Engine",
    result:
      "Architected a secure content architecture leveraging a headless Sanity.io backend and structured automated background notification pipelines. Engineered customized transactional payment integrations directly into the service layer, linking booking triggers seamlessly with instant transaction verification APIs.",
    impact:
      "Transformed a manual onboarding cycle into a fully automated, low-latency transaction engine that eliminates operational overhead and captures immediate revenue at the point of service selection.",
  },
  {
    company: "254 Convex Comm LTD",
    tag: "TECHNOLOGY-DRIVEN COMMERCE // B2B",
    status: "Live Production ↗",
    isLive: true,
    url: "https://254convexcomltd.co.ke/",
    headline: "Technology-Driven Commerce & Enterprise Procurement Engine",
    result:
      "Engineered a high-performance e-commerce architecture optimized for low-latency product indexing and secure data handling. Integrated customized, multi-tier payment pathways to handle instant regional financial settlements alongside an automated quotation pipeline designed to convert corporate procurement requests instantly.",
    impact:
      "Transformed a traditional supply model into a modern, automated B2B partner ecosystem, eliminating manual bidding friction and accelerating the corporate sales cycle through instant quotes.",
  },
  {
    company: "Zuri-Connect",
    tag: "ALGORITHMIC MATCHING // ANTI-FRAUD",
    status: "Live Production ↗",
    isLive: true,
    url: "https://www.zuri-connect.com",
    headline: "High-Trust Matching Ecosystem & Anti-Fraud Identity Architecture",
    result:
      "Engineered an advanced, multi-variable matching algorithm coupled with a strict cryptographic identity-verification framework to systematically filter fraud patterns and optimize profile authenticity. Architected intentional routing logic optimized for scheduling high-impact connections.",
    impact:
      "Delivered a premium, high-integrity social platform that directly addresses critical marketplace vulnerabilities, minimizes user fatigue, and eliminates scam vectors.",
  },
  {
    company: "PwanyStay",
    tag: "LOCALIZED VACATION TRUST // SGR TRAVEL",
    status: "In Development",
    isLive: false,
    headline: "High-Trust Coastal Stays & SGR Travel Integration",
    result:
      "Developed a secure marketplace leveraging the MERN stack, featuring a strict property verification pipeline to completely eliminate listing fraud. Built smooth data-sync workflows to tie property stays directly to localized transport and SGR arrival timelines.",
    impact:
      "Delivered a high-trust platform that guarantees guest safety and seamless convenience, allowing travelers new to Mombasa to book verified stays and coordinate arrival transit without friction.",
  },
  {
    company: "KiliRide",
    tag: "TRANSIT LOGISTICS // RESERVATION ENGINE",
    status: "In Development",
    isLive: false,
    headline: "Transit Logistics Ecosystem & Reservation Engine",
    result:
      "High-performance calculation engines managing real-time rental matrices and secure reservation state workflows.",
    impact:
      "An automated logistics scheduling network that optimizes asset utilization and eliminates regional transit coordination friction.",
  },
];

function CaseStudies() {
  return (
    <section id="cases" className="py-24 border-b border-slate-800 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase mb-2">
            // PROVEN DEPLOYMENTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Systems Operating & Staging
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Every engagement looks different, but the pattern is the same:
            clarify the operational problem, ship high-performance architecture fast, and secure business value.
          </p>
        </div>

        {/* Dynamic Responsive Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, index) => (
            <article
              key={index}
              className={`flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-6 shadow-sm transition-all duration-300 hover:border-slate-700 justify-between ${
                index === 0 ? "md:col-span-2 lg:col-span-3 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-emerald-950/10" : ""
              }`}
            >
              <div>
                <div className="flex justify-between items-center gap-2 mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                    {cs.company}
                  </p>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    cs.isLive 
                      ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' 
                      : 'border-amber-500/30 text-amber-400 bg-amber-500/5'
                  }`}>
                    {cs.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-white leading-snug">
                  {cs.headline}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="block text-[10px] font-mono tracking-wider uppercase text-zinc-500 mb-0.5">The Solution:</strong>
                    {cs.result}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-slate-400 text-xs leading-relaxed max-w-md">
                  <strong className="text-slate-300 font-medium">Impact:</strong> {cs.impact}
                </p>
                
                {cs.isLive ? (
                  <a 
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors shrink-0 whitespace-nowrap self-end sm:self-center"
                  >
                    Launch Site ↗
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-zinc-600 italic bg-zinc-900/20 px-2 py-0.5 rounded border border-zinc-900/40 align-middle self-end sm:self-center">
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

export default CaseStudies;