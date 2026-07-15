import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { showcaseCards } from "@/lib/site-data";

export function CinematicShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-6 py-24 dark:bg-[#080e1f]">
      <div className="mx-auto max-w-7xl">
        <RevealSection className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
            Production-ready UAE
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-6xl dark:text-white">
            Locations, gear, crew, and logistics in one frame.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#4a5874] dark:text-white/62">
            The site should feel like the work: precise, visual, fast-moving,
            and built around real shoot pressure.
          </p>
        </RevealSection>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {showcaseCards.map((card, index) => (
            <RevealSection delay={index * 110} key={card.title}>
              <Link
                aria-label={`${card.title} - open related page`}
                className="group relative block min-h-[520px] overflow-hidden rounded-[32px] border border-[#0f172c]/10 bg-[#0a1024] shadow-[0_25px_80px_rgba(15,23,44,0.14)] transition hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(0,168,107,0.18)] dark:border-white/10"
                href={card.href}
              >
                <Image
                  alt={card.title}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={card.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-[#050915]/46 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#7de8c5] backdrop-blur">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#7de8c5]">
                    Open
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </RevealSection>
          ))}
        </div>

        <RevealSection className="mt-12 flex justify-center" delay={200}>
          <Link
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a86b] px-7 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-xl hover:shadow-[#00a86b]/20"
            href="/services"
          >
            See Production Services
            <ArrowRight className="size-4" />
          </Link>
        </RevealSection>
      </div>
    </section>
  );
}
