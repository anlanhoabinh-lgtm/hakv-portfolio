import { Quote, Star } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    name: "Adaeze Nwosu",
    role: "Homeowner",
    project: "Luxury residence, Lekki Phase 1",
    body: "HAKV re-glazed our entire home with frameless balustrades and new aluminum windows. The workmanship is genuinely at a European level — silent sliders, perfect silicone lines, and not a single site issue.",
  },
  {
    name: "Arch. Emeka Balogun",
    role: "Principal Architect",
    project: "Corporate HQ, Victoria Island",
    body: "As an architect I care deeply about detailing. Sanusi's team read our drawings correctly on the first pass, and delivered a curtain wall that photographs beautifully and performs even better. My go-to now.",
  },
  {
    name: "Kunle Adewale",
    role: "Managing Director",
    project: "Mixed-use development, Ikoyi",
    body: "Timelines held, budgets held, and the quality speaks for itself. HAKV has quietly become one of our most reliable subcontractors on high-end residential projects.",
  },
  {
    name: "Ifeoma Okafor",
    role: "Interior Designer",
    project: "Boutique hotel, Abuja",
    body: "The frameless shower enclosures and lobby glass work were flawless. Clients photograph them constantly — that's the highest compliment we can give a glazier.",
  },
  {
    name: "Engr. Tobi Falade",
    role: "Contractor / Site Manager",
    project: "Commercial facade, Abia State",
    body: "HAKV integrated seamlessly with our main contract team. Their supervisors were on-site every day, and the handover snag list was, in a word, tiny.",
  },
  {
    name: "Ngozi Ibeh",
    role: "Property Developer",
    project: "Residential estate, Ibeju-Lekki",
    body: "We've engaged HAKV across three phases now. Consistent finish, consistent scheduling, and the ability to deliver 40+ units without a drop in quality. That's rare in this market.",
  },
];

export function Testimonials() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[var(--silver-soft)]">
      <div className="container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Client Voices</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Trusted by homeowners, architects and developers{" "}
            <span className="text-gradient">across Nigeria.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TCard({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  const r = useReveal<HTMLDivElement>();
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      ref={r.ref}
      className={`relative rounded-2xl bg-white border border-border p-7 hover-lift hover-lift-h reveal ${
        r.visible ? "reveal-in" : ""
      }`}
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
    >
      <Quote
        className="absolute -top-3 -right-3 h-10 w-10 text-royal/15"
      />
      <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, k) => (
          <Star key={k} className="h-4 w-4" fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-charcoal-soft leading-relaxed text-sm md:text-[15px]">
        “{t.body}”
      </p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
        <span
          className="grid place-items-center h-11 w-11 rounded-full text-white font-semibold text-sm"
          style={{ background: "var(--gradient-royal)" }}
        >
          {initials}
        </span>
        <div className="min-w-0">
          <div className="font-semibold text-charcoal truncate">{t.name}</div>
          <div className="text-xs text-muted-foreground truncate">
            {t.role} · {t.project}
          </div>
        </div>
      </div>
    </div>
  );
}
