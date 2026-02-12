import dynamic from "next/dynamic";
import { Hero } from "@/src/components/ui/hero";
import SectionSkeleton from "@/src/components/ui/section-skeleton";

const About = dynamic(
  () => import("@/src/components/ui/about").then((mod) => mod.About),
  {
    loading: () => <SectionSkeleton />,
  }
);

const Cooperation = dynamic(
  () => import("@/src/components/ui/cooperation").then((mod) => mod.Cooperation),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const Services = dynamic(
  () => import("@/src/components/ui/services").then((mod) => mod.Services),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const Vouchers = dynamic(
  () => import("@/src/components/ui/vouchers").then((mod) => mod.Vouchers),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const Transformations = dynamic(
  () =>
    import("@/src/components/ui/transformations").then(
      (mod) => mod.Transformations
    ),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const Contact = dynamic(
  () => import("@/src/components/ui/contact").then((mod) => mod.Contact),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen font-(family-name:--font-geist-sans)">
      <Hero />
      <About />
      <Transformations />
      <Services />
      <Cooperation />

      <Vouchers />
      <Contact />
    </main>
  );
}
