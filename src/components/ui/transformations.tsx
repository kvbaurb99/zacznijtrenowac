"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

import Img0 from "@/assets/transformations/image0.jpeg";
import Img7 from "@/assets/transformations/image7.jpeg";
import Img4975 from "@/assets/transformations/IMG_4975.jpg";
import Img4997 from "@/assets/transformations/IMG_4997.jpg";
import Img4996 from "@/assets/transformations/IMG_4996.jpg";

const TRANSFORMATIONS = [
  { id: 1, src: Img0, alt: "Metamorfoza podopiecznego - trening personalny Bielsko-Biała" },
  { id: 2, src: Img4975, alt: "Efekty treningu personalnego - Zacznij Trenować Bielsko-Biała" },
  { id: 3, src: Img7, alt: "Przemiana sylwetki - trener personalny Bielsko-Biała" },
  { id: 4, src: Img4997, alt: "Rezultaty treningów personalnych - Bielsko-Biała" },
  { id: 5, src: Img4996, alt: "Transformacja sylwetki - Zacznij Trenować Bielsko-Biała" },
];

export function Transformations() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStart = useRef(0);
  const dragCurrent = useRef(0);
  const sliderWidth = useRef(0);

  const maxIndex = Math.max(0, TRANSFORMATIONS.length - slidesPerView);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSlidesPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const goTo = useCallback(
    (i: number) => setCurrentIndex(Math.min(Math.max(0, i), maxIndex)),
    [maxIndex]
  );

  const next = useCallback(
    () => setCurrentIndex((p) => (p >= maxIndex ? 0 : p + 1)),
    [maxIndex]
  );

  const prev = useCallback(
    () => setCurrentIndex((p) => (p <= 0 ? maxIndex : p - 1)),
    [maxIndex]
  );

  // Slide width calculations
  // Mobile: each slide is 82% of container, gap 12px
  // Tablet: each slide is 50% of container
  // Desktop: each slide is 33.333% of container
  const gap = 12; // px

  const getTranslateX = useCallback(() => {
    if (!sliderRef.current) return 0;
    const containerW = sliderRef.current.offsetWidth;

    if (slidesPerView === 1) {
      // Mobile: slide width = 82% of container
      const slideW = containerW * 0.82;
      return -(currentIndex * (slideW + gap)) + dragOffset;
    }
    // Tablet/Desktop: standard percentage-based
    const slideW = containerW / slidesPerView;
    return -(currentIndex * slideW) + dragOffset;
  }, [currentIndex, slidesPerView, dragOffset]);

  // Touch / pointer drag handling
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (slidesPerView > 1 && e.pointerType === "mouse") return; // arrows on desktop
      setIsDragging(true);
      dragStart.current = e.clientX;
      dragCurrent.current = e.clientX;
      sliderWidth.current = sliderRef.current?.offsetWidth ?? 0;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [slidesPerView]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      dragCurrent.current = e.clientX;
      const diff = e.clientX - dragStart.current;
      setDragOffset(diff);
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragCurrent.current - dragStart.current;
    const threshold = sliderWidth.current * 0.15;

    if (diff < -threshold) {
      setCurrentIndex((p) => Math.min(p + 1, maxIndex));
    } else if (diff > threshold) {
      setCurrentIndex((p) => Math.max(p - 1, 0));
    }
    setDragOffset(0);
  }, [isDragging, maxIndex]);

  const translateX = getTranslateX();
  const dotCount = maxIndex + 1;

  return (
    <section
      id="transformations"
      className="py-14 md:py-20 bg-zinc-950 text-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_20%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_75%_80%,rgba(255,255,255,0.025)_0%,transparent_50%)]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-zinc-700/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-[480px] h-80 bg-zinc-600/12 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-size-[40px_40px] opacity-50" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-700/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            Realne efekty
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Metamorfozy
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base md:text-lg">
            Zobacz przemianę naszych podopiecznych z Bielska-Białej. Każda historia to dowód na
            to, że z determinacją i wsparciem trenera personalnego wszystko jest możliwe.
          </p>
        </header>

        {/* Slider */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Nav arrows – desktop only */}
          <button
            onClick={prev}
            className="absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:bg-white hover:text-zinc-900 hover:border-white transition-[background-color,color,border-color] duration-300 hidden md:flex shadow-xl backdrop-blur-sm"
            aria-label="Poprzedni"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:bg-white hover:text-zinc-900 hover:border-white transition-[background-color,color,border-color] duration-300 hidden md:flex shadow-xl backdrop-blur-sm"
            aria-label="Następny"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Slider track */}
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-2xl touch-pan-y select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: isDragging ? "none" : "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)",
                gap: `${gap}px`,
              }}
            >
              {TRANSFORMATIONS.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    slidesPerView === 1
                      ? "w-[82%] shrink-0"
                      : slidesPerView === 2
                        ? "w-[calc(50%-6px)] shrink-0"
                        : "w-[calc(33.333%-8px)] shrink-0"
                  }
                >
                  {/* Card */}
                  <div className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700/80 transition-[border-color] duration-500">
                    <div className="aspect-[4/5] relative">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        draggable={false}
                        loading="lazy"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/10 z-10" />

                      {/* Number badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Bottom info */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-500">
                        <p className="text-sm text-white/80 font-medium">
                          {item.alt}
                        </p>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-3 right-3 w-5 h-5 border-r border-t border-white/0 group-hover:border-white/30 rounded-tr-md transition-[border-color] duration-500 z-20" />
                      <div className="absolute bottom-3 left-3 w-5 h-5 border-l border-b border-white/0 group-hover:border-white/30 rounded-bl-md transition-[border-color] duration-500 z-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-[width,background-color] duration-300 rounded-full ${
                currentIndex === i
                  ? "w-10 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Idź do slajdu ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex text-sm md:text-base items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 transition-[background-color,box-shadow] duration-300 hover:shadow-lg hover:shadow-white/20 group"
          >
            Rozpocznij swoją przemianę
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
