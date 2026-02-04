import { TrainerTransformations } from "./trainer-transformations";
import { TrainerHero } from "./trainer-hero";
import { TrainerSpecializations } from "./trainer-specializations";
import { TrainerLocations } from "./trainer-locations";
import { TrainerCTA } from "./trainer-cta";

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
  ctaText: string;
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
  ctaText,
  transformations,
}: TrainerPageProps) {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
      <TrainerHero
        name={name}
        description={description}
        phone={phone}
        email={email}
        phoneHref={phoneHref}
        image={image}
      />
      <TrainerLocations />
      <TrainerCTA ctaText={ctaText} phoneHref={phoneHref} />
    </main>
  );
}
