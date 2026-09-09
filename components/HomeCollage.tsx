"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import { asset } from "@/lib/asset";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type CollageImage = {
  src: string;
  alt: string;
  /** yPercent swing applied on scroll (desktop only) */
  parallax: number;
  /** explicit bento placement on the md+ 4-col / 3-row grid */
  desktop: string;
  /** span helpers for the mobile 2-col grid */
  mobile: string;
};

const IMAGES: CollageImage[] = [
  {
    src: "/images/DavidPic2.JPG",
    alt: "Jugador de beach volley rematando en la arena",
    parallax: -12,
    desktop: "md:[grid-column:1/2] md:[grid-row:1/4]",
    mobile: "row-span-2"
  },
  {
    src: "/images/Foto2.JPG",
    alt: "Entrenamiento técnico en la pista de arena",
    parallax: 16,
    desktop: "md:[grid-column:2/3] md:[grid-row:1/3]",
    mobile: ""
  },
  {
    src: "/images/tenerife_2027.JPG",
    alt: "Camp de entrenamiento CBVEM en Tenerife",
    parallax: -10,
    desktop: "md:[grid-column:3/4] md:[grid-row:1/2]",
    mobile: ""
  },
  {
    src: "/images/masculino-3.png",
    alt: "Jugador de élite masculino en pleno bloqueo",
    parallax: 14,
    desktop: "md:[grid-column:4/5] md:[grid-row:1/4]",
    mobile: "row-span-2"
  },
  {
    src: "/images/mixto1.JPG",
    alt: "Torneo mixto CBVEM en la arena",
    parallax: -16,
    desktop: "md:[grid-column:2/3] md:[grid-row:3/4]",
    mobile: "col-span-2"
  },
  {
    src: "/images/FEM3.png",
    alt: "Jugadora de élite femenino en pleno remate",
    parallax: 12,
    desktop: "md:[grid-column:3/4] md:[grid-row:2/4]",
    mobile: ""
  }
];

export function HomeCollage() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Parallax only kicks in on md+ — mobile keeps a static, lightweight grid.
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        imageRefs.current.forEach((el, i) => {
          if (!el) return;
          const amount = IMAGES[i].parallax;
          gsap.fromTo(
            el,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-auto md:h-screen overflow-hidden bg-primary">
      <div
        className="grid grid-cols-2 grid-flow-row-dense auto-rows-[42vw] gap-2 p-2
          md:grid-cols-4 md:grid-rows-3 md:auto-rows-auto md:gap-3 md:p-3 md:h-full"
      >
        {IMAGES.map((image, i) => (
          <div
            key={image.src}
            className={`relative overflow-hidden rounded-[5px] shadow-xl group ${image.mobile} ${image.desktop}`}
          >
            <div
              ref={(el) => {
                imageRefs.current[i] = el;
              }}
              className="absolute inset-0 -top-[15%] h-[130%] md:-top-[18%] md:h-[136%]"
            >
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                alt={image.alt}
                src={asset(image.src)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Gradient guard so the caption stays legible over any photo */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-0.5 bg-secondary" />
          <span className="font-label-bold text-label-bold text-secondary uppercase tracking-[0.2em] text-xs">
            {t("home.collage.eyebrow")}
          </span>
        </div>
        <p className="font-headline-md text-white uppercase text-2xl md:text-4xl">
          {t("home.collage.title")}
        </p>
      </div>
    </section>
  );
}
