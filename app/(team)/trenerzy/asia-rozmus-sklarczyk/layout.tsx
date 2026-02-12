import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import type { WithContext, Person, ProfilePage, BreadcrumbList } from "schema-dts";

const BASE_URL = "https://zacznijtrenowac.pl";
const PAGE_URL = `${BASE_URL}/trenerzy/asia-rozmus-sklarczyk`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Asia Rozmus-Sklarczyk - Trener Personalny Bielsko-Biała | Zacznij Trenować",
    description:
      "Asia Rozmus-Sklarczyk — trener personalny z wieloletnim doświadczeniem. Specjalizacja: trening dla kobiet, redukcja masy ciała, trening w ciąży i po porodzie, dietetyka sportowa. Bielsko-Biała.",
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
      title: "Asia Rozmus-Sklarczyk - Trener Personalny | Zacznij Trenować",
      description:
        "Trener personalny specjalizujący się w treningu dla kobiet, redukcji masy ciała i kształtowaniu sylwetki. Ponad 11 lat doświadczenia.",
      siteName: "Zacznij Trenować",
      firstName: "Asia",
      lastName: "Rozmus-Sklarczyk",
    },
  };
}

function TrainerSchema() {
  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#asia`,
    name: "Asia Rozmus-Sklarczyk",
    givenName: "Asia",
    familyName: "Rozmus-Sklarczyk",
    jobTitle: "Trener Personalny",
    description:
      "Trener personalny z wieloletnim doświadczeniem, specjalizująca się w treningu dla kobiet, redukcji masy ciała, treningu w ciąży i po porodzie oraz dietetyce sportowej. Absolwentka Szkoły Mistrzostwa Sportowego we Wrocławiu. Ponad 11 lat doświadczenia w branży fitness.",
    url: PAGE_URL,
    telephone: "+48518989721",
    email: "asiatrener@icloud.com",
    image: `${BASE_URL}/asia.webp`,
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "Zacznij Trenować",
    },
    workLocation: {
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
    knowsAbout: [
      "Trening personalny dla kobiet",
      "Redukcja masy ciała",
      "Kształtowanie i modelowanie kobiecej sylwetki",
      "Trening kobiet w ciąży i po porodzie",
      "Dietetyka sportowa",
      "Praca z seniorami",
      "Praca z dziećmi",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Szkolenie pracy z seniorami",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Szkolenie pracy z dziećmi",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Szkolenie treningu kobiet w ciąży i po porodzie",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Szkolenie redukcji masy ciała",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Szkolenie kształtowania i modelowania kobiecej sylwetki",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Dietetyka sportowa",
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Szkoła Mistrzostwa Sportowego we Wrocławiu",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Trener Personalny",
      occupationLocation: {
        "@type": "City",
        name: "Bielsko-Biała",
      },
      skills:
        "Trening personalny, Redukcja masy ciała, Trening w ciąży, Dietetyka sportowa, Kształtowanie sylwetki",
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
    name: "Asia Rozmus-Sklarczyk - Trener Personalny",
    description:
      "Profil trenera personalnego Asi Rozmus-Sklarczyk — specjalistki od treningu dla kobiet w Bielsku-Białej.",
    mainEntity: {
      "@id": `${BASE_URL}/#asia`,
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
        name: "Asia Rozmus-Sklarczyk",
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
