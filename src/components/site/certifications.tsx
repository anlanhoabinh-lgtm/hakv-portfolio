import { Award, FileBadge, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    icon: Award,
    title: "Aluminum Fabrication Certificate",
    body: "Formally trained and certified in modern aluminum fabrication practices — from profile cutting and jointing to full-system assembly.",
  },
  {
    icon: FileBadge,
    title: "CAC Business Registration",
    body: "Duly registered with the Corporate Affairs Commission of Nigeria, operating as a fully compliant, tax-registered business entity.",
  },
  {
    icon: ShieldCheck,
    title: "Undergraduate Education",
    body: "Formal undergraduate education, complementing sixteen years of hands-on trade leadership and project management on live sites.",
  },
];

export function Certifications() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Credentials</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Certified. Registered. <span className="text-gradient">Accountable.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            The credentials that underpin the trust our clients, architects and developers place in us.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {items.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-white p-8 hover-lift hover-lift-h">
              <span
                className="grid place-items-center h-14 w-14 rounded-2xl text-white"
                style={{ background: "var(--gradient-royal)" }}
              >
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-charcoal">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
