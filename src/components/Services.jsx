const services = [
  {
    title: "AI Strategy & Roadmapping",
    description:
      "Identify high-value AI opportunities, evaluate feasibility, and define a technical roadmap aligned with your business goals.",
    icon: "🧭",
  },
  {
    title: "Data & ML Engineering",
    description:
      "Clean, transform, and structure messy datasets. Build robust data pipelines and training workflows for high-quality models.",
    icon: "🛠️",
  },
  {
    title: "Full-Stack AI Development",
    description:
      "We don't just hand over a model. We build production-ready React/Node apps, stunning portfolios, and internal tools that integrate AI seamlessly.",
    icon: "💻",
    // This is the new property for the "pills"
    tags: ["Web Apps", "Portfolios", "SaaS"],
  },
  {
    title: "MLOps & Deployment",
    description:
      "Deploy, monitor, and maintain AI systems in production. Ensure reliability, performance, and regulatory compliance.",
    icon: "🚀",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-sm hover:shadow-md hover:border-emerald-500/30 transition duration-300 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                {service.description}
              </p>

              {/* Logic to render the tags if they exist */}
              {service.tags && (
                <div className="flexSV flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;