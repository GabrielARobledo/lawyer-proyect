import Link from "next/link";
import { SERVICES, getWhatsappUrl } from "@/lib/info";
import { HOME } from "@/lib/home";
import {
  Mail,
  MessageCircle
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80" />
        <img
          src="/images/front_page.jpg"
          alt="Abogado"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 px-4">
          <h2 className="text-5xl font-bold max-w-3xl leading-tight">
            {HOME.heroTitle}
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto">
            {HOME.heroSubtitle}
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition flex items-center gap-2"
            >
              <Mail size={18} />
              Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-center">
          {HOME.heroTitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-gray-800/60 backdrop-blur-sm border border-gray-600 p-8 rounded-2xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-gray-700/50 transition">
                    <Icon
                      size={32}
                      className="text-gray-300 transition group-hover:text-gray-200"
                    />
                  </div>
                </div>

                <h4 className="font-semibold text-lg mb-2">
                  {service.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTÓN FLOTANTE */}
      <a
        href={getWhatsappUrl()}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <MessageCircle size={24} />
      </a>

    </main>
  );
}