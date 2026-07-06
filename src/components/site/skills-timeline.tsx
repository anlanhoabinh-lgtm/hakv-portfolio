import { useReveal } from "@/hooks/use-reveal";

const skills = [
  { name: "Aluminum Fabrication", level: 98 },
  { name: "Glass Installation", level: 97 },
  { name: "Curtain Wall Systems", level: 95 },
  { name: "Office Partitioning", level: 96 },
  { name: "Frameless Glass Installation", level: 95 },
  { name: "Shower Glass Installation", level: 94 },
  { name: "Project Supervision", level: 97 },
  { name: "Quality Control", level: 98 },
  { name: "Site Management", level: 96 },
  { name: "Customer Satisfaction", level: 99 },
];

const timeline = [
  { year: "2009", title: "Founded in Lagos", body: "Honourableak Venture opens its doors, taking on residential aluminum and glass installations." },
  { year: "2013", title: "First Commercial Contracts", body: "Awarded partitioning and curtain wall packages for corporate and hospitality clients." },
  { year: "2017", title: "Expansion Across Nigeria", body: "Project footprint extends beyond Lagos to Abia, Ogun, Oyo and the South-South corridor." },
  { year: "2021", title: "In-House Fabrication Scale-Up", body: "Workshop capacity expanded to handle industrial-scale curtain wall and custom fabrication." },
  { year: "2025", title: "A New Chapter", body: "Delivered flagship projects in Egbin (Ikorodu) and Gada (Abia State) — setting a new standard for HAKV." },
];

export function SkillsTimeline() {
  const t = useReveal<HTMLDivElement>();
  const s = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 md:py-32 bg-[var(--silver-soft)]">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20">
        {/* Skills */}
        <div ref={s.ref} className={`reveal ${s.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Core Skills</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            Decades of trade skill, refined into <span className="text-gradient">measurable excellence.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our team's capability spans every discipline modern architectural glass and aluminum work
            demands — engineered, audited, and delivered under one roof.
          </p>
          <div className="mt-8 space-y-5">
            {skills.map((sk, i) => (
              <div key={sk.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-charcoal">{sk.name}</span>
                  <span className="text-royal font-semibold">{sk.level}%</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-white overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: s.visible ? `${sk.level}%` : "0%",
                      background: "var(--gradient-royal)",
                      transition: `width 1.2s cubic-bezier(0.2, 0.7, 0.2, 1) ${i * 60}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={t.ref} className={`reveal ${t.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Experience Timeline</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-charcoal leading-tight">
            A sixteen-year journey of <span className="text-gradient">growth and delivery.</span>
          </h2>
          <ol className="mt-8 relative border-l-2 border-royal/20 pl-8 space-y-8">
            {timeline.map((e) => (
              <li key={e.year} className="relative">
                <span
                  className="absolute -left-[41px] top-1 grid place-items-center h-6 w-6 rounded-full text-white text-[10px] font-bold ring-4 ring-[var(--silver-soft)]"
                  style={{ background: "var(--gradient-royal)" }}
                >
                  •
                </span>
                <div className="text-xs uppercase tracking-widest text-royal font-semibold">{e.year}</div>
                <div className="mt-1 font-display text-lg font-semibold text-charcoal">{e.title}</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
