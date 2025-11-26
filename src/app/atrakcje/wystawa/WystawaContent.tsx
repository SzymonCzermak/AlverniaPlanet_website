"use client";

import Card from "@/app/components/Card";
import TourLineAccentTitle from "@/app/components/TourLineAccentTitle";
import TourLineGalleryRow from "@/app/components/TourLineGalleryRow";
import { useI18n } from "@/app/i18n-provider";

type Locale = "pl" | "en";

type GalleryItem = { title: string; body: string; image: string };

const COPY: Record<
  Locale,
  {
    heroTag: string;
    heroTitle: string;
    heroLead: string;
    videoFallback: string;
    sectionTitle: string;
    paragraphs: string[];
    galleryTitle: string;
    galleryItems: GalleryItem[];
  }
> = {
  pl: {
    heroTag: "Atrakcje",
    heroTitle: "Wystawa tematyczna",
    heroLead:
      "Harry Potter: The Exhibition — zakończona 17 sierpnia 2025. Dziękujemy za odwiedziny i czekamy na kolejną wystawę.",
    videoFallback: "Twój browser nie wspiera elementu video.",
    sectionTitle: "Harry Potter: The Exhibition",
    paragraphs: [
      "Pierwszym projektem B2C, który zrealizowaliśmy w Alvernia Planet, była wystawa Harry Potter: The Exhibition. Otwarto ją 11 kwietnia 2025 roku — dokładnie w 25. rocznicę premiery pierwszej opowieści o młodym czarodzieju, „Harry Potter i Kamień Filozoficzny”. Ekspozycja trwała do 17 sierpnia 2025, czyli 129 dni (około 18 tygodni).",
      "Saga o Harrym Potterze to najpopularniejsza młodzieżowa seria książek na świecie. Opowiada o sierocie i outsiderze, który odkrywa, że jest czarodziejem, a jego przyjaciele i odwaga kształtują magię tej historii. Książki o Harrym Potterze nazywane są bestsellerami wszech czasów i wciąż przyciągają nowe pokolenia czytelników.",
      "Wystawę odwiedziło około 450 000 gości — dziękujemy za obecność i zapraszamy na kolejne wydarzenia.",
    ],
    galleryTitle: "Jak wyglądała trasa",
    galleryItems: [
      {
        title: "Wejście do ekspozycji",
        body: "Strefa wprowadzająca w świat młodego czarodzieja.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/1.webp",
      },
      {
        title: "Magic Hall",
        body: "Multimedialne przejścia i światła prowadzące do głównych sal.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/2.webp",
      },
      {
        title: "Kolekcja artefaktów",
        body: "Oryginalne rekwizyty i kostiumy ze świata Harry’ego Pottera.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/3.webp",
      },
      {
        title: "Strefa immersyjna",
        body: "Efekty świetlne i dźwiękowe, które budowały klimat wystawy.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/4.webp",
      },
      {
        title: "Przestrzeń doświadczeń",
        body: "Interaktywne stanowiska dla odwiedzających i fanów serii.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/5.webp",
      },
      {
        title: "Zakończenie trasy",
        body: "Wyjście z ekspozycji z pamiątkami i strefą foto.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/6.webp",
      },
    ],
  },
  en: {
    heroTag: "Attractions",
    heroTitle: "Themed exhibition",
    heroLead:
      "Harry Potter: The Exhibition — closed on August 17, 2025. Thank you for visiting; stay tuned for the next exhibition.",
    videoFallback: "Your browser does not support the video element.",
    sectionTitle: "Harry Potter: The Exhibition",
    paragraphs: [
      "Harry Potter: The Exhibition was the first B2C project we hosted at Alvernia Planet. It opened on April 11, 2025—exactly on the 25th anniversary of the release of the first story about the young wizard, “Harry Potter and the Philosopher’s Stone”. The exhibition ran until August 17, 2025, which is 129 days (around 18 weeks).",
      "The Harry Potter saga is the world’s most popular young adult book series. It tells the story of an orphan and outsider who discovers he is a wizard, with friends and courage shaping the magic of the tale. The books are bestsellers of all time and keep attracting new generations of readers.",
      "The exhibition welcomed about 450,000 guests — thank you for joining us and see you at the next events.",
    ],
    galleryTitle: "What the route looked like",
    galleryItems: [
      {
        title: "Exhibition entrance",
        body: "An introductory zone to the world of the young wizard.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/1.webp",
      },
      {
        title: "Magic Hall",
        body: "Multimedia passages and lights leading to the main rooms.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/2.webp",
      },
      {
        title: "Artifact collection",
        body: "Original props and costumes from the world of Harry Potter.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/3.webp",
      },
      {
        title: "Immersive zone",
        body: "Light and sound effects that built the exhibition’s atmosphere.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/4.webp",
      },
      {
        title: "Experience space",
        body: "Interactive stations for visitors and fans of the series.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/5.webp",
      },
      {
        title: "End of the route",
        body: "Exit with souvenirs and a photo spot.",
        image: "/galeria/Wystawa/HarryPotter_TheExhibition/webp/6.webp",
      },
    ],
  },
};

export default function WystawaContent() {
  const { locale } = useI18n();
  const loc: Locale = (locale as Locale) ?? "pl";
  const copy = COPY[loc];

  return (
    <main className="relative z-10 min-h-screen">
      <section className="relative z-10 px-4 pt-12 sm:pt-16">
        <div className="mx-auto w-full max-w-6xl mb-10 sm:mb-12">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[16/9] bg-black">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/wystawa/AP_wystawaHPX.webm" type="video/webm" />
                <source src="/wystawa/AP_wystawaHPX.mp4" type="video/mp4" />
                {copy.videoFallback}
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
              <div className="absolute inset-0 opacity-60 mix-blend-soft-light bg-[radial-gradient(circle_at_18%_22%,rgba(252,211,77,0.28),transparent_38%),radial-gradient(circle_at_78%_20%,rgba(244,114,182,0.24),transparent_36%),radial-gradient(circle_at_50%_78%,rgba(59,130,246,0.28),transparent_44%)]" />
              <div className="relative flex h-full items-center justify-center p-6 sm:p-10 text-center force-overlay">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] force-overlay-muted">
                    {copy.heroTag}
                  </p>
                  <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight drop-shadow-[0_0_24px_rgba(0,0,0,0.55)]">
                    {copy.heroTitle}
                  </h1>
                  <p className="force-overlay-dim text-lg max-w-3xl mx-auto">
                    {copy.heroLead}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          <Card className="space-y-6" variant="solid">
            <TourLineAccentTitle variant="green">{copy.sectionTitle}</TourLineAccentTitle>
            <div className="space-y-4 text-base text-gray-100 leading-relaxed max-w-5xl mx-auto">
              {copy.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Card>

          <Card className="space-y-6" variant="glass">
            <TourLineAccentTitle variant="green">{copy.galleryTitle}</TourLineAccentTitle>
            <TourLineGalleryRow items={copy.galleryItems} />
          </Card>
        </div>
      </section>
    </main>
  );
}
