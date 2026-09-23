"use client";

import Link from "next/link";

import { HomeHeroCollage } from "@/components/HomeHeroCollage";
import { useLanguage } from "@/components/LanguageProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WHATSAPP_DEFAULT } from "@/lib/site";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteNav />
      <main>
        <HomeHeroCollage />

        {/* Hook */}
        <section className="bg-surface-container-low py-section-mobile md:py-section-desktop relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <ScrollReveal className="max-w-3xl mx-auto">
              <span className="material-symbols-outlined fill text-secondary text-5xl mb-6">beach_access</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-6">
                {t("home.hookTitle")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t("home.hookText")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Teaser Bento */}
        <section className="py-section-mobile md:py-section-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal className="group relative bg-white p-10 rounded-[5px] ambient-shadow overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-5 rounded-[5px] -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">fitness_center</span>
                <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                  {t("home.bento.trainingTitle")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("home.bento.trainingText")}
                </p>
                <Link
                  className="inline-block uppercase font-label-bold text-label-bold text-secondary border-b-2 border-secondary/20 group-hover:border-secondary transition-all"
                  href="/entrenamientos"
                >
                  {t("home.bento.trainingCta")}
                </Link>
              </ScrollReveal>

              <ScrollReveal
                delay={0.15}
                className="group relative bg-primary p-10 rounded-[5px] ambient-shadow overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-5 rounded-[5px] -mr-10 -mb-10 group-hover:scale-110 transition-transform" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">trophy</span>
                <h3 className="font-headline-md text-headline-md text-white uppercase mb-4">
                  {t("home.bento.tournamentsTitle")}
                </h3>
                <p className="font-body-md text-body-md text-white/70 mb-8">
                  {t("home.bento.tournamentsText")}
                </p>
                <Link
                  className="inline-block uppercase font-label-bold text-label-bold text-secondary border-b-2 border-secondary/20 group-hover:border-secondary transition-all"
                  href="/torneos"
                >
                  {t("home.bento.tournamentsCta")}
                </Link>
              </ScrollReveal>

              <ScrollReveal
                delay={0.3}
                className="group relative bg-white p-10 rounded-[5px] ambient-shadow overflow-hidden transition-all hover:scale-[1.02]"
              >
                <div className="absolute top-1/2 left-0 w-24 h-24 bg-primary opacity-5 rounded-[5px] -ml-12 -translate-y-1/2 group-hover:scale-150 transition-transform" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">event_available</span>
                <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                  {t("home.bento.campsTitle")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("home.bento.campsText")}
                </p>
                <Link
                  className="inline-block uppercase font-label-bold text-label-bold text-secondary border-b-2 border-secondary/20 group-hover:border-secondary transition-all"
                  href="/eventos-camps"
                >
                  {t("home.bento.campsCta")}
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Free trial CTA */}
        <section className="py-section-mobile md:py-section-desktop relative bg-surface-container-low overflow-hidden" id="solicitud">
          <div className="absolute inset-0 beach-grain pointer-events-none" />
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <ScrollReveal className="bg-white rounded-[5px] p-8 md:p-16 shadow-[0_40px_80px_-20px_rgba(43,43,73,0.12)] max-w-2xl mx-auto text-center flex flex-col items-center">
              <span className="font-label-bold text-label-bold text-secondary uppercase tracking-[0.2em] mb-4 block">
                {t("home.lead.eyebrow")}
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-6">
                {t("home.lead.titleLine1")} <br />
                <span className="text-secondary">{t("home.lead.titleHighlight")}</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">{t("home.lead.text")}</p>
              <ul className="space-y-4 text-left mb-10">
                {[t("home.lead.bullet1"), t("home.lead.bullet2"), t("home.lead.bullet3")].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-on-surface font-body-md">
                    <span className="material-symbols-outlined fill text-secondary">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noreferrer"
                className="btn-shine uppercase bg-secondary text-on-secondary font-label-bold text-label-bold px-10 py-4 rounded-[5px] shadow-lg inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined">chat</span>
                {t("home.lead.whatsapp")}
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
