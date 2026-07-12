"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";

type AnimatedCounterProps = HTMLAttributes<HTMLSpanElement> & {
  end: number;
  suffix?: string;
};

export function AnimatedCounter({
  end,
  suffix = "",
  className,
  ...props
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el) {
      return;
    }

    if (prefersReduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    let start = 0;
    const duration = 1200;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();

        const tick = (time: number) => {
          if (!start) {
            start = time;
          }

          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));

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
  }, [end]);

  return (
    <span className={className} ref={ref} {...props}>
      {value}
      {suffix}
    </span>
  );
}
