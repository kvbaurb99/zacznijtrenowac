"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useMemo } from "react";
import { useSlider } from "@/src/hooks/use-slider";

const TRANSFORMATIONS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const SLIDER_BREAKPOINTS = [
  { width: 768, itemsPerPage: 2 },
];

const TransformationCard = memo(function TransformationCard({
  index,
}: {
  index: number;
}) {
  return (
    <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
      {/* Card container with aspect ratio */}
      <div className="aspect-3/4 relative bg-zinc-900">
        {/* Split view container */}
        <div className="absolute inset-0 flex">
          {/* Before side */}
          <div className="w-1/2 relative overflow-hidden border-r border-zinc-950/80 group-hover:w-[40%] transition-all duration-700 ease-out">
            <div className="absolute inset-0 bg-zinc-800" />
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-zinc-700/50 to-zinc-900/50" />
          </div>

          {/* After side */}
          <div className="w-1/2 relative overflow-hidden group-hover:w-[60%] transition-all duration-700 ease-out">
            <div className="absolute inset-0 bg-zinc-700" />
            {/* Placeholder gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-zinc-600/50 to-zinc-800/50" />
          </div>
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/20 group-hover:left-[40%] transition-all duration-700 ease-out z-10" />

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-zinc-300 uppercase tracking-wider">
            Przed
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-zinc-900 uppercase tracking-wider">
            Po
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black/40 to-transparent" />

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
      className="py-20 md:py-28 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-zinc-800/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-14 md:mb-20">
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

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-8">
          <SliderNavButton direction="prev" onClick={prevSlide} />
          <SliderNavButton direction="next" onClick={nextSlide} />

          {/* Slides Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {TRANSFORMATIONS.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full md:w-1/2 shrink-0 p-2"
                >
                  <TransformationCard index={index} />
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
