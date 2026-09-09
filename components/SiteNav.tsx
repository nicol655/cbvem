"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { asset } from "@/lib/asset";
import { NAV_ITEMS, WHATSAPP_DEFAULT } from "@/lib/site";

function isActivePath(pathname: string, href: string): boolean {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return normalized === href;
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest shadow-[0_30px_60px_-15px_rgba(43,43,73,0.08)]">
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-4">
          <img alt="CBVEM Logo" className="h-12 w-12 object-contain" src={asset("/images/logo.svg")} />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-primary font-label-bold text-label-bold border-b-2 border-primary pb-1 transition-all duration-300"
                    : "text-on-surface-variant font-body-md text-body-md border-b-2 border-transparent pb-1 hover:text-secondary transition-all duration-300"
                }
              >
                {t(`nav.${item.key}`)}
              </Link>
            );
          })}
        </div>

        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="btn-shine hidden md:block bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-3 rounded-[5px]"
        >
          {t("nav.cta")}
        </a>

        <button
          className="md:hidden text-primary p-2"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open ? (
        <div className="md:hidden bg-surface-container-lowest border-t border-outline-variant/40 px-gutter py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={
                isActivePath(pathname, item.href)
                  ? "text-primary font-label-bold text-label-bold border-b-2 border-primary pb-1 self-start"
                  : "text-on-surface-variant font-body-md text-body-md border-b-2 border-transparent pb-1 self-start"
              }
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="bg-secondary text-on-secondary text-center font-label-bold text-label-bold px-8 py-3 rounded-[5px] mt-2"
          >
            {t("nav.cta")}
          </a>
        </div>
      ) : null}
    </nav>
  );
}
