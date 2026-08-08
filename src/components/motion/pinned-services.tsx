"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceCards } from "@/lib/site-data";

type ServiceCard = (typeof serviceCards)[number];

export function PinnedServices() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f7fb] to-white px-4 py-12 text-[#0a1024] dark:from-[#080e1f] dark:to-[#0a1024] dark:text-white sm:px-6 sm:py-16"
      id="services"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#00a86b]/12 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b] dark:text-[#7de8c5]">
            UAE permit services
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal sm:mt-4 sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4a5874] dark:text-white/62 sm:mt-5 sm:text-base sm:leading-8">
            Complete production coordination for international crews filming
            anywhere in the UAE.
          </p>
        </div>

        <div className="relative mt-8 md:mt-12">
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:gap-4 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {serviceCards.map((service) => (
              <ServiceTile key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#00a86b] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-xl hover:shadow-[#00a86b]/20 sm:h-12 sm:px-8"
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

function ServiceTile({
  service,
}: {
  service: ServiceCard;
}) {
  return (
    <Link
      className="group relative flex h-[360px] w-[82%] flex-none snap-center overflow-hidden rounded-2xl border border-white/12 bg-[#07111f] shadow-[0_18px_70px_rgba(15,23,44,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,168,107,0.16)] sm:w-[68%] md:h-[395px] md:w-auto lg:h-[420px]"
      href={service.href}
    >
      <Image
        alt={service.alt}
        className="object-cover transition duration-700 group-hover:scale-105"
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 84vw"
        src={service.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/18" />
      <div className="relative z-10 flex h-full w-full flex-col p-4 sm:p-5 md:p-5 xl:p-6">
        <span className="w-fit rounded-full bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#0a1024] shadow-sm backdrop-blur sm:text-xs sm:tracking-[0.16em] md:bg-white/88">
          {service.eyebrow}
        </span>
        <h3 className="mt-4 min-h-[3.25rem] text-lg font-black leading-tight text-white sm:mt-5 sm:text-xl md:min-h-[3.75rem] lg:min-h-[4.25rem] xl:min-h-[3.75rem]">
          {service.title}
        </h3>
        <p className="mt-2 min-h-[3rem] max-w-full text-xs leading-6 text-white/76 sm:mt-3 sm:text-sm sm:leading-7 lg:text-[12px] lg:leading-6 xl:text-[13px] 2xl:text-sm">
          {service.description}
        </p>
        <div className="mt-3 grid gap-1.5 sm:mt-4">
          {service.bullets.map((item) => (
            <span
              className="flex items-center gap-2 text-xs font-semibold text-white/82 sm:text-sm"
              key={item}
            >
              <ArrowRight className="size-3.5 text-[#7de8c5]" />
              {item}
            </span>
          ))}
        </div>
        <span className="mt-auto inline-flex items-center pt-5 text-xs font-black text-[#7de8c5] transition group-hover:translate-x-1 sm:text-sm">
          View Service &rarr;
        </span>
      </div>
      <div className="absolute inset-0 bg-[#00a86b]/12 opacity-0 transition duration-500 group-hover:opacity-100" />
    </Link>
  );
}
