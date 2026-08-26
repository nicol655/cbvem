import Link from "next/link";

import { asset } from "@/lib/asset";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary-container text-on-primary-container w-full py-section-mobile md:py-section-desktop border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start px-gutter max-w-container-max mx-auto gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-4 mb-6">
            <img
              alt="CBVEM Logo"
              className="h-14 w-14 object-contain rounded-full bg-white/90 p-1"
              src={asset("/images/logo.jpg")}
            />
            <span className="font-headline-md text-headline-md text-on-primary uppercase tracking-widest">
              {SITE.brand}
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-primary-container/70 leading-relaxed">
            El club referente de voley playa en El Masnou. Pasión, deporte y estilo de vida
            mediterráneo en cada entrenamiento.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div>
            <h5 className="font-label-bold text-label-bold text-on-primary uppercase mb-6 tracking-widest">
              Explorar
            </h5>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-on-primary-container/70 font-body-md text-body-md hover:text-secondary-fixed transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label-bold text-label-bold text-on-primary uppercase mb-6 tracking-widest">
              Contacto
            </h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-primary-container/70 font-body-md text-body-md">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                {SITE.location}
              </li>
              <li className="flex items-center gap-3 text-on-primary-container/70 font-body-md text-body-md">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <a href={`mailto:${SITE.email}`} className="hover:text-secondary-fixed break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-primary-container/70 font-body-md text-body-md">
                <span className="material-symbols-outlined text-[18px]">phone</span>
                +34 600 000 000
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-on-primary-container/50 text-[12px] font-label-bold uppercase tracking-widest">
          <span>© {new Date().getFullYear()} {SITE.fullName}. Todos los derechos reservados.</span>
          <span>Hecho con pasión en El Masnou</span>
        </div>
      </div>
    </footer>
  );
}
