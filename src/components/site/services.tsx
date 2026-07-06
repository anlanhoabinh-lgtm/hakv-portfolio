import { useReveal } from "@/hooks/use-reveal";
import {
  Building2,
  DoorOpen,
  Frame,
  LayoutPanelTop,
  ShowerHead,
  Sparkles,
  SquareStack,
  Wrench,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Frame,
    title: "Aluminum Windows",
    body: "Sliding, casement, top-hung and fixed configurations engineered for Nigerian weather — thermally broken profiles, tempered glazing, and marine-grade hardware for silent, secure operation year after year.",
    tag: "Residential · Commercial",
  },
  {
    icon: DoorOpen,
    title: "Aluminum Doors",
    body: "Framed, semi-framed, and fully frameless doors that combine architectural presence with everyday reliability. Ideal for entrances, patios, retail shopfronts, and internal transitions.",
    tag: "Custom-Made",
  },
  {
    icon: Building2,
    title: "Curtain Wall Systems",
    body: "Structural glazing and stick-system curtain walls that transform facades into signature architecture — designed to meet wind-load specs, water tightness, and long-term thermal performance.",
    tag: "Facades",
  },
  {
    icon: LayoutPanelTop,
    title: "Office Partitioning",
    body: "Glass and aluminum partition systems that give modern workplaces daylight, acoustics, and flexibility — from open collaborative bays to soundproof executive suites.",
    tag: "Corporate",
  },
  {
    icon: Sparkles,
    title: "Frameless Glass",
    body: "Uninterrupted views, precision-set fittings, and clean lines. Perfect for balconies, staircases, storefronts, and premium residential interiors where clarity is the design.",
    tag: "Premium",
  },
  {
    icon: ShowerHead,
    title: "Shower Glass",
    body: "Custom-cut, tempered enclosures with elegant hardware — a hallmark upgrade for luxury bathrooms and hospitality projects that demand a spa-grade finish.",
    tag: "Interiors",
  },
  {
    icon: SquareStack,
    title: "Glass Installation",
    body: "Facade panels, canopies, railings, tabletops and specialty glazing — surveyed, fabricated and installed with certified glass and load-tested fittings.",
    tag: "All Projects",
  },
  {
    icon: Wrench,
    title: "Custom Aluminum Fabrication",
    body: "Bespoke aluminum work built to your architectural drawings — canopies, cladding, screens, gates, kiosks, and one-off structural pieces made in our workshop.",
    tag: "Bespoke",
  },
  {
    icon: ClipboardCheck,
    title: "Aluminum Project Supervision",
    body: "Independent supervision and consultancy for developers and architects — quality audits, contractor coordination, material verification, and handover management.",
    tag: "Consulting",
  },
];

export function Services() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-24 md:py-32 bg-white">
      <div className="container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow">
            <span className="inline-block h-px w-8 bg-royal/70" /> What We Deliver
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            A complete portfolio of aluminum & glass solutions,{" "}
            <span className="text-gradient">delivered end-to-end.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From survey and design through fabrication, installation, and handover — every service
            below is delivered by our in-house team, to a single quality standard.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  body,
  tag,
  index,
}: {
  icon: typeof Frame;
  title: string;
  body: string;
  tag: string;
  index: number;
}) {
  const r = useReveal<HTMLDivElement>();
  return (
    <div
      ref={r.ref}
      className={`group relative rounded-2xl border border-border bg-white p-7 hover-lift hover-lift-h reveal ${
        r.visible ? "reveal-in" : ""
      }`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      <div className="flex items-start justify-between">
        <span
          className="grid place-items-center h-12 w-12 rounded-xl text-white shadow-[var(--shadow-royal)]"
          style={{ background: "var(--gradient-royal)" }}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2.5 py-1">
          {tag}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
      <a
        href="#contact"
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal group-hover:gap-2 transition-all"
      >
        Discuss this service <ArrowUpRight className="h-4 w-4" />
      </a>
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "var(--gradient-royal)" }}
      />
    </div>
  );
}
