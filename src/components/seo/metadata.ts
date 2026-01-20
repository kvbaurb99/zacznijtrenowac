import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Treningi Personalne Bielsko-Biała | Zacznij Trenować",
    template: "",
  },

  description:
    "Dariusz i Asia Sklarczyk - certyfikowani trenerzy personalni w Bielsku-Białej. Treningi siłowe, motoryczne, przygotowanie do zawodów i indywidualne plany dietetyczne. Umów bezpłatną konsultację!",

  authors: [
    { name: "Dariusz Sklarczyk", url: "https://zacznijtrenowac.pl" },
    { name: "Asia Sklarczyk", url: "https://zacznijtrenowac.pl" },
  ],
  creator: "Zacznij Trenować",
  publisher: "Zacznij Trenować",

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zacznij Trenować - Trenerzy Personalni Bielsko-Biała",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Trener Personalny Bielsko-Biała | Zacznij Trenować",
    description:
      "Dariusz i Asia Sklarczyk - certyfikowani trenerzy personalni. Treningi siłowe, motoryczne i plany dietetyczne w Bielsku-Białej.",
    images: ["/og-image.jpg"],
  },

  verification: {
    google: "your-google-verification-code",
  },

  alternates: {
    canonical: "https://zacznijtrenowac.pl",
  },

  category: "fitness",

  metadataBase: new URL("https://zacznijtrenowac.pl"),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
};
