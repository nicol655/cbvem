import type { SupportedLocale } from "@/types/content";

export const SUPPORTED_LOCALES: SupportedLocale[] = ["es", "ca", "en"];
export const DEFAULT_LOCALE: SupportedLocale = "es";

export function normalizeLocale(value: string | null | undefined): SupportedLocale {
  if (!value) {
    return DEFAULT_LOCALE;
  }

  if (SUPPORTED_LOCALES.includes(value as SupportedLocale)) {
    return value as SupportedLocale;
  }

  return DEFAULT_LOCALE;
}

export function withLang(href: string, locale: SupportedLocale): string {
  const separator = href.includes("?") ? "&" : "?";
  return `${href}${separator}lang=${locale}`;
}
