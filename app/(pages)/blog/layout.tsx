import type { PropsWithChildren } from "react";

export async function generateMetadata() {
  return {
    title: `Blog`,
    description: "Blog o treningu i zdrowiu",
    keywords: "trening, zdrowie, fitness, blog",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://zacznijtrenowac.pl/blog`,
    },
  };
}

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}
