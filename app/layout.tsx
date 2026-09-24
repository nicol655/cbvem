import type { Metadata } from "next";
import "./globals.css";

import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "CBVEM | Club de Beach Volley El Masnou",
  description:
    "Club de Beach Volley El Masnou: entrenamientos por niveles, torneos, camps y prueba gratuita en la playa de Ocata."
};

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
      </head>
      <body className="bg-surface-bright text-on-surface overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
