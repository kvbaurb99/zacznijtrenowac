import Image from "next/image";
import { Phone, Mail, ArrowRight, Sparkles, Trophy } from "lucide-react";

interface TrainerHeroProps {
  name: string;
  description: string;
  phone: string;
  email: string;
  phoneHref: string;
  image: string;
}

export function TrainerHero({
  name,
  description,
  phone,
  email,
  phoneHref,
  image,
}: TrainerHeroProps) {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[10%] -right-[20%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_60%)] animate-pulse" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,transparent_60%)] animate-pulse [animation-delay:3s]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 relative lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          {/* Image Column */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

              {/* Decorative Frames */}
              <div className="absolute -inset-3 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.15] transition-colors duration-500" />
              <div className="absolute -inset-6 rounded-3xl border border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-500" />

              {/* Main Image Container */}
              <div className="relative aspect-3/4 rounded-2xl border border-white/10">
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent z-10" />

                <Image
                  src={image}
                  alt={`${name} - Trener Personalny`}
                  fill
                  className="object-cover transition-transform duration-700 rounded-xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Certyfikowany</p>
                        <p className="font-medium text-white">
                          Trener Personalny
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] animate-bounce [animation-duration:6s]" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] animate-bounce [animation-duration:8s] [animation-delay:1s]" />
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/[0.03] border border-white/10">
                <Sparkles className="w-4 h-4 text-white/70" />
                <span className="text-xs text-white/70 tracking-widest uppercase">
                  Trener Personalny
                </span>
              </div>

              {/* Name */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-medium tracking-tight leading-[0.95]">
                  {name}
                </h1>
              </div>

              {/* Decorative Line */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-linear-to-r from-white/30 via-white/10 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>

              {/* Description */}
              <div className="max-w-3xl trainer-description">
                {description.includes("<") ? (
                  <div
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                ) : (
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={phoneHref}
                  className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>{phone}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>

                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-white/[0.08] hover:border-white/20"
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
      </div>
    </section>
  );
}

