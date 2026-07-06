import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  {
    q: "What types of aluminum windows do you offer?",
    a: "We fabricate the full range — sliding, casement, top-hung, tilt-and-turn and fixed picture windows — using thermally broken profiles and tempered or laminated glazing to suit the exposure, security, and thermal needs of your site.",
  },
  {
    q: "Do you handle both residential and commercial glass installation?",
    a: "Yes. We deliver private homes, offices, retail, hospitality, and industrial facilities from a single in-house team. Most weeks we have residential and commercial jobs running in parallel.",
  },
  {
    q: "How long does a typical project take?",
    a: "Residential window packages typically run 2–4 weeks from measurement to handover. Curtain wall systems and office partitioning fit-outs run 4–10 weeks depending on scope. You will receive a written programme with milestones before we start.",
  },
  {
    q: "How is pricing structured?",
    a: "Every quote is prepared per project after a site survey, so you pay for exactly what your building needs. Rates depend on profile system, glass specification, hardware, and access — never on a one-size-fits-all list.",
  },
  {
    q: "Do you offer free site inspections?",
    a: "We offer complimentary site inspections within Lagos and paid surveys nationwide. The survey fee is credited back into your project if you engage us.",
  },
  {
    q: "Can you work on large commercial developments?",
    a: "Yes. We have delivered curtain wall packages, multi-floor partitioning, and full glass envelopes on commercial developments across several states. Our team scales for phased handovers and coordinates with main contractors.",
  },
  {
    q: "Do you take on smaller residential jobs?",
    a: "Absolutely. Whether it is a single frameless shower enclosure, a set of new windows, or a full home envelope, we bring the same craft standards to every scale of project.",
  },
  {
    q: "What warranty do you offer?",
    a: "Standard workmanship warranty is 12 months from handover. Hardware and glass carry the manufacturer's warranty (typically 5–10 years depending on the system). We remain reachable for after-care long after warranty periods end.",
  },
  {
    q: "Do you offer maintenance and after-care?",
    a: "Yes. We provide scheduled maintenance for corporate clients and on-demand servicing for residential clients — cleaning, hardware realignment, resealing, and glass replacement when required.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number>(0);
  const r = useReveal<HTMLDivElement>();
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div ref={r.ref} className={`lg:col-span-5 reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> FAQ</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Answers to the questions <span className="text-gradient">we get most.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Can't find what you're looking for? Reach out — we respond to every enquiry personally,
            usually within a few hours.
          </p>
          <a href="#contact" className="mt-6 btn-royal btn-royal-hover text-sm inline-flex">
            Talk to Our Team
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-6 px-6 py-5 hover:bg-secondary/60 transition-colors"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-charcoal min-w-0">{f.q}</span>
                    <span className="shrink-0 grid place-items-center h-8 w-8 rounded-full text-royal border border-royal/30">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
