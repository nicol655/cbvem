import type { Metadata } from "next";

import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Política de privacidad | CBVEM",
  description: "Cómo trata el Club de Beach Volley El Masnou tus datos personales y cómo ejercer tus derechos."
};

export default function PoliticaPrivacidadPage() {
  return <LegalContent slug="politica-de-privacidad" />;
}
