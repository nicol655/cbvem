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
      <SiteNav />
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
                className="w-full text-center bg-primary py-4 rounded-[5px] text-on-primary font-label-bold text-label-bold hover:bg-secondary transition-colors duration-300"
              >
                {t("eventosCamps.cta")}
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Upcoming clinics */}
        <section className="bg-surface-container-low py-section-mobile md:py-section-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
                  {t("eventosCamps.clinicsTitle")}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {t("eventosCamps.clinicsSubtitle")}
                </p>
              </div>
              <a
                className="text-secondary font-label-bold text-label-bold border-b-2 border-secondary hover:opacity-70 transition-opacity"
                href={whatsappHref("Hola CBVEM, quiero ver el calendario completo de clínics.")}
                target="_blank"
                rel="noreferrer"
              >
                {t("eventosCamps.viewFullCalendar")}
              </a>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Clinic 1 */}
              <ScrollReveal className="bg-surface-container-lowest p-8 rounded-[5px] ambient-shadow relative overflow-hidden group flex flex-col">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-[5px] font-label-bold text-label-bold">
                    {t("eventosCamps.clinic1Tag")}
                  </span>
                  <span className="material-symbols-outlined text-secondary">sports_volleyball</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {t("eventosCamps.clinic1Title")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("eventosCamps.clinic1Text")}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider">
                      {t("eventosCamps.priceMembersLabel")}
                    </p>
                    <p className="font-headline-md text-secondary">65€</p>
                  </div>
                  <span className="bg-error text-on-primary px-3 py-1 rounded-[5px] font-label-bold text-[10px]">
                    {t("eventosCamps.lastSpots")}
                  </span>
                </div>
              </ScrollReveal>

              {/* Clinic 2 */}
              <ScrollReveal
                delay={0.1}
                className="bg-surface-container-lowest p-8 rounded-[5px] ambient-shadow relative overflow-hidden group flex flex-col"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-[5px] font-label-bold text-label-bold">
                    {t("eventosCamps.clinic2Tag")}
                  </span>
                  <span className="material-symbols-outlined fill text-secondary">shield</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {t("eventosCamps.clinic2Title")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("eventosCamps.clinic2Text")}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider">
                      {t("eventosCamps.dateLabel")}
                    </p>
                    <p className="font-headline-md text-primary">05 AGO</p>
                  </div>
                  <a
                    href={whatsappHref('Hola CBVEM, quiero info del clínic "Brazilian Defensive Style" (05 AGO).')}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-surface-container-highest p-3 rounded-[5px] hover:bg-secondary-container transition-colors"
                  >
                    <span className="material-symbols-outlined text-primary">arrow_forward</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Clinic 3 */}
              <ScrollReveal
                delay={0.2}
                className="bg-surface-container-lowest p-8 rounded-[5px] ambient-shadow relative overflow-hidden group flex flex-col"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-[5px] font-label-bold text-label-bold">
                    {t("eventosCamps.clinic3Tag")}
                  </span>
                  <span className="material-symbols-outlined text-secondary">groups</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {t("eventosCamps.clinic3Title")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("eventosCamps.clinic3Text")}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div>
                    <p className="font-label-bold text-[10px] text-outline uppercase tracking-wider">
                      {t("eventosCamps.priceLabel")}
                    </p>
                    <p className="font-headline-md text-secondary">120€</p>
                  </div>
                  <span className="font-label-bold text-label-bold text-primary">
                    {t("eventosCamps.openRegistration")}
                  </span>
                </div>
              </ScrollReveal>
            </div>
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
                className="w-full aspect-square object-cover rounded-[5px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                alt="Entrenador explicando táctica al grupo"
                src={asset("/images/DavidPic.JPG")}
              />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
