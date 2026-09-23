"use client";

import { EntrenamientosHero, EntrenamientosMobileMedia } from "@/components/EntrenamientosHero";
import { OpenTryoutsSection } from "@/components/OpenTryoutsSection";
import { TrainingSchedule } from "@/components/TrainingSchedule";
import { useLanguage } from "@/components/LanguageProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { LEVEL_COLORS, SCHEDULE_SECTION_ID } from "@/lib/schedule";
import { whatsappHref } from "@/lib/site";

const LEVELS: { icon: string; color: string; titleKey: string; textKey: string }[] = [
  {
    icon: "waves",
    color: LEVEL_COLORS.iniciacion,
    titleKey: "iniciacionTitle",
    textKey: "iniciacionText"
  },
  {
    icon: "sports_volleyball",
    color: LEVEL_COLORS.intermedio,
    titleKey: "intermedioTitle",
    textKey: "intermedioText"
  },
  {
    icon: "trending_up",
    color: LEVEL_COLORS.avanzado,
    titleKey: "avanzadoTitle",
    textKey: "avanzadoText"
  },
  {
    icon: "emoji_events",
    color: LEVEL_COLORS.competicion,
    titleKey: "competicionTitle",
    textKey: "competicionText"
  },
  {
    icon: "groups",
    color: LEVEL_COLORS.sub17,
    titleKey: "sub17Title",
    textKey: "sub17Text"
  }
];

export function EntrenamientosContent() {
  const { t } = useLanguage();

  return (
    <>
      <SiteNav transparentUntilVh={1.26} />

      <EntrenamientosHero />

      {/* Schedule */}
      <main id={SCHEDULE_SECTION_ID} className="scroll-mt-24 bg-pattern-sand py-section-mobile md:py-section-desktop">
        <TrainingSchedule />

        <ScrollReveal className="flex justify-center mt-16">
          <a
            href={whatsappHref("Hola CBVEM, ¿me ayudáis a saber en qué nivel encajo?")}
            target="_blank"
            rel="noreferrer"
            className="text-secondary font-label-bold text-label-bold border-b-2 border-secondary hover:opacity-70 transition-opacity uppercase"
          >
            {t("entrenamientos.ctaKnowLevel")}
          </a>
        </ScrollReveal>
      </main>

      <EntrenamientosMobileMedia />

      <OpenTryoutsSection />

      {/* Levels */}
      <section className="pt-section-mobile md:pt-section-desktop pb-section-mobile md:pb-section-desktop px-gutter max-w-container-max mx-auto overflow-hidden">
        <ScrollReveal>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase text-center mb-16">
            {t("entrenamientos.levelsTitle")}
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
                  alt="Balón de vóley playa en la arena"
                  src={asset("/images/mixto1.JPG")}
                />
              </div>
              <div className="bg-secondary aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt="Jugadores celebrando al atardecer"
                  src={asset("/images/entrenamientos_fotos.jpg")}
                />
              </div>
              <div className="bg-outline aspect-[2/1] mt-4 col-span-2 overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                  alt="Instalaciones del club con varias pistas"
                  src={asset("/images/OscarPic.JPG")}
                />
              </div>
            </div>
          </ScrollReveal>
          <div className="space-y-8 order-1 md:order-2">
            {LEVELS.map((lvl, i) => (
              <ScrollReveal key={lvl.titleKey} delay={i * 0.1} className="flex gap-6 items-start">
                <div
                  className="w-12 h-12 rounded-[5px] flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${lvl.color}1a`, color: lvl.color }}
                >
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
