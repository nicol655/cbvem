"use client";

import { useEffect, useId, useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/translations";

const OPTIONS: { code: Locale }[] = [
  { code: "es" },
  { code: "en" },
  { code: "ca" }
];

/** Small inline flags (flag emojis don't render on Windows). */
function Flag({ code, className = "" }: { code: Locale; className?: string }) {
  const clipId = useId();
  const common = {
    className: `shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] ${className}`,
    width: 21,
    height: 14,
    "aria-hidden": true
  };

  if (code === "es") {
    return (
      <svg {...common} viewBox="0 0 3 2">
        <rect width="3" height="2" fill="#AA151B" />
        <rect y="0.5" width="3" height="1" fill="#F1BF00" />
      </svg>
    );
  }

  if (code === "ca") {
    return (
      <svg {...common} viewBox="0 0 9 6">
        <rect width="9" height="6" fill="#FCDD09" />
        {[1, 2, 3, 4].map((i) => (
          <rect key={i} y={(i * 2 - 1) * (6 / 9)} width="9" height={6 / 9} fill="#DA121A" />
        ))}
      </svg>
    );
  }

  return (
    <svg {...common} viewBox="0 0 60 40" preserveAspectRatio="none">
      <clipPath id={clipId}>
        <path d="M30,20 h30 v20 z v20 h-30 z h-30 v-20 z v-20 h30 z" />
      </clipPath>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" clipPath={`url(#${clipId})`} stroke="#C8102E" strokeWidth="5" />
      <path d="M30,0 v40 M0,20 h60" stroke="#fff" strokeWidth="12" />
      <path d="M30,0 v40 M0,20 h60" stroke="#C8102E" strokeWidth="7" />
    </svg>
  );
}

type LanguageSwitcherProps = {
  /** Text color classes for the trigger, so it matches the navbar state (transparent / solid). */
  triggerClassName?: string;
};

export function LanguageSwitcher({ triggerClassName = "text-primary" }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = OPTIONS.find((option) => option.code === locale) ?? OPTIONS[0];

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("languageSwitcher.label")}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`flex items-center gap-2 px-2 py-1.5 rounded-[5px] font-label-bold text-[13px] transition-colors duration-300 hover:text-secondary ${triggerClassName}`}
      >
        <span className="flag-glow">
          <Flag code={current.code} />
        </span>
        <span
          className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          expand_more
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 bg-white rounded-[5px] ambient-shadow overflow-hidden border border-outline-variant/40 min-w-[170px] z-[60]"
        >
          {OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              role="menuitem"
              onClick={() => {
                setLocale(option.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left font-body-md text-body-md transition-colors ${
                locale === option.code
                  ? "bg-secondary-container text-on-secondary-container"
                  : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <Flag code={option.code} />
              <span>{t(`languageSwitcher.${option.code}`)}</span>
              {locale === option.code ? (
                <span className="material-symbols-outlined ml-auto text-[18px]">check</span>
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
