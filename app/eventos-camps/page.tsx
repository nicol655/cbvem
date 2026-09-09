import type { Metadata } from "next";

import { EventosCampsContent } from "@/components/EventosCampsContent";

export const metadata: Metadata = {
  title: "Camps y Eventos | CBVEM",
  description:
    "Camps intensivos y clínics de beach volley con entrenadores de élite en la costa del Maresme."
};

export default function EventosCampsPage() {
  return <EventosCampsContent />;
}
