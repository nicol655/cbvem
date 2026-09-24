"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { asset } from "@/lib/asset";
import { NAV_ITEMS, SITE, WHATSAPP_DEFAULT } from "@/lib/site";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-container text-on-primary-container w-full pt-8 md:pt-12 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-gutter max-w-container-max mx-auto gap-12">
        <div className="max-w-sm flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <img
              alt="CBVEM Logo"
              className="h-32 w-32 object-contain"
              src={asset("/images/newlogo_blanco.svg")}
            />
          </div>
          <p className="font-body-md text-body-md text-white leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h5 className="font-label-bold text-label-bold text-on-primary uppercase mb-6 tracking-widest">
              {t("footer.explore")}
            </h5>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-on-primary-container/70 font-body-md text-body-md hover:text-secondary-fixed transition-colors"
                    href={item.href}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-label-bold text-label-bold text-on-primary uppercase mb-6 tracking-widest">
              {t("footer.contact")}
            </h5>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-primary-container/70 font-body-md text-body-md">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-secondary-fixed">
                  {SITE.location}
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-primary-container/70 font-body-md text-body-md">
                <span className="material-symbols-outlined text-[18px]">mail</span>
                <a href={`mailto:${SITE.email}`} className="hover:text-secondary-fixed break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-on-primary-container/70 font-body-md text-body-md">
                <span className="material-symbols-outlined text-[18px]">phone</span>
                <a href={WHATSAPP_DEFAULT} target="_blank" rel="noreferrer" className="hover:text-secondary-fixed">
                  {SITE.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-on-primary-container/50 text-[12px] font-label-bold uppercase tracking-widest">
          <span>
            © {new Date().getFullYear()} {SITE.fullName}. {t("footer.rights")}
          </span>
          <a
            href="https://www.instagram.com/impulness.es/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 self-start md:self-auto normal-case tracking-normal text-white hover:opacity-70 transition-opacity"
          >
            Design &amp; Developed by:
            <img alt="Impulness" className="h-5 w-auto" src={asset("/images/logoimpulness.png")} />
          </a>
        </div>
      </div>
    </footer>
  );
}
