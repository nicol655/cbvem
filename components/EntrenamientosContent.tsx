"use client";

import { EntrenamientosHero } from "@/components/EntrenamientosHero";
import { OpenTryoutsSection } from "@/components/OpenTryoutsSection";
import { useLanguage } from "@/components/LanguageProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

type Level = "beginner" | "intermediate" | "elite";

const LEVEL_STYLES: Record<Level, { leftBorder: string; accent: string }> = {
  beginner: { leftBorder: "", accent: "text-gray-400 border-gray-400" },
  intermediate: { leftBorder: "border-l-4 border-l-primary", accent: "text-primary border-primary" },
  elite: { leftBorder: "border-l-4 border-l-[#bc835a]", accent: "text-[#bc835a] border-[#bc835a]" }
};

const LEVEL_LABEL_KEY: Record<Level, string> = {
  beginner: "entrenamientos.levelBeginner",
  intermediate: "entrenamientos.levelIntermediate",
  elite: "entrenamientos.levelElite"
};

type Session = { time: string; level: Level; name: string; full?: boolean };

const SCHEDULE: { dayKey: string; sessions: Session[] }[] = [
  {
    dayKey: "monday",
    sessions: [
      { time: "08:00 - 09:30", level: "beginner", name: "Morning Beach" },
      { time: "19:00 - 20:30", level: "intermediate", name: "Sunset Skills", full: true },
      { time: "10:00 - 11:30", level: "beginner", name: "Femenino Iniciación" },
      { time: "18:00 - 19:30", level: "intermediate", name: "Femenino Basic", full: true }
    ]
  },
  {
    dayKey: "tuesday",
    sessions: [
      { time: "18:30 - 20:00", level: "elite", name: "Pro Performance" },
      { time: "09:00 - 10:30", level: "elite", name: "Femenino Elite" },
      { time: "20:00 - 21:30", level: "intermediate", name: "Mixto" }
    ]
  },
  {
    dayKey: "wednesday",
    sessions: [
      { time: "09:00 - 10:30", level: "beginner", name: "Early Bird" },
      { time: "20:00 - 21:30", level: "intermediate", name: "Night Session" },
      { time: "18:00 - 19:30", level: "intermediate", name: "Masculino Básico" }
    ]
  },
  {
    dayKey: "thursday",
    sessions: [
      { time: "18:30 - 20:00", level: "elite", name: "Pro Tactics" },
      { time: "09:30 - 11:00", level: "intermediate", name: "Femenino Básico" },
      { time: "20:00 - 21:30", level: "elite", name: "Mixto Avanzado" }
    ]
  },
  {
    dayKey: "friday",
    sessions: [
      { time: "17:00 - 18:30", level: "beginner", name: "Friday Fun" },
      { time: "19:00 - 20:30", level: "elite", name: "Masculino Elite" }
    ]
  }
];

const LEVELS: { icon: string; ring: string; titleKey: string; textKey: string }[] = [
  {
    icon: "waves",
    ring: "bg-secondary/10 text-secondary",
    titleKey: "beginnerTitle",
    textKey: "beginnerText"
  },
  {
    icon: "sports_volleyball",
    ring: "bg-primary/10 text-primary",
    titleKey: "intermediateTitle",
    textKey: "intermediateText"
  },
  {
    icon: "workspace_premium",
    ring: "bg-tertiary/10 text-tertiary",
    titleKey: "eliteTitle",
    textKey: "eliteText"
  }
];

export function EntrenamientosContent() {
  const { t } = useLanguage();

  return (
    <>
      <SiteNav />

      <EntrenamientosHero />

      <OpenTryoutsSection />

      {/* Schedule */}
      <main className="bg-pattern-sand py-section-mobile md:py-section-desktop">
        <div className="px-gutter max-w-container-max mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-4">
                {t("entrenamientos.scheduleTitle")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("entrenamientos.scheduleSubtitle")}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-400" />
                <span className="font-label-bold text-label-bold">{t("entrenamientos.levelBeginner")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-label-bold text-label-bold">{t("entrenamientos.levelIntermediate")}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#bc835a]" />
                <span className="font-label-bold text-label-bold">{t("entrenamientos.levelElite")}</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SCHEDULE.map((col, i) => (
              <ScrollReveal key={col.dayKey} delay={i * 0.1} className="space-y-6">
                <h3 className="font-label-bold text-label-bold text-primary tracking-widest uppercase border-b-2 border-secondary/20 pb-2">
                  {t(`entrenamientos.days.${col.dayKey}`)}
                </h3>
                {col.sessions.map((s) => (
                  <div
                    key={s.name}
                    className={`${s.full ? "opacity-50 grayscale cursor-not-allowed" : ""} bg-surface-container-lowest p-6 rounded-[5px] border border-primary shadow-[0_20px_45px_-10px_rgba(43,43,73,0.25)] flex flex-col gap-4 ${LEVEL_STYLES[s.level].leftBorder}`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-label-bold text-label-bold text-on-surface-variant">
                        {s.time}
                      </span>
                      {s.full ? (
                        <span className="bg-outline text-on-surface px-3 py-1 rounded-[5px] text-[10px] font-bold uppercase">
                          {t("entrenamientos.full")}
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <h4
                        className={`font-headline-md text-primary text-lg ${s.full ? "line-through" : ""}`}
                      >
                        {s.name}
                      </h4>
                      <div className={`mt-3 pt-3 border-t ${LEVEL_STYLES[s.level].accent}`}>
                        <span className="font-label-bold font-bold text-[11px] uppercase tracking-wider">
                          {t(LEVEL_LABEL_KEY[s.level])}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="flex justify-center mt-16">
            <a
              href={whatsappHref("Hola CBVEM, quiero que me ayudéis a saber en qué nivel encajo.")}
              target="_blank"
              rel="noreferrer"
              className="text-secondary font-label-bold text-label-bold border-b-2 border-secondary hover:opacity-70 transition-opacity uppercase"
            >
              {t("entrenamientos.ctaKnowLevel")}
            </a>
          </ScrollReveal>
        </div>
      </main>

      {/* Levels */}
      <section className="pt-0 pb-section-mobile md:pb-section-desktop px-gutter max-w-container-max mx-auto overflow-hidden">
        <ScrollReveal>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase text-center mb-16">
            {t("entrenamientos.levelsTitle")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-[5px] aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
                  alt="Balón de voley playa en la arena"
                  src={asset("/images/masculino-2.png")}
                />
              </div>
              <div className="bg-secondary rounded-[5px] aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt="Jugadores celebrando al atardecer"
                  src={asset("/images/INI1.png")}
                />
              </div>
              <div className="bg-outline rounded-[5px] aspect-[2/1] mt-4 col-span-2 overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                  alt="Instalaciones del club con varias pistas"
                  src={asset("/images/OscarPic.JPG")}
                />
              </div>
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {LEVELS.map((lvl, i) => (
              <ScrollReveal key={lvl.titleKey} delay={i * 0.1} className="flex gap-6 items-start">
                <div className={`w-12 h-12 rounded-[5px] flex items-center justify-center flex-shrink-0 ${lvl.ring}`}>
                  <span className="material-symbols-outlined">{lvl.icon}</span>
                </div>
                <div>
                  <h4 className="font-label-bold text-label-bold text-primary uppercase mb-2">
                    {t(`entrenamientos.levels.${lvl.titleKey}`)}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {t(`entrenamientos.levels.${lvl.textKey}`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
