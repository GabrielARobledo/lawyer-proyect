import { MessageCircle } from "lucide-react";
import { getWhatsappUrl } from "@/lib/info";

export default function WhatsappButton() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:bg-[#1fbd5a] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30"
    >
      <MessageCircle size={24} />
    </a>
  );
}
