import React from "react";
import { MessageCircle } from "lucide-react";

interface CtaSectionProps {
  ctaTitle: string;
  ctaSubtitle: string;
  getWhatsappUrl: () => string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ ctaTitle, ctaSubtitle, getWhatsappUrl }) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-black text-center py-20 md:py-32 px-6">
      <h3 className="text-3xl md:text-4xl font-semibold">{ctaTitle}</h3>

      <p className="mt-6 text-gray-600 max-w-xl mx-auto">{ctaSubtitle}</p>

      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
      >
        <MessageCircle size={18} />
        Escribir por WhatsApp
      </a>
    </section>
  );
};

export default CtaSection;