import { useState } from "react";
// 1. IMPORT YOUR LOGO
import logo from "../assets/suby-tech-logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#outcomes", label: "Outcomes" },
    { href: "#cases", label: "Case Studies" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    // STICKY HEADER WRAPPER
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      
      {/* INNER CONTAINER */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        
        {/* --- LOGO SECTION (UPDATED SIZE) --- */}
        <a href="#" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Suby Tech" 
            // UPDATES:
            // 1. Height increased to h-24 (mobile) and md:h-40 (desktop) for maximum visibility
            // 2. mix-blend-screen keeps the background clean
            className="h-24 md:h-40 w-auto object-contain mix-blend-screen" 
          />
        </a>
        {/* ---------------------------------- */}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/254726063889"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
          >
            Book a call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-300 hover:text-white hover:bg-slate-800 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-slate-300 hover:text-emerald-400 transition-colors px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <a
                href="https://wa.me/254726063889"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-md bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;