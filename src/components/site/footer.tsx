import { Facebook, Instagram, Linkedin, Music2, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { site } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative text-white" style={{ background: "var(--gradient-charcoal)" }}>
      <div className="container-x pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <a href="#top" className="flex items-center gap-3">
              <span
                className="grid place-items-center h-11 w-11 rounded-md font-display text-xl font-bold"
                style={{ background: "var(--gradient-royal)" }}
              >
                H
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold">Honourableak Venture</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-silver">Aluminum · Glass · HAKV</div>
              </div>
            </a>
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-sm">
              Premium aluminum fabrication and architectural glass installation across Nigeria —
              engineered to last, finished to impress.
            </p>
            <div className="mt-6 flex gap-3">
              <Social href={site.socials.facebook} label="Facebook" Icon={Facebook} />
              <Social href={site.socials.instagram} label="Instagram" Icon={Instagram} />
              <Social href={site.socials.linkedin} label="LinkedIn" Icon={Linkedin} />
              <Social href={site.socials.tiktok} label="TikTok" Icon={Music2} />
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-silver font-semibold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                ["#about", "About"],
                ["#services", "Services"],
                ["#projects", "Projects"],
                ["#gallery", "Gallery"],
                ["#testimonials", "Testimonials"],
                ["#faq", "FAQ"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-silver font-semibold">Services</div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[
                "Aluminum Windows & Doors",
                "Curtain Wall Systems",
                "Office Partitioning",
                "Frameless Glass",
                "Shower Enclosures",
                "Custom Fabrication",
              ].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-silver font-semibold">Get in Touch</div>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-silver shrink-0" />
                <div>
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:+234${p.slice(1)}`} className="block hover:text-white">{p}</a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-silver shrink-0" />
                <div>
                  {site.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block hover:text-white break-all">{e}</a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-silver shrink-0" />
                <div>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.country}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>© {year} Honourableak Venture (HAKV). All rights reserved.</div>
          <div>Designed & built with craft — for a company that lives by it.</div>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-white">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, Icon }: { href: string; label: string; Icon: typeof Facebook }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid place-items-center h-10 w-10 rounded-full bg-white/8 border border-white/15 text-white hover:bg-white hover:text-royal transition-colors"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
