import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 md:py-20">        <h1 className="text-4xl md:text-5xl font-bold">Contáctame</h1>
        <p className="mt-4 text-gray-300 max-w-xl">
          ¿Tienes dudas legales o necesitas asesoramiento? Escríbeme y responderé a la brevedad.
        </p>
      </section>

      {/* FORMULARIO */}
      <section className="max-w-xl mx-auto px-6 py-10 md:py-16 -mt-8 md:-mt-12">
        <ContactForm />
      </section>
    </main>
  );
}