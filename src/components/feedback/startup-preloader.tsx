"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export function StartupPreloader({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const root = rootRef.current;
    const video = videoRef.current;
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

      timeline.to(
        root,
        {
          backgroundColor: "#000000",
          duration: 0.45,
          ease: "sine.inOut",
        },
        "-=0.28"
      );

      timeline.fromTo(
        ".fp-preloader-video-wrap",
        {
          filter: "blur(8px) brightness(0.45)",
          opacity: 0,
          scale: 1.08,
        },
        {
          duration: 1.25,
          ease: "power2.out",
          filter: "blur(0px) brightness(1)",
          opacity: 1,
          scale: 1,
          onStart: () => {
            if (!video) {
              finish();
              return;
            }

            video.currentTime = 0;
            void video.play().catch(finish);
          },
        },
        "-=0.12"
      );
    }, rootRef);

    const revealPage = () => {
      gsap.to(root, {
        duration: 0.85,
        ease: "sine.inOut",
        opacity: 0,
        onComplete: finish,
      });
    };

    video?.addEventListener("ended", revealPage);
    video?.addEventListener("error", finish);
    const safety = window.setTimeout(finish, 120000);

    return () => {
      window.clearTimeout(safety);
      video?.removeEventListener("ended", revealPage);
      video?.removeEventListener("error", finish);
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
          <div className="fp-preloader-video-wrap">
            <video
              aria-label="FilmPermit introduction"
              className="fp-preloader-video"
              muted
              playsInline
              preload="auto"
              ref={videoRef}
            >
              <source media="(max-width: 1024px)" src="/assests/welcome_modile.mp4" type="video/mp4" />
              <source src="/assests/download.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
