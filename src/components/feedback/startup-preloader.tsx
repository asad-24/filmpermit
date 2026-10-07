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

    if (!video) {
      finish();
      return;
    }

    const revealPage = () => {
      gsap.to(root, {
        duration: 0.9,
        ease: "sine.inOut",
        opacity: 0,
        onComplete: finish,
      });
    };

    const playVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.currentTime = 0;
      void video.play().catch(finish);
    };

    video.addEventListener("ended", revealPage);
    video.addEventListener("error", finish);
    video.addEventListener("canplay", playVideo, { once: true });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fp-preloader-video-wrap",
        { opacity: 0 },
        { duration: 0.55, ease: "sine.out", opacity: 1 }
      );

      playVideo();
    }, rootRef);
    const safety = window.setTimeout(finish, 120000);

    return () => {
      window.clearTimeout(safety);
      video.removeEventListener("ended", revealPage);
      video.removeEventListener("error", finish);
      video.removeEventListener("canplay", playVideo);
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
          <div className="fp-preloader-video-wrap">
            <video
              aria-label="FilmPermit introduction"
              className="fp-preloader-video"
              muted
              playsInline
              preload="auto"
              ref={videoRef}
            >
              <source src="/assests/download.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
