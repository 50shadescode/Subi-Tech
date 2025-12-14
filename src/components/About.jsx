import React from "react";

function About() {
  return (
    <section id="about" className="py-24 border-b border-slate-800 bg-slate-950">
      {/* Container: Changed to max-w-7xl to match Navbar/Hero alignment */}
      <div className="max-w-7xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT COLUMN: Narrative */}
        <div className="space-y-6">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
            About Subi AI Tech
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Built for teams who <br className="hidden lg:block" />
            care about <span className="text-emerald-400">what ships.</span>
          </h2>
          
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              Subi AI Tech exists for teams who need more than slideware. We blend
              first-principles thinking, solid engineering, and a bias towards
              production to help you move from <span className="italic text-white">“AI could be useful”</span> to 
              <span className="italic text-white"> “AI is in production and creating value.”</span>
            </p>
            <p className="text-slate-400 text-base">
              We’ve worked with product, data, and engineering leaders who are
              under pressure to deliver results quickly without burning out their
              teams. Our role is to bring clarity, focus, and the extra hands you
              need to ship.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Feature Cards */}
        <div className="space-y-4">
          
          {/* Card 1: First-principles */}
          <div className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-slate-900">
            <div className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                {/* Lightbulb/Compass Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h5"/><path d="M17 12h5"/><path d="M12 2v5"/><path d="M12 17v5"/><circle cx="12" cy="12" r="3"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">First-principles approach</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We start from the problem, not the model. Tools are chosen to fit
                  the job, not the other way around.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Collaboration */}
          <div className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-slate-900">
            <div className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                {/* Code/Terminal Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Hands-on collaboration</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We work in your repos, with your engineers and data people. No
                  black boxes, no mystery tools.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Pragmatic */}
          <div className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-slate-900">
            <div className="flex gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                {/* Wrench/Tool Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">Pragmatic, not dogmatic</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Simple solutions beat clever ones. We optimize for reliability,
                  maintainability, and value delivered.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;