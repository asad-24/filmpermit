"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function StartupPreloader({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const root = rootRef.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      if (doneRef.current) {
        return;
      }

      doneRef.current = true;
      onDone();
    };

    if (prefersReduced) {
      finish();
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline.to(".fp-preloader-animation", { duration: 0.2, opacity: 1 });

      timeline.fromTo(
        ".fp-preloader-title",
        {
          clipPath: "inset(0 100% 0 0)",
          filter: "blur(6px)",
          opacity: 0,
          x: -96,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.72,
          ease: "power4.out",
          filter: "blur(0px)",
          opacity: 1,
          x: 0,
        },
        "-=0.18"
      );

      timeline.to(
        ".fp-preloader-title",
        {
          clipPath: "inset(0 0 0 100%)",
          duration: 0.48,
          ease: "power3.inOut",
          filter: "blur(6px)",
          opacity: 0,
          x: 96,
        },
        "+=0.9"
      );

      timeline.fromTo(
        ".fp-logo-halo",
        { opacity: 0.72, scale: 0.18 },
        {
          duration: 1.35,
          ease: "power3.out",
          opacity: 0,
          scale: 1.42,
        }
      );

      timeline.fromTo(
        ".fp-logo-reveal",
        { clipPath: "circle(0% at 50% 50%)", scale: 0.96 },
        {
          duration: 1.05,
          ease: "power4.out",
          clipPath: "circle(150% at 50% 50%)",
          scale: 1,
        },
        "-=0.82"
      );

      timeline.fromTo(
        ".fp-preloader-logo",
        { filter: "blur(16px)", opacity: 0, scale: 0.28, y: 42 },
        {
          duration: 1.05,
          ease: "back.out(1.65)",
          filter: "blur(0px)",
          opacity: 1,
          scale: 1.28,
          y: 0,
        },
        "-=0.68"
      );

      timeline.to(".fp-preloader-logo", { duration: 0.45, ease: "power2.inOut", scale: 0.92 });
      timeline.to(".fp-preloader-logo", { duration: 0.58, ease: "back.out(1.45)", scale: 1.38 });
      timeline.to(".fp-preloader-logo", { duration: 0.45, ease: "power2.out", scale: 1.12 });

      timeline.to(
        ".fp-preloader-logo",
        { duration: 0.62, filter: "blur(3px)", opacity: 0, scale: 2.65, y: 0 },
        "+=0.85"
      );

      timeline.to(
        root,
        {
          duration: 0.35,
          ease: "sine.inOut",
          opacity: 0,
          onComplete: finish,
        },
        "+=0.15"
      );
    }, rootRef);

    const safety = window.setTimeout(finish, 9000);

    return () => {
      window.clearTimeout(safety);
      ctx.revert();
    };
  }, [onDone]);

  return (
    <div
      aria-label="Loading FilmPermit.ae"
      aria-live="polite"
      className="fp-preloader"
      ref={rootRef}
      role="status"
    >
      <div className="fp-preloader-animation">
        <div className="fp-preloader-stage">
          <p className="fp-preloader-title">Permits Made Simple</p>
          <span className="fp-logo-loader">
            <span aria-hidden="true" className="fp-logo-halo" />
            <span className="fp-logo-reveal">
              <span className="fp-preloader-logo">
                <Image
                  alt="FilmPermit.ae"
                  className="object-contain"
                  fill
                  loading="eager"
                  priority
                  sizes="(max-width: 768px) 54vw, 18rem"
                  src="/assests/logo.png"
                />
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
