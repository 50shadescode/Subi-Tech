import { useState } from "react";

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
    // 1. STICKY HEADER WRAPPER
    // - sticky top-0: Sticks to top
    // - z-50: Ensures it sits on top of everything else
    // - backdrop-blur-md: Gives the "frosted glass" effect
    // - border-b: Adds a subtle separation line
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      
      {/* 2. INNER CONTAINER (Aligns with Hero) */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg">
            S
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            Subi AI Tech
          </span>
        </div>

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
          {/* Simple Hamburger/Close Icon Logic */}
          {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </nav>

      {/* 3. MOBILE DROPDOWN */}
      {/* Positioned absolute relative to the <header> */}
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