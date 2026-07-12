import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { permitJourney } from "@/lib/site-data";

export function PermitJourney() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 dark:bg-[#0a1024]">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#2f6df6]/14 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <RevealSection>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2f6df6]">
              Permit Journey
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-6xl dark:text-white">
              From brief to approved shoot path.
            </h2>
            <p className="mt-5 text-base leading-8 text-[#4a5874] dark:text-white/65">
              A smoother permit process starts before the application. We
              translate your creative and production details into a practical
              route that local authorities can understand.
            </p>
          </div>
        </RevealSection>

        <div className="relative">
          <RevealSection>
            <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-[#0f172c]/10 shadow-[0_28px_90px_rgba(15,23,44,0.16)] dark:border-white/10">
              <Image
                alt="UAE filming permit planning desk"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                src="/images/permit-journey.png"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050915]/90 via-[#050915]/54 to-transparent" />
              <div className="absolute inset-0 grid content-end p-5 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {permitJourney.map((item, index) => (
                    <RevealSection delay={index * 90} key={item.step}>
                      <article className="group h-full rounded-2xl border border-white/12 bg-white/[0.08] p-4 text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#9fb8ff]">
                            {item.step}
                          </span>
                          <ArrowRight className="size-4 text-[#2f6df6] transition group-hover:translate-x-1" />
                        </div>
                        <h3 className="mt-3 text-lg font-black">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-white/68">
                          {item.description}
                        </p>
                      </article>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
