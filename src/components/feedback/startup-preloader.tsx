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
        ".fp-animation-1 .fp-h3",
        { opacity: 0, y: 34 },
        { duration: 0.35, opacity: 1, y: 0 }
      );

      timeline.to(
        ".fp-animation-1 .fp-h3",
        { duration: 0.28, opacity: 0, y: -30 },
        "+=1"
      );

      timeline.fromTo(
        ".fp-reveal-box",
        { opacity: 0, scaleX: 0, transformOrigin: "left center" },
        { duration: 0.1, opacity: 1, scaleX: 0 }
      );

      timeline.to(".fp-reveal-box", { duration: 0.44, scaleX: 1 }, "+=0.08");
      timeline.to(".fp-reveal-box", { duration: 0.01, transformOrigin: "right center" });
      timeline.to(".fp-reveal-box", { duration: 0.32, scaleX: 0 });

      timeline.fromTo(
        ".fp-ellipse-ring",
        { opacity: 0, rotate: -120, scale: 0.42 },
        {
          duration: 0.7,
          opacity: 1,
          rotate: 0,
          scale: 1,
          stagger: 0.08,
        },
        "-=0.45"
      );

      timeline.fromTo(
        ".fp-ellipse-dot",
        { opacity: 0, scale: 0, x: -70 },
        {
          duration: 0.5,
          ease: "back.out(1.8)",
          opacity: 1,
          scale: 1,
          stagger: 0.07,
          x: 0,
        },
        "-=0.5"
      );

      timeline.fromTo(
        ".fp-preloader-logo",
        { filter: "blur(12px)", opacity: 0, scale: 0.74, y: 40 },
        {
          duration: 0.72,
          ease: "back.out(1.35)",
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          y: 0,
        },
        "-=0.36"
      );

      timeline.to(
        ".fp-ellipse-orbit",
        { duration: 0.24, opacity: 0 },
        "+=0.18"
      );

      timeline.to(
        ".fp-preloader-logo",
        { duration: 0.24, filter: "blur(4px)", opacity: 0, scale: 0.98, y: -14 },
        "-=0.08"
      );

      timeline.to(
        root,
        {
          duration: 0.22,
          ease: "sine.inOut",
          opacity: 0,
          onComplete: finish,
        },
        "+=0.12"
      );
    }, rootRef);

    const safety = window.setTimeout(finish, 5000);

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
        <div className="fp-pos-abs fp-animation-1">
          <p className="fp-h3 fp-preloader-title">Permits made Simple</p>
        </div>
        <div className="fp-pos-abs fp-animation-2">
          <div className="fp-reveal-frame">
            <span className="fp-reveal-box" />
            <span aria-hidden="true" className="fp-ellipse-orbit">
              <span className="fp-ellipse-ring fp-ellipse-ring-1" />
              <span className="fp-ellipse-ring fp-ellipse-ring-2" />
              <span className="fp-ellipse-ring fp-ellipse-ring-3" />
              <span className="fp-ellipse-dot fp-ellipse-dot-1" />
              <span className="fp-ellipse-dot fp-ellipse-dot-2" />
              <span className="fp-ellipse-dot fp-ellipse-dot-3" />
            </span>
            <span className="fp-preloader-logo">
              <Image
                alt="FilmPermit.ae"
                className="object-contain p-2"
                fill
                loading="eager"
                priority
                sizes="(max-width: 768px) 44vw, 16rem"
                src="/assests/new_logo.png"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
