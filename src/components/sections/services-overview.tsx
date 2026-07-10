"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { serviceCards } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sharedImage = activeIndex === null ? null : serviceCards[activeIndex]?.image;

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-6 py-20 dark:bg-[#080e1f]" id="services">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#0f172c]/10 blur-3xl dark:bg-[#2f6df6]/12" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6df6]">
            Production Support
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#0f172c] md:text-5xl dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#4a5874] dark:text-white/62">
            Four core production support pillars, backed by a wider UAE network
            for permits, logistics, crew, equipment, and on-ground coordination.
          </p>
        </div>

        <div
          className="mt-14 grid overflow-hidden rounded-[32px] border border-white bg-[#0f172c] shadow-[0_30px_90px_rgba(13,53,76,0.22)] md:grid-cols-4 dark:border-white/10"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {serviceCards.map((service, index) => (
            <Link
              className="group relative min-h-[430px] overflow-hidden border-white/30 p-6 text-white md:border-r md:last:border-r-0"
              href={service.href}
              key={service.title}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <Image
                alt={service.alt}
                className="object-cover transition duration-700 group-hover:scale-105"
                fill
                sizes="(min-width: 768px) 25vw, 100vw"
                src={sharedImage ?? service.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080e1f] via-[#080e1f]/54 to-[#080e1f]/12" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="w-fit rounded-full border border-[#2f6df6]/30 bg-[#2f6df6] px-3 py-1 text-xs font-black text-white shadow-sm">
                  {service.eyebrow}
                </span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black leading-tight tracking-normal">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/82">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold">
                    Explore Service
                    <ArrowRight className="size-4 text-[#2f6df6] transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-full bg-[#2f6df6] px-8 font-black text-white hover:-translate-y-0.5 hover:bg-[#5b8cff]"
            )}
            href="/services"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
