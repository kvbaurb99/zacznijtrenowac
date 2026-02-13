import Image from "next/image";
import { MapPin } from "lucide-react";

import AquaFitnessLogo from "@/assets/aqua-fitness.png";
import CityFitLogo from "@/assets/city-fit-.webp";

const LOCATIONS = [
  { name: "Kolista 23", address: "43-316 Bielsko-Biała", logo: CityFitLogo, logoAlt: "Siłownia City Fit Bielsko-Biała" },
  { name: "Mariana Langiewicza 26", address: "43-300 Bielsko-Biała", logo: AquaFitnessLogo, logoAlt: "Siłownia Fitness Aqua Bielsko-Biała" },
] as const;

export function TrainerLocations() {
  return (
    <section className="relative pb-32 pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,255,255,0.03)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/10 mb-6">
            <MapPin className="w-4 h-4 text-white/70" />
            <span className="text-xs text-white/70 tracking-widest uppercase">
              Lokalizacje
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Gdzie{" "}
            <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">
              trenuję
            </span>
          </h2>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto md:grid-cols-2">
          {LOCATIONS.map((location, index) => (
            <div
              key={index}
              className="group relative p-8 backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5 relative z-10">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-white/[0.12] transition-colors duration-300">
                  <Image
                    src={location.logo}
                    alt={location.logoAlt}
                    width={88}
                    height={112}
                    className="w-full h-full object-contain object-center p-1.5"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {location.name}
                  </h3>
                  <p className="text-zinc-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 shrink-0 text-zinc-500" />
                    {location.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

