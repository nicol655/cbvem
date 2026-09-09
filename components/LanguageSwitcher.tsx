"use client";

import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/translations";

const OPTIONS: { code: Locale; short: string }[] = [
  { code: "es", short: "Es" },
  { code: "en", short: "Eng" }
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      {open ? (
        <div className="bg-white rounded-[5px] ambient-shadow overflow-hidden border border-outline-variant/40 min-w-[160px]">
          {OPTIONS.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLocale(option.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-5 py-3 text-left font-body-md text-body-md transition-colors ${
                locale === option.code
                  ? "bg-secondary-container text-on-secondary-container"
                  : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <span className="font-label-bold text-label-bold text-secondary w-8">{option.short}</span>
              <span>{t(`languageSwitcher.${option.code}`)}</span>
              {locale === option.code ? (
                <span className="material-symbols-outlined ml-auto text-[18px]">check</span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("languageSwitcher.label")}
        aria-expanded={open}
        className="btn-shine bg-white text-primary w-14 h-14 rounded-[5px] border border-outline-variant/40 shadow-xl flex items-center justify-center"
      >
        <span className="material-symbols-outlined">language</span>
      </button>
    </div>
  );
}
