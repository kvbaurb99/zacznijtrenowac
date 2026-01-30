"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Gift, ArrowRight } from "lucide-react";

import Voucher1 from "@/assets/vouchers/1.jpeg";
import Voucher2 from "@/assets/vouchers/2.jpeg";

const VOUCHERS = [
  { src: Voucher1, alt: "Voucher prezentowy - Trening personalny" },
  { src: Voucher2, alt: "Voucher prezentowy - Pakiet treningowy" },
] as const;

export function Vouchers() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="vouchers" className="py-20 lg:py-28 bg-zinc-950 relative overflow-hidden">
      {/* Gradient tło – w stronę bieli, bardzo przezroczysty */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(255,255,255,0.02)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(255,255,255,0.016)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_90%,rgba(255,255,255,0.01)_0%,transparent_55%)]" />

      {/* Miękkie orby / blury – białe, bardzo delikatne */}
      <div className="absolute top-1/4 -left-24 w-80 h-80 bg-white/[0.028] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.015] rounded-full blur-[100px]" />

      {/* Delikatna siatka kropek */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-size-[32px_32px] opacity-40" />

      {/* Linie oddzielające */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-700/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 lg:mb-20 transition-all duration-1000 ease-out ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-900/60 text-zinc-400 text-sm mb-4 tracking-wide uppercase backdrop-blur-sm">
            <Gift className="w-4 h-4" />
            Prezent
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Vouchery <span className="text-zinc-500">prezentowe</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Podaruj bliskim coś wyjątkowego — voucher na trening personalny to prezent, który zmienia nawyki i dodaje energii.
          </p>
        </div>

        {/* Layout: text left (no frame), images right – creative collage */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28 xl:gap-32 items-center max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Left: Tekst – szersza kolumna z tłem */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_50%)] pointer-events-none" />
            <div className="relative space-y-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Idealny prezent na każdą okazję
              </h3>
              <div className="space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Voucher na trening personalny to sposób na to, by ktoś bliski zaczął dbać o siebie pod okiem profesjonalistów. Sprawdzi się jako prezent urodzinowy, świąteczny lub z okazji Dnia Matki czy Ojca.
                </p>
                <p>
                  Oferujemy vouchery na pojedyncze treningi oraz pakiety — dopasujemy formę do Twoich oczekiwań i budżetu. Wystarczy się skontaktować, a przygotujemy dla Ciebie indywidualną ofertę.
                </p>
              </div>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
                Zapytaj o voucher
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Kreatywna galeria – układ kaskadowy */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
            {/* Główne zdjęcie – lekko w lewo, lekkie obrócenie */}
            <div
              className={`absolute left-0 top-0 w-[62%] sm:w-[60%] z-10 transition-all duration-700 ease-out ${contentInView ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 -translate-x-6 -translate-y-3"
                }`}
              style={{ transitionDelay: contentInView ? "200ms" : "0ms" }}
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={VOUCHERS[0].src}
                  alt={VOUCHERS[0].alt}
                  fill
                  sizes="(max-width: 1024px) 62vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Drugie zdjęcie – nałożone z prawej, nachodzi na lewe, przeciwne obrócenie */}
            <div
              className={`absolute right-[8%] sm:right-[5%] top-1/4 w-[48%] sm:w-[46%] z-20 transition-all duration-700 ease-out ${contentInView ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-6 translate-y-3"
                }`}
              style={{ transitionDelay: contentInView ? "400ms" : "0ms" }}
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 rotate-6 hover:rotate-3 transition-transform duration-500">
                <Image
                  src={VOUCHERS[1].src}
                  alt={VOUCHERS[1].alt}
                  fill
                  sizes="(max-width: 1024px) 48vw, 23vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
