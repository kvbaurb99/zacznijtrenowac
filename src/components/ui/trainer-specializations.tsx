import { Dumbbell, CheckCircle2 } from "lucide-react";

interface TrainerSpecializationsProps {
  specializations: readonly string[];
}

export function TrainerSpecializations({
  specializations,
}: TrainerSpecializationsProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/10 mb-6">
            <Dumbbell className="w-4 h-4 text-white/70" />
            <span className="text-xs text-white/70 tracking-widest uppercase">
              Specjalizacje
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            Obszary{" "}
            <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">
              ekspertyzy
            </span>
          </h2>
          <p className="text-base text-zinc-500 max-w-xl mx-auto">
            Kompleksowe wsparcie w różnych dziedzinach treningu personalnego
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group relative p-8 backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] rounded-2xl transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.08] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.12] group-hover:border-white/[0.15] transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6 text-white/80" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white group-hover:text-white transition-colors">
                    {spec}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

