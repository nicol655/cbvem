"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import {
  DAY_HASH_SLUG,
  DAY_ORDER,
  HASH_SLUG_TO_DAY,
  LEVEL_COLORS,
  LEVEL_ORDER,
  SCHEDULE,
  isSpotsFull,
  isSpotsOpen,
  type DayKey,
  type Level,
  type ScheduleSession
} from "@/lib/schedule";

const LEVEL_LABEL_KEY: Record<Level, string> = {
  iniciacion: "entrenamientos.levelIniciacion",
  intermedio: "entrenamientos.levelIntermedio",
  avanzado: "entrenamientos.levelAvanzado",
  competicion: "entrenamientos.levelCompeticion",
  sub17: "entrenamientos.levelSub17"
};

const DAY_SHORT_KEY: Record<DayKey, string> = {
  monday: "entrenamientos.daysShort.monday",
  tuesday: "entrenamientos.daysShort.tuesday",
  wednesday: "entrenamientos.daysShort.wednesday",
  thursday: "entrenamientos.daysShort.thursday",
  friday: "entrenamientos.daysShort.friday"
};

const AVAILABLE_COUNT_BY_DAY: Record<DayKey, number> = Object.fromEntries(
  SCHEDULE.map((day) => [day.dayKey, day.sessions.filter((s) => isSpotsOpen(s.spots)).length])
) as Record<DayKey, number>;

const WEEKDAY_TO_DAY_KEY: Partial<Record<number, DayKey>> = {
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday"
};

function getDefaultDayKey(): DayKey {
  return WEEKDAY_TO_DAY_KEY[new Date().getDay()] ?? "monday";
}

function spotsBadgeClasses(spots: string): string {
  if (isSpotsFull(spots)) return "bg-red-100 text-red-700";
  if (spots.trim().toLowerCase() === "hay sitio") return "bg-green-100 text-green-800";
  return "bg-amber-100 text-amber-800";
}

const SPOTS_COUNT_PATTERN = /^(\d+)(?:-(\d+))?\s+plazas?$/i;

function spotsLabel(spots: string, t: (path: string) => string): string {
  if (isSpotsFull(spots)) return t("entrenamientos.spotsComplete");
  if (spots.trim().toLowerCase() === "hay sitio") return t("entrenamientos.spotsAvailable");
  const match = spots.trim().match(SPOTS_COUNT_PATTERN);
  if (match) {
    const [, from, to] = match;
    const unit = !to && from === "1" ? t("entrenamientos.spotsUnitSingular") : t("entrenamientos.spotsUnitPlural");
    return to ? `${from}-${to} ${unit}` : `${from} ${unit}`;
  }
  return spots.charAt(0).toUpperCase() + spots.slice(1);
}

const CATEGORY_KEY: Record<string, string> = {
  Femenino: "entrenamientos.categoryFemenino",
  Masculino: "entrenamientos.categoryMasculino",
  Mixto: "entrenamientos.categoryMixto"
};

function categoryLabel(session: ScheduleSession, t: (path: string) => string): string | null {
  if (session.level === "sub17") return t("entrenamientos.categoryJuvenil");
  if (!session.category) return null;
  return t(CATEGORY_KEY[session.category] ?? session.category);
}

export function TrainingSchedule() {
  const { t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<DayKey>("monday");
  const [selectedLevel, setSelectedLevel] = useState<Level | "all">("all");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Resolve the real default (URL hash, else today's weekday) after mount only,
  // so the server-rendered markup doesn't depend on the client's clock/URL.
  useEffect(() => {
    const hashSlug = window.location.hash.replace("#", "");
    const dayFromHash = HASH_SLUG_TO_DAY[hashSlug];
    setSelectedDay(dayFromHash ?? getDefaultDayKey());
  }, []);

  function selectDay(day: DayKey) {
    setSelectedDay(day);
    window.history.replaceState(null, "", `#${DAY_HASH_SLUG[day]}`);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + delta + DAY_ORDER.length) % DAY_ORDER.length;
    selectDay(DAY_ORDER[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  const currentDay = SCHEDULE.find((d) => d.dayKey === selectedDay) ?? SCHEDULE[0];

  const filteredSessions = useMemo(
    () =>
      currentDay.sessions.filter((s) => {
        if (selectedLevel !== "all" && s.level !== selectedLevel) return false;
        if (onlyAvailable && isSpotsFull(s.spots)) return false;
        return true;
      }),
    [currentDay, selectedLevel, onlyAvailable]
  );

  const times = useMemo(
    () => Array.from(new Set(filteredSessions.map((s) => s.time))).sort(),
    [filteredSessions]
  );

  return (
    <div className="px-4 md:px-0 max-w-[880px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase">
          {t("entrenamientos.scheduleTitle")}
        </h2>
        <label className="inline-flex items-center gap-3 cursor-pointer select-none">
          <span className="font-label-bold text-label-bold text-primary">{t("entrenamientos.onlyAvailable")}</span>
          <span
            role="switch"
            aria-checked={onlyAvailable}
            tabIndex={0}
            onClick={() => setOnlyAvailable((v) => !v)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOnlyAvailable((v) => !v);
              }
            }}
            className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
              onlyAvailable ? "bg-primary" : "bg-outline-variant"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                onlyAvailable ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </span>
        </label>
      </div>

      {/* Day tabs */}
      <div role="tablist" aria-label={t("entrenamientos.scheduleTitle")} className="grid grid-cols-5 gap-2 mb-6">
        {DAY_ORDER.map((day, i) => {
          const active = day === selectedDay;
          return (
            <button
              key={day}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => selectDay(day)}
              onKeyDown={(e) => handleTabKeyDown(e, i)}
              className={`flex flex-col items-center py-3 rounded-[5px] transition-colors ${
                active ? "bg-primary text-white" : "bg-surface-container-lowest text-primary hover:bg-surface-container"
              }`}
            >
              <span className="font-label-bold text-label-bold uppercase">
                <span className="sm:hidden">{t(DAY_SHORT_KEY[day])}</span>
                <span className="hidden sm:inline">{t(`entrenamientos.days.${day}`)}</span>
              </span>
              <span className={`text-[11px] mt-1 ${active ? "text-white/80" : "text-on-surface-variant"}`}>
                {AVAILABLE_COUNT_BY_DAY[day]} {t("entrenamientos.freeShort")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Level filter chips */}
      <div className="flex gap-2 overflow-x-auto md:flex-wrap md:overflow-visible pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0">
        {(["all", ...LEVEL_ORDER] as (Level | "all")[]).map((level) => {
          const active = selectedLevel === level;
          return (
            <button
              key={level}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedLevel(level)}
              className={`flex items-center gap-2 shrink-0 px-4 py-2 rounded-full border font-label-bold text-label-bold whitespace-nowrap transition-colors ${
                active ? "bg-primary text-white border-primary" : "bg-white text-primary border-outline-variant"
              }`}
            >
              {level !== "all" ? (
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LEVEL_COLORS[level] }} />
              ) : null}
              {level === "all" ? t("entrenamientos.filterAll") : t(LEVEL_LABEL_KEY[level])}
            </button>
          );
        })}
      </div>

      {/* Day list */}
      {times.length === 0 ? (
        <p className="text-body-md text-on-surface-variant py-12 text-center">
          {t("entrenamientos.emptyDayFiltered")}
        </p>
      ) : (
        <div className="space-y-8">
          {times.map((time) => {
            const sessions = filteredSessions.filter((s) => s.time === time);
            return (
              <div key={time}>
                <p className="text-[13px] text-on-surface-variant font-label-bold uppercase tracking-wider mb-3">
                  {time}
                </p>
                <div
                  className="grid grid-cols-2 gap-3 sm:[grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]"
                >
                  {sessions.map((s, si) => {
                    const full = isSpotsFull(s.spots);
                    const category = categoryLabel(s, t);
                    return (
                      <div
                        key={si}
                        className={`flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 rounded-[5px] border-l-4 p-4 ${
                          sessions.length === 1 ? "col-span-2 sm:col-span-1" : ""
                        } ${full ? "bg-surface-container" : "bg-surface-container-lowest"}`}
                        style={{ borderLeftColor: LEVEL_COLORS[s.level] }}
                      >
                        <div>
                          <p
                            className={`font-label-bold text-label-bold ${
                              full ? "text-on-surface-variant" : "text-primary"
                            }`}
                          >
                            {s.levelLabel ?? t(LEVEL_LABEL_KEY[s.level])}
                          </p>
                          {category ? <p className="text-[13px] text-on-surface-variant mt-0.5">{category}</p> : null}
                        </div>
                        <span
                          className={`shrink-0 px-2.5 py-1 rounded text-[11px] font-bold uppercase whitespace-nowrap ${spotsBadgeClasses(
                            s.spots
                          )}`}
                        >
                          {spotsLabel(s.spots, t)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
