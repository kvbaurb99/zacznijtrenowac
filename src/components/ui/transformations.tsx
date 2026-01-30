"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useMemo } from "react";
import { useSlider } from "@/src/hooks/use-slider";

import Img0 from "@/assets/transformations/image0.jpeg";
import Img7 from "@/assets/transformations/image7.jpeg";
import Img4975 from "@/assets/transformations/IMG_4975.jpg";
import Img4992 from "@/assets/transformations/IMG_4992.jpg";
import Img4997 from "@/assets/transformations/IMG_4997.jpg";
import Img4996 from "@/assets/transformations/IMG_4996.jpg";

const TRANSFORMATIONS = [
  { id: 1, src: Img0, alt: "Metamorfoza 1" },
  { id: 2, src: Img4992, alt: "Metamorfoza 2" },
  { id: 3, src: Img4975, alt: "Metamorfoza 3" },
  { id: 4, src: Img7, alt: "Metamorfoza 4" },
  { id: 5, src: Img4997, alt: "Metamorfoza 5" },
  { id: 6, src: Img4996, alt: "Metamorfoza 5" },
];

const SLIDER_BREAKPOINTS = [
  { width: 768, itemsPerPage: 2 },
  { width: 1024, itemsPerPage: 3 },
];

const TransformationCard = memo(function TransformationCard({
  index,
  src,
  alt,
}: {
  index: number;
  src: (typeof TRANSFORMATIONS)[number]["src"];
  alt: string;
}) {
  return (
    <div className="group relative rounded-xl overflow-hidden cursor-pointer max-w-[320px] mx-auto md:max-w-none md:mx-0">
      {/* Jedno zdjęcie na kartę – zdjęcie już zawiera przed (lewa) i po (prawa) */}
      <div className="aspect-4/5 relative bg-zinc-900">
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          className={
            index === 1
              ? "object-fill object-center"
              : index === 3
                ? "object-contain object-center"
                : "object-cover object-center"
          }
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badge Przed – lewy róg */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-zinc-300 uppercase tracking-wider">
            Przed
          </span>
        </div>
        {/* Badge Po – prawy róg */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-zinc-900 uppercase tracking-wider">
            Po
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/40 to-transparent z-10" />
        {/* Card number */}
        <div className="absolute bottom-4 left-4 z-20">
          <span className="text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {/* Corner decorations */}
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
        <div className="absolute top-12 left-4 w-6 h-6 border-l-2 border-t-2 border-white/10 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      </div>
    </div>
  );
});

const SliderNavButton = memo(function SliderNavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className={`absolute ${isPrev ? "-left-5 lg:-left-6" : "-right-5 lg:-right-6"
        } top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-white hover:text-zinc-900 hover:border-white transition-all duration-300 hidden md:flex shadow-xl`}
      aria-label={isPrev ? "Poprzedni" : "Następny"}
    >
      <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
    </button>
  );
});

const PaginationDots = memo(function PaginationDots({
  count,
  currentIndex,
  onDotClick,
}: {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}) {
  const dots = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <div className="mt-10 flex justify-center items-center gap-2">
      {dots.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-all duration-300 rounded-full ${currentIndex === index
            ? "w-10 h-2.5 bg-white"
            : "w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500"
            }`}
          aria-label={`Idź do slajdu ${index + 1}`}
        />
      ))}
    </div>
  );
});

export function Transformations() {
  const {
    currentIndex,
    maxIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    translateX,
  } = useSlider({
    totalItems: TRANSFORMATIONS.length,
    breakpoints: SLIDER_BREAKPOINTS,
  });

  return (
    <section
      id="transformations"
      className="py-20 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Gradient tło – delikatne rozświetlenia */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_20%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_75%_80%,rgba(255,255,255,0.025)_0%,transparent_50%)]" />

      {/* Miękkie orby / blury */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-zinc-700/15 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 -right-32 w-[480px] h-80 bg-zinc-600/12 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[100px]" />

      {/* Delikatna siatka kropek */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-size-[40px_40px] opacity-50" />

      {/* Linie oddzielające */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-700/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            Realne efekty
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Metamorfozy
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Zobacz przemianę naszych podopiecznych. Każda historia to dowód na to,
            że z determinacją wszystko jest możliwe.
          </p>
        </header>

        {/* Slider – węższa sekcja w containerze */}
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <SliderNavButton direction="prev" onClick={prevSlide} />
          <SliderNavButton direction="next" onClick={nextSlide} />

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {TRANSFORMATIONS.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 p-2"
                >
                  <TransformationCard index={index} src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <PaginationDots
          count={maxIndex + 1}
          currentIndex={currentIndex}
          onDotClick={goToSlide}
        />

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 group"
          >
            Rozpocznij swoją przemianę
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
