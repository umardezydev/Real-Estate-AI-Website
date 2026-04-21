"use client";

import { useEffect, useRef } from "react";

export function HeroParallaxBackdrop() {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backdrop = backdropRef.current;

    if (!backdrop) {
      return;
    }

    let frame = 0;

    const updateParallax = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.15), 1);

      backdrop.style.setProperty("--parallax-grid-y", `${progress * 52}px`);
      backdrop.style.setProperty("--parallax-aurora-y", `${progress * -34}px`);
      backdrop.style.setProperty("--parallax-near-y", `${progress * 72}px`);
      backdrop.style.setProperty("--parallax-far-y", `${progress * 26}px`);
      backdrop.style.setProperty("--parallax-scale", `${1 + progress * 0.035}`);
      frame = 0;
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div ref={backdropRef} className="hero-depth absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
      <div className="hero-grid hero-depth-grid absolute inset-0" />
      <div className="aurora hero-depth-aurora absolute left-1/2 top-16 h-[34rem] w-[62rem] -translate-x-1/2 rounded-full opacity-90 blur-3xl" />
      <div className="hero-depth-sheen hero-depth-sheen-a absolute" />
      <div className="hero-depth-sheen hero-depth-sheen-b absolute" />
    </div>
  );
}
