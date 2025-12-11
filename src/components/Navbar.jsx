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
    <nav className="flex items-center justify-between">
      {/* Logo / Brand */}
      <div className="flex items-center gap-3">
  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-lg sm:text-xl">
    S
  </div>
  <span className="text-lg sm:text-xl font-semibold tracking-tight">
    Subi AI Tech
  </span>
</div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/254726063889"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400 transition"
        >
          Book a call
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-700 px-3 py-2 text-xs"
        onClick={toggleMenu}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-14 inset-x-0 z-50 md:hidden">
          <div className="mx-4 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur px-4 py-3 space-y-3 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-slate-200 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/254726063889"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="block text-center rounded-md bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400 transition"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
