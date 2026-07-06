import { useReveal, useCountUp } from "@/hooks/use-reveal";
import { BadgeCheck, Clock, Handshake, HeartHandshake, Layers, Sparkles } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "Premium Craftsmanship", body: "Every joint, weld, and glazing bead is finished by tradesmen who have worked with us for years." },
  { icon: Layers, title: "Certified Materials", body: "We specify tempered glass, thermally broken profiles, and marine-grade fittings — no substitutions." },
  { icon: Clock, title: "On-Time Delivery", body: "Predictable milestones, honest scheduling, and site discipline that respects your build programme." },
  { icon: HeartHandshake, title: "Client-First Service", body: "You will speak directly with our leadership — from first quote through post-installation support." },
  { icon: Sparkles, title: "Attention to Detail", body: "The small things — level lines, silicone finish, hardware alignment — are non-negotiable." },
  { icon: Handshake, title: "Long-Term Partnership", body: "Most of our work comes from repeat clients, architects and developers who trust us with their next build." },
];

function Counter({ end, suffix = "", label, start }: { end: number; suffix?: string; label: string; start: boolean }) {
  const v = useCountUp(end, 1800, start);
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl font-bold text-white">
        {v}
        <span className="text-silver">{suffix}</span>
      </div>
      <div className="text-sm text-white/70 uppercase tracking-widest mt-2">{label}</div>
    </div>
  );
}

export function WhyChooseUs() {
  const r = useReveal<HTMLDivElement>();
  return (
    <section
      className="relative py-24 md:py-32 text-white overflow-hidden"
      style={{ background: "var(--gradient-charcoal)" }}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(800px 400px at 15% 20%, oklch(0.42 0.19 260 / 0.6), transparent 60%), radial-gradient(700px 400px at 85% 80%, oklch(0.62 0.18 260 / 0.4), transparent 60%)",
        }}
      />
      <div className="relative container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow eyebrow-light">
            <span className="inline-block h-px w-8 bg-silver/70" /> Why Choose HAKV
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            Six reasons Nigeria's most demanding clients{" "}
            <span className="italic font-light text-silver">keep choosing us.</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((f, i) => (
            <div
              key={f.title}
              className="glass-dark rounded-2xl p-7 hover:bg-white/[0.08] transition-colors"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="grid place-items-center h-11 w-11 rounded-lg bg-white/10 text-silver">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <div ref={r.ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <Counter start={r.visible} end={16} suffix="+" label="Years Experience" />
          <Counter start={r.visible} end={200} suffix="+" label="Projects Delivered" />
          <Counter start={r.visible} end={36} suffix="+" label="States Covered" />
          <Counter start={r.visible} end={100} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
}
