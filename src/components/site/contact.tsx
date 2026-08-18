import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { site } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { whatsappHref } from "@/components/site/whatsapp-fab";

export function Contact() {
  const r = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project Enquiry — ${fd.get("name") || "New Lead"}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nService: ${fd.get("service")}\n\n${fd.get("message")}`,
    );
    window.location.href = `mailto:${site.emails[0]}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[var(--silver-soft)]">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div ref={r.ref} className={`lg:col-span-5 reveal ${r.visible ? "reveal-in" : ""}`}>
          <span className="eyebrow"><span className="inline-block h-px w-8 bg-royal/70" /> Contact</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-charcoal leading-tight">
            Let's build something{" "}
            <span className="text-gradient">worth talking about.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Share a few project details and we'll come back with an honest, itemised quote —
            typically within one business day.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow icon={Phone} label="Phone" lines={site.phones.map((p) => ({ text: p, href: `tel:+234${p.slice(1)}` }))} />
            <ContactRow icon={Mail} label="Email" lines={site.emails.map((e) => ({ text: e, href: `mailto:${e}` }))} />
            <ContactRow
              icon={MapPin}
              label="Office"
              lines={[
                { text: site.address.line1 },
                { text: site.address.line2 },
                { text: site.address.country },
              ]}
            />
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full h-13 py-3.5 px-6 text-white font-semibold shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] hover:brightness-105 transition"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>

          <div className="mt-8 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elev-sm)] aspect-[16/10]">
            <iframe
              title="Honourableak Venture office location"
              src="https://www.google.com/maps?q=Isheri%2C+Lagos%2C+Nigeria&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-white border border-border p-6 md:p-10 shadow-[var(--shadow-elev-md)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required placeholder="Your full name" />
              <Field label="Email address" name="email" type="email" required placeholder="you@example.com" />
              <Field label="Phone number" name="phone" required placeholder="080X XXX XXXX" />
              <SelectField
                label="Service of interest"
                name="service"
                options={[
                  "Aluminum Windows",
                  "Aluminum Doors",
                  "Curtain Wall Systems",
                  "Office Partitioning",
                  "Frameless Glass",
                  "Shower Glass",
                  "Custom Fabrication",
                  "Project Supervision",
                  "Other",
                ]}
              />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-widest text-charcoal-soft mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Location, project type, timeline, and anything else that helps us quote accurately."
                className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground max-w-sm">
                By submitting, you consent to be contacted about your enquiry. We never share your
                details with third parties.
              </p>
              <button type="submit" className="btn-royal btn-royal-hover">
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Message Prepared
                  </>
                ) : (
                  <>
                    Send Enquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-charcoal-soft mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-charcoal-soft mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-royal focus:ring-2 focus:ring-royal/20"
      >
        <option value="" disabled>Select a service…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  lines,
}: {
  icon: typeof Phone;
  label: string;
  lines: { text: string; href?: string }[];
}) {
  return (
    <div className="flex gap-4">
      <span
        className="grid place-items-center h-11 w-11 rounded-lg text-white shrink-0"
        style={{ background: "var(--gradient-royal)" }}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-royal font-semibold">{label}</div>
        <div className="mt-1 space-y-0.5">
          {lines.map((l, i) =>
            l.href ? (
              <a key={i} href={l.href} className="block text-sm text-charcoal-soft hover:text-royal transition-colors">
                {l.text}
              </a>
            ) : (
              <div key={i} className="text-sm text-charcoal-soft">{l.text}</div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
