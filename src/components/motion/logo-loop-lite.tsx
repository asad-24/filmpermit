"use client";

import { productionPartners } from "@/lib/site-data";

export function LogoLoopLite() {
  const items = [...productionPartners, ...productionPartners];

  return (
    <div className="loop-mask overflow-hidden py-4" aria-label="Production support categories">
      <div className="logo-loop-track flex w-max gap-3">
        {items.map((item, index) => (
          <span
            className="inline-flex h-12 items-center rounded-full border border-[#0f172c]/10 bg-white/75 px-5 text-xs font-black uppercase tracking-[0.18em] text-[#0f172c]/68 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-white/70"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
