import { getWhatsappUrl } from "@/lib/info";

export default function WhatsappButton() {
  return (
    <a
      href={getWhatsappUrl()}
      target="_blank"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition hover:scale-110 flex items-center justify-center z-50"
    >
      <img
        src="/icons/wsp_icon.svg"
        alt="WhatsApp"
        className="w-6 h-6 invert"
      />
    </a>
  );
}