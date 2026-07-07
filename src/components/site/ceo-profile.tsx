import { Linkedin, Mail, Quote } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import ceoImg from "@/assets/ceo.jpg";

const expertise = [
  "Aluminum Fabrication",
  "Curtain Wall Systems",
  "Frameless Glass Installation",
  "Office Partitioning",
  "Shower Glass",
  "Commercial Projects",
  "Residential Projects",
  "Site Supervision",
  "Project Management",
];

export function CeoProfile() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="ceo" className="relative py-24 md:py-32 bg-[var(--silver-soft)]">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl -z-10 blur-2xl opacity-60"
              style={{ background: "var(--gradient-royal)" }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elev-lg)] aspect-[4/5]">
              <img
                src={ceoImg}
                alt="Sanusi Hakeem Segun — Founder & CEO of Honourableak Venture"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <div className="font-display text-xl font-semibold">Sanusi Hakeem Segun</div>
                <div className="text-sm text-white/80">Founder & Chief Executive Officer</div>
              </div>
            </div>
          </div>
        </div>

        <div ref={r.ref} className={`lg:col-span-7 reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow">
            <span className="inline-block h-px w-8 bg-royal/70" /> Meet the Founder
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            A hands-on craftsman leading Nigeria's next generation of{" "}
            <span className="text-gradient">architectural glass & aluminum</span>.
          </h2>

          <div className="mt-6 relative pl-6 border-l-2 border-royal/30">
            <Quote className="absolute -left-3 -top-2 h-6 w-6 text-royal bg-[var(--silver-soft)] p-1 rounded-full" />
            <p className="text-muted-foreground leading-relaxed">
              With more than sixteen years of on-site leadership across Nigeria, Sanusi Hakeem Segun
              has built Honourableak Venture into a name synonymous with fine finish work, dependable
              scheduling, and long-life installations. His personal involvement in every major project
              — from survey to handover — is a large part of why our clients keep returning and
              referring us.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              He is respected across the trade for his fluency in curtain wall systems, frameless
              glass, custom aluminum fabrication and office partitioning, and for the calm site
              discipline he brings to complex commercial builds.
            </p>
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-[0.22em] text-charcoal-soft font-semibold">
              Areas of Expertise
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-border bg-white px-4 py-2 text-xs md:text-sm text-charcoal-soft hover:border-royal hover:text-royal transition-colors"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:SanusiHakeem48@gmail.com"
              className="btn-royal btn-royal-hover text-sm"
            >
              <Mail className="h-4 w-4" /> Email the CEO
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal hover:border-charcoal transition-colors"
            >
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
