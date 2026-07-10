import type { Metadata } from "next";
import { CheckCircle2, HeartHandshake } from "lucide-react";

import { CTA } from "@/components/sections/cta";
import { stats, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FilmPermit.ae, a UAE production support partner for filming permits, photography permits, logistics, crew, equipment, and on-ground coordination.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0f172c] px-6 pb-28 pt-40 text-center text-white dark:bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.14),transparent_32rem),#07111f]">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-black tracking-normal md:text-6xl">
            About FilmPermit.ae
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/65">
            Your trusted partner for seamless production services across the UAE.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-[#0f172c]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef2f8] px-4 py-2 text-sm font-semibold text-[#4a5874] dark:bg-white/10 dark:text-white/70">
              <HeartHandshake className="size-4" />
              Our Mission
            </span>
            <h2 className="mt-6 text-4xl font-black tracking-normal text-[#0a1024] dark:text-white">
              Making UAE Productions Effortless
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#647086] dark:text-white/62">
              We believe creativity should never be slowed down by uncertainty,
              paperwork, or unclear processes. Our role is to make filming
              permissions simple, reliable, and predictable. Behind every permit
              is a responsibility, and we take that responsibility seriously as
              a trusted local partner that protects productions, locations, and
              the integrity of the creative process.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                className="rounded-lg bg-[#f5f7fb] p-8 text-center dark:bg-white/5"
                key={item.label}
              >
                <div className="text-5xl font-black text-[#24304a] dark:text-white">
                  {item.value}
                </div>
                <p className="mt-3 text-sm font-medium text-[#8490a8]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-6 py-20 dark:bg-[#0a1024]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black tracking-normal text-[#0a1024] dark:text-white">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-[#8490a8]">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                className="rounded-lg bg-white p-8 text-center shadow-sm dark:border dark:border-white/10 dark:bg-white/[0.04]"
                  key={value.title}
                >
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#eef2f8] text-[#4a5874] dark:bg-white/10 dark:text-white">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mt-7 text-xl font-black text-[#0a1024] dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#8490a8]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-[#0f172c]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-lg bg-[#f5f7fb] p-8 dark:bg-white/5">
            <h2 className="flex items-center gap-3 text-xl font-black text-[#0a1024] dark:text-white">
              <HeartHandshake className="size-5 text-[#647086]" />
              Why Choose FilmPermit.ae
            </h2>
            <div className="mt-8 grid gap-5 text-sm text-[#647086] sm:grid-cols-2 dark:text-white/60">
              {[
                "Expertise in UAE filming and photography permits",
                "Fast and hassle-free approval guidance",
                "Tailored support for every production",
                "Trusted by professionals and brands",
                "Transparent guidance and support",
                "Multilingual production coordination",
              ].map((item) => (
                <span className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#647086]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black tracking-normal text-[#0a1024] dark:text-white">
              We&apos;ve Got You Covered
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#647086] dark:text-white/62">
              Our team simplifies the UAE film and photography permit process,
              handling approvals for projects from social media content to
              large commercial productions. With local knowledge, fast
              coordination, and a multilingual team, we help your project run
              smoothly, legally, and on schedule from first inquiry through the
              final wrap.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
