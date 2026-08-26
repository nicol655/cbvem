import type { Metadata } from "next";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { asset } from "@/lib/asset";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Entrenamientos | CBVEM",
  description:
    "Escuela y grupos de entrenamiento de beach volley por niveles en El Masnou: iniciación, intermedio y élite."
};

type Level = "Iniciación" | "Intermedio" | "Élite";

const LEVEL_STYLES: Record<Level, { badge: string; border: string }> = {
  Iniciación: { badge: "bg-secondary text-on-secondary", border: "" },
  Intermedio: { badge: "bg-primary text-on-primary", border: "border-l-4 border-primary" },
  Élite: { badge: "bg-tertiary text-on-tertiary", border: "border-l-4 border-tertiary" }
};

type Session = { time: string; level: Level; name: string };

const SCHEDULE: { day: string; sessions: Session[] }[] = [
  {
    day: "Lunes",
    sessions: [
      { time: "08:00 - 09:30", level: "Iniciación", name: "Morning Beach" },
      { time: "19:00 - 20:30", level: "Intermedio", name: "Sunset Skills" }
    ]
  },
  {
    day: "Martes",
    sessions: [{ time: "18:30 - 20:00", level: "Élite", name: "Pro Performance" }]
  },
  {
    day: "Miércoles",
    sessions: [
      { time: "09:00 - 10:30", level: "Iniciación", name: "Early Bird" },
      { time: "20:00 - 21:30", level: "Intermedio", name: "Night Session" }
    ]
  },
  {
    day: "Jueves",
    sessions: [{ time: "18:30 - 20:00", level: "Élite", name: "Pro Tactics" }]
  },
  {
    day: "Viernes",
    sessions: [{ time: "17:00 - 18:30", level: "Iniciación", name: "Friday Fun" }]
  }
];

const LEVELS = [
  {
    icon: "waves",
    ring: "bg-secondary/10 text-secondary",
    title: "Iniciación",
    text: "Aprende los fundamentos básicos: toque de dedos, antebrazos y saque. Perfecto para quienes nunca han jugado o llevan poco tiempo."
  },
  {
    icon: "sports_volleyball",
    ring: "bg-primary/10 text-primary",
    title: "Intermedio",
    text: "Mejora tu control de juego, táctica de campo y remate. Enfocado en jugadores con experiencia previa en pista o playa."
  },
  {
    icon: "workspace_premium",
    ring: "bg-tertiary/10 text-tertiary",
    title: "Avanzado / Élite",
    text: "Entrenamiento de alto rendimiento. Preparación para torneos, sistemas defensivos complejos y perfeccionamiento técnico extremo."
  }
];

export default function EntrenamientosPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <header className="pt-40 pb-section-mobile md:pb-section-desktop px-gutter max-w-container-max mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
          <div className="md:col-span-8 z-10">
            <span className="inline-block bg-secondary-container text-on-secondary-container font-label-bold text-label-bold px-4 py-1 rounded-full mb-6">
              PRE SEASON 2024
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-8 leading-none">
              ESCUELA Y GRUPOS DE
              <br />
              ENTRENAMIENTO
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Perfecciona tu técnica en las mejores playas con un sistema de entrenamiento adaptado a
              todos los niveles. Desde tus primeros pasos hasta la alta competición.
            </p>
          </div>
          <div className="hidden md:block md:col-span-4 relative h-[300px]">
            <div className="absolute -top-20 -right-10 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl" />
            <img
              className="absolute top-0 right-0 h-full w-full object-cover rounded-lg athlete-cutout-float z-20"
              style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
              alt="Jugador de beach volley rematando"
              src={asset("/images/train-hero.jpg")}
            />
          </div>
        </div>
      </header>

      {/* Schedule */}
      <main className="bg-pattern-sand py-section-mobile md:py-section-desktop">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary uppercase mb-4">
                Horarios Semanales
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Elige el horario que mejor se adapte a tu ritmo de vida.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary" />
                <span className="font-label-bold text-label-bold">Iniciación</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-label-bold text-label-bold">Intermedio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-tertiary" />
                <span className="font-label-bold text-label-bold">Élite</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SCHEDULE.map((col) => (
              <div key={col.day} className="space-y-6">
                <h3 className="font-label-bold text-label-bold text-primary tracking-widest uppercase border-b-2 border-secondary/20 pb-2">
                  {col.day}
                </h3>
                {col.sessions.map((s) => (
                  <div
                    key={s.name}
                    className={`schedule-card bg-surface-container-lowest p-6 rounded-lg flex flex-col gap-4 ${LEVEL_STYLES[s.level].border}`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-label-bold text-label-bold text-on-surface-variant">
                        {s.time}
                      </span>
                      <span
                        className={`${LEVEL_STYLES[s.level].badge} px-3 py-1 rounded-full text-[10px] font-bold uppercase`}
                      >
                        {s.level}
                      </span>
                    </div>
                    <h4 className="font-headline-md text-primary text-lg">{s.name}</h4>
                    <a
                      href={whatsappHref(
                        `Hola CBVEM, quiero reservar la sesión "${s.name}" (${col.day} ${s.time}, nivel ${s.level}).`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center py-3 rounded-full bg-secondary text-on-secondary font-label-bold text-label-bold hover:bg-primary transition-colors mt-2 uppercase"
                    >
                      Reservar ahora
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Levels */}
      <section className="py-section-mobile md:py-section-desktop px-gutter max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary rounded-lg aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
                  alt="Balón de voley playa en la arena"
                  src={asset("/images/level-ball.jpg")}
                />
              </div>
              <div className="bg-secondary rounded-lg aspect-[3/4] translate-y-8 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt="Jugadores celebrando al atardecer"
                  src={asset("/images/level-sunset.jpg")}
                />
              </div>
              <div className="bg-outline rounded-lg aspect-[4/3] -translate-y-8 col-span-2 overflow-hidden">
                <img
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                  alt="Instalaciones del club con varias pistas"
                  src={asset("/images/level-panorama.jpg")}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md text-primary uppercase mb-8">
              Nuestros Niveles
            </h2>
            <div className="space-y-8">
              {LEVELS.map((lvl) => (
                <div key={lvl.title} className="flex gap-6 items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${lvl.ring}`}>
                    <span className="material-symbols-outlined">{lvl.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-label-bold text-label-bold text-primary uppercase mb-2">
                      {lvl.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{lvl.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
