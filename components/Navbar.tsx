import Link from "next/link";
import { CONTACT } from "@/lib/info";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[#101413]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <div className="flex flex-col leading-none">
          <span className="text-sm uppercase tracking-[0.3em] text-[#c8a86b]">
            Abogado
          </span>
          <span className="mt-1 text-lg font-semibold text-white">
            {CONTACT.name}
          </span>
        </div>

        <Link
          href="/#contacto"
          className="rounded-full border border-[#c8a86b]/60 px-4 py-2 text-sm font-semibold text-[#f3d89f] transition hover:border-[#f3d89f] hover:bg-[#f3d89f] hover:text-[#101413]"
        >
          Consulta
        </Link>
      </nav>
    </header>
  );
}
