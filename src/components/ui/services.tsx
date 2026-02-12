"use client";

import {
  Dumbbell,
  Heart,
  Baby,
  Users,
  Stethoscope,
  Smile,
  Wifi,
  Apple,
  FileText,
  Gift,
} from "lucide-react";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Trening personalny",
    description: "Indywidualne podejście i pełne zaangażowanie trenera",
  },
  {
    icon: Heart,
    title: "Trening dla par",
    description: "Wspólne treningi, które zbliżają i motywują",
  },
  {
    icon: Baby,
    title: "Trening dla kobiet w ciąży i po porodzie",
    description: "Bezpieczne ćwiczenia dostosowane do Twojego ciała",
  },
  {
    icon: Users,
    title: "Trening dla seniorów",
    description: "Aktywność fizyczna dopasowana do Twoich możliwości",
  },
  {
    icon: Stethoscope,
    title: "Trening po kontuzjach i urazach",
    description: "Rehabilitacja i powrót do pełnej sprawności",
  },
  {
    icon: Smile,
    title: "Trening z dziećmi",
    description: "Zabawa i ruch dla najmłodszych",
  },
  {
    icon: Wifi,
    title: "Prowadzenie online",
    description: "Treningi z dowolnego miejsca na świecie",
  },
  {
    icon: Apple,
    title: "Prowadzenie dietetyczne",
    description: "Zbilansowana dieta wspierająca Twoje cele",
  },
  {
    icon: FileText,
    title: "Plany treningowe",
    description: "Gotowe programy treningowe do samodzielnej realizacji",
  },
  {
    icon: Gift,
    title: "Vouchery prezentowe",
    description: "Idealny prezent dla bliskich - zdrowie i forma",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="py-14 lg:py-20 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-72 h-72 bg-zinc-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-zinc-700/15 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm border border-zinc-700/50 bg-zinc-900/60 text-zinc-400 mb-4 tracking-wide uppercase backdrop-blur-sm">
            Oferta
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nasza <span className="text-zinc-500">oferta</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 transition-[background-color,border-color,transform] duration-500 hover:bg-zinc-900/60 backdrop-blur-sm hover:scale-[1.02]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accents */}
              {index === 0 && (
                <div className="absolute -top-1.5 -left-1.5 hidden lg:block opacity-20">
                  <div className="w-5 h-5 border-l border-t border-zinc-600/50 rounded-tl-lg" />
                </div>
              )}
              {index === 3 && (
                <div className="absolute -top-1.5 -right-1.5 hidden xl:block opacity-20">
                  <div className="w-5 h-5 border-r border-t border-zinc-600/50 rounded-tr-lg" />
                </div>
              )}
              {index === SERVICES.length - 4 && (
                <div className="absolute -bottom-1.5 -left-1.5 hidden xl:block opacity-20">
                  <div className="w-5 h-5 border-l border-b border-zinc-600/50 rounded-bl-lg" />
                </div>
              )}
              {index === SERVICES.length - 1 && (
                <div className="absolute -bottom-1.5 -right-1.5 hidden lg:block opacity-20">
                  <div className="w-5 h-5 border-r border-b border-zinc-600/50 rounded-br-lg" />
                </div>
              )}

              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-[background-color,border-color] duration-500">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-white transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-zinc-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-zinc-400 text-sm sm:text-base mb-4">
            Nie znalazłeś tego, czego szukasz?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-zinc-900/50 border border-zinc-700/40 text-white text-sm sm:text-base font-medium hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-[background-color,border-color,transform] duration-300 hover:scale-105 backdrop-blur-sm"
          >
            Skontaktuj się z nami
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
