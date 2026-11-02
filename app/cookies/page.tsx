import type { Metadata } from "next";

import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Política de cookies | CBVEM",
  description: "Cookies y tecnologías similares que usa la web del Club de Beach Volley El Masnou."
};

export default function CookiesPage() {
  return <LegalContent slug="cookies" />;
}
