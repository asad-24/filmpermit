import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { permitJourney, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Learn about FilmPermit.ae, a UAE production support partner for filming permits, photography permits, logistics, crew, equipment, and on-ground coordination.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Why FilmPermit.ae"
        image="/images/cinematic-hero.png"
        title="Your Production Partner Across the UAE"
        description="We help international crews secure filming permits, coordinate local logistics, and keep productions moving smoothly across the Emirates."
        align="center"
      />

      <section className="bg-white px-6 py-24 dark:bg-[#080e1f]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <RevealSection>
            <div className="relative min-h-[560px] overflow-hidden rounded-[36px] border border-[#0f172c]/10 shadow-[0_28px_90px_rgba(15,23,44,0.14)] dark:border-white/10">
              <Image
                alt="UAE filming permit paperwork and production coordination"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                src="/images/service-permits.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/88 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/12 bg-black/30 p-5 text-white backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7de8c5]">
                  Production-first support
                </p>
                <p className="mt-3 text-2xl font-black">
                  Clear approvals, organized people, reliable logistics.
                </p>
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#eef2f8] px-4 py-2 text-sm font-black text-[#4a5874] dark:bg-white/10 dark:text-white/70">
                <HeartHandshake className="size-4" />
                Our Mission
              </span>
              <h2 className="mt-6 text-4xl font-black tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
                Helping Productions Film in the UAE Without the Guesswork.
              </h2>
              <p className="mt-6 text-lg leading-9 text-[#647086] dark:text-white/62">
                FilmPermit.ae simplifies permits, logistics, authorities, crew,
                equipment, and production support so your team can focus on the
                shoot instead of scattered coordination.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Permit planning",
                  "Local crew",
                  "Equipment & logistics",
                  "Practical guidance",
                ].map((item) => (
                  <span className="flex gap-3 text-sm font-semibold text-[#4a5874] dark:text-white/65" key={item}>
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#00a86b]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-6 py-24 dark:bg-[#0a1024]">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
              Our Operating Values
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
              The Principles Behind Every Production We Support.
            </h2>
          </RevealSection>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <RevealSection delay={index * 90} key={value.title}>
                  <article className="h-full rounded-[28px] border border-[#0f172c]/10 bg-white p-6 text-center shadow-[0_18px_60px_rgba(15,23,44,0.07)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#0a1024] text-[#00a86b] dark:bg-[#00a86b] dark:text-white">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-[#0a1024] dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#647086] dark:text-white/58">
                      {value.description}
                    </p>
                  </article>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-[#080e1f]">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
              How we work
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
              Project Brief to Production Support.
            </h2>
          </RevealSection>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {permitJourney.map((step, index) => (
              <RevealSection delay={index * 80} key={step.step}>
                <article className="h-full rounded-[28px] border border-[#0f172c]/10 bg-[#f5f7fb] p-6 dark:border-white/10 dark:bg-white/[0.05]">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#00a86b]">{step.step}</span>
                    {index === permitJourney.length - 1 ? (
                      <BadgeCheck className="size-6 text-[#00a86b]" />
                    ) : (
                      <ShieldCheck className="size-6 text-[#00a86b]" />
                    )}
                  </div>
                  <h3 className="mt-6 text-xl font-black text-[#0a1024] dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#647086] dark:text-white/58">
                    {step.description}
                  </p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
