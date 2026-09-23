"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { asset } from "@/lib/asset";
import { NAV_ITEMS, WHATSAPP_DEFAULT } from "@/lib/site";

function isActivePath(pathname: string, href: string): boolean {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return normalized === href;
}

type SiteNavProps = {
  /** Text color to use while the navbar has no background yet (before scrolling).
   *  "light" (default) is for pages with a dark hero right behind the navbar.
   *  "dark" is for pages whose top content is light, where white text disappears. */
  transparentVariant?: "light" | "dark";
  /** How far (in multiples of the viewport height) the visitor must scroll before the
   *  navbar gets a solid background. Use for pages with a pinned/scroll-jacking hero
   *  that stays visible for several viewport heights. Defaults to a small fixed pixel
   *  threshold. */
  transparentUntilVh?: number;
};

const MOBILE_MENU_ID = "mobile-nav-menu";

export function SiteNav({ transparentVariant = "light", transparentUntilVh }: SiteNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      // The vh-based threshold is tuned for the desktop pinned scroll-jack hero
      // (Entrenamientos). Below the md breakpoint that hero collapses to a normal,
      // content-height section, so mobile always uses the small fixed threshold.
      const useVhThreshold = transparentUntilVh && window.innerWidth >= 768;
      const threshold = useVhThreshold ? transparentUntilVh * window.innerHeight : 20;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [transparentUntilVh]);

  // Lock body scroll and allow Escape to close while the full-screen mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const transparentText = transparentVariant === "dark" ? "text-primary" : "text-white";
  const transparentTextMuted = transparentVariant === "dark" ? "text-primary/80" : "text-white/90";
  const transparentBorder = transparentVariant === "dark" ? "border-primary" : "border-white";
  const logoSrc = !scrolled && transparentVariant === "light" ? "/images/newlogo_blanco.svg" : "/images/new_logo.svg";
  const mobileIconColor = scrolled ? "text-primary" : transparentText;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          scrolled || open
            ? "bg-surface-container-lowest shadow-[0_30px_60px_-15px_rgba(43,43,73,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
          <Link href="/" className="flex items-center gap-4">
            <img
              alt="CBVEM Logo"
              className="h-[38px] w-[38px] md:h-[3rem] md:w-[3rem] object-contain"
              src={asset(logoSrc)}
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body-md text-body-md border-b-2 pb-1 transition-all duration-300 ${
                    active
                      ? `font-label-bold text-label-bold ${
                          scrolled ? "text-primary border-primary" : `${transparentText} ${transparentBorder}`
                        }`
                      : `border-transparent hover:text-secondary ${
                          scrolled ? "text-on-surface-variant" : transparentTextMuted
                        }`
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher triggerClassName={scrolled ? "text-primary" : transparentText} />
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="btn-shine uppercase btn-twinkle bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-3 rounded-[5px]"
            >
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile-only: language dropdown + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher triggerClassName={mobileIconColor} />

            <button
              type="button"
              className={`p-2 transition-colors duration-300 ${mobileIconColor}`}
              aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={open}
              aria-controls={MOBILE_MENU_ID}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        id={MOBILE_MENU_ID}
        className={`md:hidden fixed inset-0 z-40 bg-primary flex flex-col transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex-1 flex flex-col justify-center gap-8 px-gutter">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-headline-lg text-[34px] leading-none uppercase transition-colors ${
                isActivePath(pathname, item.href) ? "text-secondary" : "text-white"
              }`}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="px-gutter pb-10">
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-shine uppercase btn-twinkle block w-full text-center bg-secondary text-on-secondary font-label-bold text-label-bold px-8 py-4 rounded-[5px]"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>

      {/* Fixed mobile booking bar */}
      <div
        className={`md:hidden fixed bottom-0 inset-x-0 z-30 bg-primary border-t border-white/10 px-gutter pt-3 flex items-center justify-between gap-4 transition-transform duration-300 ${
          open ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <span className="font-label-bold text-label-bold text-white">{t("nav.bookingBarText")}</span>
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noreferrer"
          className="btn-shine uppercase btn-twinkle shrink-0 bg-secondary text-on-secondary font-label-bold text-label-bold px-6 py-2.5 rounded-[5px]"
        >
          {t("nav.bookingBarCta")}
        </a>
      </div>
    </>
  );
}
