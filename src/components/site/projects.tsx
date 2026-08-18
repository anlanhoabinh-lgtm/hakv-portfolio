import { useReveal } from "@/hooks/use-reveal";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";
import { media } from "@/lib/media";

const p1 = media.project1;
const p2 = media.project2;

const projects = [
  {
    image: p1,
    alt: "Aluminum bay window with tempered glazing on a completed residence",
    title: "Coastal Residence — Aluminum & Glass Envelope",
    location: "Egbin, Ikorodu",
    year: "2025",
    overview:
      "A private residence in Egbin, Ikorodu commissioned HAKV to deliver a complete aluminum and glass envelope — windows, doors, frameless balconies, and interior glass — to a luxury finish.",
    challenge:
      "The site sits close to the coastline, exposing all metalwork to salt-laden air and requiring frames engineered against wind-driven rain. The client also expected a spotless architectural finish with no visible fastenings.",
    solution:
      "We specified thermally broken aluminum profiles with marine-grade hardware, upgraded to laminated tempered glass, and used concealed structural silicone glazing for the balustrades to preserve unbroken sightlines.",
    scope: [
      "Full home aluminum window package (casement + sliding)",
      "Frameless glass balcony balustrades",
      "Sliding patio doors with concealed rollers",
      "Interior frameless glass partitions",
      "Custom shower enclosures",
    ],
    outcome:
      "Delivered on programme with zero snag callbacks after handover. The residence now enjoys panoramic views, silent operation, and a finish quality that has already generated three referral projects.",
  },
  {
    image: p2,
    alt: "Commercial development on site prior to curtain wall glazing",
    title: "Commercial Facade — Structural Curtain Wall",
    location: "Gada, Abia State",
    year: "2025",
    overview:
      "A mixed-use commercial development in Gada, Abia State needed a signature glass facade to anchor its brand presence, plus interior partitioning across four office floors.",
    challenge:
      "The client wanted the visual impact of a fully unitised curtain wall on a tight construction budget, while meeting Nigerian wind-load requirements and integrating opening vents without disrupting the facade rhythm.",
    solution:
      "Our team engineered a hybrid stick-system curtain wall using reflective double-glazed units, integrated concealed top-hung vents, and coordinated with the main contractor to install floor-by-floor without slowing the finishes trade.",
    scope: [
      "Structural glazing curtain wall (four elevations)",
      "Reflective double-glazed IGUs",
      "Concealed top-hung ventilation panels",
      "Interior office partitioning across four floors",
      "Commercial entrance doors & signage glass",
    ],
    outcome:
      "The completed facade transformed the building into a landmark on the street. Air-tightness and water tests passed on first attempt, and the client has now retained HAKV for two additional phases.",
  },
];

export function Projects() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-white">
      <div className="container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Featured Projects</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Selected case studies from our{" "}
            <span className="text-gradient">2025 delivery calendar.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            A closer look at how we scope, engineer, and deliver — from complex commercial facades
            to bespoke residential envelopes.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => (
            <ProjectCase key={p.title} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({
  project: p,
  reverse,
}: {
  project: (typeof projects)[number];
  reverse: boolean;
}) {
  const r = useReveal<HTMLDivElement>();
  return (
    <article
      ref={r.ref}
      className={`grid lg:grid-cols-12 gap-10 items-center reveal ${r.visible ? "reveal-in" : ""}`}
    >
      <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elev-lg)] group">
          <img
            src={p.image}
            alt={p.alt}
            width={1600}
            height={1067}
            loading="lazy"
            className="w-full h-[380px] md:h-[520px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-charcoal inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-royal" /> {p.location}
            </span>
            <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-charcoal inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-royal" /> {p.year}
            </span>
          </div>
        </div>
      </div>

      <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal leading-tight">
          {p.title}
        </h3>

        <div className="mt-6 space-y-5 text-sm md:text-base">
          <Block label="Project Overview" body={p.overview} />
          <Block label="The Challenge" body={p.challenge} />
          <Block label="Our Solution" body={p.solution} />
          <div>
            <div className="text-xs uppercase tracking-widest text-royal font-semibold">
              Scope of Work
            </div>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {p.scope.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-charcoal-soft">
                  <CheckCircle2 className="h-4 w-4 text-royal shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <Block label="Outcome" body={p.outcome} />
        </div>
      </div>
    </article>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-royal font-semibold">{label}</div>
      <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
