import { useState } from "react";
import { X, Expand } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { driveThumb, driveVideos } from "@/lib/site-data";
import office from "@/assets/office.jpg";
import shower from "@/assets/shower.jpg";
import detail from "@/assets/detail.jpg";
import workshop from "@/assets/workshop.jpg";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import hero from "@/assets/hero.jpg";

type Item = { src: string; alt: string; span?: string };

// Blend Drive video thumbnails (real project footage) with our generated hero shots.
const items: Item[] = [
  { src: p1, alt: "Coastal residence aluminum windows and glass balconies", span: "md:col-span-2 md:row-span-2" },
  { src: driveThumb(driveVideos[0].id), alt: "On-site installation walkthrough" },
  { src: office, alt: "Corporate office glass partitioning" },
  { src: driveThumb(driveVideos[1].id), alt: "Curtain wall installation in progress" },
  { src: shower, alt: "Frameless shower glass enclosure", span: "md:row-span-2" },
  { src: p2, alt: "Commercial curtain wall facade at golden hour", span: "md:col-span-2" },
  { src: driveThumb(driveVideos[2].id), alt: "Aluminum fabrication workshop" },
  { src: detail, alt: "Aluminum window profile detail" },
  { src: driveThumb(driveVideos[3].id), alt: "Frameless glass fit-out" },
  { src: workshop, alt: "Precision aluminum cutting" },
  { src: driveThumb(driveVideos[4].id), alt: "Office partitioning delivery" },
  { src: hero, alt: "Signature curtain wall facade at blue hour", span: "md:col-span-2" },
];

export function Gallery() {
  const [active, setActive] = useState<Item | null>(null);
  const r = useReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-white">
      <div className="container-x">
        <div ref={r.ref} className={`max-w-3xl reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Gallery</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            A closer look at our <span className="text-gradient">work in Nigeria.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Selected imagery from recent installations, workshop production, and site walkthroughs.
            Click any image to view it full-size.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(it)}
              className={`group relative overflow-hidden rounded-xl bg-secondary ${it.span ?? ""}`}
              aria-label={`View ${it.alt}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.opacity = "0.4";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-white/95 text-royal opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="h-4 w-4" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm grid place-items-center p-4 animate-in fade-in duration-200"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-[var(--shadow-elev-lg)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
