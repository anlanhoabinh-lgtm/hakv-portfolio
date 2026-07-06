import { Award, Building2, HardHat, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import workshop from "@/assets/workshop.jpg";
import detail from "@/assets/detail.jpg";

export function About() {
  const a = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div ref={a.ref} className={`reveal ${a.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow">
            <span className="inline-block h-px w-8 bg-royal/70" />
            About Honourableak Venture
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Sixteen years of building Nigeria's most{" "}
            <span className="text-gradient">refined aluminum & glass</span> installations.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Honourableak Venture (HAKV) was founded on a simple belief: that aluminum fabrication and
            architectural glasswork should be treated as a craft, not a commodity. From private
            residences to headquarter buildings and industrial facilities, we design, fabricate, and
            install systems that perform beautifully for decades.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every project is led personally by our founding team, engineered against real Nigerian
            climate loads, and finished to a standard our clients recognise the moment they walk in.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              { icon: Award, title: "16+ Years of Craft", body: "A track record built one careful installation at a time." },
              { icon: Building2, title: "Full-Spectrum Projects", body: "Homes, offices, retail, and industrial developments." },
              { icon: ShieldCheck, title: "Engineered to Last", body: "Marine-grade hardware, tempered glass, sealed profiles." },
              { icon: HardHat, title: "Site Discipline", body: "Clean handovers, punctual milestones, zero cut corners." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4">
                <span
                  className="grid place-items-center h-11 w-11 rounded-lg shrink-0 text-white"
                  style={{ background: "var(--gradient-royal)" }}
                >
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-semibold text-charcoal">{f.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{f.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[520px] md:h-[620px]">
            <div className="col-span-3 row-span-4 relative rounded-2xl overflow-hidden shadow-[var(--shadow-elev-lg)]">
              <img
                src={workshop}
                alt="Aluminum fabrication workshop with precision cutting"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-4 row-start-1 relative rounded-2xl overflow-hidden shadow-[var(--shadow-elev-md)]">
              <img
                src={detail}
                alt="Close-up of aluminum window profile and glazing"
                width={1200}
                height={1500}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-2 row-span-3 col-start-4 row-start-4 rounded-2xl p-6 flex flex-col justify-between text-white shadow-[var(--shadow-royal)]"
              style={{ background: "var(--gradient-charcoal)" }}
            >
              <div>
                <div className="eyebrow eyebrow-light !text-silver">Our Mission</div>
                <p className="mt-3 font-display text-lg leading-snug">
                  "To satisfy every client with premium-quality aluminum and glass solutions —
                  elevated by superior materials, expert craftsmanship, and exceptional service."
                </p>
              </div>
              <div className="text-xs uppercase tracking-widest text-silver/80">— HAKV</div>
            </div>
            <div className="col-span-3 row-span-2 col-start-1 row-start-5 rounded-2xl p-6 border border-border bg-white flex items-center justify-between shadow-[var(--shadow-elev-md)]">
              <div>
                <div className="font-display text-4xl md:text-5xl font-bold text-royal">2009</div>
                <div className="text-sm text-muted-foreground mt-1">Founded and building trust ever since.</div>
              </div>
              <div className="text-right">
                <div className="font-display text-4xl md:text-5xl font-bold text-charcoal">36<span className="text-royal">+</span></div>
                <div className="text-sm text-muted-foreground mt-1">States reached across Nigeria.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
