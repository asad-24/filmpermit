"use client";

import { motion } from "motion/react";

type BlurTextProps = {
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
  delay?: number;
  text: string;
  by?: "words" | "letters";
};

export function BlurText({
  as: Component = "span",
  className,
  delay = 65,
  text,
  by = "words",
}: BlurTextProps) {
  const parts = by === "words" ? text.split(" ") : text.split("");
  const MotionComponent = motion[Component];

  return (
    <MotionComponent className={className}>
      {parts.map((part, index) => (
        <motion.span
          className="inline-block max-w-full will-change-[transform,filter,opacity]"
          initial={{ filter: "blur(10px)", opacity: 0, y: 18 }}
          key={`${part}-${index}`}
          transition={{
            delay: index * (delay / 1000),
            duration: 0.48,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.45 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        >
          {part}
          {by === "words" && index < parts.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
