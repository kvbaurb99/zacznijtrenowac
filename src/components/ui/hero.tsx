"use client";
import Link from "next/link";
import Image from "next/image";
import { Dumbbell, Target, TrendingUp } from "lucide-react";
import HeroImage from "@/assets/hero/test.webp";
import HeroImage2 from '@/assets/hero/IMG_4036.webp'
import HeroImage3 from '@/assets/hero/asiadarek.webp'

export function Hero() {
  return (
    <header className="relative min-h-screen bg-zinc-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Diagonal lines decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden opacity-[0.03]">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#fff_0px,#fff_1px,transparent_1px,transparent_80px)]" />
        </div>
      </div>


      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-26 w-full max-w-[1400px] mx-auto">

          {/* Content */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Gradient background */}
            <div className="absolute -inset-8 bg-linear-to-b from-zinc-700/8 via-transparent to-zinc-700/6 rounded-3xl blur-2xl hidden lg:block" />
            <div className="absolute -top-20 left-0 right-0 h-48 bg-linear-to-b from-zinc-700/10 to-transparent blur-3xl hidden lg:block" />
            <div className="absolute -bottom-16 left-0 right-0 h-40 bg-linear-to-t from-zinc-700/8 to-transparent blur-3xl hidden lg:block" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-zinc-600/6 rounded-full blur-3xl hidden lg:block" />
            <div className="absolute -bottom-12 -right-8 w-56 h-56 bg-zinc-700/8 rounded-full blur-3xl hidden lg:block" />
            <div className="relative">
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Zacznij
                {" "}
                <span className="text-zinc-500">Trenować</span>
              </h1>

              {/* Description */}
              <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
                Utrata zbędnych kilogramów, budowanie masy mięśniowej, poprawa konkretnych partii ciała, zwiększenie siły bądź wytrzymałości, a może chcesz powrócić do formy po ciąży? Dopasujemy trening do Twojej indywidualnej potrzeby oraz podpowiemy co jeść aby Twój trening był jeszcze skuteczniejszy.
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
          </div>

          {/* Image Collage */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Subtle glow */}
              <div className="absolute -inset-4 bg-zinc-800/15 rounded-3xl blur-3xl" />

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-zinc-800/30 rounded-full hidden lg:block" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-zinc-800/20 rounded-full hidden lg:block" />

              {/* Collage grid */}
              <div className="relative grid grid-cols-11 gap-3">
                {/* Large image - spans 7 columns and 2 rows */}
                <div className="col-span-7 row-span-2 rounded-2xl overflow-hidden border border-zinc-800/40 shadow-xl shadow-black/30">
                  <div className="relative h-full min-h-[480px] lg:min-h-[580px]">
                    <Image
                      src={HeroImage}
                      alt="Dariusz Sklarczyk Asia Rozmus-Sklarczyk Trener Personalny Bielsko-Biała"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Top right image */}
                <div className="col-span-4 rounded-2xl overflow-hidden border border-zinc-800/40 shadow-xl shadow-black/30">
                  <div className="relative h-[235px] lg:h-[285px]">
                    <Image
                      src={HeroImage2}
                      alt="Asia Rozmus-Sklarczyk Trener Personalny Bielsko-Biała - Zdjęcie drugie"
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Bottom right image */}
                <div className="col-span-4 rounded-2xl overflow-hidden border border-zinc-800/40 shadow-xl shadow-black/30">
                  <div className="relative h-[235px] lg:h-[285px]">
                    <Image
                      src={HeroImage3}
                      alt="Asia Rozmus-Sklarczyk Trener Personalny Bielsko-Biała - Zdjęcie trzecie"
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-cover object-bottom"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 text-center lg:text-left">
                <p className="text-zinc-500 text-sm">Dariusz Sklarczyk & Asia Rozmus-Sklarczyk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
