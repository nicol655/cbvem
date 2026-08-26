"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { asset } from "@/lib/asset";
import { NAV_ITEMS, SITE, WHATSAPP_DEFAULT } from "@/lib/site";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest shadow-[0_30px_60px_-15px_rgba(43,43,73,0.08)]">
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-4">
          <img alt="CBVEM Logo" className="h-14 w-14 object-contain" src={asset("/images/logo.jpg")} />
          <span className="font-headline-md text-headline-md text-primary uppercase tracking-widest">
            {SITE.brand}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "text-primary relative font-label-bold text-label-bold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-secondary after:rounded-full transition-all duration-300"
                    : "text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-all duration-300"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200"
        >
          RESERVAR CLASE GRATIS
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
                pathname === item.href
                  ? "text-primary font-label-bold text-label-bold"
                  : "text-on-surface-variant font-body-md text-body-md"
              }
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            className="bg-secondary text-on-secondary text-center font-label-bold text-label-bold px-8 py-3 rounded-full mt-2"
          >
            RESERVAR CLASE GRATIS
          </a>
        </div>
      ) : null}
    </nav>
  );
}
