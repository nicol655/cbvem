"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

const TOURNAMENTS = [
  {
    nameKey: "mixto",
    img: "/images/new_scroll.jpg",
    dateBadge: "bg-secondary text-primary",
    featured: false,
    disabled: true,
    formUrl: "https://docs.google.com/forms/d/1k9niP5NBPUAOQ_sgoIiMXF9JquAD4gt1-IqxYSDHlRo/viewform?edit_requested=true"
  },
  {
    nameKey: "mixtoBasico",
    img: "/images/mixto_basic.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    disabled: true,
    formUrl: "https://docs.google.com/forms/d/1k9niP5NBPUAOQ_sgoIiMXF9JquAD4gt1-IqxYSDHlRo/viewform?edit_requested=true"
  },
  {
    nameKey: "eliteFemenino",
    img: "/images/torneo_femenino.jpg",
    dateBadge: "bg-secondary text-primary",
    featured: false,
    disabled: true,
    formUrl: "https://forms.gle/RHLxhzyvtEDFPBwA8"
  },
  {
    nameKey: "eliteMasculino",
    img: "/images/masculino-5.jpg",
    dateBadge: "bg-primary text-white",
    featured: false,
    disabled: true,
    formUrl: "https://forms.gle/pS97R5K7GPb5YKu87"
  }
];

const COACHES = [
  { img: "/images/David_foto.png", name: "David Martín", roleKey: "davidRole", objectPosition: undefined as string | undefined },
  {
    img: "/images/Oscar_Feltrer_crop.jpg",
    name: "Oscar Feltrer",
    roleKey: "oscarRole",
    objectPosition: "55% 10%"
  }
];

export function TorneosContent() {
  const { t } = useLanguage();

  return (
    <>
      <SiteNav transparentVariant="dark" />
      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <div className="relative overflow-hidden rounded-[5px] min-h-[420px] md:h-[500px] flex items-center">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              alt="Jugador de beach volley en acción"
              src={asset("/images/header_entrenamientos.JPG")}
            />
            <div className="absolute inset-0 bg-primary-container/80" />
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
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#proximos-torneos"
                  className="btn-shine uppercase bg-secondary text-white w-full sm:w-auto px-4 sm:px-8 py-4 rounded-[5px] font-label-bold text-label-bold text-center whitespace-nowrap transition-colors"
                >
                  {t("torneos.ctaFullCalendar")}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Upcoming */}
        <section id="proximos-torneos" className="scroll-mt-24 max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
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
                  <div className="relative aspect-square mb-6 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={name}
                      src={asset(tour.img)}
                    />
                    <span
                      className={`absolute top-4 left-4 ${tour.dateBadge} text-[10px] font-label-bold font-bold px-3 py-1 rounded-[5px] uppercase`}
                    >
                      {t("torneos.comingSoon")}
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
                  {tour.disabled ? (
                    <span
                      aria-disabled="true"
                      className="block w-full text-center py-3 font-label-bold rounded-[5px] uppercase bg-surface-container text-on-surface-variant opacity-50 cursor-not-allowed pointer-events-none"
                    >
                      {t("torneos.cta")}
                    </span>
                  ) : (
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
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Coaches */}
        <section className="bg-primary-container py-section-mobile md:py-section-desktop overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter">
            <ScrollReveal className="mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase text-center">
                {t("torneos.coachesTitle")}
              </h2>
              <p className="text-on-primary-container text-center max-w-2xl mx-auto mt-4">
                {t("torneos.coachesSubtitle")}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {COACHES.map((coach, i) => (
                <ScrollReveal
                  key={coach.name}
                  delay={i * 0.1}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-[5px] border border-white/10"
                >
                  <div className="relative h-[300px] md:h-[320px] w-full mb-6 group overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      className="w-full h-full object-cover"
                      style={coach.objectPosition ? { objectPosition: coach.objectPosition } : undefined}
                      alt={coach.name}
                      src={asset(coach.img)}
                    />
                    <div className="absolute -bottom-4 -right-4 bg-secondary w-16 h-16 rounded-[5px] flex items-center justify-center border-4 border-primary-container z-20">
                      <span
                        className="material-symbols-outlined fill text-white text-[32px]"
                        style={{ transform: "translate(-6px, -6px)" }}
                      >
                        sports_volleyball
                      </span>
                    </div>
                  </div>
                  <h4 className="text-white font-headline-md text-headline-md">{coach.name}</h4>
                  <p className="text-on-primary-container font-label-bold text-[12px] uppercase">
                    {t(`torneos.coaches.${coach.roleKey}`)}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Become a coach CTA */}
        <section className="max-w-container-max mx-auto px-gutter py-section-mobile md:py-section-desktop">
          <ScrollReveal className="bg-surface-container rounded-[5px] p-10 md:p-20 flex flex-col items-center text-center">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase leading-none mb-6 max-w-3xl">
              {t("torneos.coachCtaTitle")}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
              {t("torneos.coachCtaText")}
            </p>
            <a
              href={whatsappHref("Hola BVM, me gustaría ser entrenador en el club. Te cuento sobre mí y mi experiencia:")}
              target="_blank"
              rel="noreferrer"
              className="btn-shine uppercase btn-glow bg-primary text-white w-full sm:w-auto px-10 py-4 rounded-[5px] font-label-bold text-label-bold text-center inline-block hover:bg-primary-container transition-colors"
            >
              {t("torneos.coachCtaButton")}
            </a>
          </ScrollReveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
