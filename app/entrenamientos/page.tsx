import type { Metadata } from "next";

import { EntrenamientosContent } from "@/components/EntrenamientosContent";

export const metadata: Metadata = {
  title: "Entrenamientos | CBVEM",
  description:
    "Escuela y grupos de entrenamiento de beach volley por niveles en El Masnou: iniciación, intermedio y élite."
};

export default function EntrenamientosPage() {
  return <EntrenamientosContent />;
}
