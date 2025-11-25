import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { StructuredData } from "@/components/seo/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Primary Title - max 60 characters, includes main keyword + brand
  title: {
    default: "Trener Personalny Bielsko-Biała | Zacznij Trenować",
    template: "%s | Zacznij Trenować - Trener Personalny Bielsko-Biała",
  },

  // Meta Description - max 155-160 characters, includes CTA + keywords
  description:
    "Dariusz i Asia Sklarczyk - certyfikowani trenerzy personalni w Bielsku-Białej. Treningi siłowe, motoryczne, przygotowanie do zawodów i indywidualne plany dietetyczne. Umów bezpłatną konsultację!",

  // Keywords - organized by priority and search intent
  keywords: [
    // Primary (high search volume, high intent)
    "trener personalny Bielsko-Biała",
    "trening personalny Bielsko-Biała",
    "personal trainer Bielsko-Biała",

    // Location variants
    "trener personalny Śląsk",
    "trener personalny województwo śląskie",
    "trening personalny Śląskie",

    // Service-specific
    "treningi siłowe Bielsko-Biała",
    "trening motoryczny Bielsko-Biała",
    "trening funkcjonalny Bielsko-Biała",
    "przygotowanie do zawodów Bielsko-Biała",
    "dieta treningowa Bielsko-Biała",
    "plan dietetyczny Bielsko-Biała",
    "układanie diety Bielsko-Biała",

    // Long-tail (lower competition, higher conversion)
    "najlepszy trener personalny Bielsko-Biała",
    "treningi personalne dla kobiet Bielsko-Biała",
    "treningi personalne dla mężczyzn Bielsko-Biała",
    "trener personalny dla par Bielsko-Biała",
    "przygotowanie do zawodów fitness Śląsk",
    "redukcja masy ciała Bielsko-Biała",
    "budowa masy mięśniowej Bielsko-Biała",

    // Brand keywords
    "Dariusz Sklarczyk trener",
    "Asia Sklarczyk trener",
    "Zacznij Trenować",
  ],

  // Authors - important for E-E-A-T (Experience, Expertise, Authority, Trust)
  authors: [
    { name: "Dariusz Sklarczyk", url: "https://zacznijtrenowac.pl" },
    { name: "Asia Sklarczyk", url: "https://zacznijtrenowac.pl" },
  ],
  creator: "Zacznij Trenować",
  publisher: "Zacznij Trenować",

  // Robots
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://zacznijtrenowac.pl",
    siteName: "Zacznij Trenować",
    title: "Trener Personalny Bielsko-Biała | Dariusz i Asia Sklarczyk",
    description:
      "Profesjonalne treningi personalne w Bielsku-Białej. Treningi siłowe, motoryczne, przygotowanie do zawodów i plany dietetyczne. Zaufaj doświadczeniu!",
    images: [
      {
        url: "/og-image.jpg", // Dodaj zdjęcie 1200x630px
        width: 1200,
        height: 630,
        alt: "Zacznij Trenować - Trenerzy Personalni Bielsko-Biała",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Trener Personalny Bielsko-Biała | Zacznij Trenować",
    description:
      "Dariusz i Asia Sklarczyk - certyfikowani trenerzy personalni. Treningi siłowe, motoryczne i plany dietetyczne w Bielsku-Białej.",
    images: ["/og-image.jpg"],
  },

  // Verification (uzupełnij po rejestracji)
  verification: {
    google: "your-google-verification-code", // Google Search Console
    // yandex: "your-yandex-code",
  },

  // Alternates - canonical URL
  alternates: {
    canonical: "https://zacznijtrenowac.pl",
  },

  // Category
  category: "fitness",

  // Other
  metadataBase: new URL("https://zacznijtrenowac.pl"),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="PL-24" />
        <meta name="geo.placename" content="Bielsko-Biała" />

        {/* JSON-LD Structured Data */}
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-zinc-950 text-zinc-100 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black selection:bg-white/20`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
