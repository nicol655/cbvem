"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** extra delay (seconds) before this block tweens in, for staggering siblings */
  delay?: number;
  /** distance (px) the block travels in from, on the Y axis */
  y?: number;
};

/** Fades + slides a block into place once, the first time it scrolls into view. */
export function ScrollReveal({ children, className = "", delay = 0, y = 48 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { y, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", delay });
      }
    });

    return () => trigger.kill();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
