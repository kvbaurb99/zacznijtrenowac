import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/src/components/ui/hero";
import SectionSkeleton from "@/src/components/ui/section-skeleton";

const About = dynamic(
  () => import("@/src/components/ui/about").then((mod) => mod.About),
  {
    loading: () => <SectionSkeleton />,
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
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Transformations />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  );
}
