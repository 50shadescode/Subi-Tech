"use client";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // ADJUSTED LINKS MAP: Pointing exactly to our new section IDs
  const links = [
    { href: "#services", label: "Capabilities" },
    { href: "#process", label: "Our DNA / Process" },
    { href: "#about", label: "Technology Stack" },
    { href: "#contact", label: "Get In Touch" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
      {/* INNER CONTAINER */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO SECTION - Adjusted scaling footprint to prevent hero blocking */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src="/suby-tech-logo.jpg" 
            alt="Suby Tech" 
            className="h-12 md:h-16 w-auto object-contain mix-blend-screen transition-transform duration-200 hover:scale-[1.02]" 
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-slate-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/254726063889"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
          >
            Connect &rarr;
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-800 p-2.5 text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full border-b border-slate-900 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-4 space-y-3 font-mono">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-slate-400 hover:text-emerald-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-900/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-900">
              <a
                href="https://wa.me/254726063889"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all duration-200"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;