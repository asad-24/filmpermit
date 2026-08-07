import { CheckCircle2, MapPin } from "lucide-react";

import { emiratesBanner } from "@/lib/site-data";

export function EmiratesBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a1024] px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,107,0.24),transparent_28rem),radial-gradient(circle_at_85%_55%,rgba(125,232,197,0.16),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl rounded-2xl border border-white/[0.07] bg-white/[0.05] p-4 shadow-[0_18px_54px_rgba(0,0,0,0.16)] backdrop-blur sm:p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7de8c5]/24 bg-[#00a86b]/12 px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-[#b7ffe6] sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <CheckCircle2 className="size-4" />
              UAE-wide coordination
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-normal sm:mt-5 sm:text-4xl md:text-[2.75rem]">
              {emiratesBanner.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68 sm:mt-5 sm:text-[15px] sm:leading-8">
              {emiratesBanner.description}
            </p>
          </div>

          <div className="grid content-center gap-2 sm:grid-cols-2 sm:gap-3">
            {emiratesBanner.emirates.map((emirate) => (
              <div
                className="flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.06] p-3 text-center text-sm font-black text-white shadow-[0_10px_26px_rgba(0,0,0,0.08)] sm:p-4 sm:last:col-span-2 sm:last:mx-auto sm:last:min-w-[18rem]"
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
