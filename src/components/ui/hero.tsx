"use client";

import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Target, TrendingUp } from "lucide-react";
import HeroImage from "@/assets/test.jpeg";

export function Hero() {
  return (
    <header className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-zinc-800/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-zinc-800/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-zinc-700/8 rounded-full blur-[100px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-size-[80px_80px]" />

        {/* Diagonal lines decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-[0.03]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_80px)]" />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-[10%] w-2 h-2 bg-zinc-600 rounded-full hidden lg:block" />
      <div className="absolute top-48 left-[15%] w-1 h-1 bg-zinc-700 rounded-full hidden lg:block" />
      <div className="absolute bottom-32 left-[8%] w-3 h-3 border border-zinc-800 rounded-full hidden lg:block" />
      <div className="absolute top-1/2 right-[5%] w-20 h-20 border border-zinc-800/30 rounded-full hidden xl:block" />
      <div className="absolute bottom-40 right-[12%] w-1.5 h-1.5 bg-zinc-600 rounded-full hidden lg:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 w-full max-w-7xl mx-auto">

          {/* Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Zacznij
              {" "}
              <span className="text-zinc-500">Trenować</span>
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Dołącz do grona naszych podopiecznych i odkryj swój pełny potencjał.
              Oferujemy profesjonalne treningi personalne, indywidualne plany żywieniowe
              oraz pełne wsparcie na każdym etapie Twojej transformacji.
            </p>

            {/* Features mini */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-800/30">
                <Dumbbell className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-400 text-sm">Treningi personalne</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-800/30">
                <Target className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-400 text-sm">Plany dietetyczne</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/30 border border-zinc-800/30">
                <TrendingUp className="w-4 h-4 text-zinc-500" />
                <span className="text-zinc-400 text-sm">Suplementacja</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold hover:bg-zinc-100 transition-all duration-300 hover:scale-105"
              >
                Umów bezpłatną konsultację
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300"
              >
                Poznaj nas
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-zinc-800/20 rounded-3xl blur-2xl" />

              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 w-28 h-28 border border-zinc-800/40 rounded-full hidden lg:block" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-zinc-800/30 rounded-full hidden lg:block" />
              <div className="absolute top-1/2 -right-3 w-6 h-6 border border-zinc-700/40 rounded-full hidden lg:block" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800/40 shadow-2xl shadow-black/40 max-h-[620px]">
                <Image
                  src={HeroImage}
                  alt="Dariusz Sklarczyk i Asia Rozmus-Sklarczyk - Trenerzy Personalni Bielsko-Biała"
                  priority
                  className="w-full h-full object-cover object-top"
                  quality={95}
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-zinc-950/90 via-zinc-950/40 to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/80 text-md font-bold">Dariusz Sklarczyk & Asia Rozmus-Sklarczyk</p>
                  <p className="text-zinc-400 text-sm mt-1">Trenerzy Personalni • Bielsko-Biała</p>
                </div>
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-8 -left-3 w-2 h-2 bg-zinc-600 rounded-full hidden lg:block" />
              <div className="absolute bottom-1/3 -right-2 w-1.5 h-1.5 bg-zinc-500 rounded-full hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
