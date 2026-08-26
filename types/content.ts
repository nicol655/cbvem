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
