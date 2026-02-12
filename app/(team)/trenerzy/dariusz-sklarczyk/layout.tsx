import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import type { WithContext, Person, ProfilePage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://zacznijtrenowac.pl";
const PAGE_URL = `${BASE_URL}/trenerzy/dariusz-sklarczyk`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Dariusz Sklarczyk - Trener Personalny Bielsko-Biała | Zacznij Trenować",
    description:
      "Dariusz Sklarczyk — trener personalny z ponad 20-letnim doświadczeniem, absolwent AWF Katowice. Specjalizacja: trening siłowy, budowa masy mięśniowej, przygotowanie do zawodów. Bielsko-Biała.",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: PAGE_URL,
    },
    openGraph: {
      type: "profile",
      locale: "pl_PL",
      url: PAGE_URL,
      title: "Dariusz Sklarczyk - Trener Personalny | Zacznij Trenować",
      description:
        "Trener personalny z ponad 20-letnim doświadczeniem. Absolwent AWF Katowice, medalista zawodów kulturystycznych. Trening siłowy, przygotowanie do zawodów.",
      siteName: "Zacznij Trenować",
      firstName: "Dariusz",
      lastName: "Sklarczyk",
    },
  };
}

function TrainerSchema() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#dariusz`,
    name: "Dariusz Sklarczyk",
    givenName: "Dariusz",
    familyName: "Sklarczyk",
    jobTitle: "Trener Personalny",
    description:
      "Trener personalny z ponad 20-letnim doświadczeniem, absolwent AWF w Katowicach. Specjalizuje się w treningu siłowym, budowie masy mięśniowej, redukcji tkanki tłuszczowej i przygotowaniu do zawodów kulturystycznych. Medalista zawodów kulturystyki ekstremalnej 100+.",
    url: PAGE_URL,
    telephone: "+48600851174",
    email: "darektrener@icloud.com",
    image: `${BASE_URL}/darek.webp`,
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Zacznij Trenować",
    },
    workLocation: [
      {
        "@type": "Place",
        name: "Zacznij Trenować - Langiewicza",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mariana Langiewicza 26",
          addressLocality: "Bielsko-Biała",
          postalCode: "43-300",
          addressRegion: "śląskie",
          addressCountry: "PL",
        },
      },
      {
        "@type": "Place",
        name: "Zacznij Trenować - Kolista",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Kolista 23",
          addressLocality: "Bielsko-Biała",
          postalCode: "43-316",
          addressRegion: "śląskie",
          addressCountry: "PL",
        },
      },
    ],
    knowsAbout: [
      "Trening siłowy",
      "Przygotowanie do zawodów",
      "Budowa masy mięśniowej",
      "Redukcja tkanki tłuszczowej",
      "Trening motoryczny",
      "Poprawa kondycji i zdrowia",
      "Kulturystyka",
      "Dietetyka sportowa",
    ],
    award: [
      "Złoty medal - Debiuty 2020, Kielce (kulturystyka ekstremalna 100+)",
      "Srebrny medal - Zawody kulturystyczne, Czechy 2023",
      "Brązowy medal - Mistrzostwa Wielkopolski 2023",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Akademia Wychowania Fizycznego w Katowicach",
      alternateName: "AWF Katowice",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Trener Personalny",
      occupationLocation: {
        "@type": "City",
        name: "Bielsko-Biała",
      },
      skills:
        "Trening siłowy, Budowa masy mięśniowej, Redukcja tkanki tłuszczowej, Przygotowanie do zawodów, Trening motoryczny",
      experienceRequirements: "Ponad 20 lat doświadczenia",
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        currency: "PLN",
        name: "Trening personalny",
      },
    },
  };

  const profilePageSchema: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": PAGE_URL,
    url: PAGE_URL,
    name: "Dariusz Sklarczyk - Trener Personalny",
    description:
      "Profil trenera personalnego Dariusza Sklarczyka — specjalisty od treningu siłowego i przygotowania do zawodów w Bielsku-Białej.",
    mainEntity: {
      "@id": `${BASE_URL}/#dariusz`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
    },
    inLanguage: "pl-PL",
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trenerzy",
        item: `${BASE_URL}/trenerzy`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dariusz Sklarczyk",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <TrainerSchema />
      {children}
    </>
  );
}
