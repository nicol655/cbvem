import type { LegalContent, PageContent, SupportedLocale } from "@/types/content";

import esInicio from "@/content/es/inicio.json";
import esEntrenamientos from "@/content/es/entrenamientos.json";
import esTorneos from "@/content/es/torneos.json";
import esEventos from "@/content/es/eventos-camps.json";
import esLegal from "@/content/es/legal.json";

import caInicio from "@/content/ca/inicio.json";
import caEntrenamientos from "@/content/ca/entrenamientos.json";
import caTorneos from "@/content/ca/torneos.json";
import caEventos from "@/content/ca/eventos-camps.json";
import caLegal from "@/content/ca/legal.json";

import enInicio from "@/content/en/inicio.json";
import enEntrenamientos from "@/content/en/entrenamientos.json";
import enTorneos from "@/content/en/torneos.json";
import enEventos from "@/content/en/eventos-camps.json";
import enLegal from "@/content/en/legal.json";

type PageSlug = "inicio" | "entrenamientos" | "torneos" | "eventos-camps";

const CONTENT: Record<SupportedLocale, Record<PageSlug, PageContent>> = {
  es: {
    inicio: esInicio as PageContent,
    entrenamientos: esEntrenamientos as PageContent,
    torneos: esTorneos as PageContent,
    "eventos-camps": esEventos as PageContent
  },
  ca: {
    inicio: caInicio as PageContent,
    entrenamientos: caEntrenamientos as PageContent,
    torneos: caTorneos as PageContent,
    "eventos-camps": caEventos as PageContent
  },
  en: {
    inicio: enInicio as PageContent,
    entrenamientos: enEntrenamientos as PageContent,
    torneos: enTorneos as PageContent,
    "eventos-camps": enEventos as PageContent
  }
};

export function getPageContent(locale: SupportedLocale, slug: PageSlug): PageContent {
  return CONTENT[locale][slug];
}

const LEGAL: Record<SupportedLocale, LegalContent> = {
  es: esLegal as LegalContent,
  ca: caLegal as LegalContent,
  en: enLegal as LegalContent
};

export function getLegalContent(locale: SupportedLocale): LegalContent {
  return LEGAL[locale];
}
