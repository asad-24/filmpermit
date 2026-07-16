"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { serviceCards } from "@/lib/site-data";

type ServiceCard = (typeof serviceCards)[number];

export function PinnedServices() {
  const [activeId, setActiveId] = useState(serviceCards[0]?.id ?? "");
  const activeService =
    serviceCards.find((service) => service.id === activeId) ?? serviceCards[0];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f7fb] to-white px-4 py-20 text-[#0a1024] dark:from-[#080e1f] dark:to-[#0a1024] dark:text-white sm:px-6"
      id="services"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#00a86b]/12 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b] dark:text-[#7de8c5]">
            UAE permit services
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-normal md:text-6xl">
            Our Services
          </h2>
          <p className="mt-5 text-base leading-8 text-[#4a5874] dark:text-white/62">
            Permit coordination, local crew, equipment, locations, movement, and
            production support for teams filming across the UAE.
          </p>
        </div>

        <div className="relative mt-12 md:rounded-2xl md:bg-[#06111f] md:p-1 md:shadow-[0_28px_100px_rgba(15,23,44,0.18)]">
          <div className="pointer-events-none absolute inset-1 hidden overflow-hidden rounded-2xl md:block">
            {serviceCards.map((service) => (
              <Image
                alt=""
                aria-hidden="true"
                className={`object-cover transition-opacity duration-500 ${
                  activeService.id === service.id ? "opacity-90" : "opacity-0"
                }`}
                fill
                key={service.id}
                sizes="(min-width: 1024px) 100vw, 0vw"
                src={service.image}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/44 to-black/16" />
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 md:mx-0 md:grid md:grid-cols-2 md:gap-1 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {serviceCards.map((service) => (
              <ServiceTile
                active={activeService.id === service.id}
                key={service.id}
                onActivate={() => setActiveId(service.id)}
                service={service}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a86b] px-8 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-xl hover:shadow-[#00a86b]/20"
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
  active,
  onActivate,
  service,
}: {
  active: boolean;
  onActivate: () => void;
  service: ServiceCard;
}) {
  return (
    <Link
      className="group relative flex h-[430px] w-[84%] flex-none snap-center overflow-hidden rounded-2xl border border-[#0f172c]/10 bg-[#07111f] shadow-[0_18px_70px_rgba(15,23,44,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,168,107,0.16)] sm:w-[68%] md:h-[520px] md:w-auto md:border-white/10 md:bg-transparent md:shadow-none"
      href={service.href}
      onFocus={onActivate}
      onMouseEnter={onActivate}
    >
      <Image
        alt={service.alt}
        className="object-cover transition duration-700 group-hover:scale-105 md:hidden"
        fill
        sizes="(min-width: 768px) 0vw, 84vw"
        src={service.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/42 to-black/10 md:bg-gradient-to-t md:from-black/86 md:via-black/38 md:to-transparent" />
      <div className="relative z-10 flex h-full w-full flex-col justify-end p-5 md:p-6">
        <span className="w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#0a1024] shadow-sm backdrop-blur md:bg-white/88">
          {service.eyebrow}
        </span>
        <h3 className="mt-5 translate-y-0 text-2xl font-black leading-tight text-white transition duration-500 md:translate-y-3 md:group-hover:translate-y-0">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-white/76 transition duration-500 md:translate-y-3 md:group-hover:translate-y-0">
          {service.description}
        </p>
        <div className="mt-4 grid gap-2 overflow-hidden">
          {service.bullets.map((item, index) => (
            <span
              className="flex items-center gap-2 text-sm font-semibold text-white/82 transition duration-300 md:opacity-0 md:group-hover:opacity-100"
              key={item}
              style={{
                transitionDelay: active ? `${index * 50}ms` : "0ms",
                transform: active ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              <ArrowRight className="size-3.5 text-[#7de8c5]" />
              {item}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#7de8c5] transition md:opacity-0 md:group-hover:opacity-100">
          Explore Service
          <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
      <div className="absolute inset-0 bg-[#00a86b]/12 opacity-0 transition duration-500 group-hover:opacity-100" />
    </Link>
  );
}
