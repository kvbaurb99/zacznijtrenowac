import type { PropsWithChildren } from "react";

export async function generateMetadata() {
  return {
    title: `Asia Rozmus-Sklarczyk - Trener Personalny`,
    description: "Asia Rozmus-Sklarczyk - Trener Personalny",
    keywords: "Asia Rozmus-Sklarczyk, Trener Personalny, Bielsko-Biała, trening, zdrowie, fitness",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://zacznijtrenowac.pl/trenerzy/asia-rozmus-sklarczyk`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
