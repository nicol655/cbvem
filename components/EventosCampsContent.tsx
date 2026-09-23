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
                className="btn-shine w-full text-center bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded-[5px]"
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
              {/* Clínic Julian */}
              <ScrollReveal className="bg-surface-container-lowest p-8 rounded-[5px] border border-primary border-l-4 border-l-secondary shadow-[0_20px_45px_-10px_rgba(43,43,73,0.25)] relative overflow-hidden opacity-50 cursor-not-allowed flex flex-col">
                <div className="flex justify-end items-start mb-6">
                  <span className="material-symbols-outlined text-secondary">sports_volleyball</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("eventosCamps.julianTitle")}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("eventosCamps.julianText")}
                </p>
                <div className="mt-auto pt-3 border-t border-secondary">
                  <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider mb-1">
                    {t("eventosCamps.dateLabel")}
                  </p>
                  <p className="font-headline-md text-primary">{t("eventosCamps.julianDate")}</p>
                </div>
              </ScrollReveal>

              {/* Clinic 2 — TBA */}
              <ScrollReveal
                delay={0.1}
                className="bg-surface-container-lowest p-8 rounded-[5px] border border-primary border-l-4 border-l-gray-400 shadow-[0_20px_45px_-10px_rgba(43,43,73,0.25)] relative overflow-hidden opacity-50 cursor-not-allowed flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-on-surface-variant">shield</span>
                  <span className="bg-secondary text-white px-3 py-1 rounded-[5px] font-label-bold text-[10px] uppercase">
                    {t("eventosCamps.comingSoon")}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("eventosCamps.tbaTitle")}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("eventosCamps.tbaText")}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-400">
                  <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider mb-1">
                    {t("eventosCamps.dateLabel")}
                  </p>
                  <p className="font-headline-md text-primary">—</p>
                </div>
              </ScrollReveal>

              {/* Clinic 3 — TBA */}
              <ScrollReveal
                delay={0.2}
                className="bg-surface-container-lowest p-8 rounded-[5px] border border-primary border-l-4 border-l-gray-400 shadow-[0_20px_45px_-10px_rgba(43,43,73,0.25)] relative overflow-hidden opacity-50 cursor-not-allowed flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="material-symbols-outlined text-on-surface-variant">groups</span>
                  <span className="bg-secondary text-white px-3 py-1 rounded-[5px] font-label-bold text-[10px] uppercase">
                    {t("eventosCamps.comingSoon")}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{t("eventosCamps.tbaTitle")}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("eventosCamps.tbaText")}
                </p>
                <div className="mt-auto pt-3 border-t border-gray-400">
                  <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider mb-1">
                    {t("eventosCamps.dateLabel")}
                  </p>
                  <p className="font-headline-md text-primary">—</p>
                </div>
              </ScrollReveal>
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
                href={whatsappHref("Quiero información para hacer un clinic/camp en la sede de BVM.")}
                target="_blank"
                rel="noreferrer"
                className="btn-shine btn-glow bg-secondary text-white px-10 py-4 rounded-[5px] font-label-bold text-label-bold inline-block"
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
