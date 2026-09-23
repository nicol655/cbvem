export type Level = "iniciacion" | "intermedio" | "avanzado" | "competicion" | "sub17";
export type DayKey = "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
export type Category = "Femenino" | "Masculino" | "Mixto";

export type ScheduleSession = {
  time: string;
  level: Level;
  /** Overrides the default level label for this session only, e.g. "Iniciación +". */
  levelLabel?: string;
  /** Absent for Sub-17, which shows "Juvenil" instead. */
  category?: Category;
  /** Raw status text: "completo", "hay sitio", or a free-form count like "2 plazas" / "1 plaza" / "3-4 plazas". */
  spots: string;
};

export type DaySchedule = {
  dayKey: DayKey;
  sessions: ScheduleSession[];
};

export const DAY_ORDER: DayKey[] = ["monday", "tuesday", "wednesday", "thursday", "friday"];

/** Anchor id for the schedule section, used by the "VER HORARIOS" mobile hero link. */
export const SCHEDULE_SECTION_ID = "horarios";

export const DAY_HASH_SLUG: Record<DayKey, string> = {
  monday: "lunes",
  tuesday: "martes",
  wednesday: "miercoles",
  thursday: "jueves",
  friday: "viernes"
};

export const HASH_SLUG_TO_DAY: Record<string, DayKey> = Object.fromEntries(
  Object.entries(DAY_HASH_SLUG).map(([day, slug]) => [slug, day as DayKey])
);

export const LEVEL_ORDER: Level[] = ["iniciacion", "intermedio", "avanzado", "competicion", "sub17"];

export const LEVEL_COLORS: Record<Level, string> = {
  iniciacion: "#3FAE7A",
  intermedio: "#3A7FC8",
  avanzado: "#7A55C9",
  competicion: "#E07A3A",
  sub17: "#1D9E9A"
};

/**
 * Source of truth for the weekly training schedule.
 * Update `spots` (and nothing else) to reflect availability changes — the
 * TrainingSchedule component re-renders from this data with no markup changes.
 */
export const SCHEDULE: DaySchedule[] = [
  {
    dayKey: "monday",
    sessions: [
      { time: "08:30", level: "competicion", category: "Femenino", spots: "2 plazas" },
      { time: "18:00", level: "iniciacion", levelLabel: "Iniciación +", category: "Femenino", spots: "completo" },
      { time: "18:00", level: "sub17", spots: "2 plazas" },
      { time: "19:30", level: "intermedio", category: "Mixto", spots: "completo" },
      { time: "19:30", level: "intermedio", category: "Femenino", spots: "completo" }
    ]
  },
  {
    dayKey: "tuesday",
    sessions: [
      { time: "08:30", level: "avanzado", category: "Masculino", spots: "4 plazas" },
      { time: "18:00", level: "intermedio", category: "Masculino", spots: "completo" },
      { time: "18:30", level: "avanzado", category: "Femenino", spots: "1 plaza" },
      { time: "19:30", level: "avanzado", category: "Masculino", spots: "3 plazas" },
      { time: "20:00", level: "intermedio", category: "Masculino", spots: "completo" },
      { time: "21:00", level: "competicion", category: "Masculino", spots: "hay sitio" }
    ]
  },
  {
    dayKey: "wednesday",
    sessions: [
      { time: "18:00", level: "intermedio", category: "Femenino", spots: "3-4 plazas" },
      { time: "18:00", level: "iniciacion", category: "Femenino", spots: "completo" },
      { time: "19:30", level: "competicion", category: "Femenino", spots: "3-4 plazas" }
    ]
  },
  {
    dayKey: "thursday",
    sessions: [
      { time: "16:30", level: "avanzado", category: "Femenino", spots: "completo" },
      { time: "18:00", level: "iniciacion", category: "Masculino", spots: "3 plazas" },
      { time: "18:00", level: "iniciacion", category: "Mixto", spots: "completo" },
      { time: "19:30", level: "intermedio", category: "Masculino", spots: "1-2 plazas" },
      { time: "21:00", level: "competicion", category: "Masculino", spots: "hay sitio" }
    ]
  },
  {
    dayKey: "friday",
    sessions: [
      { time: "08:30", level: "avanzado", category: "Masculino", spots: "hay sitio" },
      { time: "09:30", level: "iniciacion", category: "Mixto", spots: "hay sitio" },
      { time: "16:00", level: "competicion", category: "Masculino", spots: "hay sitio" },
      { time: "18:00", level: "iniciacion", category: "Mixto", spots: "3 plazas" },
      { time: "18:00", level: "intermedio", category: "Masculino", spots: "1-2 plazas" },
      { time: "19:30", level: "competicion", category: "Femenino", spots: "3-4 plazas" }
    ]
  }
];

export function isSpotsFull(spots: string): boolean {
  return spots.trim().toLowerCase() === "completo";
}

export function isSpotsOpen(spots: string): boolean {
  return !isSpotsFull(spots);
}
