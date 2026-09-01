import type { Metadata } from "next";

import { NewsletterForm } from "@/components/NewsletterForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Torneos | CBVEM",
  description:
    "Torneos y ligas de beach volley en El Masnou: competición de alto nivel, formatos Open, mixtos y 4x4."
};

const TOURNAMENTS = [
  {
    date: "15 JUN",
    category: "Masculino Élite",
    name: "OPEN EL MASNOU",
    place: "Playa de Ocata",
    img: "/images/tour-open.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    cta: "Inscribirse"
  },
  {
    date: "22 JUN",
    category: "Femenino Élite",
    name: "QUEENS OF THE BEACH",
    place: "Pista Central CBVEM",
    img: "/images/tour-queens.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    cta: "Inscribirse"
  },
  {
    date: "06 JUL",
    category: "Mixto",
    name: "SUNSET MIXED CUP",
    place: "Playa de Ocata",
    img: "/images/tour-sunset.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    cta: "Inscribirse"
  },
  {
    date: "13 JUL",
    category: "Torneo 4x4 + Tardeo",
    name: "BEACH & BEATS 4X4",
    place: "Beach Club Exclusive",
    img: "/images/tour-beats.jpg",
    dateBadge: "bg-secondary text-white",
    featured: true,
    cta: "Últimas Plazas"
  },
  {
    date: "20 JUL",
    category: "Torneo 4x4",
    name: "BEACH & BEATS 4X4",
    place: "Beach Club Exclusive",
    img: "/images/tour-beats.jpg",
    dateBadge: "bg-secondary text-white",
    featured: true,
    cta: "Últimas Plazas"
  }
];

const WINNERS = [
  { img: "/images/win-claudia.jpg", name: "CLAUDIA & MARTA", title: "CAMPEONAS ELITE OPEN MAYO" },
  { img: "/images/win-girona.jpg", name: "TEAM GIRONA", title: "CAMPEONES 4X4 SPRING FEST" },
  { img: "/images/win-sergio.jpg", name: "SERGIO TORRES", title: "MVP TEMPORADA INVIERNO" },
  { img: "/images/win-sandstorm.jpg", name: "THE SAND STORM", title: "CAMPEONES MIXTO INTERCLUB" }
];

export default function TorneosPage() {
  return (
    <>
      <SiteNav />
      <main className="pt-32">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <div className="relative overflow-hidden rounded-xl bg-primary-container min-h-[420px] md:h-[500px] flex items-center">
            <div className="relative z-10 p-10 md:p-20 max-w-3xl">
              <span className="font-label-bold text-label-bold text-secondary-fixed bg-secondary-fixed/10 px-4 py-2 rounded-full mb-6 inline-block">
                TEMPORADA 2024
              </span>
              <h1 className="font-display-lg text-[52px] md:text-display-lg text-white mb-6 uppercase leading-tight">
                TORNEOS <br />
                <span className="text-secondary-fixed">CBVEM</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mb-10">
                La arena de El Masnou se convierte en el epicentro del voley playa nacional.
                Competición de alto nivel, música y el mejor ambiente de club.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappHref("Hola CBVEM, quiero el calendario completo de torneos.")}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-secondary text-white px-8 py-4 rounded-full font-label-bold text-label-bold hover:scale-105 transition-all"
                >
                  CALENDARIO COMPLETO
                </a>
                <a
                  href={whatsappHref("Hola CBVEM, quiero información sobre el reglamento de los torneos.")}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white px-8 py-4 rounded-full font-label-bold text-label-bold hover:bg-white/10 transition-all"
                >
                  REGLAMENTO
                </a>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 h-full w-1/2 hidden lg:block">
              <img
                className="h-full w-full object-cover"
                style={{ maskImage: "linear-gradient(to left, black 55%, transparent 100%)" }}
                alt="Jugador de beach volley en acción"
                src={asset("/images/tour-hero.jpg")}
              />
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
                Próximos Torneos
              </h2>
              <div className="w-20 h-1.5 bg-secondary mt-2" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOURNAMENTS.map((t) => (
              <div
                key={t.name}
                className={`group bg-white rounded-lg p-6 ambient-shadow hover:scale-[1.02] transition-all ${
                  t.featured ? "border-2 border-secondary/20" : ""
                }`}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={t.name}
                    src={asset(t.img)}
                  />
                  <span
                    className={`absolute top-4 left-4 ${t.dateBadge} text-[10px] font-label-bold px-3 py-1 rounded-full uppercase`}
                  >
                    {t.date}
                  </span>
                </div>
                <span className="text-secondary font-label-bold text-[12px] uppercase mb-2 block">
                  {t.category}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">{t.name}</h3>
                <div className="flex items-center text-on-surface-variant gap-2 mb-6">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-body-md">{t.place}</span>
                </div>
                <a
                  href={whatsappHref(`Hola CBVEM, quiero inscribirme en el torneo "${t.name}" (${t.date}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full text-center py-3 font-label-bold rounded-full uppercase transition-colors ${
                    t.featured
                      ? "bg-secondary text-white hover:bg-primary"
                      : "bg-surface-container text-primary group-hover:bg-secondary group-hover:text-white"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Winners */}
        <section className="bg-primary-container py-section-mobile md:py-section-desktop overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase text-center">
                Nuestros Ganadores
              </h2>
              <p className="text-on-primary-container text-center max-w-2xl mx-auto mt-4">
                Celebramos el talento y el esfuerzo de los campeones de nuestras ligas y torneos
                pasados.
              </p>
            </div>
            <div className="flex gap-8 overflow-x-auto pb-12 custom-scrollbar snap-x">
              {WINNERS.map((w) => (
                <div
                  key={w.name}
                  className="min-w-[300px] md:min-w-[320px] snap-center bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10"
                >
                  <div className="relative h-80 mb-6 group">
                    <div className="absolute inset-0 bg-secondary/20 rounded-lg group-hover:bg-transparent transition-colors z-10" />
                    <img className="w-full h-full object-cover rounded-lg" alt={w.name} src={asset(w.img)} />
                    <div className="absolute -bottom-4 -right-4 bg-secondary w-16 h-16 rounded-full flex items-center justify-center border-4 border-primary-container z-20">
                      <span className="material-symbols-outlined fill text-white text-[32px]">emoji_events</span>
                    </div>
                  </div>
                  <h4 className="text-white font-headline-md text-headline-md">{w.name}</h4>
                  <p className="text-on-primary-container font-label-bold text-[12px] uppercase">{w.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="max-w-container-max mx-auto px-gutter py-section-mobile md:py-section-desktop">
          <div className="bg-surface-container rounded-xl p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-none mb-6">
                Únete a la Comunidad
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Suscríbete para recibir notificaciones exclusivas de aperturas de inscripciones,
                torneos flash y eventos especiales en la playa.
              </p>
            </div>
            <div className="w-full max-w-md">
              <NewsletterForm placeholder="TU EMAIL" buttonLabel="SUSCRIBIRME" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
