"use client";

import Link from "next/link";

import { HomeCollage } from "@/components/HomeCollage";
import { LeadForm } from "@/components/LeadForm";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { WHATSAPP_DEFAULT } from "@/lib/site";

export default function HomeOldPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteNav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 beach-grain pointer-events-none" />
          <div className="absolute top-1/4 -right-20 w-[600px] h-2 bg-secondary opacity-20 rotate-[-15deg]" />
          <div className="absolute bottom-1/4 -left-20 w-[400px] h-4 bg-primary opacity-5 rotate-[10deg]" />
          <div className="relative w-full max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-section-mobile md:py-section-desktop">
            <div className="lg:col-span-6 z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-0.5 bg-secondary" />
                <span className="font-label-bold text-label-bold text-secondary uppercase tracking-[0.2em]">
                  {t("home.eyebrow")}
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile lg:text-display-lg text-primary uppercase mb-8 leading-tight">
                {t("home.titleLine1")} <br />
                <span className="text-secondary">{t("home.titleHighlight")}</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
                {t("home.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="#solicitud"
                  className="btn-shine bg-primary text-on-primary font-label-bold text-label-bold px-10 py-5 rounded-[5px] shadow-lg"
                >
                  {t("home.ctaJoin")}
                </Link>
                <Link
                  href="/entrenamientos"
                  className="flex items-center gap-3 font-label-bold text-label-bold text-primary group"
                >
                  {t("home.ctaSchedule")}
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[420px] lg:h-[700px] flex items-center justify-center">
              <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border-[20px] border-secondary/10 rounded-full" />
              <div className="absolute z-20 -right-4 lg:-right-10 bottom-0 w-3/4 floating-element">
                <img
                  className="w-full h-full object-cover rounded-[5px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Jugador de beach volley rematando"
                  src={asset("/images/DavidPic2.JPG")}
                />
              </div>
              <div className="absolute z-10 -left-4 top-0 w-1/2 opacity-60 scale-90 blur-[1px]">
                <img
                  className="w-full h-full object-cover rounded-[5px] shadow-xl grayscale"
                  alt="Jugadora defendiendo en la arena"
                  src={asset("/images/FEM4.png")}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Photo collage */}
        <HomeCollage />

        {/* Hook */}
        <section className="bg-surface-container-low py-section-mobile md:py-section-desktop relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <div className="max-w-3xl mx-auto">
              <span className="material-symbols-outlined fill text-secondary text-5xl mb-6">beach_access</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-6">
                {t("home.hookTitle")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t("home.hookText")}
              </p>
            </div>
          </div>
        </section>

        {/* Teaser Bento */}
        <section className="py-section-mobile md:py-section-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white p-10 rounded-[5px] ambient-shadow overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-5 rounded-[5px] -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">fitness_center</span>
                <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                  {t("home.bento.trainingTitle")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("home.bento.trainingText")}
                </p>
                <Link
                  className="inline-block font-label-bold text-label-bold text-secondary border-b-2 border-secondary/20 group-hover:border-secondary transition-all"
                  href="/entrenamientos"
                >
                  {t("home.bento.trainingCta")}
                </Link>
              </div>

              <div className="group relative bg-primary p-10 rounded-[5px] ambient-shadow overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-5 rounded-[5px] -mr-10 -mb-10 group-hover:scale-110 transition-transform" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">trophy</span>
                <h3 className="font-headline-md text-headline-md text-white uppercase mb-4">
                  {t("home.bento.tournamentsTitle")}
                </h3>
                <p className="font-body-md text-body-md text-white/70 mb-8">
                  {t("home.bento.tournamentsText")}
                </p>
                <Link
                  className="inline-block font-label-bold text-label-bold text-secondary border-b-2 border-secondary/20 group-hover:border-secondary transition-all"
                  href="/torneos"
                >
                  {t("home.bento.tournamentsCta")}
                </Link>
              </div>

              <div className="group relative bg-white p-10 rounded-[5px] ambient-shadow overflow-hidden transition-all hover:scale-[1.02]">
                <div className="absolute top-1/2 left-0 w-24 h-24 bg-primary opacity-5 rounded-[5px] -ml-12 -translate-y-1/2 group-hover:scale-150 transition-transform" />
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">event_available</span>
                <h3 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                  {t("home.bento.campsTitle")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("home.bento.campsText")}
                </p>
                <Link
                  className="inline-block font-label-bold text-label-bold text-secondary border-b-2 border-secondary/20 group-hover:border-secondary transition-all"
                  href="/eventos-camps"
                >
                  {t("home.bento.campsCta")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section className="py-section-mobile md:py-section-desktop relative bg-surface-container-low overflow-hidden" id="solicitud">
          <div className="absolute inset-0 beach-grain pointer-events-none" />
          <div className="max-w-container-max mx-auto px-gutter relative z-10">
            <div className="bg-white rounded-[5px] p-8 md:p-16 shadow-[0_40px_80px_-20px_rgba(43,43,73,0.12)] flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:w-2/5">
                <span className="font-label-bold text-label-bold text-secondary uppercase tracking-[0.2em] mb-4 block">
                  {t("home.lead.eyebrow")}
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-6">
                  {t("home.lead.titleLine1")} <br />
                  <span className="text-secondary">{t("home.lead.titleHighlight")}</span>
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                  {t("home.lead.text")}
                </p>
                <ul className="space-y-4">
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
                  className="inline-flex items-center gap-2 mt-8 font-label-bold text-label-bold text-primary hover:text-secondary transition-colors"
                >
                  <span className="material-symbols-outlined">chat</span>
                  {t("home.lead.whatsapp")}
                </a>
              </div>
              <div className="lg:w-3/5">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
