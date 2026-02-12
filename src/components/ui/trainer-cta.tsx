import { Phone, ArrowRight } from "lucide-react";

interface TrainerCTAProps {
  ctaText: string;
  phoneHref: string;
}

export function TrainerCTA({ ctaText, phoneHref }: TrainerCTAProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.04)_0%,transparent_60%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            {ctaText} na{" "}
            <span className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent">
              transformację?
            </span>
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
            Skontaktuj się ze mną i rozpocznij swoją drogę do lepszej wersji
            siebie.
          </p>

          <a
            href={phoneHref}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-medium text-base rounded-full transition-[transform,box-shadow] duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
          >
            <Phone className="w-5 h-5" />
            <span>Zadzwoń teraz</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

