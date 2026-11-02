import type { Metadata } from "next";

import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Aviso legal | CBVEM",
  description: "Aviso legal e información del titular del sitio web del Club de Beach Volley El Masnou."
};

export default function AvisoLegalPage() {
  return <LegalContent slug="aviso-legal" />;
}
