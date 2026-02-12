"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo, useMemo } from "react";
import { useSlider } from "@/src/hooks/use-slider";

interface Transformation {
  id: number;
  name: string;
  description: string;
  duration: string;
  result: string;
}

interface TrainerTransformationsProps {
  transformations: readonly Transformation[];
}

const SLIDER_BREAKPOINTS = [{ width: 1024, itemsPerPage: 2 }];

const TransformationCard = memo(function TransformationCard({
  item,
}: {
  item: Transformation;
}) {
  return (
    <div className="group relative bg-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors h-full">
      {/* Image Container */}
      <div className="aspect-4/3 relative flex">
        {/* Before */}
        <div className="w-1/2 bg-zinc-800 relative border-r border-zinc-950/50 group-hover:w-[45%] transition-[width] duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-zinc-500 text-sm font-medium">PRZED</span>
          </div>
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-zinc-400">
            Start
          </div>
        </div>

        {/* After */}
        <div className="w-1/2 bg-zinc-700 relative group-hover:w-[55%] transition-[width] duration-500">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-zinc-300 text-sm font-medium">PO</span>
          </div>
          <div className="absolute top-3 right-3 bg-white text-black px-2 py-1 rounded text-xs font-bold">
            Efekt
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-xl text-white">{item.name}</h3>
            <p className="text-zinc-500 text-sm mt-1">{item.duration}</p>
          </div>
          <div className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/10">
            {item.result}
          </div>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {item.description}
        </p>
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
      className={`absolute ${
        isPrev ? "-left-4" : "-right-4"
      } top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-white hover:bg-white hover:text-black transition-[background-color,color] hidden md:flex`}
      aria-label={isPrev ? "Poprzedni" : "Następny"}
    >
      <Icon className="w-6 h-6" />
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
    <div className="mt-12 flex justify-center items-center gap-3">
      {dots.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`transition-[width,background-color] duration-300 rounded-full ${
            currentIndex === index
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-zinc-700 hover:bg-zinc-500"
          }`}
          aria-label={`Idź do slajdu ${index + 1}`}
        />
      ))}
    </div>
  );
});

export function TrainerTransformations({
  transformations,
}: TrainerTransformationsProps) {
  const {
    currentIndex,
    maxIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    translateX,
  } = useSlider({
    totalItems: transformations.length,
    breakpoints: SLIDER_BREAKPOINTS,
  });

  if (transformations.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-white mr-2" />
            Efekty pracy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Przemiany <span className="text-zinc-400">Podopiecznych</span>
          </h2>
        </header>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          <SliderNavButton direction="prev" onClick={prevSlide} />
          <SliderNavButton direction="next" onClick={nextSlide} />

          {/* Slides Track */}
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${translateX}%)` }}
            >
              {transformations.map((item) => (
                <div key={item.id} className="w-full lg:w-1/2 shrink-0 px-3">
                  <TransformationCard item={item} />
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
      </div>
    </section>
  );
}

