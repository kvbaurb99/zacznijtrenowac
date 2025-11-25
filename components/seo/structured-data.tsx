import type {
  LocalBusiness,
  Person,
  WebSite,
  BreadcrumbList,
  WithContext,
} from "schema-dts";

export function StructuredData() {
  const localBusinessSchema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://zacznijtrenowac.pl/#localbusiness",
    name: "Zacznij Trenować - Trener Personalny Bielsko-Biała",
    alternateName: "Zacznij Trenować",
    description:
      "Profesjonalne treningi personalne prowadzone przez Dariusza i Asię Sklarczyk. Oferujemy treningi siłowe, motoryczne, przygotowanie do zawodów oraz indywidualne plany dietetyczne.",
    url: "https://zacznijtrenowac.pl",
    telephone: "+48600851174",
    email: "darektrener@icloud.com",
    image: "https://zacznijtrenowac.pl/og-image.jpg",
    logo: "https://zacznijtrenowac.pl/logo.png",
    priceRange: "$$",
    currenciesAccepted: "PLN",
    paymentAccepted: "Cash",
    location: [
      {
        "@type": "Place",
        name: "Zacznij Trenować - Lokalizacja Langiewicza",
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
        name: "Zacznij Trenować - Lokalizacja Kolista",
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
    areaServed: [
      {
        "@type": "City",
        name: "Bielsko-Biała",
      },
      {
        "@type": "State",
        name: "województwo śląskie",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    ],
    sameAs: [
      "https://www.facebook.com/zacznijtrenowac",
      "https://www.instagram.com/zacznijtrenowac",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi treningowe",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trening personalny",
            description:
              "Indywidualny trening dostosowany do Twoich celów i możliwości",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trening siłowy",
            description: "Budowa siły i masy mięśniowej pod okiem specjalisty",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trening motoryczny",
            description:
              "Poprawa koordynacji, szybkości i sprawności motorycznej",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Przygotowanie do zawodów",
            description:
              "Kompleksowe przygotowanie startowe do zawodów fitness i kulturystyki",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan dietetyczny",
            description:
              "Indywidualnie dopasowana dieta wspierająca Twoje cele treningowe",
          },
        },
      ],
    },
  };

  const trainersSchema: WithContext<Person>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://zacznijtrenowac.pl/#dariusz",
      name: "Dariusz Sklarczyk",
      jobTitle: "Trener Personalny",
      worksFor: {
        "@type": "LocalBusiness",
        name: "Zacznij Trenować",
      },
      telephone: "+48600851174",
      email: "darektrener@icloud.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mariana Langiewicza 26",
        addressLocality: "Bielsko-Biała",
        postalCode: "43-300",
        addressRegion: "śląskie",
        addressCountry: "PL",
      },
      knowsAbout: [
        "Trening siłowy",
        "Trening motoryczny",
        "Przygotowanie do zawodów",
        "Dietetyka sportowa",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://zacznijtrenowac.pl/#asia",
      name: "Asia Sklarczyk",
      jobTitle: "Trener Personalny",
      worksFor: {
        "@type": "LocalBusiness",
        name: "Zacznij Trenować",
      },
      telephone: "+48518989721",
      email: "asiatrener@icloud.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kolista 23",
        addressLocality: "Bielsko-Biała",
        postalCode: "43-316",
        addressRegion: "śląskie",
        addressCountry: "PL",
      },
      knowsAbout: [
        "Trening personalny",
        "Trening dla kobiet",
        "Dietetyka sportowa",
        "Redukcja masy ciała",
      ],
    },
  ];

  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://zacznijtrenowac.pl/#website",
    url: "https://zacznijtrenowac.pl",
    name: "Zacznij Trenować",
    description: "Trenerzy Personalni Bielsko-Biała - Dariusz i Asia Sklarczyk",
    publisher: {
      "@id": "https://zacznijtrenowac.pl/#localbusiness",
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
        item: "https://zacznijtrenowac.pl",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(trainersSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
