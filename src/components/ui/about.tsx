"use client";

import { Dumbbell, UtensilsCrossed, Pill, ArrowRight } from "lucide-react";
import AboutImage from "@/assets/IMG_6116.jpg";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Treningi personalne",
    description: "Indywidualnie dopasowane plany treningowe pod Twoje cele i możliwości",
  },
  {
    icon: UtensilsCrossed,
    title: "Plany dietetyczne",
    description: "Zbilansowana dieta wspierająca Twoje treningi i styl życia",
  },
  {
    icon: Pill,
    title: "Suplementacja",
    description: "Profesjonalne doradztwo w zakresie suplementów i odżywek",
  },
] as const;

export function About() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="mt-8 pb-16 bg-zinc-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl" />

      {/* Diagonal lines pattern - right side */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-[0.02] hidden lg:block">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#fff_0px,#fff_1px,transparent_1px,transparent_60px)]" />
      </div>

      {/* Vertical accent line */}
      <div className="absolute top-1/4 right-1/4 w-px h-48 bg-linear-to-b from-transparent via-zinc-600/20 to-transparent hidden xl:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-20 relative">
          {/* Decorative lines around header */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-12 bg-linear-to-b from-transparent via-zinc-700/30 to-zinc-600/20 hidden md:block" />
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-16 h-px bg-linear-to-r from-transparent to-zinc-700/20 hidden lg:block" />
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-16 h-px bg-linear-to-l from-transparent to-zinc-700/20 hidden lg:block" />

          <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/60 text-zinc-400 text-xs md:text-sm mb-4 tracking-wide uppercase backdrop-blur-sm">
            Poznaj nas
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Twoi trenerzy <span className="text-zinc-500">personalni</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            Razem tworzymy zespół, który pomoże Ci osiągnąć wymarzoną sylwetkę
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 lg:-inset-6 bg-linear-to-br from-zinc-700/20 via-zinc-800/10 to-zinc-900/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border border-zinc-700/30 rounded-full hidden lg:block" />
              <div className="absolute -bottom-6 -right-6 w-16 h-16 border border-zinc-700/20 rounded-full hidden lg:block" />

              {/* Corner accent lines */}
              <div className="absolute -top-2 -right-2 hidden lg:block opacity-30">
                <div className="w-8 h-8 border-r-2 border-t-2 border-zinc-600/50 rounded-tr-lg" />
              </div>
              <div className="absolute -bottom-2 -left-2 hidden lg:block opacity-30">
                <div className="w-8 h-8 border-l-2 border-b-2 border-zinc-600/50 rounded-bl-lg" />
              </div>

              {/* Main image container */}
              <div className="relative aspect-3/4 w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/50">
                <Image
                  src={AboutImage}
                  alt="Dariusz Sklarczyk i Asia Rozmus-Sklarczyk - Trenerzy Personalni Bielsko-Biała"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-zinc-950/10" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            ref={contentRef}
            className={`lg:col-span-7 relative transition-[opacity,transform] duration-1000 ease-out delay-200 ${contentInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-12"
              }`}
          >
            {/* Decorative gradient backgrounds */}
            <div className="absolute -inset-6 lg:-inset-10 bg-linear-to-br from-zinc-700/10 via-zinc-800/5 to-zinc-600/8 rounded-3xl blur-2xl hidden lg:block" />
            <div className="absolute -top-12 -right-8 w-40 h-40 bg-linear-to-br from-zinc-500/10 to-transparent rounded-full blur-2xl hidden lg:block" />
            <div className="absolute -bottom-8 -left-4 w-32 h-32 bg-linear-to-tl from-zinc-600/8 to-transparent rounded-full blur-2xl hidden lg:block" />

            {/* Corner accents */}
            <div className="absolute -top-3 -left-3 hidden lg:block opacity-20">
              <div className="w-12 h-12 border-l-2 border-t-2 border-zinc-600/50 rounded-tl-xl" />
            </div>
            <div className="absolute -bottom-3 -right-3 hidden lg:block opacity-20">
              <div className="w-12 h-12 border-r-2 border-b-2 border-zinc-600/50 rounded-br-xl" />
            </div>

            {/* Decorative line */}
            <div className="absolute top-1/2 -right-8 w-6 h-px bg-linear-to-r from-zinc-500/40 to-transparent hidden lg:block" />

            <div className="relative space-y-6 lg:pl-4">
              {/* Names and titles */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white relative inline-block">
                  Dariusz Sklarczyk i Asia Rozmus-Sklarczyk
                  <span className="absolute -bottom-2 left-0 w-24 h-px bg-linear-to-r from-zinc-500/50 to-transparent" />
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4 text-zinc-400 leading-relaxed text-base md:text-lg">
                <p className="text-base md:text-lg text-zinc-400">
                  Poznaliśmy się na siłowni — w miejscu, gdzie rodzi się siła, determinacja
                  i walka o lepszą wersję siebie. Nie wiedzieliśmy wtedy, że oprócz mięśni
                  i kondycji zbudujemy coś znacznie ważniejszego. Z treningu na trening,
                  z rozmowy na rozmowę, narodziła się piękna miłość, oparta na wzajemnym
                  wsparciu, motywacji i wspólnych celach.
                </p>
                <p>
                  Sport połączył nas od pierwszych chwil i do dziś jest ważną częścią
                  naszego życia. To nie tylko wspólne treningi, ale też codzienna inspiracja,
                  zdrowy styl życia i wzajemne dodawanie sobie energii — nawet w trudniejszych
                  momentach. Razem uczymy się wytrwałości, cierpliwości i radości z małych sukcesów.
                </p>
                <p>
                  Dziś wiemy, że siłownia była tylko początkiem. Prawdziwa siła jest w byciu
                  razem, w pasji, którą dzielimy, i w miłości, która rośnie z każdym wspólnym
                  krokiem — zarówno na treningowej macie, jak i w życiu.
                </p>
              </div>
              <Link
                href={"#contact"}
                className="group flex items-center max-w-fit gap-3 px-8 py-4 backdrop-blur-xl bg-zinc-900/50 border border-zinc-700/40 rounded-full font-medium text-white transition-[background-color,border-color,transform,box-shadow] duration-300 hover:scale-105 hover:bg-zinc-800/60 hover:border-zinc-600/50 hover:shadow-lg hover:shadow-zinc-900/50"
              >
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-zinc-300 group-hover:text-white transition-colors text-sm md:text-base">
                  Umów się na trening
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="mt-20 relative">
          {/* Decorative elements for services */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-px bg-linear-to-r from-transparent via-zinc-700/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 transition-[opacity,transform,background-color,border-color] duration-700 hover:bg-zinc-900/60 backdrop-blur-sm ${servicesInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: servicesInView ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent on first and last card */}
                {index === 0 && (
                  <div className="absolute -top-2 -left-2 hidden md:block opacity-20">
                    <div className="w-6 h-6 border-l border-t border-zinc-600/50 rounded-tl-lg" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -bottom-2 -right-2 hidden md:block opacity-20">
                    <div className="w-6 h-6 border-r border-b border-zinc-600/50 rounded-br-lg" />
                  </div>
                )}

                {/* Icon container */}
                <div className="relative mb-5">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-[background-color,border-color] duration-500">
                    <service.icon className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-zinc-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
