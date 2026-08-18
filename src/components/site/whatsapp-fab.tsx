import { site } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";

export const whatsappMessage = encodeURIComponent(
  "Hello HAKV, I'd like to enquire about your aluminum & glass services.",
);

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${whatsappMessage}`;

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-[60] right-5 bottom-5 md:right-8 md:bottom-8 inline-flex items-center gap-2.5 rounded-full pl-4 pr-4 md:pr-5 h-14 text-white font-semibold shadow-[0_12px_34px_-8px_rgba(37,211,102,0.65)] float-slow"
      style={{ backgroundColor: "#25D366" }}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="hidden md:inline text-sm tracking-wide">Chat on WhatsApp</span>
      <span
        className="absolute inset-0 rounded-full animate-ping -z-10"
        style={{ backgroundColor: "#25D366", opacity: 0.3 }}
      />
    </a>
  );
}
