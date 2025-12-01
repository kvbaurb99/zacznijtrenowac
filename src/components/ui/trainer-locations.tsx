import { MapPin } from "lucide-react";

interface Location {
  name: string;
  address: string;
}

interface TrainerLocationsProps {
  locations: readonly Location[];
}

export function TrainerLocations({ locations }: TrainerLocationsProps) {
  const locationLabel = locations.length > 1 ? "Lokalizacje" : "Lokalizacja";

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(255,255,255,0.03)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/10 mb-6">
            <MapPin className="w-4 h-4 text-white/70" />
            <span className="text-xs text-white/70 tracking-widest uppercase">
              {locationLabel}
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
        <div
          className={`grid grid-cols-1 gap-6 max-w-4xl mx-auto ${
            locations.length > 1 ? "md:grid-cols-2" : ""
          }`}
        >
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative p-8 backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-5 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.08] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.12] group-hover:border-white/[0.15] transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-white/80" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {location.name}
                  </h3>
                  <p className="text-zinc-500">{location.address}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

