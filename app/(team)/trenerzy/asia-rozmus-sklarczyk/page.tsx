import { TrainerPage } from "@/src/components/ui/trainer-page";
import AsiaImage from "@/assets/asia.jpg";

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

const TRANSFORMATIONS = [
  {
    id: 1,
    name: "Anna Kowalska",
    description:
      "Redukcja masy ciała po ciąży. Bezpieczny trening i dieta dostosowana do karmienia piersią. Powrót do formy sprzed ciąży.",
    duration: "6 miesięcy",
    result: "-15kg",
  },
  {
    id: 2,
    name: "Magdalena Nowak",
    description:
      "Kompleksowa transformacja sylwetki. Połączenie treningu siłowego z odpowiednią dietą przyniosło spektakularne efekty.",
    duration: "8 miesięcy",
    result: "-12kg",
  },
  {
    id: 3,
    name: "Katarzyna Wiśniewska",
    description:
      "Budowa siły i ujędrnienie ciała. Regularne treningi personalne doprowadziły do znaczącej poprawy składu ciała.",
    duration: "10 miesięcy",
    result: "+6kg mięśni",
  },
  {
    id: 4,
    name: "Joanna Zielińska",
    description:
      "Redukcja masy ciała i poprawa kondycji. Indywidualne podejście do treningu i żywienia zaowocowało trwałymi rezultatami.",
    duration: "7 miesięcy",
    result: "-18kg",
  },
] as const;

export default function AsiaSinglePage() {
  return (
    <TrainerPage
      name="Asia Rozmus-Sklarczyk"
      description="Doświadczona trenerka personalna specjalizująca się w treningach dla kobiet, redukcji masy ciała oraz kompleksowym podejściu łączącym trening z dietetyką. Pomagam kobietom osiągnąć ich cele w sposób bezpieczny i efektywny. Doświadczona trenerka personalna specjalizująca się w treningach dla kobiet, redukcji masy ciała oraz kompleksowym podejściu łączącym trening z dietetyką. Pomagam kobietom osiągnąć ich cele w sposób bezpieczny i efektywny. Doświadczona trenerka personalna specjalizująca się w treningach dla kobiet, redukcji masy ciała oraz kompleksowym podejściu łączącym trening z dietetyką. Pomagam kobietom osiągnąć ich cele w sposób bezpieczny i efektywny."
      phone="518 989 721"
      email="asiatrener@icloud.com"
      phoneHref="tel:+48518989721"
      image={AsiaImage.src}
      specializations={SPECIALIZATIONS}
      locations={LOCATIONS}
      ctaText="Gotowa"
      transformations={TRANSFORMATIONS}
    />
  );
}
