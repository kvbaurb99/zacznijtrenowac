import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const FOOTER_LINKS = [
  {
    title: "Nawigacja",
    links: [
      { label: "O nas", href: "#about" },
      { label: "Przemiany", href: "#transformations" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  {
    title: "Oferta",
    links: [
      { label: "Trening personalny", href: "#" },
      { label: "Plany dietetyczne", href: "#" },
      { label: "Konsultacje online", href: "#" },
    ],
  },
  {
    title: "Prawne",
    links: [
      { label: "Polityka prywatności", href: "#" },
      { label: "Regulamin", href: "#" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold text-white">
                Zacznij<span className="text-zinc-500">Trenowac</span>
              </h2>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Profesjonalne wsparcie w drodze do Twojej wymarzonej sylwetki.
              Razem osiągniemy Twój cel.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-zinc-900 hover:bg-white hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} ZacznijTrenowac. Wszelkie prawa zastrzeżone.</p>
          <p className="text-zinc-600">
            Designed by <span className="text-zinc-500">Kuba</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
