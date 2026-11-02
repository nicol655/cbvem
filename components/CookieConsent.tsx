"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import {
  ConsentCategory,
  OPEN_CONSENT_EVENT,
  applyConsent,
  hasActiveScripts,
  readConsent,
  saveConsent
} from "@/lib/consent";

type Choice = Record<ConsentCategory, boolean>;

const CATEGORIES: ConsentCategory[] = ["analytics", "marketing"];

// All three first-layer buttons share this exact style so none is more prominent.
const BUTTON =
  "flex-1 min-w-0 bg-primary text-white font-label-bold text-label-bold uppercase tracking-widest px-4 py-3 rounded-[5px] hover:bg-primary-container transition-colors";

export function CookieConsent() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [choice, setChoice] = useState<Choice>({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      applyConsent(stored);
      setChoice({ analytics: stored.analytics, marketing: stored.marketing });
    } else {
      setOpen(true);
    }

    const onOpen = () => {
      const current = readConsent();
      setChoice({ analytics: Boolean(current?.analytics), marketing: Boolean(current?.marketing) });
      setShowSettings(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  const commit = useCallback((next: Choice) => {
    // Scripts already running cannot be stopped by removing their tag, so a
    // withdrawn category with live scripts forces a reload.
    const needsReload = CATEGORIES.some((category) => !next[category] && hasActiveScripts(category));
    applyConsent(saveConsent(next));
    setChoice(next);
    setOpen(false);
    setShowSettings(false);
    if (needsReload) window.location.reload();
  }, []);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 md:p-6 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pointer-events-none"
    >
      <div className="pointer-events-auto mx-auto max-w-2xl max-h-[85vh] overflow-y-auto bg-surface-container-lowest text-on-surface rounded-[5px] shadow-2xl border border-outline-variant/40 p-5 md:p-6">
        <h2 id="cookie-consent-title" className="font-headline-md text-headline-md text-primary uppercase mb-2">
          {showSettings ? t("cookieConsent.settingsTitle") : t("cookieConsent.title")}
        </h2>
        <p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant mb-4">
          {showSettings ? t("cookieConsent.settingsText") : t("cookieConsent.text")}{" "}
          <Link href="/cookies" className="underline text-primary hover:text-secondary">
            {t("cookieConsent.policyLink")}
          </Link>
        </p>

        {showSettings ? (
          <>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start justify-between gap-4 border border-outline-variant/40 rounded-[5px] p-3">
                <div>
                  <p className="font-label-bold text-label-bold text-primary">{t("cookieConsent.technicalTitle")}</p>
                  <p className="text-[13px] text-on-surface-variant">{t("cookieConsent.technicalText")}</p>
                </div>
                <span className="shrink-0 text-[12px] font-label-bold uppercase text-secondary">
                  {t("cookieConsent.alwaysActive")}
                </span>
              </li>
              {CATEGORIES.map((category) => (
                <li key={category} className="border border-outline-variant/40 rounded-[5px] p-3">
                  <label className="flex items-start justify-between gap-4 cursor-pointer">
                    <span>
                      <span className="block font-label-bold text-label-bold text-primary">
                        {t(`cookieConsent.${category}Title`)}
                      </span>
                      <span className="block text-[13px] text-on-surface-variant">
                        {t(`cookieConsent.${category}Text`)}
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      checked={choice[category]}
                      onChange={(e) => setChoice({ ...choice, [category]: e.target.checked })}
                      className="mt-1 h-5 w-5 shrink-0 rounded border-outline text-primary focus:ring-secondary"
                    />
                  </label>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="button" className={BUTTON} onClick={() => commit({ analytics: false, marketing: false })}>
                {t("cookieConsent.reject")}
              </button>
              <button type="button" className={BUTTON} onClick={() => commit(choice)}>
                {t("cookieConsent.save")}
              </button>
              <button type="button" className={BUTTON} onClick={() => commit({ analytics: true, marketing: true })}>
                {t("cookieConsent.accept")}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" className={BUTTON} onClick={() => commit({ analytics: true, marketing: true })}>
              {t("cookieConsent.accept")}
            </button>
            <button type="button" className={BUTTON} onClick={() => commit({ analytics: false, marketing: false })}>
              {t("cookieConsent.reject")}
            </button>
            <button type="button" className={BUTTON} onClick={() => setShowSettings(true)}>
              {t("cookieConsent.configure")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
