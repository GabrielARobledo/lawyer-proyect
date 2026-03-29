import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/WhatsappButton";
import { CONTACT, getWhatsappUrl } from "@/lib/info";
import ContactSection from "@/components/ContactSection";
import Head from "next/head"; // ✅ Importa Head

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <title>Mi Proyecto - Abogado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-900 text-white">
        <Navbar />
        {children}
        <WhatsappButton />
        <ContactSection
          ctaTitle={CONTACT.ctaTitle}
          ctaSubtitle={CONTACT.ctaSubtitle}
          getWhatsappUrl={getWhatsappUrl}
        />
      </body>
    </html>
  );
}