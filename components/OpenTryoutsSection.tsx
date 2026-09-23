"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { useLanguage } from "@/components/LanguageProvider";
import { whatsappHref } from "@/lib/site";

export function OpenTryoutsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  // Full 30% -> 100% zoom-in on desktop; a subtler 85% -> 100% on mobile so the
  // text block doesn't shrink to an unreadable size on small screens.
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.85, 1] : [0.3, 1]);

  function onMouseMove(event: MouseEvent<HTMLElement>) {
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setOffset({ x, y });
  }

  function onMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <section ref={sectionRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="bg-surface">
      <motion.div style={{ scale }} className="min-h-screen flex items-center bg-primary-container text-[#fafafa] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-secondary opacity-5 pointer-events-none -rotate-12 translate-x-1/4 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${offset.x * -30}px, ${offset.y * -30}px) rotate(-12deg)` }}
        />
        <div
          className="absolute -left-24 -bottom-24 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${offset.x * 40}px, ${offset.y * 40}px)` }}
        />
        <div
          className="max-w-container-max mx-auto px-gutter text-center relative z-10 w-full transition-transform duration-300 ease-out"
          style={{ transform: `translate(${offset.x * -14}px, ${offset.y * -14}px)` }}
        >
          <span className="font-label-bold text-label-bold text-secondary-fixed bg-secondary-fixed/10 px-4 py-2 rounded-[5px] mb-6 inline-block uppercase">
            {t("openTryouts.badge")}
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-4">
            {t("openTryouts.title")}
          </h2>
          <p className="font-label-bold text-label-bold text-[#fafafa] uppercase mb-8">
            {t("openTryouts.subtitle")}
          </p>
          <p className="font-label-bold text-label-bold uppercase text-[#fafafa] mb-2">
            {t("openTryouts.lookingFor")}
          </p>
          <p className="font-body-lg text-body-lg text-[#fafafa] max-w-2xl mx-auto mb-10">
            {t("openTryouts.text")}
          </p>
          <div className="max-w-md mx-auto mb-10 text-left">
            <h3 className="font-label-bold text-label-bold uppercase mb-4 text-center">
              {t("openTryouts.requisitos")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                <span className="font-body-md text-body-md text-[#fafafa]">{t("openTryouts.req1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                <span className="font-body-md text-body-md text-[#fafafa]">{t("openTryouts.req2")}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <a
              href={whatsappHref(
                "Hola CBVEM, me gustaría apuntarme a las pruebas de la Liga Nacional de Cataluña (temporada 2027)."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-shine uppercase bg-secondary text-white px-10 py-4 rounded-[5px] font-label-bold text-label-bold transition-colors"
            >
              {t("openTryouts.cta")}
            </a>
            <span className="font-label-bold text-label-bold uppercase text-[#fafafa]">
              {t("openTryouts.catTag")}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
