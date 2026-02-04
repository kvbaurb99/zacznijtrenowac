import { TrainerPage } from "@/src/components/ui/trainer-page";
import AsiaImage from "@/assets/asia.webp";

const SPECIALIZATIONS = [
  "Trening personalny dla kobiet",
  "Redukcja masy ciała",
  "Kształtowanie i modelowanie kobiecej sylwetki",
  "Trening kobiet w ciąży i po porodzie",
  "Dietetyka sportowa",
  "Praca z seniorami",
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
      description={`<p>Witaj !<br/>Mam na imię Asia i od wielu lat pomagam kobietom kształtować piękne sylwetki ❤️</p>

<p>Jestem sportowcem, trenerką, mamą dwójki dzieci, żoną oraz osobą, która stworzyła własną markę 11 lat temu i do dziś spełniam się w tej roli idealnie!<br/>Kobietą, która powstała z pasji do ruchu, zdrowego stylu życia i wspierania kobiet na każdym etapie ich drogi.</p>

<p>Moja przygoda ze sportem zaczęła się wcześnie. Po studiach postanowiłam kontynuować dodatkowo naukę w Szkole Mistrzostwa Sportowego we Wrocławiu, gdzie zdobyłam umiejętności do pracy jako trener. Od najmłodszych lat trenowałam gimnastykę, która nauczyła mnie pracy z ciałem, precyzji i tego, że każdy sukces rodzi się z konsekwencji.<br/>Trenowanie od najmłodszych lat ukształtowało mój charakter – wytrwałość, determinację i ogromną pokorę.</p>

<p>Dziś jako trenerka łączę wieloletnie doświadczenie z ogromną wiedzą zdobytą podczas licznych kursów i szkoleń. Ukończyłam m.in. szkolenia:</p>
<ul>
  <li>pracy z seniorami,</li>
  <li>pracy z dziećmi,</li>
  <li>treningu kobiet w ciąży i po porodzie,</li>
  <li>treningów ukierunkowanych na redukcję masy ciała,</li>
  <li>kształtowania i modelowania kobiecej sylwetki,</li>
  <li>dietetyki sportowej</li>
</ul>
<p>oraz wiele innych specjalistycznych programów, które stale poszerzam, aby maksymalnie wspierać moje podopieczne.</p>

<p>Dzięki temu mogę pracować z kobietami w różnym wieku i na każdym poziomie zaawansowania. Rozumiem ich potrzeby, wyzwania i emocje. Wiem, jak trudno jest znaleźć równowagę między życiem prywatnym, pracą a dbaniem o siebie — sama łączę rolę trenerki, mamy i przedsiębiorczyni.</p>

<p><strong>Dlatego moją misją jest nie tylko trening.<br/>Moim celem jest wzmacnianie kobiet od środka.</strong></p>

<p>Pomagam kobietom:</p>
<ul>
  <li>docenić swoje ciało i zaufać mu na nowo,</li>
  <li>odbudować lub zbudować pewność siebie,</li>
  <li>odzyskać motywację i wiarę we własne możliwości,</li>
  <li>schudnąć zdrowo i trwale,</li>
  <li>wymodelować piękną, silną i kobiecą sylwetkę,</li>
  <li>osiągać cele, o których wcześniej bały się pomyśleć.</li>
</ul>

<p>Tworzę przestrzeń, w której kobiety czują się ważne, zauważone i wspierane. W mojej pracy łączę empatię, profesjonalizm i zrozumienie. Każdą podopieczną prowadzę indywidualnie, bo wiem, że każda kobieta zasługuje na coś więcej niż „gotowy plan".</p>

<p>Wierzę, że prawdziwa zmiana zaczyna się w głowie, a ruch jest narzędziem, które może odmienić całe życie.</p>

<p>Jeśli jesteś gotowa, aby w końcu postawić siebie na pierwszym miejscu — z radością Ci w tym pomogę ❤️❤️❤️</p>`}
      phone="518 989 721"
      email="asiatrener@icloud.com"
      phoneHref="tel:+48518989721"
      image={AsiaImage.src}
      specializations={SPECIALIZATIONS}
      ctaText="Gotowa"
      transformations={TRANSFORMATIONS}
    />
  );
}
