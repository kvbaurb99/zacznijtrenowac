import type { PropsWithChildren } from "react";

export async function generateMetadata() {
  return {
    title: `Dariusz Sklarczyk - Trener Personalny`,
    description: "Dariusz Sklarczyk - Trener Personalny",
    keywords: "Dariusz Sklarczyk, Trener Personalny, Bielsko-Biała, trening, zdrowie, fitness",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://zacznijtrenowac.pl/trenerzy/dariusz-sklarczyk`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
