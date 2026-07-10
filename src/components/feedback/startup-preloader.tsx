"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export function StartupPreloader({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

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
        { duration: 0.55, opacity: 1, stagger: 0.24, y: 0 }
      );

      timeline.to(
        ".fp-animation-1 .fp-h3",
        { duration: 0.42, opacity: 0, stagger: 0.08, y: -30 },
        "+=0.22"
      );

      timeline.fromTo(
        ".fp-reveal-box",
        { opacity: 0, x: -30 },
        { duration: 0.1, opacity: 1, x: -30 }
      );

      timeline.to(".fp-reveal-box", { duration: 0.44, width: "100%", x: 0 }, "+=0.08");
      timeline.to(".fp-reveal-box", { right: 0, duration: 0.01 });
      timeline.to(".fp-reveal-box", { duration: 0.32, width: 0 });

      timeline.fromTo(
        ".fp-animation-2 .fp-h3",
        { opacity: 0, y: 12 },
        { duration: 0.45, opacity: 1, y: 0 },
        "-=0.45"
      );

      timeline.to(".fp-animation-2 .fp-h3", { duration: 0.52, opacity: 0, y: -30 }, "+=0.45");

      timeline.to(
        ".fp-preloader",
        {
          duration: 0.68,
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
          <p className="fp-h3 fp-thin">UAE</p>
          <p className="fp-h3">Filming</p>
          <p className="fp-h3 fp-thin">Support</p>
        </div>
        <div className="fp-pos-abs fp-animation-2">
          <div className="fp-reveal-frame">
            <span className="fp-reveal-box" />
            <p className="fp-h3 fp-thin">filmpermit.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
}
