"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ABOUT } from "@/lib/about";
import { HOME } from "@/lib/home";
import { CONTACT, SERVICES, getWhatsappUrl } from "@/lib/info";

const processSteps = [
  {
    title: "Escucha inicial",
    text: "Revisamos el problema, ordenamos la información y detectamos qué datos son importantes.",
  },
  {
    title: "Estrategia clara",
    text: "Definimos alternativas, riesgos, tiempos posibles y próximos pasos concretos.",
  },
  {
    title: "Acompañamiento",
    text: "Seguimiento profesional durante reclamos, acuerdos, negociaciones o trámites.",
  },
];

const highlights = ["Atención directa", "Lenguaje claro", "Respuesta ágil"];

const profilePillars = [
  { title: "Análisis del caso", icon: Scale },
  { title: "Comunicación clara", icon: Mail },
  { title: "Próximos pasos", icon: ArrowRight },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const viewport = { once: true, amount: 0.25 };

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#101413] text-white">
      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8 md:pt-36">
        <div className="absolute inset-0">
          <Image
            src="/images/front_page.jpg"
            alt="Estudio jurídico"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(112deg,#101413_0%,rgba(16,20,19,0.92)_42%,rgba(16,20,19,0.68)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(214,181,111,0.18),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(243,216,159,0.08),transparent_32%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#101413] to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6b56f]/30 bg-[#d6b56f]/10 px-4 py-2 text-sm font-medium text-[#f3d89f]"
            >
              <ShieldCheck size={16} />
              Derecho laboral, civil y asesoramiento integral
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl xl:text-8xl"
            >
              {HOME.heroTitle}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl"
            >
              {HOME.heroSubtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6b56f] px-6 py-4 font-semibold text-[#101413] shadow-[0_22px_60px_rgba(214,181,111,0.26)] transition hover:-translate-y-1 hover:bg-[#f3d89f]"
              >
                <Mail size={19} />
                Enviar consulta
              </Link>
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/8 px-6 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#d6b56f]/60 hover:text-[#f3d89f]"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>
            </motion.div>

            <motion.div
              variants={stagger}
              className="mt-10 flex flex-wrap gap-3"
            >
              {highlights.map((item) => (
                <motion.span
                  variants={fadeUp}
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm text-white/78 ring-1 ring-white/8"
                >
                  <BadgeCheck size={16} className="text-[#d6b56f]" />
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.18 }}
            className="hero-credential justify-self-center rounded-[2rem] p-5 lg:justify-self-end"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-sm rounded-[1.6rem] bg-[#101413]/72 p-6"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/12">
                  <Image
                    src={ABOUT.profile.photo}
                    alt={ABOUT.profile.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#f3d89f]">
                    Abogado
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    {ABOUT.profile.name}
                  </h2>
                  <p className="mt-2 text-sm text-white/62">
                    {ABOUT.profile.specialty.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-2xl font-semibold text-[#f3d89f]">UBA</p>
                  <p className="mt-1 text-sm text-white/54">Formación</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-2xl font-semibold text-[#f3d89f]">2+</p>
                  <p className="mt-1 text-sm text-white/54">Áreas clave</p>
                </div>
              </div>

              <p className="mt-5 leading-7 text-white/64">
                Atención personalizada para transformar consultas complejas en
                próximos pasos concretos.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/10 md:block">
          <span className="scroll-line block h-5 w-px bg-[#d6b56f]" />
        </div>
      </section>

      <section className="section-flow px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end"
          >
            <motion.div variants={fadeRight}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c8a86b]">
                Servicios
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                {HOME.servicesTitle}
              </h2>
            </motion.div>
            <motion.p
              variants={fadeLeft}
              className="max-w-2xl text-lg leading-8 text-white/64"
            >
              {HOME.servicesSubtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="service-card group rounded-[1.5rem] p-6"
                >
                  <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6b56f]/12 text-[#f3d89f] transition group-hover:bg-[#d6b56f] group-hover:text-[#101413]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/62">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#f3d89f] opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100">
                    Ver enfoque
                    <ArrowRight size={16} />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-flow px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d6b56f]/26 bg-[#d6b56f]/10 px-4 py-2 text-sm font-semibold text-[#f3d89f]"
            >
              <Sparkles size={16} />
              Método de trabajo
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
            >
              Un proceso claro desde el primer contacto.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg leading-8 text-white/64"
            >
              La consulta se ordena en etapas simples para que sepas dónde estás,
              qué alternativas existen y qué decisión conviene tomar.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="mt-12 grid gap-4 md:grid-cols-3"
          >
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={fadeUp}
                className="process-card relative overflow-hidden rounded-[1.5rem] p-6"
              >
                <span className="absolute -right-2 -top-5 text-8xl font-semibold leading-none text-white/[0.035]">
                  0{index + 1}
                </span>
                <div className="relative">
                  <span className="text-sm font-semibold text-[#d6b56f]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/62">{step.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-flow profile-zone px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeRight}
            className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.24)]"
          >
            <Image
              src="/images/about_front_page.jpg"
              alt="Biblioteca jurídica"
              width={760}
              height={920}
              className="h-[380px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101413]/86 via-[#101413]/10 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/12 bg-[#101413]/70 p-5 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-[#f3d89f]">
                Criterio y claridad
              </p>
              <p className="mt-2 leading-7 text-white/72">
                El foco está en entender el caso, explicar opciones y avanzar
                con una estrategia realista.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p
              variants={fadeLeft}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c8a86b]"
            >
              Perfil profesional
            </motion.p>
            <motion.h2
              variants={fadeLeft}
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
            >
              Una consulta ordenada cambia la forma de encarar el problema.
            </motion.h2>
            <motion.div
              variants={stagger}
              className="mt-7 space-y-5 text-lg leading-8 text-white/66"
            >
              {ABOUT.profile.description.map((line) => (
                <motion.p variants={fadeUp} key={line}>
                  {line
                    .replace("{name}", ABOUT.profile.name)
                    .replace("{specialty}", ABOUT.profile.specialty.join(" y "))
                    .replace("{education}", ABOUT.profile.education)}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              variants={stagger}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {profilePillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <motion.div
                    key={pillar.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
                  >
                    <Icon size={19} className="text-[#d6b56f]" />
                    <p className="mt-3 text-sm font-semibold text-white/78">
                      {pillar.title}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="contacto"
        className="section-flow contact-zone px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p
              variants={fadeRight}
              className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c8a86b]"
            >
              Contacto
            </motion.p>
            <motion.h2
              variants={fadeRight}
              className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl"
            >
              Escribime y vemos el mejor camino para tu consulta.
            </motion.h2>
            <motion.p
              variants={fadeRight}
              className="mt-6 max-w-xl text-lg leading-8 text-white/64"
            >
              Podés dejar un mensaje por email desde el formulario o iniciar una
              conversación directa por WhatsApp.
            </motion.p>

            <motion.div variants={stagger} className="mt-8 space-y-4">
              <motion.a
                variants={fadeUp}
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-3xl border border-[#25d366]/35 bg-[#25d366]/14 p-5 text-white shadow-[0_18px_55px_rgba(37,211,102,0.08)] transition hover:-translate-y-1 hover:border-[#25d366]/60 hover:bg-[#25d366]/18"
              >
                <span className="inline-flex items-center gap-3 font-semibold">
                  <MessageCircle className="text-[#25d366]" size={22} />
                  WhatsApp
                </span>
                <ArrowRight size={20} />
              </motion.a>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Email", value: CONTACT.email, icon: Mail },
                  { label: "Ubicación", value: CONTACT.location, icon: MapPin },
                  { label: "Teléfono", value: `+${CONTACT.phone}`, icon: Phone },
                  { label: "Respuesta", value: "A la brevedad", icon: Clock3 },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      className="contact-card rounded-3xl p-5"
                    >
                      <Icon className="text-[#d6b56f]" size={22} />
                      <p className="mt-3 text-sm text-white/50">{item.label}</p>
                      <p className="mt-1 break-words font-medium">
                        {item.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeLeft}
            className="contact-form-panel rounded-[2rem] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:p-8"
          >
            <h3 className="text-2xl font-semibold">Enviar consulta</h3>
            <p className="mt-2 text-white/58">
              Completá los datos y el mensaje llega directo por email.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      <a
        href={getWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 md:hidden"
      >
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
