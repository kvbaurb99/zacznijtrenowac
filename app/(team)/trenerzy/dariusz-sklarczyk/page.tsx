import { TrainerPage } from "@/src/components/ui/trainer-page";
import DarekImage from "@/assets/darek.webp";


const SPECIALIZATIONS = [
  "Trening siłowy",
  "Przygotowanie do zawodów",
  "Budowa masy mięśniowej",
  "Redukcja tkanki tłuszczowej",
  "Trening motoryczny",
  "Poprawa kondycji i zdrowia",
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
      description={`<p>Cześć, jestem Darek — trener personalny z ponad 20-letnim doświadczeniem, absolwent AWF w Katowicach i pasjonat sportów sylwetkowych od 15. roku życia.</p>

<p>Przez dwie dekady pracy na siłowni pomogłem setkom osób odmienić ich sylwetki, zdrowie i pewność siebie. Liczne kursy i szkolenia dały mi solidne fundamenty, ale to właśnie lata praktyki z podopiecznymi nauczyły mnie najważniejszego — każdy człowiek jest inny i zasługuje na indywidualne podejście.</p>

<p>Nie opieram się na przypadkowych planach czy szablonach. Tworzę skuteczne, dopasowane strategie, które realnie działają – niezależnie od tego, czy chcesz schudnąć, nabrać masy mięśniowej, poprawić kondycję czy przygotować się do startu w zawodach.</p>

<p>Sam wiem, co znaczy ciężka praca i konsekwencja. Startowałem w kulturystyce ekstremalnej 100+, zdobywając m.in.:</p>
<ul>
  <li>🏅 Złoty medal – Debiuty 2020 (Kielce)</li>
  <li>🥈 Srebrny medal – Czechy 2023</li>
  <li>🥉 Brązowy medal – Mistrzostwa Wielkopolski 2023</li>
</ul>

<p>Na co dzień jestem też tatą i mężem, więc doskonale rozumiem, jak trudno jest połączyć treningi, pracę i życie rodzinne. Dlatego pomagam moim podopiecznym wypracować formę w sposób realny, zdrowy i dopasowany do ich możliwości.</p>

<p>Jeśli chcesz:</p>
<ul>
  <li>✔ zrzucić zbędne kilogramy</li>
  <li>✔ zbudować masę mięśniową</li>
  <li>✔ poprawić zdrowie i pewność siebie</li>
  <li>✔ trenować skutecznie i z głową</li>
</ul>
<p>— to chętnie Ci w tym pomogę.</p>

<p><strong>Zacznijmy pracować nad Twoją najlepszą wersją.</strong></p>`}
      phone="600 851 174"
      email="darektrener@icloud.com"
      phoneHref="tel:+48600851174"
      specializations={SPECIALIZATIONS}
      ctaText="Gotowy"
      transformations={TRANSFORMATIONS}
    />
  );
}
