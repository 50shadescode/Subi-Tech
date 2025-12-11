const faqs = [
  {
    question: "What kinds of problems do you work on?",
    answer:
      "We focus on data-heavy and ML/AI-adjacent problems: recommendation, forecasting, internal tooling, workflow automation, and analytics that need more than a dashboard.",
  },
  {
    question: "Do you only work with teams that already use AI?",
    answer:
      "No. We often help teams move from zero to one: clarifying use-cases, evaluating feasibility, and building the first prototype or internal tool.",
  },
  {
    question: "How do you usually engage with a client?",
    answer:
      "We typically start with a short discovery phase, then a 2–4 week prototyping sprint. From there we either hand over, or stay on to help harden and productionize.",
  },
  {
    question: "Can you work with our existing data/engineering team?",
    answer:
      "Yes. We prefer to. Our best work happens when we collaborate closely with your engineers, data folks, and product owners instead of working in a silo.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-slate-300 leading-relaxed">
            A few of the things people usually ask before we start working
            together. Still unsure? We’re happy to talk through your specific
            situation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4"
            >
              <h3 className="font-semibold mb-2">{item.question}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
