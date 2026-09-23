"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

const CAMP_FORM_URL = {
  es: "https://docs.google.com/forms/d/e/1FAIpQLSfmTuH_A99AJSskvVvkv-EnYxwfTJ82y2CF982IMiGCt5Luuw/viewform",
  en: "https://docs.google.com/forms/d/196xIhiqAQyWa_FPlFmmjvtFmFPy5lt6jj9qQaWKckRM/viewform?edit_requested=true#responses"
};

type Clinic = {
  key: string;
  status: "completed" | "upcoming";
  title: string;
  text: string;
  day?: string;
  month?: string;
};

const CLINICS: Clinic[] = [
  {
    key: "julian",
    status: "completed",
    title: "eventosCamps.julianTitle",
    text: "eventosCamps.julianText",
    day: "20",
    month: "eventosCamps.julianMonth"
  },
  { key: "tba-1", status: "upcoming", title: "eventosCamps.tbaTitle", text: "eventosCamps.tbaText" },
  { key: "tba-2", status: "upcoming", title: "eventosCamps.tbaTitle", text: "eventosCamps.tbaText" }
];

export function EventosCampsContent() {
  const { t, locale } = useLanguage();

  return (
    <>
      <SiteNav transparentVariant="dark" />
      <main className="pt-16 overflow-x-hidden">
        {/* Hero */}
        <ScrollReveal
          className="max-w-container-max mx-auto px-gutter py-section-mobile md:py-section-desktop text-center relative"
        >
          <header>
            <div className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-[5px] font-label-bold text-label-bold mb-6">
              {t("eventosCamps.badge")}
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase max-w-4xl mx-auto">
              {t("eventosCamps.heroTitle")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
              {t("eventosCamps.heroSubtitle")}
            </p>
          </header>
        </ScrollReveal>

        {/* Featured camp */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-mobile md:mb-section-desktop">
          <div className="bg-surface-container-lowest rounded-[5px] ambient-shadow overflow-hidden flex flex-col lg:flex-row items-stretch">
            <ScrollReveal className="lg:w-2/5 relative aspect-[4/5]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Camp Tenerife 2027"
                src={asset(locale === "en" ? "/images/CampTeneENG.png" : "/images/CampTeneESP.png")}
              />
              <div className="absolute top-6 left-6 bg-error text-on-primary px-4 py-2 rounded-[5px] font-label-bold text-label-bold animate-pulse">
                {t("eventosCamps.featuredBadge")}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="lg:w-3/5 p-10 lg:p-12 flex flex-col justify-center">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 uppercase">
                {t("eventosCamps.featuredTitle")}
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-secondary">calendar_today</span>
                <span className="font-label-bold text-label-bold text-on-surface">
                  {t("eventosCamps.featuredDate")}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                {t("eventosCamps.featuredText")}
              </p>
              <div className="flex flex-col gap-2 mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg-mobile text-secondary">380€</span>
                  <span className="font-body-md text-body-md text-outline">{t("eventosCamps.priceTriple")}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg text-headline-lg-mobile text-secondary">420€</span>
                  <span className="font-body-md text-body-md text-outline">{t("eventosCamps.priceDouble")}</span>
                </div>
              </div>
              <a
                href={CAMP_FORM_URL[locale]}
                target="_blank"
                rel="noreferrer"
                className="btn-shine uppercase w-full text-center bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded-[5px]"
              >
                {t("eventosCamps.cta")}
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Upcoming clinics */}
        <section className="bg-surface-container-low py-section-mobile md:py-section-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <ScrollReveal className="mb-12">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
                {t("eventosCamps.clinicsTitle")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("eventosCamps.clinicsSubtitle")}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CLINICS.map((clinic, i) => {
                const completed = clinic.status === "completed";
                return (
                  <ScrollReveal
                    key={clinic.key}
                    delay={i * 0.1}
                    className={`relative ${completed ? "" : "cursor-not-allowed"}`}
                  >
                    <article
                      className={`group h-full bg-surface-container-lowest rounded-[5px] overflow-hidden relative flex flex-col ambient-shadow transition-transform duration-300 ${
                        completed ? "hover:-translate-y-1" : "opacity-40 grayscale"
                      }`}
                    >
                      {/* Date header */}
                      <div className="relative bg-primary-container text-white px-8 pt-8 pb-7 overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary rounded-full opacity-15 blur-2xl pointer-events-none" />
                        <img
                          alt=""
                          aria-hidden
                          className="absolute right-6 top-6 h-9 w-9 object-contain opacity-80"
                          src={asset("/images/newlogo_blanco.svg")}
                        />
                        <p className="font-label-bold text-[11px] uppercase tracking-[0.2em] text-on-primary-container mb-2">
                          {t("eventosCamps.dateLabel")}
                        </p>
                        {clinic.day ? (
                          <div className="flex items-end gap-3">
                            <span className="font-display-lg text-[64px] leading-none">{clinic.day}</span>
                            <span className="font-headline-md text-headline-md uppercase text-secondary-fixed pb-1">
                              {t(clinic.month!)}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-end gap-3">
                            <span className="font-display-lg text-[64px] leading-none text-white/40">?</span>
                            <span className="font-headline-md text-headline-md uppercase text-white/60 pb-1">
                              {t("eventosCamps.dateTbc")}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Body */}
                      <div className="flex-1 flex flex-col p-8">
                        <h3 className="font-headline-md text-headline-md text-primary uppercase mb-3">{t(clinic.title)}</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-8">{t(clinic.text)}</p>
                        <div className="mt-auto flex items-center gap-2 pt-5 border-t border-outline-variant/60">
                          <span className={`w-2 h-2 rounded-full ${completed ? "bg-secondary" : "bg-outline"}`} />
                          <span className="font-label-bold text-[12px] uppercase tracking-wider text-on-surface-variant">
                            {t(completed ? "eventosCamps.completed" : "eventosCamps.comingSoon")}
                          </span>
                        </div>
                      </div>

                      {/* "Completed" ribbon across the whole card */}
                      {completed ? (
                        <div className="absolute inset-0 bg-white/30 pointer-events-none">
                          <div className="absolute inset-x-0 bottom-[16%] flex justify-center">
                            <div className="w-[150%] shrink-0 -rotate-[12deg] bg-secondary text-white text-center py-3 font-headline-md text-headline-md uppercase tracking-[0.25em] shadow-[0_12px_30px_-6px_rgba(43,43,73,0.5)] border-y-2 border-white/40">
                              {t("eventosCamps.completed")}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Host your own clinic/camp CTA */}
        <section className="bg-primary-container text-white relative overflow-hidden py-section-mobile md:py-section-desktop">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-5 pointer-events-none -rotate-12 translate-x-1/4" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
            <ScrollReveal>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-10 max-w-2xl mx-auto">
                {t("eventosCamps.clinicsCtaText")}
              </h2>
              <a
                href={whatsappHref("Hola BVM, me gustaría que me informarais sobre cómo organizar un clínic o camp en vuestra sede.")}
                target="_blank"
                rel="noreferrer"
                className="btn-shine uppercase btn-glow bg-secondary text-white px-10 py-4 rounded-[5px] font-label-bold text-label-bold inline-block"
              >
                {t("eventosCamps.clinicsCtaButton")}
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Why our camps */}
        <section className="py-section-mobile md:py-section-desktop overflow-hidden relative">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div className="relative">
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary rounded-full opacity-10 blur-3xl" />
              <ScrollReveal className="relative z-10 border-l-4 border-secondary pl-8 md:pl-12">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8">
                  {t("eventosCamps.whyTitle")}
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">groups</span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary">
                        {t("eventosCamps.why1Title")}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {t("eventosCamps.why1Text")}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">verified_user</span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary">
                        {t("eventosCamps.why2Title")}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {t("eventosCamps.why2Text")}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary">emoji_events</span>
                    <div>
                      <h4 className="font-label-bold text-label-bold text-primary">
                        {t("eventosCamps.why3Title")}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {t("eventosCamps.why3Text")}
                      </p>
                    </div>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.15} className="relative">
              <div className="absolute inset-0 bg-primary-container rounded-[5px] rotate-3 -z-10 opacity-10" />
              <img
                className="w-full aspect-square object-cover shadow-2xl transition-all duration-700"
                alt="Entrenador explicando táctica al grupo"
                src={asset("/images/camps_foto.jpg")}
              />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
