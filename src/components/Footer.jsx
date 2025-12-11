// src/components/Footer.jsx

const EMAIL = "subiAItech@gmail.com";
const WHATSAPP_NUMBER = "254726063889";

function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between text-sm text-slate-400">
        {/* Brand & tagline */}
        <div>
          <div className="font-semibold text-slate-100">Subi AI Tech</div>
          <p className="text-xs text-slate-500 mt-1 max-w-xs">
            Practical AI consulting for teams who care about what ships.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-slate-200 mb-1">Explore</div>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="hover:text-slate-200 transition">
              Services
            </a>
            <a href="#cases" className="hover:text-slate-200 transition">
              Case Studies
            </a>
            <a href="#about" className="hover:text-slate-200 transition">
              About
            </a>
            <a href="#faq" className="hover:text-slate-200 transition">
              FAQ
            </a>
            <a href="#hero" className="hover:text-slate-200 transition">
              Back to top
            </a>
          </div>
        </div>

        {/* Contact block */}
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-slate-200 mb-1">Contact</div>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-slate-200 transition"
          >
            Email: <span className="underline">{EMAIL}</span>
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-200 transition"
          >
            WhatsApp: <span className="underline">+{WHATSAPP_NUMBER}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-600 flex flex-col sm:flex-row gap-2 justify-between">
          <span>
            © {new Date().getFullYear()} Subi AI Tech. All rights reserved.
          </span>
          <span className="text-slate-500">
            Built with React &amp; Tailwind CSS.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
