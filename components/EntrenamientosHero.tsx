"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import { asset } from "@/lib/asset";

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
                  src={asset("/images/Foto2.JPG")}
                />
              </div>
              <div className="w-1/4 h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Torneo mixto"
                  src={asset("/images/mixto1.JPG")}
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
                src={asset("/images/header2_entrenamientos.jpg")}
              />
            </div>
            <div className="w-[32%] max-w-md aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                alt="Jugadora élite femenino"
                src={asset("/images/FEM4.png")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: static stacked fallback, no pinned scroll animation */}
      <div className="md:hidden">
        <div className="relative overflow-hidden bg-primary-container px-gutter py-20 flex items-center justify-center">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-5 pointer-events-none -rotate-12 translate-x-1/4" />
          <div className="absolute -left-16 -bottom-16 w-56 h-56 bg-secondary rounded-full opacity-10 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h1 className="font-headline-lg text-headline-lg-mobile text-white uppercase text-center leading-tight">
              {t("entrenamientos.heroTitleLine1")}
              <br />
              {t("entrenamientos.heroTitleLine2")}
            </h1>
            <p className="font-body-lg text-body-lg text-white/80 text-center mt-6">
              {t("entrenamientos.heroSubtitle")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-gutter py-6">
          <div className="aspect-[3/4] rounded-[5px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Entrenamiento en pista"
              src={asset("/images/header2_entrenamientos.jpg")}
            />
          </div>
          <div className="aspect-[3/4] rounded-[5px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Jugadora élite femenino"
              src={asset("/images/FEM4.png")}
            />
          </div>
        </div>
        <div className="px-gutter pb-10">
          <video
            className="w-full aspect-[9/16] object-cover rounded-[5px] shadow-xl mx-auto max-w-xs"
            src={asset("/images/video_header.mp4")}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
