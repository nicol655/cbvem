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
  /** span helpers for the mobile 2-col static grid */
  mobile: string;
};

const IMAGES: CollageImage[] = [
  {
    src: "/images/DavidPic2.JPG",
    alt: "Jugador de beach volley rematando en la arena",
    from: "top",
    desktop: "md:[grid-column:1/2] md:[grid-row:1/4]",
    mobile: "row-span-2"
  },
  {
    src: "/images/Foto2.JPG",
    alt: "Entrenamiento técnico en la pista de arena",
    from: "top",
    desktop: "md:[grid-column:2/3] md:[grid-row:1/3]",
    mobile: ""
  },
  {
    src: "/images/tenerife_2027.JPG",
    alt: "Camp de entrenamiento CBVEM en Tenerife",
    from: "bottom",
    desktop: "md:[grid-column:3/4] md:[grid-row:1/2]",
    mobile: ""
  },
  {
    src: "/images/masculino-3.jpg",
    alt: "Jugador de élite masculino en pleno bloqueo",
    from: "bottom",
    desktop: "md:[grid-column:4/5] md:[grid-row:1/4]",
    mobile: "row-span-2"
  },
  {
    src: "/images/mixto1.JPG",
    alt: "Torneo mixto CBVEM en la arena",
    from: "top",
    desktop: "md:[grid-column:2/3] md:[grid-row:3/4]",
    mobile: "col-span-2"
  },
  {
    src: "/images/FEM3.jpg",
    alt: "Jugadora de élite femenino en pleno remate",
    from: "bottom",
    desktop: "md:[grid-column:3/4] md:[grid-row:2/4]",
    mobile: ""
  }
];

export function HomeHeroCollage() {
  const { t } = useLanguage();
  const desktopImageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCardRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    const mobileEls = mobileCardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    mobileEls.forEach((el, i) => {
      gsap.set(el, { y: IMAGES[i].from === "top" ? -32 : 32, opacity: 0 });
    });
    gsap.to(mobileEls, {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.2,
      stagger: 0.15,
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
              className="btn-shine bg-secondary text-on-secondary font-label-bold text-label-bold px-10 py-5 rounded-[5px] shadow-lg"
            >
              {t("home.ctaJoin")}
            </a>
            <Link
              href="/entrenamientos"
              className="btn-shine border-2 border-white text-white font-label-bold text-label-bold px-10 py-5 rounded-[5px]"
            >
              {t("home.ctaSchedule")}
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile: static text + cards that fade/slide in on load, no scroll dependency */}
      <div className="md:hidden">
        <div className="bg-black px-gutter pt-24 pb-16 flex flex-col items-center text-center">
          <h1 className="font-headline-lg text-headline-lg-mobile text-white uppercase leading-tight">
            {t("home.titleLine1")} <span className="text-secondary">{t("home.titleHighlight")}</span>
          </h1>
          <div className="flex flex-col gap-4 items-center mt-8 w-full max-w-xs">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="btn-shine bg-secondary text-on-secondary font-label-bold text-label-bold px-10 py-4 rounded-[5px] shadow-lg w-full"
            >
              {t("home.ctaJoin")}
            </a>
            <Link
              href="/entrenamientos"
              className="btn-shine border-2 border-white text-white font-label-bold text-label-bold px-10 py-4 rounded-[5px] w-full"
            >
              {t("home.ctaSchedule")}
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row-dense auto-rows-[42vw]">
          {IMAGES.map((image, i) => (
            <div
              key={image.src}
              ref={(el) => {
                mobileCardRefs.current[i] = el;
              }}
              className={`relative overflow-hidden ${image.mobile}`}
            >
              <img
                className="w-full h-full object-cover grayscale"
                alt={image.alt}
                src={asset(image.src)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
