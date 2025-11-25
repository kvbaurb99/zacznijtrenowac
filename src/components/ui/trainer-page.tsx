import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Dumbbell,
  Target,
  CheckCircle2,
} from "lucide-react";
import { TrainerTransformations } from "./trainer-transformations";

interface Location {
  name: string;
  address: string;
}

interface Transformation {
  id: number;
  name: string;
  description: string;
  duration: string;
  result: string;
}

interface TrainerPageProps {
  name: string;
  description: string;
  phone: string;
  email: string;
  phoneHref: string;
  image: string;
  specializations: readonly string[];
  locations: readonly Location[];
  ctaText: string; // "Gotowy" lub "Gotowa"
  transformations: readonly Transformation[];
}

export function TrainerPage({
  name,
  description,
  phone,
  email,
  phoneHref,
  image,
  specializations,
  locations,
  ctaText,
  transformations,
}: TrainerPageProps) {
  const locationLabel = locations.length > 1 ? "Lokalizacje" : "Lokalizacja";

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-8">
      {/* Hero Section */}
      <section className="relative pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

          {/* Diagonal lines pattern - dynamic fitness theme */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff06_1px,transparent_1px),linear-gradient(-45deg,#ffffff06_1px,transparent_1px)] bg-[size:60px_60px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* Radial lines pattern - energy/strength theme */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#ffffff04_45deg,transparent_90deg,#ffffff04_135deg,transparent_180deg,#ffffff04_225deg,transparent_270deg,#ffffff04_315deg,transparent_360deg)] mask-[radial-gradient(ellipse_60%_40%_at_50%_50%,transparent_40%,#000_70%,transparent_100%)]" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12  items-center">
            {/* Image Side */}
            <div className="relative group lg:col-span-2">
              {/* Bright gradient glow around image - using radial gradient for smooth edges */}
              <div
                className="absolute -inset-5 rounded-3xl blur-lg opacity-35 group-hover:opacity-50 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)",
                }}
              />
              <div
                className="absolute -inset-3 rounded-2xl blur-md opacity-30 group-hover:opacity-45 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)",
                }}
              />

              {/* Soft radial gradient for even glow */}
              <div
                className="absolute -inset-2 rounded-2xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 70%, transparent 100%)",
                }}
              />

              {/* Main image container */}
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                {/* Subtle gradient overlay on image */}
                <div className="absolute inset-0 bg-linear-to-br from-black/30 via-transparent to-black/20 z-10" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent z-10" />

                <Image
                  src={image}
                  fetchPriority="high"
                  alt={`${name} - Trener Personalny`}
                  fill
                  className="object-cover z-0"
                  priority
                />
              </div>

              {/* Floating bright decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/15 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-white/10 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-white/12 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            </div>

            {/* Content Side */}
            <div className="space-y-8 lg:col-span-3">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-white mr-2" />
                  Trener Personalny
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {name}
                </h1>
                <p className="text-lg text-zinc-300 leading-relaxed">
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

      {/* Transformations Section */}
      <TrainerTransformations transformations={transformations} />

      {/* Locations Section */}
      <section className="pb-16 pt-10 bg-black">
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
    </div>
  );
}
