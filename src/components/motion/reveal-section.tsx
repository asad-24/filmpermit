"use client";

import { ReactNode } from "react";

import { FadeContent } from "@/components/motion/fade-content";

export function RevealSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeContent blur className={className} delay={delay} y={36}>
      {children}
    </FadeContent>
  );
}
