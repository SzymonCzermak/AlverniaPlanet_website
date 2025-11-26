"use client";

import Card from "@/app/components/Card";
import TourLineAccentTitle from "@/app/components/TourLineAccentTitle";
import TourLineGalleryRow from "@/app/components/TourLineGalleryRow";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { useI18n } from "@/app/i18n-provider";

type Locale = "pl" | "en";

type Feature = { title: string; body: string };
type GalleryItem = { title: string; body: string; image: string };

const BOOKING_URL = "https://alverniaplanet.bookero.pl";

const COPY: Record<
  Locale,
  {
    heroTag: string;
    heroTitle: string;
    heroLead: string;
    videoFallback: string;
    soonBadge: string;
    soonBody: string;
    soonCta: string;
    featuresTitle: string;
    features: Feature[];
    galleryTitle: string;
    galleryItems: GalleryItem[];
    helpTitle: string;
    helpPoints: string[];
    bookCta: string;
    contactCta: string;
  }
> = {
  pl: {
    heroTag: "Atrakcje",
    heroTitle: "Kino 360°",
    heroLead:
      "Pełne zanurzenie w sferycznym obrazie i dźwięku — seanse, pokazy edukacyjne i prezentacje specjalne.",
    videoFallback: "Twój browser nie wspiera elementu video.",
    soonBadge: "Wkrótce",
    soonBody: "Kino 360° wróci z nowym programem – daj nam znać, jeśli chcesz rezerwację na start.",
    soonCta: "Napisz do nas",
    featuresTitle: "Co czeka w kinie 360°",
    features: [
      {
        title: "Pełna kopuła projekcyjna",
        body: "Obraz otacza widza w 360° — brak martwych punktów, idealne do filmów immersyjnych i mappingów.",
      },
      {
        title: "Dźwięk przestrzenny",
        body: "Wielokanałowy system audio podkreśla ruch w kadrze i prowadzi narrację dookoła publiczności.",
      },
      {
        title: "Komfort widowni",
        body: "Układ miejsc dopasujemy do charakteru seansu: prezentacje, pokazy edukacyjne lub pokaz brandowany.",
      },
      {
        title: "Elastyczna treść",
        body: "Emitujemy filmy fulldome, wizualizacje naukowe, spektakle multimedialne oraz materiały customowe.",
      },
      {
        title: "Obsługa techniczna",
        body: "Zespół operatorów pomaga w przygotowaniu plików, testach i realizacji na żywo.",
      },
      {
        title: "Element programu eventu",
        body: "Kino 360° łatwo łączymy z konferencją, galą lub częścią networkingową w innych kopułach.",
      },
    ],
    galleryTitle: "Zobacz przestrzeń",
    galleryItems: [
      {
        title: "Kopuła projekcyjna 360°",
        body: "Sferyczna przestrzeń gotowa na mappingi i filmy immersyjne.",
        image: "/galeria/Ogólne/webp/4.webp",
      },
      {
        title: "Strefa widowni i sceny",
        body: "Przestrzeń na zapowiedzi, wprowadzenia i prelekcje przed seansem.",
        image: "/galeria/Ogólne/webp/5.webp",
      },
      {
        title: "Multimedia w ruchu",
        body: "Światła, dźwięk i projekcja współgrają z narracją pokazu.",
        image: "/galeria/Ogólne/webp/6.webp",
      },
      {
        title: "Otoczenie kompleksu",
        body: "Po seansie widzowie mogą eksplorować pozostałe strefy Alvernia Planet.",
        image: "/galeria/Ogólne/webp/1.webp",
      },
    ],
    helpTitle: "Jak możemy pomóc",
    helpPoints: [
      "Pokazy edukacyjne, prezentacje marek i specjalne premiery w formule 360°.",
      "Możliwość rezerwacji samodzielnego seansu lub pakietu z innymi atrakcjami.",
      "Wsparcie przy dostosowaniu plików i scenariusza do projekcji fulldome.",
    ],
    bookCta: "Zarezerwuj seans 360°",
    contactCta: "Zapytaj o ofertę",
  },
  en: {
    heroTag: "Attractions",
    heroTitle: "360° cinema",
    heroLead:
      "Total immersion in spherical image and sound—screenings, educational shows, and special presentations.",
    videoFallback: "Your browser does not support the video element.",
    soonBadge: "Coming soon",
    soonBody: "The 360° cinema returns with a new program—tell us if you want to book for launch.",
    soonCta: "Write to us",
    featuresTitle: "What awaits in the 360° cinema",
    features: [
      {
        title: "Full dome projection",
        body: "The image surrounds the audience in 360°—no blind spots, perfect for immersive films and mapping.",
      },
      {
        title: "Spatial sound",
        body: "A multichannel audio system highlights movement on screen and carries the story around the audience.",
      },
      {
        title: "Audience comfort",
        body: "We adapt the seating layout to the session: presentations, educational shows, or branded screenings.",
      },
      {
        title: "Flexible content",
        body: "We run fulldome films, scientific visualizations, multimedia shows, and custom materials.",
      },
      {
        title: "Technical support",
        body: "Our operator team assists with file preparation, tests, and live operation.",
      },
      {
        title: "Part of an event program",
        body: "The 360° cinema can be paired with a conference, gala, or networking zone in other domes.",
      },
    ],
    galleryTitle: "See the venue",
    galleryItems: [
      {
        title: "360° projection dome",
        body: "A spherical space ready for mapping and immersive films.",
        image: "/galeria/Ogólne/webp/4.webp",
      },
      {
        title: "Audience and stage zone",
        body: "Space for intros, announcements, and talks before the show.",
        image: "/galeria/Ogólne/webp/5.webp",
      },
      {
        title: "Multimedia in motion",
        body: "Lights, sound, and projection work together with the story.",
        image: "/galeria/Ogólne/webp/6.webp",
      },
      {
        title: "Around the complex",
        body: "After the screening, guests can explore other Alvernia Planet zones.",
        image: "/galeria/Ogólne/webp/1.webp",
      },
    ],
    helpTitle: "How we can help",
    helpPoints: [
      "Educational shows, brand presentations, and special premieres in a 360° format.",
      "Book a standalone screening or bundle it with other attractions.",
      "Support in adapting files and scenarios for fulldome projection.",
    ],
    bookCta: "Book a 360° screening",
    contactCta: "Ask for an offer",
  },
};

export default function Kino360Content() {
  const { locale } = useI18n();
  const loc: Locale = (locale as Locale) ?? "pl";
  const copy = COPY[loc];

  return (
    <main className="relative z-10 min-h-screen">
      <section className="relative z-10 px-4 pt-12 sm:pt-16">
        <div className="mx-auto w-full max-w-6xl mb-10 sm:mb-12">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[16/9] bg-[#071020]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/kino360/Kino360.mp4" type="video/mp4" />
                {copy.videoFallback}
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-[#071524]/85 via-[#0b2340]/60 to-black/78" />
              <div className="absolute inset-0 opacity-60 mix-blend-soft-light bg-[radial-gradient(circle_at_20%_25%,rgba(76,153,255,0.25),transparent_45%),radial-gradient(circle_at_75%_20%,rgba(24,103,201,0.22),transparent_42%),radial-gradient(circle_at_50%_75%,rgba(7,48,108,0.28),transparent_46%)]" />
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
          <Card variant="solid" className="bg-white/5 ring-1 ring-white/10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-cyan-500/20 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-cyan-100 ring-1 ring-cyan-300/25">
                  {copy.soonBadge}
                </span>
                <p className="text-white/85 text-base sm:text-lg">
                  {copy.soonBody}
                </p>
              </div>
              <PrimaryButton
                href="/kontakt"
                size="md"
                className="bg-transparent text-white ring-1 ring-cyan-300/40 shadow-none hover:bg-white/10 hover:text-white"
              >
                {copy.soonCta}
              </PrimaryButton>
            </div>
          </Card>

          <Card className="space-y-6">
            <TourLineAccentTitle variant="cool">{copy.featuresTitle}</TourLineAccentTitle>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {copy.features.map((item) => (
                <Card key={item.title} dense className="h-full bg-white/8 ring-1 ring-white/10 text-white/90">
                  <div className="space-y-3">
                    <div className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-cyan-100 ring-1 ring-cyan-400/25">
                      360°
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{item.body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <Card className="space-y-6" variant="solid">
            <TourLineAccentTitle variant="cool">{copy.galleryTitle}</TourLineAccentTitle>
            <TourLineGalleryRow items={copy.galleryItems} />
          </Card>

          <Card title={copy.helpTitle} titleCentered titleDivider>
            <div className="space-y-3 text-gray-100 text-base leading-relaxed">
              {copy.helpPoints.map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/90 text-black font-bold shadow-[0_0_16px_rgba(34,211,238,0.35)] ring-1 ring-black/15">
                    ✓
                  </span>
                  <p>{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-center sm:gap-3">
              <PrimaryButton
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-cyan-400/90 hover:bg-cyan-400 text-black ring-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
              >
                {copy.bookCta}
              </PrimaryButton>
              <PrimaryButton
                href="/kontakt"
                size="lg"
                className="mt-3 sm:mt-0 bg-transparent text-white ring-1 ring-white/40 shadow-none hover:bg-white/10 hover:text-white"
              >
                {copy.contactCta}
              </PrimaryButton>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
