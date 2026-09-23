"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { useLanguage } from "@/components/LanguageProvider";
import { asset } from "@/lib/asset";
import { WHATSAPP_DEFAULT } from "@/lib/site";

type CollageImage = {
  src: string;
  alt: string;
  /** where the image enters from before it settles into place */
  from: "top" | "bottom";
  /** explicit bento placement on the md+ 4-col / 3-row grid */
  desktop: string;
};

const IMAGES: CollageImage[] = [
  {
    src: "/images/torneo_femenino.jpg",
    alt: "Jugadora de élite en pleno remate",
    from: "top",
    desktop: "md:[grid-column:1/2] md:[grid-row:1/4]"
  },
  {
    src: "/images/new_scroll.jpg",
    alt: "Entrenador David en acción",
    from: "top",
    desktop: "md:[grid-column:2/3] md:[grid-row:1/3]"
  },
  {
    src: "/images/mixto_basic.jpg",
    alt: "Jugador de beach volley en acción",
    from: "bottom",
    desktop: "md:[grid-column:3/4] md:[grid-row:1/2]"
  },
  {
    src: "/images/new_osc.jpg",
    alt: "Torneo mixto CBVEM en la arena",
    from: "bottom",
    desktop: "md:[grid-column:4/5] md:[grid-row:1/4]"
  },
  {
    src: "/images/mixto-avanzado.JPG",
    alt: "Torneo mixto avanzado CBVEM en la arena",
    from: "top",
    desktop: "md:[grid-column:2/3] md:[grid-row:3/4]"
  },
  {
    src: "/images/Foto2.JPG",
    alt: "Entrenamiento técnico en la pista de arena",
    from: "bottom",
    desktop: "md:[grid-column:3/4] md:[grid-row:2/4]"
  }
];

type MasonryImage = { src: string; alt: string; height: number; color?: boolean };

// Mobile masonry hero: two offset columns, varied photo heights (170-260px).
// The "arena" (sand) shot stays in color as an accent; the rest are grayscale.
const MOBILE_LEFT_COLUMN: MasonryImage[] = [
  { src: IMAGES[0].src, alt: IMAGES[0].alt, height: 220 },
  { src: IMAGES[2].src, alt: IMAGES[2].alt, height: 180 },
  { src: IMAGES[5].src, alt: IMAGES[5].alt, height: 250 },
  { src: IMAGES[1].src, alt: IMAGES[1].alt, height: 200 },
  { src: IMAGES[3].src, alt: IMAGES[3].alt, height: 230 }
];

const MOBILE_RIGHT_COLUMN: MasonryImage[] = [
  { src: IMAGES[1].src, alt: IMAGES[1].alt, height: 190 },
  { src: IMAGES[3].src, alt: IMAGES[3].alt, height: 260 },
  { src: IMAGES[4].src, alt: IMAGES[4].alt, height: 210, color: true },
  { src: IMAGES[0].src, alt: IMAGES[0].alt, height: 230 },
  { src: IMAGES[2].src, alt: IMAGES[2].alt, height: 200 }
];

export function HomeHeroCollage() {
  const { t } = useLanguage();
  const desktopImageRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Plain (uncleaned-up) one-shot entrance tween: this only ever needs to play
  // once on mount. Wrapping it in gsap.context + a revert-on-cleanup was getting
  // killed by React 18 StrictMode's dev-only double-invoke before the delayed
  // tween could start, leaving the photos stuck at opacity 0.
  useLayoutEffect(() => {
    const desktopEls = desktopImageRefs.current.filter((el): el is HTMLDivElement => el !== null);
    desktopEls.forEach((el, i) => {
      gsap.set(el, { yPercent: IMAGES[i].from === "top" ? -120 : 120, opacity: 0 });
    });
    gsap.to(desktopEls, {
      yPercent: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.8,
      stagger: 0.25,
      delay: 0.3
    });
  }, []);

  return (
    <div>
      {/* Desktop / tablet: full-bleed collage, animates in on load */}
      <section className="hidden md:block relative h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 grid grid-cols-4 grid-rows-3">
          {IMAGES.map((image, i) => (
            <div key={image.src} className={`relative overflow-hidden group ${image.desktop}`}>
              <div
                ref={(el) => {
                  desktopImageRefs.current[i] = el;
                }}
                className="absolute inset-0 -top-[18%] h-[136%]"
              >
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={image.alt}
                  src={asset(image.src)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 z-10 bg-black/35 pointer-events-none" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-gutter pointer-events-none">
          <h1 className="font-headline-lg text-[64px] lg:text-[110px] xl:text-[130px] text-white uppercase text-center leading-[0.95]">
            {t("home.titleLine1")} <span className="text-secondary">{t("home.titleHighlight")}</span>
          </h1>
          <div className="flex flex-wrap gap-4 items-center justify-center mt-10 pointer-events-auto">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="btn-shine uppercase bg-secondary text-on-secondary font-label-bold text-label-bold px-10 py-5 rounded-[5px] shadow-lg"
            >
              {t("home.ctaJoin")}
            </a>
            <Link
              href="/entrenamientos"
              className="btn-shine uppercase border-2 border-white text-white font-label-bold text-label-bold px-10 py-5 rounded-[5px]"
            >
              {t("home.ctaSchedule")}
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile: full-screen masonry hero, content anchored to the bottom */}
      <div className="md:hidden relative h-hero-mobile overflow-hidden bg-black">
        <div className="absolute inset-0 grid grid-cols-2">
          <div className="flex flex-col">
            {MOBILE_LEFT_COLUMN.map((img, i) => (
              <div key={`left-${i}`} className="relative overflow-hidden" style={{ height: img.height }}>
                <img
                  className={`w-full h-full object-cover ${img.color ? "" : "grayscale"}`}
                  alt={img.alt}
                  src={asset(img.src)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            {MOBILE_RIGHT_COLUMN.map((img, i) => (
              <div key={`right-${i}`} className="relative overflow-hidden" style={{ height: img.height }}>
                <img
                  className={`w-full h-full object-cover ${img.color ? "" : "grayscale"}`}
                  alt={img.alt}
                  src={asset(img.src)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dark veils: overall + extra darkening toward the bottom for text legibility */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/75 via-black/35 to-transparent pointer-events-none" />

        <div className="absolute inset-x-0 bottom-0 px-[22px] pb-[calc(5rem+env(safe-area-inset-bottom))]">
          <span className="block text-secondary font-label-bold text-[11px] tracking-[0.25em] uppercase mb-3">
            {t("home.mobileEyebrow")}
          </span>
          <h1
            className="font-headline-lg text-white uppercase text-[clamp(56px,15vw,72px)] leading-[0.92]"
          >
            {t("home.titleLine1")
              .split(" ")
              .map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            <span className="block text-secondary">{t("home.titleHighlight")}</span>
          </h1>
          <div className="flex flex-col gap-3 mt-8">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="btn-shine uppercase w-full min-h-[48px] flex items-center justify-center bg-secondary text-on-secondary font-label-bold text-label-bold rounded-[5px] shadow-lg"
            >
              {t("home.ctaJoin")}
            </a>
            <Link
              href="/entrenamientos"
              className="btn-shine uppercase w-full min-h-[48px] flex items-center justify-center border-2 border-white text-white font-label-bold text-label-bold rounded-[5px]"
            >
              {t("home.ctaSchedule")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
