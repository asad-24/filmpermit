"use client";

import { useEffect, useRef } from "react";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      void video.play().catch(() => undefined);
    };

    playVideo();
    video.addEventListener("canplay", playVideo);
    window.addEventListener("filmpermit:ready", playVideo);
    document.addEventListener("visibilitychange", playVideo);

    return () => {
      video.removeEventListener("canplay", playVideo);
      window.removeEventListener("filmpermit:ready", playVideo);
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);

  return (
    <video
      aria-hidden="true"
      autoPlay
      className="pointer-events-none absolute inset-0 z-[1] block h-full min-h-full w-full min-w-full max-w-none object-cover object-center opacity-35"
      loop
      muted
      playsInline
      preload="auto"
      ref={videoRef}
      src="/assests/hero.mp4"
    />
  );
}
