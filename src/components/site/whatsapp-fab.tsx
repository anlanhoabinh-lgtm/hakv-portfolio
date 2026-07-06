import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";

export function WhatsAppFab() {
  const msg = encodeURIComponent(
    "Hello HAKV, I'd like to enquire about your aluminum & glass services.",
  );
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-[60] right-5 bottom-5 md:right-8 md:bottom-8 grid place-items-center h-14 w-14 rounded-full text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] float-slow"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: "#25D366", opacity: 0.35 }} />
    </a>
  );
}
