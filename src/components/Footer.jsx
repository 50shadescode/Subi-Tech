import React from 'react';

const EMAIL = "subiAItech@gmail.com";
const WHATSAPP_NUMBER = "254726063889";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission (Spans 2 columns for better readability) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Brand Icon */}
              <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg">
                S
              </div>
              <span className="text-lg font-bold text-slate-100 tracking-tight">
                Subi AI Tech
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Practical AI consulting for teams who care about what ships. We help you move from "AI could be useful" to production systems that create real value.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#cases" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-slate-500">Email:</span>
                <a href={`mailto:${EMAIL}`} className="text-slate-300 hover:text-emerald-400 transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">WhatsApp:</span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  +{WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500">Location:</span>
                <span className="text-slate-300">
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500">
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <p>&copy; {currentYear} Subi AI Tech. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <p className="text-slate-600 text-xs">Built with React & Tailwind</p>
          </div>
          
          <div className="flex gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;