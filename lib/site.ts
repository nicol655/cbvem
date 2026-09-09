// Central club configuration. Update these values with the real contact data.
export const SITE = {
  brand: "CBVEM",
  fullName: "Club de Beach Volley El Masnou",
  email: "clubbeachvolleyelmasnou@gmail.com",
  whatsappPhone: "34685629130",
  phoneDisplay: "+34 685 62 91 30",
  location: "Carrer Sant Lluís, 4, 08320 El Masnou",
  mapsUrl: "https://maps.app.goo.gl/6dmKtwxzSowLXQes5"
};

export const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "training", href: "/entrenamientos" },
  { key: "tournaments", href: "/torneos" },
  { key: "camps", href: "/eventos-camps" }
] as const;

export function whatsappHref(message: string): string {
  const phone = SITE.whatsappPhone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappHref(
  "Hola CBVEM, quiero reservar una clase de prueba gratuita."
);
