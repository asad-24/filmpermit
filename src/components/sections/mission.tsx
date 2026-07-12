import Image from "next/image";
import { CheckCircle2, RadioTower, ShieldCheck } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";

const pillars = [
  {
    title: "Authority-aware planning",
    description: "We help shape the brief so permit requirements, location rules, and timelines are clear early.",
    icon: ShieldCheck,
  },
  {
    title: "Production coordination",
    description: "Crew, gear, transport, vendors, and shoot-day details stay connected to the approval path.",
    icon: RadioTower,
  },
  {
    title: "On-ground clarity",
    description: "You get practical guidance before decisions become expensive on the day of production.",
    icon: CheckCircle2,
  },
];

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 dark:bg-[#080e1f]" id="about">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#0f172c]/10 blur-3xl dark:bg-[#2f6df6]/12" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <RevealSection>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2f6df6]">
              What we make simple
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-6xl dark:text-white">
              Less paperwork anxiety. More production momentum.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4a5874] dark:text-white/66">
              We turn UAE filming approvals, local coordination, and shoot-day
              support into a clear operating plan for producers, agencies,
              photographers, creators, and visiting production companies.
            </p>

            <div className="mt-8 grid gap-4">
              {pillars.map(({ icon: Icon, ...pillar }) => (
                <article
                  className="group grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl border border-[#0f172c]/10 bg-[#f5f7fb]/80 p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_60px_rgba(15,23,44,0.08)] dark:border-white/10 dark:bg-white/[0.05] dark:hover:bg-white/[0.08]"
                  key={pillar.title}
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0a1024] text-[#2f6df6] dark:bg-[#2f6df6] dark:text-white">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#0a1024] dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#647086] dark:text-white/58">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection delay={140}>
          <div className="relative">
            <div className="relative min-h-[560px] overflow-hidden rounded-[36px] border border-[#0f172c]/10 shadow-[0_28px_100px_rgba(15,23,44,0.16)] dark:border-white/10">
              <Image
                alt="Production crew preparing a UAE shoot"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 44vw, 100vw"
                src="/images/production-services.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/82 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/12 bg-black/30 p-5 text-white backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9fb8ff]">
                  Local production desk
                </p>
                <p className="mt-3 text-2xl font-black">
                  One team connecting approvals, people, equipment, and timing.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
