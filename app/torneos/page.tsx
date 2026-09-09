import type { Metadata } from "next";

import { TorneosContent } from "@/components/TorneosContent";

export const metadata: Metadata = {
  title: "Torneos | CBVEM",
  description:
    "Torneos y ligas de beach volley en El Masnou: competición de alto nivel, formatos Open, mixtos y 4x4."
};

export default function TorneosPage() {
  return <TorneosContent />;
}
