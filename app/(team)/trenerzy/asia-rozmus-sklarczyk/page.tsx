import { TrainerPage } from "@/src/components/ui/trainer-page";

const SPECIALIZATIONS = [
  "Trening personalny dla kobiet",
  "Redukcja masy ciała",
  "Trening siłowy",
  "Dietetyka sportowa",
  "Trening motoryczny",
] as const;

const LOCATIONS = [
  {
    name: "Kolista 23",
    address: "43-316 Bielsko-Biała",
  },
] as const;

export default function AsiaSinglePage() {
  return (
    <TrainerPage
      name="Asia Rozmus-Sklarczyk"
      description="Doświadczona trenerka personalna specjalizująca się w treningach dla kobiet, redukcji masy ciała oraz kompleksowym podejściu łączącym trening z dietetyką. Pomagam kobietom osiągnąć ich cele w sposób bezpieczny i efektywny."
      phone="518 989 721"
      email="asiatrener@icloud.com"
      phoneHref="tel:+48518989721"
      specializations={SPECIALIZATIONS}
      locations={LOCATIONS}
      ctaText="Gotowa"
    />
  );
}
