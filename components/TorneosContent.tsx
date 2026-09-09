"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

const TOURNAMENTS = [
  {
    date: "19 SEP",
    nameKey: "mixto",
    img: "/images/mixto-avanzado.JPG",
    dateBadge: "bg-primary text-white",
    featured: false,
    formUrl: "https://docs.google.com/forms/d/1k9niP5NBPUAOQ_sgoIiMXF9JquAD4gt1-IqxYSDHlRo/viewform?edit_requested=true"
  },
  {
    date: "20 SEP",
    nameKey: "mixtoBasico",
    img: "/images/mixto1.JPG",
    dateBadge: "bg-primary text-white",
    featured: false,
    formUrl: "https://docs.google.com/forms/d/1k9niP5NBPUAOQ_sgoIiMXF9JquAD4gt1-IqxYSDHlRo/viewform?edit_requested=true"
  },
  {
    date: "26 SEP",
    nameKey: "eliteFemenino",
    img: "/images/FEM2.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    formUrl: "https://forms.gle/RHLxhzyvtEDFPBwA8"
  },
  {
    date: "27 SEP",
    nameKey: "eliteMasculino",
    img: "/images/masculino-5.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    formUrl: "https://forms.gle/pS97R5K7GPb5YKu87"
  }
];

const WINNERS = [
  { img: "/images/win-claudia.jpg", name: "CLAUDIA & MARTA", titleKey: "claudia" },
  { img: "/images/win-girona.jpg", name: "TEAM GIRONA", titleKey: "girona" },
  { img: "/images/win-sergio.jpg", name: "SERGIO TORRES", titleKey: "sergio" },
  { img: "/images/win-sandstorm.jpg", name: "THE SAND STORM", titleKey: "sandstorm" }
];

export function TorneosContent() {
  const { t } = useLanguage();

  return (
    <>
      <SiteNav />
      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <div className="relative overflow-hidden rounded-[5px] bg-primary-container min-h-[420px] md:h-[500px] flex items-center">
            <ScrollReveal className="relative z-10 p-10 md:p-20 max-w-3xl">
              <span className="font-label-bold text-label-bold text-secondary-fixed bg-secondary-fixed/10 px-4 py-2 rounded-[5px] mb-6 inline-block">
                {t("torneos.badge")}
              </span>
              <h1 className="font-display-lg text-[52px] md:text-display-lg text-white mb-6 uppercase leading-tight">
                {t("torneos.heroTitleLine1")} <br />
                <span className="text-secondary-fixed">{t("torneos.heroTitleHighlight")}</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mb-10">
                {t("torneos.heroSubtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappHref("Hola CBVEM, quiero el calendario completo de torneos.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine bg-secondary text-white px-8 py-4 rounded-[5px] font-label-bold text-label-bold transition-colors"
                >
                  {t("torneos.ctaFullCalendar")}
                </a>
                <a
                  href={whatsappHref("Hola CBVEM, quiero información sobre el reglamento de los torneos.")}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/20 text-white px-8 py-4 rounded-[5px] font-label-bold text-label-bold hover:bg-white/10 transition-all"
                >
                  {t("torneos.ctaRules")}
                </a>
              </div>
            </ScrollReveal>
            <div className="absolute right-0 bottom-0 h-full w-1/2 hidden lg:block">
              <img
                className="h-full w-full object-cover"
                style={{ maskImage: "linear-gradient(to left, black 55%, transparent 100%)" }}
                alt="Jugador de beach volley en acción"
                src={asset("/images/header_torneo.jpg")}
              />
            </div>
          </div>
        </section>

        {/* Upcoming */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <ScrollReveal className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
                {t("torneos.upcomingTitle")}
              </h2>
              <div className="w-20 h-1.5 bg-secondary mt-2" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TOURNAMENTS.map((tour, i) => {
              const name = t(`torneos.names.${tour.nameKey}`);
              return (
                <ScrollReveal
                  key={tour.nameKey}
                  delay={i * 0.1}
                  className={`group bg-white rounded-[5px] p-6 ambient-shadow hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(43,43,73,0.18)] transition-all ${
                    tour.featured ? "border-2 border-secondary/20" : ""
                  }`}
                >
                  <div className="relative aspect-square mb-6 overflow-hidden rounded-[5px]">
                    <img
                      className="w-full h-full object-cover"
                      alt={name}
                      src={asset(tour.img)}
                    />
                    <span
                      className={`absolute top-4 left-4 ${tour.dateBadge} text-[10px] font-label-bold px-3 py-1 rounded-full uppercase`}
                    >
                      {tour.date}
                    </span>
                  </div>
                  <span className="text-secondary font-label-bold text-[12px] uppercase mb-2 block">
                    {t("torneos.calendarCategory")}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">{name}</h3>
                  <div className="flex items-center text-on-surface-variant gap-2 mb-6">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span className="text-body-md">{t("torneos.place")}</span>
                  </div>
                  <a
                    href={tour.formUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full text-center py-3 font-label-bold rounded-[5px] uppercase transition-colors ${
                      tour.featured
                        ? "bg-secondary text-white hover:bg-primary"
                        : "bg-surface-container text-primary group-hover:bg-secondary group-hover:text-white"
                    }`}
                  >
                    {t("torneos.cta")}
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Winners */}
        <section className="bg-primary-container py-section-mobile md:py-section-desktop overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <ScrollReveal className="mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase text-center">
                {t("torneos.winnersTitle")}
              </h2>
              <p className="text-on-primary-container text-center max-w-2xl mx-auto mt-4">
                {t("torneos.winnersSubtitle")}
              </p>
            </ScrollReveal>
            <div className="flex gap-8 overflow-x-auto pb-12 custom-scrollbar snap-x">
              {WINNERS.map((w, i) => (
                <ScrollReveal
                  key={w.name}
                  delay={i * 0.1}
                  className="min-w-[300px] md:min-w-[320px] snap-center bg-white/5 backdrop-blur-md p-6 rounded-[5px] border border-white/10"
                >
                  <div className="relative aspect-square mb-6 group">
                    <div className="absolute inset-0 bg-secondary/20 rounded-[5px] group-hover:bg-transparent transition-colors z-10" />
                    <img className="w-full h-full object-cover rounded-[5px]" alt={w.name} src={asset(w.img)} />
                    <div className="absolute -bottom-4 -right-4 bg-secondary w-16 h-16 rounded-[5px] flex items-center justify-center border-4 border-primary-container z-20">
                      <span className="material-symbols-outlined fill text-white text-[32px]">emoji_events</span>
                    </div>
                  </div>
                  <h4 className="text-white font-headline-md text-headline-md">{w.name}</h4>
                  <p className="text-on-primary-container font-label-bold text-[12px] uppercase">
                    {t(`torneos.winners.${w.titleKey}`)}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="max-w-container-max mx-auto px-gutter py-section-mobile md:py-section-desktop">
          <div className="bg-surface-container rounded-[5px] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <ScrollReveal className="max-w-lg">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-none mb-6">
                {t("torneos.communityTitle")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {t("torneos.communityText")}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="w-full max-w-md">
              <NewsletterForm
                placeholder={t("torneos.newsletterPlaceholder")}
                buttonLabel={t("torneos.newsletterButton")}
              />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
