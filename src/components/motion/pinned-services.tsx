"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { serviceCards } from "@/lib/site-data";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function PinnedServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!section || !pin || prefersReduced || window.innerWidth < 1024) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${window.innerHeight * 2.2}`,
        pin,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const next = Math.min(
            serviceCards.length - 1,
            Math.floor(self.progress * serviceCards.length)
          );
          setActiveIndex(next);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const active = serviceCards[activeIndex];

  return (
    <section
      className="relative overflow-hidden bg-[#f5f7fb] px-6 py-20 text-[#0a1024] dark:bg-[#070c1c] dark:text-white lg:min-h-[260vh]"
      id="services"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,107,0.16),transparent_28rem),radial-gradient(circle_at_85%_35%,rgba(15,23,44,0.08),transparent_22rem)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,107,0.28),transparent_28rem),radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.12),transparent_22rem)]" />
      <div className="relative mx-auto max-w-7xl lg:min-h-screen" ref={pinRef}>
        <div className="grid gap-10 lg:min-h-screen lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#7de8c5]">
              Production Support
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal md:text-6xl">
              Services that keep the shoot moving.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#4a5874] dark:text-white/68">
              Scroll through the core support pillars. Each one is built around
              practical UAE production realities: approvals, timing, people,
              equipment, and location constraints.
            </p>

            <div className="mt-8 grid gap-3">
              {serviceCards.map((service, index) => (
                <button
                  className={cn(
                    "group rounded-2xl border p-4 text-left transition",
                    index === activeIndex
                      ? "running-light-card bg-white shadow-[0_18px_60px_rgba(0,168,107,0.18)] dark:bg-white/12"
                      : "border-[#0f172c]/10 bg-white/70 shadow-sm hover:border-[#00a86b]/35 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/25 dark:hover:bg-white/[0.07]"
                  )}
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] text-[#00a86b] dark:text-[#7de8c5]">
                    {service.eyebrow}
                  </span>
                  <span className="relative z-10 mt-1 block text-lg font-black text-[#0a1024] dark:text-white">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[520px] overflow-hidden rounded-[32px] border border-[#0f172c]/10 bg-white shadow-[0_30px_100px_rgba(15,23,44,0.18)] dark:border-white/10 dark:bg-white/[0.05] dark:shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              <Image
                alt={active.alt}
                className="object-cover transition duration-700"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                src={active.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-[#050915]/42 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="max-w-2xl rounded-3xl border border-white/18 bg-black/42 p-5 text-white shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#7de8c5]">
                    0{activeIndex + 1} / 04
                  </p>
                  <h3 className="mt-3 text-3xl font-black tracking-normal">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {active.description}
                  </p>
                  <Link
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#00a86b] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987]"
                    href={active.href}
                  >
                    Explore Service
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
