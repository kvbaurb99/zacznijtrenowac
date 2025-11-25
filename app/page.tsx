import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/ui/hero";

// Lazy load components below the fold
const About = dynamic(
  () => import("@/components/ui/about").then((mod) => mod.About),
  {
    loading: () => <SectionSkeleton />,
  }
);

const Transformations = dynamic(
  () =>
    import("@/components/ui/transformations").then(
      (mod) => mod.Transformations
    ),
  {
    loading: () => <SectionSkeleton />,
    ssr: true, // Keep SSR for SEO
  }
);

const Contact = dynamic(
  () => import("@/components/ui/contact").then((mod) => mod.Contact),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

// Minimal skeleton component for loading states
function SectionSkeleton() {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="h-6 w-32 bg-zinc-800 rounded-full mb-4 animate-pulse" />
          <div className="h-12 w-80 bg-zinc-800 rounded-lg mb-6 animate-pulse" />
          <div className="h-4 w-96 max-w-full bg-zinc-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

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
