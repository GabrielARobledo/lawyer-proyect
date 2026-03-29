import { ABOUT } from "@/lib/about";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center text-center">
        <img
          src={ABOUT.hero.backgroundImage}
          alt="Abogado"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${ABOUT.hero.gradient} z-10`} />

        <div className="relative z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold">{ABOUT.hero.title}</h1>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">{ABOUT.hero.subtitle}</p>
        </div>
      </section>

      {/* SOBRE */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl shadow-lg">
          <img
            src={ABOUT.profile.photo}
            alt={ABOUT.profile.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center md:text-left flex-1">
          {ABOUT.profile.description.map((line, idx) => (
            <p key={idx} className="text-gray-300 mb-4">
              {line
                .replace("{name}", ABOUT.profile.name)
                .replace("{specialty}", ABOUT.profile.specialty.join(" y "))
                .replace("{education}", ABOUT.profile.education)}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}