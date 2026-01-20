import { Dumbbell, UtensilsCrossed, Pill, ArrowRight } from "lucide-react";
import AboutImage from "@/assets/IMG_6116.jpg";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <section id="about" className="mt-16 pb-16 bg-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-zinc-800/30 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4 tracking-wide uppercase">
            Poznaj nas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Twoi trenerzy <span className="text-zinc-500">personalni</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-lg max-w-2xl mx-auto">
            Razem tworzymy zespół, który pomoże Ci osiągnąć wymarzoną sylwetkę
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-linear-to-br from-zinc-700/20 via-zinc-800/10 to-zinc-900/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

              {/* Main image container */}
              <div className="relative aspect-3/4 w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-zinc-800/50 shadow-2xl shadow-black/50">
                <Image
                  src={AboutImage}
                  priority
                  alt="Dariusz Sklarczyk i Asia Rozmus-Sklarczyk - Trenerzy Personalni Bielsko-Biała"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Names and titles */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Dariusz Sklarczyk i Asia Rozmus-Sklarczyk
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-4 text-zinc-300 leading-relaxed text-lg">
              <p className="text-lg text-zinc-200">
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
              className="group flex items-center max-w-fit gap-3 px-8 py-4 backdrop-blur-xl bg-white/3 border border-white/10 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white/8 hover:border-white/20"
            >
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                Umów się na trening
              </span>
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700/80 transition-all duration-500 hover:bg-zinc-900/60"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon container */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center group-hover:border-zinc-600 group-hover:bg-zinc-800 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors duration-500" />
                </div>
                {/* Decorative dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors duration-500" />
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
    </section>
  );
}
