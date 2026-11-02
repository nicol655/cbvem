// Cookie consent storage and script gating. Works fully client-side so it is
// compatible with the static export (no server needed).

export type ConsentCategory = "analytics" | "marketing";

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
  /** ISO date of when the visitor made the choice. */
  date: string;
  version: number;
};

export const CONSENT_STORAGE_KEY = "cbvem-cookie-consent";
export const CONSENT_VERSION = 1;
/** The choice is asked again after this many months. */
export const CONSENT_MAX_AGE_MONTHS = 24;
/** Dispatch on window to reopen the settings panel (footer "Configurar cookies"). */
export const OPEN_CONSENT_EVENT = "cbvem:open-cookie-settings";

type ConsentScript = {
  id: string;
  src?: string;
  inline?: string;
  /** Cookie name prefixes to delete when consent is withdrawn (e.g. "_ga"). */
  cookies?: string[];
};

// Non-essential scripts, by category. They are injected only after the visitor
// accepts that category and removed when consent is withdrawn.
// The site currently loads NO analytics or marketing scripts, so both lists are
// empty. Example for Google Analytics 4:
//   analytics: [{ id: "ga4", src: "https://www.googletagmanager.com/gtag/js?id=G-XXXX", cookies: ["_ga"] }]
export const CONSENT_SCRIPTS: Record<ConsentCategory, ConsentScript[]> = {
  analytics: [],
  marketing: []
};

export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION || !parsed.date) return null;
    const expires = new Date(parsed.date);
    expires.setMonth(expires.getMonth() + CONSENT_MAX_AGE_MONTHS);
    if (Number.isNaN(expires.getTime()) || expires < new Date()) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Pick<ConsentState, ConsentCategory>): ConsentState {
  const state: ConsentState = { ...choice, date: new Date().toISOString(), version: CONSENT_VERSION };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage blocked: the choice still applies for this page view.
  }
  return state;
}

function deleteCookies(prefixes: string[]) {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  document.cookie.split(";").forEach((pair) => {
    const name = pair.split("=")[0].trim();
    if (!prefixes.some((prefix) => name.startsWith(prefix))) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    });
  });
}

/** Loads the scripts of accepted categories and unloads the rest. */
export function applyConsent(consent: Pick<ConsentState, ConsentCategory> | null) {
  (Object.keys(CONSENT_SCRIPTS) as ConsentCategory[]).forEach((category) => {
    const allowed = Boolean(consent?.[category]);
    CONSENT_SCRIPTS[category].forEach((script) => {
      const elementId = `consent-script-${script.id}`;
      const existing = document.getElementById(elementId);
      if (allowed && !existing) {
        const el = document.createElement("script");
        el.id = elementId;
        if (script.src) {
          el.src = script.src;
          el.async = true;
        }
        if (script.inline) el.text = script.inline;
        document.head.appendChild(el);
      } else if (!allowed && existing) {
        existing.remove();
        if (script.cookies?.length) deleteCookies(script.cookies);
      }
    });
  });
}

/** True when there is at least one script that needs a reload to be fully stopped. */
export function hasActiveScripts(category: ConsentCategory): boolean {
  return CONSENT_SCRIPTS[category].some((script) => document.getElementById(`consent-script-${script.id}`));
}
