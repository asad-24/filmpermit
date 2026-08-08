"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

type AnimatedCounterProps = HTMLAttributes<HTMLSpanElement> & {
  end: number;
  start?: number;
  suffix?: string;
};

export function AnimatedCounter({
  end,
  start = 0,
  suffix = "",
  className,
  ...props
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(start);

  useEffect(() => {
    const el = ref.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el) {
      return;
    }

    if (prefersReduced) {
      const frame = requestAnimationFrame(() => setValue(end));
      return () => cancelAnimationFrame(frame);
    }

    let frame = 0;
    let startTime = 0;
    const duration = 1200;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();

        const tick = (time: number) => {
          if (!startTime) {
            startTime = time;
          }

          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(start + (end - start) * eased));

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, start]);

  return (
    <span className={className} ref={ref} {...props}>
      {value}
      {suffix}
    </span>
  );
}
