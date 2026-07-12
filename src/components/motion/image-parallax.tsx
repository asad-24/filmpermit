"use client";

import Image, { ImageProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type ImageParallaxProps = Omit<ImageProps, "className"> & {
  imageClassName?: string;
};

export function ImageParallax({ alt, imageClassName, ...props }: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const img = el?.querySelector("img");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || !img || prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -5, scale: 1.08 },
        {
          yPercent: 5,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="absolute inset-0" ref={ref}>
      <Image alt={alt} className={imageClassName} {...props} />
    </div>
  );
}
