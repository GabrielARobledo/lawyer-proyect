import {
  BriefcaseBusiness,
  FileText,
  Handshake,
  Home,
  Scale,
  ShieldCheck,
} from "lucide-react";

export const CONTACT = {
  name: "Robledo Gustavo",
  phone: "5491125364853",
  email: "gaby-2011@hotmail.com.ar",
  location: "Buenos Aires, Argentina",
  contactButton: "Contactame",
  whatsappButton: "Escribime por WhatsApp",
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
  {
    title: "Defensa de derechos",
    description: "Estrategia clara para reclamos, acuerdos y negociaciones.",
    icon: ShieldCheck,
  },
  {
    title: "Asuntos patrimoniales",
    description: "Acompañamiento en conflictos civiles y documentación.",
    icon: Home,
  },
  {
    title: "Empresas y comercios",
    description: "Prevención de riesgos legales y soporte contractual.",
    icon: BriefcaseBusiness,
  },
];

export const getWhatsappUrl = (message?: string) => {
  message = message ?? "Hola, quiero hacer una consulta";
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
};
