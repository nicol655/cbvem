export type SupportedLocale = "es" | "ca" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type FeatureCard = {
  title: string;
  description: string;
};

export type ContactConfig = {
  whatsappPhone: string;
  whatsappMessage: string;
  leadEmail: string;
};

export type PageContent = {
  slug: "inicio" | "entrenamientos" | "torneos" | "eventos-camps";
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  sections: Array<{
    title: string;
    intro: string;
    cards: FeatureCard[];
  }>;
  seo: {
    title: string;
    description: string;
  };
  contact: ContactConfig;
};

export type LegalSlug = "aviso-legal" | "politica-de-privacidad" | "cookies";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  table?: { headers: string[]; rows: string[][] };
  after?: string[];
};

export type LegalDocument = {
  title: string;
  sections: LegalSection[];
};

export type LegalContent = { lastUpdatedLabel: string } & Record<LegalSlug, LegalDocument>;
