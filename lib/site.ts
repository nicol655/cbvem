// Central club configuration. Update these values with the real contact data.
export const SITE = {
  brand: "CBVEM",
  fullName: "Club de Beach Volley El Masnou",
  email: "clubbeachvolleyelmasnou@gmail.com",
  whatsappPhone: "34600000000",
  location: "Playa de Ocata, El Masnou"
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Entrenamientos", href: "/entrenamientos" },
  { label: "Torneos", href: "/torneos" },
  { label: "Camps y Eventos", href: "/eventos-camps" }
];

export function whatsappHref(message: string): string {
  const phone = SITE.whatsappPhone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappHref(
  "Hola CBVEM, quiero reservar una clase de prueba gratuita."
);
