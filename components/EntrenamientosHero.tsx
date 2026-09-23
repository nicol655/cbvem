"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import { asset } from "@/lib/asset";
import { SCHEDULE_SECTION_ID } from "@/lib/schedule";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function EntrenamientosHero() {
  const { t } = useLanguage();

  const rootRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const imagesRowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const imageEls = imagesRowRef.current ? Array.from(imagesRowRef.current.children) : [];
        const imageTilt = [-6, 6];

        imageEls.forEach((el, i) => {
          gsap.set(el, { yPercent: 150, rotate: imageTilt[i] ?? 0 });
        });
        gsap.set(videoBoxRef.current, { scale: 0.3, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1
          }
        });

        // Images stay fully opaque while they cross over the text/video (visibly
        // on top of the section), then fade out right as they exit the top
        // so nothing is left lingering once the video section is revealed.
        tl.to(imageEls, { yPercent: -90, ease: "power1.inOut", duration: 0.5 }, 0.08)
          .to(imageEls, { yPercent: -140, ease: "power1.inOut", duration: 0.25 }, 0.6)
          .to(imageEls, { yPercent: -170, opacity: 0, ease: "power1.in", duration: 0.2 }, 0.85)
          .to(
            textLayerRef.current,
            { yPercent: 100, opacity: 0, ease: "power2.inOut", duration: 0.45 },
            1.05
          )
          .to(
            videoBoxRef.current,
            { scale: 1, opacity: 1, ease: "power2.out", duration: 0.45 },
            1.05
          );
      }, rootRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Desktop / tablet: pinned scroll sequence */}
      <div ref={pinWrapperRef} className="hidden md:block relative h-[280vh]">
        <div className="group sticky top-0 h-screen overflow-hidden">
          {/* Stage 3: video + photos, revealed behind the text panel */}
          <div className="absolute inset-0 z-0 bg-primary">
            <div
              ref={videoBoxRef}
              className="flex h-screen w-full"
              style={{ transform: "scale(0.3)", opacity: 0 }}
            >
              <div className="w-1/2 h-full">
                <video
                  className="w-full h-full object-cover"
                  src={asset("/images/video_header.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
              <div className="w-1/4 h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Entrenamiento en pista"
                  src={asset("/images/DavidPic2.JPG")}
                />
              </div>
              <div className="w-1/4 h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Torneo mixto"
                  src={asset("/images/torneo_femenino.jpg")}
                />
              </div>
            </div>
          </div>

          {/* Stage 1: title panel */}
          <div
            ref={textLayerRef}
            className="absolute inset-0 z-10 flex items-center justify-center bg-primary-container px-gutter overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-5 pointer-events-none -rotate-12 translate-x-1/4" />
            <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -right-10 top-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="relative z-10">
              <h1 className="font-headline-lg text-[64px] lg:text-[110px] xl:text-[130px] text-white uppercase text-center max-w-6xl leading-[0.95]">
                {t("entrenamientos.heroTitleLine1")}
                <br />
                {t("entrenamientos.heroTitleLine2")}
              </h1>
              <p className="font-body-lg text-body-lg text-white/80 text-center max-w-2xl mx-auto mt-8">
                {t("entrenamientos.heroSubtitle")}
              </p>
            </div>
          </div>

          {/* Stage 2: images rising and exiting over the text */}
          <div
            ref={imagesRowRef}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center gap-24"
          >
            <div className="w-[32%] max-w-md aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Entrenamiento en pista"
                src={asset("/images/scroll.jpg")}
              />
            </div>
            <div className="w-[32%] max-w-md aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Jugadora de élite"
                src={asset("/images/new_scroll.jpg")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: content-height hero (no pin/scroll-jack), left-aligned, photo mosaic below */}
      <div className="md:hidden">
        <div className="relative overflow-hidden bg-primary-container px-[22px] pt-[120px] pb-16 min-h-[70svh] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-secondary opacity-5 pointer-events-none -rotate-12 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-secondary rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h1
              className="font-headline-lg text-white uppercase text-left"
              style={{ fontSize: "clamp(36px, 13.5vw, 64px)", lineHeight: 0.95 }}
            >
              <span className="block">{t("entrenamientos.mobileHeroLine1")}</span>
              <span className="block">{t("entrenamientos.mobileHeroLine2")}</span>
              <span className="block whitespace-nowrap">{t("entrenamientos.mobileHeroLine3")}</span>
            </h1>
            <p className="text-[16px] leading-[1.6] text-white/80 text-left max-w-md mt-6">
              {t("entrenamientos.heroSubtitle")}
            </p>
            <a
              href={`#${SCHEDULE_SECTION_ID}`}
              className="btn-shine uppercase mt-8 w-full min-h-[48px] flex items-center justify-center border-2 border-white text-white font-label-bold text-label-bold rounded-[5px]"
            >
              {t("home.ctaSchedule")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile-only video + 3-photo mosaic that used to sit directly below the hero text.
 * Kept as a separate component so EntrenamientosContent can place it after the
 * schedule section without touching the desktop pinned-hero markup above, which
 * already has its own (unrelated) video + photos as part of its scroll animation.
 */
export function EntrenamientosMobileMedia() {
  return (
    <div className="md:hidden">
      <video
        className="w-full aspect-[9/16] object-cover"
        src={asset("/images/video_header.mp4")}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="grid grid-cols-2">
        <div className="col-span-2 aspect-[4/3] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Pareja de jugadores entrenando en la arena"
            src={asset("/images/OscarPic.JPG")}
            loading="lazy"
          />
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            alt="Jugador rematando en pleno salto"
            src={asset("/images/DavidPic2.JPG")}
            loading="lazy"
          />
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover object-top"
            alt="Jugador sacando en pleno salto"
            src={asset("/images/entrenamientos_2.jpg")}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
