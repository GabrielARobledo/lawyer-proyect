import { FOOTER } from "@/lib/info";

export default function Footer() {
  return (
    <footer className="bg-white text-black text-center px-4 pb-2">
      <p className="text-sm">{FOOTER.copyright}</p>
    </footer>
  );
}