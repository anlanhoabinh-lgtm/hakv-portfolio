import { useState } from "react";
import { Play, X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { driveVideos, driveThumb, drivePreview } from "@/lib/site-data";

export function VideoShowcase() {
  const r = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="showcase"
      className="relative py-24 md:py-32 text-white"
      style={{ background: "var(--gradient-charcoal)" }}
    >
      <div className="container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow eyebrow-light">
            <span className="inline-block h-px w-8 bg-silver/70" /> Video Showcase
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            Real projects, <span className="italic font-light text-silver">real workmanship.</span>
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Site footage captured across recent installations — press play on any tile to watch
            our team at work.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {driveVideos.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-white/30 transition-colors"
              aria-label={`Play ${v.name}`}
            >
              <img
                src={driveThumb(v.id, 800)}
                alt={v.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span
                className="absolute inset-0 grid place-items-center"
              >
                <span
                  className="grid place-items-center h-16 w-16 rounded-full text-white shadow-[var(--shadow-royal)] group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-royal)" }}
                >
                  <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                </span>
              </span>
              <span className="absolute bottom-3 left-3 right-3 text-left text-sm font-semibold">
                {v.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm grid place-items-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <button
            type="button"
            className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black shadow-[var(--shadow-elev-lg)]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={drivePreview(active)}
              className="absolute inset-0 h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Project video"
            />
          </div>
        </div>
      )}
    </section>
  );
}
