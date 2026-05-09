import { CONTACT, FOOTER } from "@/lib/info";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#101413] px-5 py-8 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>{FOOTER.copyright}</p>
        <p>{CONTACT.location}</p>
      </div>
    </footer>
  );
}
