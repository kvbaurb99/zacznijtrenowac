import Image from "next/image";
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

import ServiceImg from "@/assets/hero/IMG_4036.webp";

const SERVICES = [
  { icon: Dumbbell, title: "Trening personalny" },
  { icon: Heart, title: "Trening dla par" },
  { icon: Baby, title: "Trening dla kobiet w ciąży oraz po porodzie" },
  { icon: Users, title: "Trening dla seniorów" },
  { icon: Stethoscope, title: "Trening po kontuzjach i urazach" },
  { icon: Smile, title: "Trening z dziećmi" },
  { icon: Wifi, title: "Prowadzenie online" },
  { icon: Apple, title: "Prowadzenie dietetyczne" },
  { icon: FileText, title: "Plany treningowe" },
  { icon: Gift, title: "Vouchery prezentowe" },
] as const;

export function Services() {
  return (
    <section
      id="services"
      className="py-14 lg:py-20 bg-zinc-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Square grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black_30%,transparent_100%)]" />
        {/* Gradient sweeps */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_20%,rgba(255,255,255,0.035)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_15%_80%,rgba(255,255,255,0.025)_0%,transparent_50%)]" />
        {/* Gradient orbs */}
        <div className="absolute -top-20 right-1/4 w-[500px] h-[350px] bg-zinc-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-zinc-600/12 rounded-full blur-3xl" />
      </div>
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white" />
            Usługi
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Nasza <span className="text-zinc-500">oferta</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Kompleksowe wsparcie treningowe w Bielsku-Białej dopasowane do Twoich indywidualnych
            potrzeb i celów
          </p>
        </div>

        {/* Two-column layout */}
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Left column – service tiles */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className="group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-[background-color,border-color] duration-500"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-[background-color,border-color] duration-500">
                    <service.icon className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-zinc-500 group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <span className="relative text-sm sm:text-[15px] text-zinc-300 group-hover:text-white transition-colors duration-500 leading-snug">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA – desktop only */}
            <div className="hidden lg:block mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-zinc-950 font-semibold text-sm sm:text-base rounded-full hover:bg-zinc-100 transition-[background-color,box-shadow] duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                Umów bezpłatną konsultację
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column – image */}
          <div className="w-full lg:w-auto lg:shrink-0 lg:basis-[380px] xl:basis-[420px]">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/40 lg:sticky lg:top-24">
              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-white/20 rounded-tl-lg z-20" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-white/20 rounded-br-lg z-20" />

              <div className="aspect-[3/4] relative">
                <Image
                  src={ServiceImg}
                  alt="Trener personalny Bielsko-Biała - Zacznij Trenować"
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA – mobile only, after image */}
        <div className="lg:hidden mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-zinc-950 font-semibold text-sm sm:text-base rounded-full hover:bg-zinc-100 transition-[background-color,box-shadow] duration-300 hover:shadow-lg hover:shadow-white/20"
          >
            Umów bezpłatną konsultację
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
