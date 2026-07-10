import Image from "next/image";
import { CalendarDays, CheckCircle2, Globe2, Route } from "lucide-react";

const reasons = [
  {
    title: "Year-Round Sunshine",
    description: "Reliable weather windows and long daylight hours for outdoor production days.",
    icon: CalendarDays,
  },
  {
    title: "World-Class Infrastructure",
    description: "Modern airports, studios, roads, hotels, equipment suppliers, and production vendors.",
    icon: Route,
  },
  {
    title: "Attractive Production Landscape",
    description: "Desert, coastline, city skylines, heritage areas, luxury venues, and industrial backdrops.",
    icon: CheckCircle2,
  },
  {
    title: "Global Connectivity",
    description: "A regional hub for crews, brands, agencies, broadcasters, and international travel.",
    icon: Globe2,
  },
];

export function WhyUAE() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 dark:bg-[#111936]">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#2f6df6]/18 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6df6]">
            UAE Advantage
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#0f172c] md:text-5xl dark:text-white">
            Why Film in the UAE?
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4a5874] dark:text-white/62">
            From desert landscapes to futuristic cityscapes, the UAE offers
            remarkable variety with professional production infrastructure.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="grid overflow-hidden rounded-[28px] shadow-[0_18px_60px_rgba(15,23,44,0.16)] ring-1 ring-[#0f172c]/10 sm:grid-cols-2">
            <div className="relative min-h-52 overflow-hidden">
              <Image
                alt="Dubai skyline and film camera at sunset"
                className="object-cover"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                src="/images/hero-dubai-film-production.png"
              />
            </div>
            <div className="relative min-h-52 overflow-hidden">
              <Image
                alt="UAE film crew preparing camera equipment"
                className="object-cover"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                src="/images/service-crew.png"
              />
            </div>
            <div className="relative min-h-56 overflow-hidden sm:col-span-2">
              <Image
                alt="Professional filming equipment rental room in Dubai"
                className="object-cover"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                src="/images/service-equipment.png"
              />
            </div>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div className="grid grid-cols-[3.5rem_1fr] gap-5" key={reason.title}>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0f172c] text-[#2f6df6] dark:bg-[#2f6df6] dark:text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0f172c] dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#4a5874] dark:text-white/58">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
