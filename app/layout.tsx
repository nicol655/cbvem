import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const metadata: Metadata = {
  title: "CBVEM | Club de Beach Volley El Masnou",
  description:
    "Club de Beach Volley El Masnou: entrenamientos por niveles, torneos, camps y prueba gratuita en la playa de Ocata."
};

const tailwindConfig = `
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-bright": "#f9f9f9",
        "inverse-primary": "#c5c3e9",
        "tertiary-container": "#2c2e32",
        "surface-container-high": "#e8e8e8",
        "secondary": "#bc8e5a",
        "primary-fixed-dim": "#c5c3e9",
        "surface-container-highest": "#e2e2e2",
        "surface-dim": "#dadada",
        "on-secondary-fixed": "#2b1700",
        "background": "#f9f9f9",
        "inverse-surface": "#2f3131",
        "surface-variant": "#e2e2e2",
        "on-error-container": "#93000a",
        "secondary-container": "#ffcb92",
        "on-surface-variant": "#47464d",
        "on-primary": "#ffffff",
        "surface-container": "#eeeeee",
        "on-secondary-fixed-variant": "#623f12",
        "surface-container-low": "#f3f3f4",
        "surface-tint": "#5c5b7c",
        "error-container": "#ffdad6",
        "on-primary-fixed": "#181835",
        "outline-variant": "#c8c5ce",
        "on-secondary-container": "#7a5425",
        "on-tertiary-container": "#94959a",
        "surface-container-lowest": "#ffffff",
        "error": "#ba1a1a",
        "on-surface": "#1a1c1c",
        "primary-fixed": "#e2dfff",
        "primary": "#161633",
        "tertiary": "#17191d",
        "on-background": "#1a1c1c",
        "on-tertiary": "#ffffff",
        "primary-container": "#2b2b49",
        "on-error": "#ffffff",
        "outline": "#78767e",
        "secondary-fixed-dim": "#f0bd85",
        "tertiary-fixed": "#e2e2e7",
        "on-tertiary-fixed-variant": "#45474b",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#444463",
        "inverse-on-surface": "#f0f1f1",
        "tertiary-fixed-dim": "#c6c6cb",
        "secondary-fixed": "#ffddba",
        "on-tertiary-fixed": "#1a1c1f",
        "surface": "#f9f9f9",
        "on-primary-container": "#9392b6"
      },
      borderRadius: { DEFAULT: "1rem", lg: "2rem", xl: "3rem", full: "9999px" },
      spacing: {
        base: "8px",
        "container-max": "1280px",
        gutter: "24px",
        "section-mobile": "64px",
        "section-desktop": "120px"
      },
      fontFamily: {
        "headline-md": ["Anton"],
        "headline-lg-mobile": ["Anton"],
        "headline-lg": ["Anton"],
        "body-lg": ["Hanken Grotesk"],
        "display-lg": ["Anton"],
        "label-bold": ["Hanken Grotesk"],
        "body-md": ["Hanken Grotesk"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.1", letterSpacing: "0.02em", fontWeight: "400" }],
        "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "0.02em", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["80px", { lineHeight: "1.0", letterSpacing: "0.02em", fontWeight: "400" }],
        "label-bold": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  }
};
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind Play CDN + design tokens from the Stitch design system */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" />
        <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      </head>
      <body className="bg-surface-bright text-on-surface overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
        <LanguageProvider>
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}
