"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/info";

import {
  Home as HomeIcon,
  User,
  Mail
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `flex items-center gap-2 transition ${pathname === path
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="flex justify-between items-center p-3 max-w-6xl mx-auto">

      <Link href="/">
        <h1 className="text-lg md:text-xl font-semibold cursor-pointer hover:underline">
          Abogado {CONTACT.name}
        </h1>
      </Link>

      <div className="flex items-center gap-4 md:gap-12">

        <Link href="/" className={linkClass("/")}>
          <HomeIcon size={20} />
          <span className="hidden md:inline">Inicio</span>
        </Link>

        <Link href="/about" className={linkClass("/about")}>
          <User size={20} />
          <span className="hidden md:inline">Sobre mí</span>
        </Link>

        <Link href="/contact" className={linkClass("/contact")}>
          <Mail size={20} />
          <span className="hidden md:inline">Contacto</span>
        </Link>

      </div>
    </nav>
  );
}