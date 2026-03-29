// /components/Footer.tsx
import { FOOTER } from "@/lib/info";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-12">
      <p className="text-sm">{FOOTER.copyright}</p>
    </footer>
  );
}