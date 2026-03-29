// /components/Footer.tsx
import { FOOTER } from "@/lib/info";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-left px-4">
      <p className="text-sm">{FOOTER.copyright}</p>
    </footer>
  );
}