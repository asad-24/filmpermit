import { CheckCircle2, MapPin } from "lucide-react";

import { emiratesBanner } from "@/lib/site-data";

export function EmiratesBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a1024] px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,107,0.24),transparent_28rem),radial-gradient(circle_at_85%_55%,rgba(125,232,197,0.16),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl rounded-[32px] border border-white/12 bg-white/[0.06] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.25)] backdrop-blur md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7de8c5]/24 bg-[#00a86b]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#b7ffe6]">
              <CheckCircle2 className="size-4" />
              UAE-wide coordination
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-normal md:text-5xl">
              {emiratesBanner.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-white/68">
              {emiratesBanner.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {emiratesBanner.emirates.map((emirate) => (
              <div
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-sm font-black text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                key={emirate}
              >
                <span className="grid size-10 place-items-center rounded-full bg-[#00a86b]/18 text-[#7de8c5]">
                  <MapPin className="size-4" />
                </span>
                {emirate}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
