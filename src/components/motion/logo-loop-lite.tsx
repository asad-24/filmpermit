"use client";

import { productionPartners } from "@/lib/site-data";

export function LogoLoopLite() {
  const items = [...productionPartners, ...productionPartners];

  return (
    <div className="loop-mask mx-auto max-w-5xl overflow-hidden py-5" aria-label="Production support categories">
      <div className="logo-loop-track flex w-max items-center gap-3">
        {items.map((item, index) => (
          <span
            className="inline-flex h-11 min-w-[13.5rem] items-center justify-center rounded-full border border-white/18 bg-white/82 px-5 text-center text-[10px] font-black uppercase tracking-[0.14em] text-[#0f172c]/72 shadow-sm backdrop-blur sm:h-12 sm:min-w-[15.5rem] sm:text-xs dark:border-white/10 dark:bg-white/[0.08] dark:text-white/74"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
