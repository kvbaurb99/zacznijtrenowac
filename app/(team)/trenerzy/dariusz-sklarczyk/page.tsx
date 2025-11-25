import { TrainerPage } from "@/src/components/ui/trainer-page";

const SPECIALIZATIONS = [
  "Trening siłowy",
  "Przygotowanie do zawodów",
  "Trening motoryczny",
  "Budowa masy mięśniowej",
  "Redukcja tkanki tłuszczowej",
] as const;

const LOCATIONS = [
  {
    name: "Mariana Langiewicza 26",
    address: "43-300 Bielsko-Biała",
  },
  {
    name: "Kolista 23",
    address: "43-316 Bielsko-Biała",
  },
] as const;

export default function DariuszSinglePage() {
  return (
    <TrainerPage
      name="Dariusz Sklarczyk"
      description="Doświadczony trener personalny specjalizujący się w treningach siłowych, przygotowaniu do zawodów oraz treningach motorycznych. Pomagam osiągnąć Twoje cele treningowe poprzez indywidualne podejście i kompleksowe wsparcie."
      phone="600 851 174"
      email="darektrener@icloud.com"
      phoneHref="tel:+48600851174"
      specializations={SPECIALIZATIONS}
      locations={LOCATIONS}
      ctaText="Gotowy"
    />
  );
}
