import { CheckCircle2 } from "lucide-react";
import AboutImage from "@/assets/image_one.jpg";
import Image from "next/image";

const FEATURES = [
  "Treningi siłowe i motoryczne dopasowane do Twoich celów",
  "Indywidualne plany dietetyczne i wsparcie żywieniowe",
  "Przygotowanie do zawodów fitness i kulturystycznych",
  "Kompleksowa opieka trenerska 24/7",
] as const;

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-zinc-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-zinc-800 to-zinc-700 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Placeholder for couple photo */}
              <Image
                src={AboutImage}
                priority
                alt="Dariusz i Asia Sklarczyk - Trenerzy Personalni"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-xl shadow-xl max-w-[200px] hidden sm:block">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-medium text-zinc-600 leading-tight mt-1">
                Lat doświadczenia w treningu personalnym
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-white mr-2" />
                Trenerzy Personalni Bielsko-Biała
              </div>
              <h1 className="text-3xl md:text-4xl leading-tight font-bold text-white mb-4">
                Dariusz i Asia Sklarczyk –{" "}
                <span className="text-zinc-400">Twoi trenerzy personalni</span>
              </h1>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Jesteśmy certyfikowanymi{" "}
                <strong className="text-zinc-300">
                  trenerami personalnymi z Bielska-Białej
                </strong>
                , dla których sport to nie tylko praca, ale styl życia.
                Specjalizujemy się w{" "}
                <strong className="text-zinc-300">treningach siłowych</strong>,{" "}
                <strong className="text-zinc-300">treningu motorycznym</strong>{" "}
                oraz{" "}
                <strong className="text-zinc-300">
                  przygotowaniu do zawodów
                </strong>
                . Łączymy kobiecą i męską perspektywę, aby dostarczyć Ci
                kompleksowe wsparcie w drodze do lepszej wersji siebie.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <span className="text-zinc-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
              >
                Umów bezpłatną konsultację
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
