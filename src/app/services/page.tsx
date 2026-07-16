import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { serviceCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UAE filming permits, customs clearance, crew hire, equipment rental, drone filming support, location scouting, transportation support, and accommodation coordination.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        align="center"
        description="Permits, approvals, customs, crew, equipment, locations, transport, accommodation, and on-ground coordination from one UAE production support partner."
        eyebrow="Production Services"
        image="/images/production-services.png"
        title="Everything a Production Needs Before Cameras Roll"
      />

      <section className="bg-[#f5f7fb] px-6 py-24 dark:bg-[#080e1f]">
        <div className="mx-auto grid max-w-7xl gap-8">
          {serviceCards.map((service, index) => {
            const Icon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <RevealSection delay={(index % 4) * 80} key={service.id}>
                <article
                  className={`grid scroll-mt-32 overflow-hidden rounded-[34px] border border-[#0f172c]/10 bg-white shadow-[0_22px_80px_rgba(15,23,44,0.1)] dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[0.95fr_1.05fr] ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                  id={service.id}
                >
                  <div className="relative min-h-[340px] overflow-hidden">
                    <Image
                      alt={service.alt}
                      className="object-cover transition duration-700 hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/54 via-transparent to-transparent" />
                  </div>

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0a1024] text-[#00a86b] dark:bg-[#00a86b] dark:text-white">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#00a86b]">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-4 text-3xl font-black tracking-normal text-[#0a1024] md:text-4xl dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4a5874] dark:text-white/62">
                      {service.description}
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.bullets.map((item) => (
                        <div
                          className="flex items-start gap-3 text-sm font-semibold text-[#4a5874] dark:text-white/66"
                          key={item}
                        >
                          <span className="mt-0.5 grid size-6 flex-none place-items-center rounded-full bg-[#00a86b]/12 text-[#00a86b]">
                            <Check className="size-3.5" />
                          </span>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a86b] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987]"
                        href={`/apply-permit?service=${service.id}`}
                      >
                        {service.id === "permits" ? "Apply" : "Request This Service"}
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealSection>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
