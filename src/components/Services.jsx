import React from 'react';

const services = [
  {
    title: "AI Strategy & Roadmapping",
    description: "I help you identify where AI can actually save money or generate revenue — and create a clear, practical roadmap to implement it without disrupting your business.",
    icon: "🧭" 
  },
  {
    title: "Data & ML Engineering",
    description: "I turn messy, unstructured data into reliable systems that power accurate reports, dashboards, and AI tools.",
    icon: "🛠️"
  },
  {
    title: "Full-Stack AI Development",
    description: "I build complete, production-ready web applications — from the user interface to the backend — integrating AI where it delivers real value.",
    icon: "💻"
  },
  {
    title: "MLOps & Deployment",
    description: "I ensure your systems run reliably in production, remain secure, and scale as your business grows.",
    icon: "🚀"
  }
];

function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-16 md:w-2/3">
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
            Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
            How we do it.
          </h2>
          <p className="text-slate-400 text-lg">
             You don't need to know the code. You just need to know it works. Here is the technical foundation we use to build your solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900 hover:border-emerald-500/30 transition-all"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;