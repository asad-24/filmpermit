"use client";

import { ReactNode, useEffect, useRef } from "react";

export function PointerGlowBackground({ children }: { children: ReactNode }) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const setVars = (x: string, y: string, xp: string, yp: string) => {
      root.style.setProperty("--mx", x);
      root.style.setProperty("--my", y);
      root.style.setProperty("--mxp", xp);
      root.style.setProperty("--myp", yp);
    };

    const reset = () => setVars("0", "0", "50%", "35%");
    reset();

    const onMove = (event: MouseEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      const nx = (event.clientX / width - 0.5) * 2;
      const ny = (event.clientY / height - 0.5) * 2;
      const px = Math.max(0, Math.min(100, (event.clientX / width) * 100));
      const py = Math.max(0, Math.min(100, (event.clientY / height) * 100));

      if (rafRef.current) {
        return;
      }

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        setVars(
          Math.max(-1, Math.min(1, nx)).toFixed(3),
          Math.max(-1, Math.min(1, ny)).toFixed(3),
          `${px.toFixed(1)}%`,
          `${py.toFixed(1)}%`
        );
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", reset);
    window.addEventListener("blur", reset);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", reset);
      window.removeEventListener("blur", reset);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      reset();
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#f5f7fb] text-[#0a1024] dark:bg-[#0f172c] dark:text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            radial-gradient(820px circle at var(--mxp, 50%) var(--myp, 35%), rgba(0,168,107,.16), transparent 60%),
            radial-gradient(700px circle at 82% 20%, rgba(15,23,44,.08), transparent 55%),
            linear-gradient(135deg, #ffffff 0%, #f5f7fb 52%, #e8eefc 100%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `
            radial-gradient(800px circle at var(--mxp, 50%) var(--myp, 35%), rgba(255,255,255,.18), transparent 60%),
            radial-gradient(700px circle at 78% 24%, rgba(0,168,107,.22), transparent 55%),
            linear-gradient(135deg, #0f172c 0%, #18213a 55%, #0a1024 100%)
          `,
        }}
      />
      {children}
    </div>
  );
}
