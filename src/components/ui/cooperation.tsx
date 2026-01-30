"use client";

import { useInView } from "react-intersection-observer";
import { MessageCircle, Target, ClipboardList, HeartHandshake, TrendingUp } from "lucide-react";

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
    title: "Ustalenie planu treningowego",
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
    description: "Monitorujemy postępy i dostosowujemy plan do rezultatów",
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
    <section id="cooperation" className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-zinc-700/15 rounded-full blur-[100px]" />
      
      {/* Diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_100px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ease-out ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/60 text-zinc-400 text-sm mb-4 tracking-wide uppercase backdrop-blur-sm">
            Proces
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Jak wygląda <span className="text-zinc-500">współpraca?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Prosty i przejrzysty proces, który pomoże Ci osiągnąć wymarzone rezultaty
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-linear-to-b from-zinc-800 via-zinc-700/50 to-zinc-800 hidden sm:block" />

          <div className="space-y-8 lg:space-y-0">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-out ${
                  stepsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: stepsInView ? `${index * 150}ms` : "0ms",
                }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"
                    }`}
                  >
                    <div
                      className={`group relative p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm ml-16 sm:ml-20 lg:ml-0 ${
                        index % 2 === 0 ? "" : ""
                      }`}
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Number badge - mobile/tablet */}
                      <div className="absolute -left-12 sm:-left-14 top-1/2 -translate-y-1/2 lg:hidden">
                        <div className="relative">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center">
                            <span className="text-xs sm:text-sm font-bold text-white">{step.number}</span>
                          </div>
                          {/* Connector dot */}
                          <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-px h-4 bg-zinc-700/50" />
                        </div>
                      </div>

                      <div className="relative">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                          <step.icon className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                          <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Number - Desktop */}
                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-zinc-600/20 rounded-full blur-xl group-hover:bg-zinc-500/30 transition-colors duration-500" />
                      <div className="relative w-14 h-14 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-zinc-600 flex items-center justify-center transition-all duration-500">
                        <span className="text-lg font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
