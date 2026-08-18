import { ArrowRight, PlayCircle, ShieldCheck, Star } from "lucide-react";
import { media } from "@/lib/media";

const heroImg = media.hero;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden text-white">
      <img
        src={heroImg}
        alt="HAKV glazing panels prepared on site in Nigeria"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.02 260 / 0.92) 0%, oklch(0.14 0.02 260 / 0.65) 45%, oklch(0.32 0.18 265 / 0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at 20% 20%, oklch(0.62 0.18 260 / 0.35), transparent 60%), radial-gradient(1000px 500px at 90% 80%, oklch(0.86 0.008 250 / 0.25), transparent 60%)",
        }}
      />

      <div className="relative container-x flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow eyebrow-light">
            <span className="inline-block h-px w-8 bg-silver/70" />
            Nigeria · Since 2009
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Precision-Built Aluminum & <br className="hidden md:block" />
            <span className="italic font-light">Architectural Glass</span>{" "}
            <span className="text-silver">that stands the test of time.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            For over sixteen years, Honourableak Venture has delivered elegant, engineered aluminum
            fabrication and glass installations to homes, offices, and commercial developments across
            Nigeria — with the craftsmanship, discipline, and finish quality your project deserves.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-royal btn-royal-hover">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#showcase" className="btn-outline-light btn-outline-light-hover">
              <PlayCircle className="h-5 w-5" /> Watch Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-silver" />
              <span>16+ years of proven delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-silver" />
              <span>Residential · Commercial · Industrial</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 glass-dark">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {[
            ["16+", "Years Experience"],
            ["200+", "Projects Delivered"],
            ["100%", "Client Satisfaction"],
            ["36", "States Reached"],
          ].map(([n, l]) => (
            <div key={l} className="text-center md:text-left">
              <div className="font-display text-2xl md:text-3xl font-bold text-white">{n}</div>
              <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider mt-1">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
