import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-[var(--shadow-elev-sm)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className={`grid place-items-center h-10 w-10 rounded-md font-display text-lg font-bold shrink-0 transition-colors ${
              scrolled
                ? "bg-[var(--gradient-royal)] text-white"
                : "bg-white/15 text-white border border-white/30"
            }`}
            style={scrolled ? { background: "var(--gradient-royal)" } : undefined}
          >
            H
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-base md:text-lg font-bold transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              Honourableak
            </span>
            <span
              className={`text-[10px] tracking-[0.22em] uppercase transition-colors ${
                scrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              Venture · HAKV
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-charcoal-soft hover:text-royal" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+2348141263424"
            className={`inline-flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-royal" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" /> 0814 126 3424
          </a>
          <a href="#contact" className="btn-royal btn-royal-hover text-sm px-5 py-2.5">
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden grid place-items-center h-10 w-10 rounded-md ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-md text-charcoal font-medium hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-royal btn-royal-hover mt-2 justify-center"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
