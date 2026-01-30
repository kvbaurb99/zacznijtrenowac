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

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 sm:gap-8 lg:gap-16 xl:gap-20 w-full max-w-[1400px] mx-auto">

          {/* Content */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Enhanced gradient backgrounds - visible on larger screens */}
            <div className="absolute -inset-8 sm:-inset-12 bg-linear-to-br from-zinc-600/10 sm:from-zinc-600/15 via-zinc-800/10 to-zinc-600/8 sm:to-zinc-600/12 rounded-3xl blur-2xl sm:blur-3xl animate-pulse-slow" />
            <div className="absolute -top-16 sm:-top-24 -left-8 sm:-left-16 w-40 sm:w-64 h-40 sm:h-64 bg-linear-to-br from-zinc-500/15 sm:from-zinc-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl hidden sm:block" />
            <div className="absolute -bottom-12 sm:-bottom-20 -right-8 sm:-right-12 w-48 sm:w-72 h-48 sm:h-72 bg-linear-to-tl from-zinc-600/10 sm:from-zinc-600/15 to-transparent rounded-full blur-2xl sm:blur-3xl hidden sm:block" />

            {/* Decorative patterns - dots grid */}
            <div className="absolute -left-4 sm:-left-8 top-1/4 w-20 sm:w-32 h-20 sm:h-32 opacity-[0.06] sm:opacity-[0.08] hidden md:block">
              <div className="w-full h-full bg-[radial-gradient(circle,#fff_1px,transparent_1px)] bg-size-[8px_8px]" />
            </div>

            {/* Decorative pattern - corner accent */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 hidden md:block opacity-15 sm:opacity-20">
              <div className="w-12 sm:w-16 h-12 sm:h-16 border-l-2 border-t-2 border-zinc-600/50 rounded-tl-xl sm:rounded-tl-2xl" />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 hidden md:block opacity-15 sm:opacity-20">
              <div className="w-12 sm:w-16 h-12 sm:h-16 border-r-2 border-b-2 border-zinc-600/50 rounded-br-xl sm:rounded-br-2xl" />
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute top-0 right-8 sm:right-12 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-zinc-500/40 rounded-full hidden md:block animate-float" />
            <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-4 w-2 sm:w-3 h-2 sm:h-3 bg-zinc-600/30 rotate-45 hidden md:block animate-float delay-300" />
            <div className="absolute top-1/3 -right-4 sm:-right-8 w-3 sm:w-4 h-px bg-linear-to-r from-zinc-500/50 to-transparent hidden md:block" />

            <div className="relative text-left">
              {/* Heading */}
              <h1 className="text-3xl min-[480px]:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 opacity-0 animate-fade-in-up">
                Zacznij
                {" "}
                <span className="text-zinc-500 relative inline-block">
                  Trenować
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-px sm:h-[2px] bg-linear-to-r from-zinc-500/60 via-zinc-400/40 to-transparent lg:from-zinc-500/60 lg:via-zinc-400/40" />
                </span>
              </h1>

              {/* Description */}
              <p className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up delay-100">
                Utrata zbędnych kilogramów, budowanie masy mięśniowej, poprawa konkretnych partii ciała, zwiększenie siły bądź wytrzymałości, a może chcesz powrócić do formy po ciąży? Dopasujemy trening do Twojej indywidualnej potrzeby oraz podpowiemy co jeść aby Twój trening był jeszcze skuteczniejszy.
              </p>

              {/* Features mini */}
              <div className="flex flex-wrap justify-start gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 opacity-0 animate-fade-in-up delay-200">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-700/40 backdrop-blur-sm hover:border-zinc-600/50 hover:bg-zinc-800/50 transition-all duration-300">
                  <Dumbbell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                  <span className="text-zinc-300 text-xs sm:text-sm">Treningi personalne</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-700/40 backdrop-blur-sm hover:border-zinc-600/50 hover:bg-zinc-800/50 transition-all duration-300">
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                  <span className="text-zinc-300 text-xs sm:text-sm">Plany dietetyczne</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900/50 border border-zinc-700/40 backdrop-blur-sm hover:border-zinc-600/50 hover:bg-zinc-800/50 transition-all duration-300">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                  <span className="text-zinc-300 text-xs sm:text-sm">Suplementacja</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 opacity-0 animate-fade-in-up delay-300">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-zinc-950 text-sm sm:text-base font-semibold hover:bg-zinc-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                >
                  Umów bezpłatną konsultację
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-zinc-700 text-zinc-300 text-sm sm:text-base font-semibold hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-900/50"
                >
                  Poznaj nas
                </Link>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-fade-in delay-200">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
              {/* Enhanced glow */}
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-linear-to-br from-zinc-700/15 sm:from-zinc-700/20 via-zinc-800/10 sm:via-zinc-800/15 to-zinc-700/15 sm:to-zinc-700/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />

              {/* Decorative elements */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border border-zinc-700/30 sm:border-zinc-700/40 rounded-full hidden sm:block animate-float" />
              <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -left-2 sm:-left-3 lg:-left-4 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 border border-zinc-700/25 sm:border-zinc-700/30 rounded-full hidden sm:block animate-float delay-500" />

              {/* Additional decorative lines */}
              <div className="absolute -top-8 sm:-top-10 lg:-top-12 right-8 sm:right-10 lg:right-12 w-14 sm:w-16 lg:w-20 h-px bg-linear-to-r from-transparent via-zinc-600/40 to-transparent hidden md:block" />
              <div className="absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 left-8 sm:left-10 lg:left-12 w-12 sm:w-14 lg:w-16 h-px bg-linear-to-r from-zinc-600/40 to-transparent hidden md:block" />

              {/* Collage grid */}
              <div className="relative grid grid-cols-11 gap-2 sm:gap-2.5 md:gap-3">
                {/* Large image - spans 7 columns and 2 rows */}
                <div className="col-span-7 row-span-2 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800/40 shadow-lg sm:shadow-xl shadow-black/30 opacity-0 animate-fade-in-up delay-300">
                  <div className="relative h-full min-h-[320px] min-[480px]:min-h-[380px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[580px]">
                    <Image
                      src={HeroImage}
                      alt="Dariusz Sklarczyk Asia Rozmus-Sklarczyk Trener Personalny Bielsko-Biała"
                      fill
                      priority
                      fetchPriority="high"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/70 via-transparent to-zinc-950/10" />
                  </div>
                </div>

                {/* Top right image */}
                <div className="col-span-4 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800/40 shadow-lg sm:shadow-xl shadow-black/30 opacity-0 animate-fade-in-up delay-400">
                  <div className="relative h-[155px] min-[480px]:h-[185px] sm:h-[205px] md:h-[235px] lg:h-[285px]">
                    <Image
                      src={HeroImage2}
                      alt="Asia Rozmus-Sklarczyk Trener Personalny Bielsko-Biała - Zdjęcie drugie"
                      fill
                      sizes="(max-width: 640px) 35vw, (max-width: 1024px) 25vw, 200px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Bottom right image */}
                <div className="col-span-4 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800/40 shadow-lg sm:shadow-xl shadow-black/30 opacity-0 animate-fade-in-up delay-500">
                  <div className="relative h-[155px] min-[480px]:h-[185px] sm:h-[205px] md:h-[235px] lg:h-[285px]">
                    <Image
                      src={HeroImage3}
                      alt="Asia Rozmus-Sklarczyk Trener Personalny Bielsko-Biała - Zdjęcie trzecie"
                      fill
                      sizes="(max-width: 640px) 35vw, (max-width: 1024px) 25vw, 200px"
                      className="object-cover object-bottom"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-3 sm:mt-4 text-left opacity-0 animate-fade-in delay-600 hidden md:block">
                <p className="text-zinc-500 text-xs sm:text-sm">Dariusz Sklarczyk & Asia Rozmus-Sklarczyk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
