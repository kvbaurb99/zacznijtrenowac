import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Dumbbell,
  Target,
  CheckCircle2,
} from "lucide-react";
import trainerPlaceholder from "@/assets/image_one.jpg";

interface Location {
  name: string;
  address: string;
}

interface TrainerPageProps {
  name: string;
  description: string;
  phone: string;
  email: string;
  phoneHref: string;
  specializations: readonly string[];
  locations: readonly Location[];
  ctaText: string; // "Gotowy" lub "Gotowa"
}

export function TrainerPage({
  name,
  description,
  phone,
  email,
  phoneHref,
  specializations,
  locations,
  ctaText,
}: TrainerPageProps) {
  const locationLabel = locations.length > 1 ? "Lokalizacje" : "Lokalizacja";

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-8">
      {/* Hero Section */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-zinc-800 to-zinc-700 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <Image
                  src={trainerPlaceholder}
                  alt={`${name} - Trener Personalny`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-white mr-2" />
                  Trener Personalny
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {name}
                </h1>
                <p className="text-xl text-zinc-300 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={phoneHref}
                  className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    {phone}
                  </span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">
                    {email}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-zinc-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
                <Dumbbell className="w-4 h-4 mr-2" />
                Specjalizacje
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Obszary ekspertyzy
              </h2>
              <p className="text-zinc-400">
                Kompleksowe wsparcie w różnych dziedzinach treningu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors group"
                >
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {spec}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {locationLabel}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Gdzie prowadzę treningi
              </h2>
            </div>

            <div
              className={`grid grid-cols-1 ${
                locations.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
              } gap-6 ${locations.length === 1 ? "max-w-md mx-auto" : ""}`}
            >
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-800 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {location.name}
                      </h3>
                      <p className="text-zinc-400">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-8 md:p-12 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <Target className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gotowy/a na zmianę?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Umów się na bezpłatną konsultację i rozpocznij swoją drogę do
                lepszej formy już dziś.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={phoneHref}
                  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Zadzwoń teraz
                </a>
                <a
                  href={`mailto:${email}`}
                  className="px-8 py-4 bg-zinc-800 text-white rounded-full font-semibold hover:bg-zinc-700 transition-colors inline-flex items-center justify-center gap-2 border border-zinc-700"
                >
                  <Mail className="w-5 h-5" />
                  Napisz e-mail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

