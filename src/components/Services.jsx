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
    title: "AI Product Prototyping",
    description:
      "Turn vague ideas into working prototypes. Rapid iteration with real data and real models to validate value early.",
    icon: "⚡",
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
              className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-sm hover:shadow-md hover:border-slate-700 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
