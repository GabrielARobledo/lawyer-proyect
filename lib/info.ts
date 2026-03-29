import { Scale, FileText, Handshake, Copyright } from "lucide-react";

export const CONTACT = {
  name: "Robledo Gustavo",
  phone: "5491125364853",
  contactButton: "📩 Contactame",
  whatsappButton: "💬 Escribime por WhatsApp",
  ctaTitle: "¿Necesitás asesoramiento legal?",
  ctaSubtitle:
    "Escribime y recibí una respuesta directa y personalizada para tu caso.",
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Robledo. Todos los derechos reservados.`,
};


export const SERVICES = [
  {
    title: "Derecho Laboral",
    description: "Despidos, indemnizaciones y asesoramiento al trabajador.",
    icon: Scale,
  },
  {
    title: "Derecho Civil",
    description: "Contratos, daños y perjuicios, responsabilidad civil.",
    icon: FileText,
  },
  {
    title: "Consultoría Legal",
    description: "Asesoramiento integral para personas y empresas.",
    icon: Handshake,
  },
];

export const getWhatsappUrl = (message?: string) => {
  message = message ?? "Hola, quiero hacer una consulta";
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
};