import { TrainerPage } from "@/src/components/ui/trainer-page";
import DarekImage from "@/assets/darek_2.jpg";

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

const TRANSFORMATIONS = [
  {
    id: 1,
    name: "Marek Kowalski",
    description:
      "Przygotowanie do pierwszych zawodów kulturystycznych. Kompleksowy plan treningowy i dietetyczny doprowadził do spektakularnych rezultatów.",
    duration: "12 miesięcy",
    result: "I miejsce",
  },
  {
    id: 2,
    name: "Tomasz Nowak",
    description:
      "Budowa masy mięśniowej od podstaw. Z systematycznym treningiem siłowym i odpowiednią dietą osiągnął imponujące rezultaty.",
    duration: "10 miesięcy",
    result: "+12kg mięśni",
  },
  {
    id: 3,
    name: "Krzysztof Wiśniewski",
    description:
      "Redukcja tkanki tłuszczowej i poprawa wydolności. Przygotowanie do maratonu połączone z treningiem siłowym.",
    duration: "8 miesięcy",
    result: "-18kg",
  },
  {
    id: 4,
    name: "Paweł Zieliński",
    description:
      "Przygotowanie do zawodów fitness. Indywidualne podejście do treningu i diety zaowocowało doskonałą formą startową.",
    duration: "14 miesięcy",
    result: "II miejsce",
  },
] as const;

export default function DariuszSinglePage() {
  return (
    <TrainerPage
      name="Dariusz Sklarczyk"
      image={DarekImage.src}
      description="Doświadczony trener personalny specjalizujący się w treningach siłowych, przygotowaniu do zawodów oraz treningach motorycznych. Pomagam osiągnąć Twoje cele treningowe poprzez indywidualne podejście i kompleksowe wsparcie. Doświadczony trener personalny specjalizujący się w treningach siłowych, przygotowaniu do zawodów oraz treningach motorycznych. Pomagam osiągnąć Twoje cele treningowe poprzez indywidualne podejście i kompleksowe wsparcie. Doświadczony trener personalny specjalizujący się w treningach siłowych, przygotowaniu do zawodów oraz treningach motorycznych. Pomagam osiągnąć Twoje cele treningowe poprzez indywidualne podejście i kompleksowe wsparcie."
      phone="600 851 174"
      email="darektrener@icloud.com"
      phoneHref="tel:+48600851174"
      specializations={SPECIALIZATIONS}
      locations={LOCATIONS}
      ctaText="Gotowy"
      transformations={TRANSFORMATIONS}
    />
  );
}
