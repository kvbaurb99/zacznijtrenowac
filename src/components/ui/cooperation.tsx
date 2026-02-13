"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  MessageCircle,
  Target,
  ClipboardList,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";

import AsiaImg from "@/assets/asiula.jpg";

const STEPS = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Darmowa konsultacja",
    description: "Poznajemy Twoje potrzeby i cele w bezpłatnej rozmowie",
  },
  {
    number: "02",
    icon: Target,
    title: "Analiza celu i zdrowia",
    description: "Szczegółowa analiza Twojego stanu zdrowia i możliwości",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Ustalenie planu",
    description: "Tworzymy spersonalizowany plan dopasowany do Ciebie",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Regularne wsparcie",
    description: "Jesteśmy z Tobą na każdym kroku Twojej drogi",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Kontrola efektów",
    description: "Monitorujemy postępy i dostosowujemy plan",
  },
] as const;

export function Cooperation() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="cooperation"
      className="py-14 lg:py-20 relative overflow-hidden bg-zinc-950"
    >
      {/* Background patterns */}
      <div className="absolute inset-0">
        {/* Diagonal lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.02)_0px,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_60px)]" />
        {/* Crossing diagonal lines */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.015)_0px,rgba(255,255,255,0.015)_1px,transparent_1px,transparent_80px)]" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-size-[32px_32px] opacity-60" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-zinc-700/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[480px] h-80 bg-zinc-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 lg:mb-20 transition-[opacity,transform] duration-1000 ease-out ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            Proces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Jak wygląda <span className="text-zinc-500">współpraca?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Prosty i przejrzysty proces, który pomoże Ci osiągnąć wymarzone
            rezultaty
          </p>
        </div>

        {/* Two-column layout: steps left, image right */}
        <div
          ref={stepsRef}
          className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start"
        >
          {/* Steps – vertical timeline */}
          <div className="flex-1 w-full lg:max-w-[560px]">
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-linear-to-b from-zinc-800 via-zinc-700/40 to-zinc-800" />

              <div className="space-y-2">
                {STEPS.map((step, index) => (
                  <div
                    key={index}
                    className={`group relative flex gap-6 sm:gap-7 transition-[opacity,transform] duration-700 ease-out ${
                      stepsInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: stepsInView
                        ? `${200 + index * 150}ms`
                        : "0ms",
                    }}
                  >
                    {/* Circle on the line */}
                    <div className="relative z-10 shrink-0 pt-6">
                      <div className="absolute inset-0 -m-2 pt-6 flex items-start justify-center">
                        <div className="w-14 h-14 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="relative w-14 h-14 rounded-full bg-zinc-900 border-2 border-zinc-800 group-hover:border-zinc-600 flex items-center justify-center shadow-lg shadow-black/30 transition-[border-color] duration-500">
                        <span className="text-base font-bold text-zinc-600 group-hover:text-white transition-colors duration-500">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-6 pr-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 shrink-0 transition-colors duration-500" />
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-zinc-500 text-sm sm:text-base leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`w-full lg:flex-1 transition-[opacity,transform] duration-1000 ease-out ${
              stepsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: stepsInView ? "500ms" : "0ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/40 lg:sticky lg:top-24">
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/20 rounded-tl-lg z-20" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/20 rounded-br-lg z-20" />

              <div className="aspect-[4/3] relative">
                <Image
                  src={AsiaImg}
                  alt="Trener personalny Asia Rozmus-Sklarczyk Bielsko-Biała"
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
