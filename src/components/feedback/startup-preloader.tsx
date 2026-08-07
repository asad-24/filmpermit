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

      timeline.to(".fp-preloader-title", { duration: 0.1, opacity: 1 }, "-=0.12");

      timeline.fromTo(
        ".fp-preloader-word",
        {
          filter: "blur(8px)",
          opacity: 0,
          x: -54,
          y: 12,
        },
        {
          duration: 0.62,
          ease: "power4.out",
          filter: "blur(0px)",
          opacity: 1,
          stagger: 0.16,
          x: 0,
          y: 0,
        },
        "-=0.04"
      );

      timeline.to(
        ".fp-preloader-word",
        {
          duration: 0.38,
          ease: "power3.inOut",
          filter: "blur(5px)",
          opacity: 0,
          stagger: 0.08,
          x: 44,
          y: -8,
        },
        "+=0.7"
      );

      timeline.fromTo(
        ".fp-logo-halo",
        { opacity: 0.42, scale: 0.24 },
        {
          duration: 1.05,
          ease: "power3.out",
          opacity: 0,
          scale: 1.16,
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
        { filter: "blur(10px)", opacity: 0, scale: 0.68, y: 24 },
        {
          duration: 0.86,
          ease: "power4.out",
          filter: "blur(0px)",
          opacity: 1,
          scale: 1.08,
          y: 0,
        },
        "-=0.68"
      );

      timeline.to(".fp-preloader-logo", { duration: 0.42, ease: "power2.inOut", scale: 0.98 });
      timeline.to(".fp-preloader-logo", { duration: 0.5, ease: "power2.out", scale: 1.08 });
      timeline.to(".fp-preloader-logo", { duration: 0.38, ease: "power2.out", scale: 1 });

      timeline.to(
        ".fp-preloader-logo",
        { duration: 0.5, filter: "blur(3px)", opacity: 0, scale: 1.36, y: -8 },
        "+=0.72"
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
          <p className="fp-preloader-title" aria-label="Permits Made Simple">
            <span className="fp-preloader-word">Permits</span>
            <span className="fp-preloader-word">Made</span>
            <span className="fp-preloader-word">Simple</span>
          </p>
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
