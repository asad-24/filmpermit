"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type FadeContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  blur?: boolean;
  y?: number;
};

export function FadeContent({
  children,
  delay = 0,
  blur = false,
  y = 28,
  className,
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || prefersReduced) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(el, {
        autoAlpha: 0,
        y,
        filter: blur ? "blur(10px)" : "blur(0px)",
      });

      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.75,
        delay: delay / 1000,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [blur, delay, y]);

  return (
    <div className={className} ref={ref} {...props}>
      {children}
    </div>
  );
}
