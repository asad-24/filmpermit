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
        description="Complete production coordination for international crews filming anywhere in the UAE, from permits and customs to crew, equipment, locations, transport, and accommodation."
        image="/images/production-services.png"
        title="Everything Your Production Needs Before Cameras Roll"
      />

      <section className="bg-[#f5f7fb] px-6 py-20 dark:bg-[#080e1f]">
        <div className="mx-auto grid max-w-7xl gap-6">
          {serviceCards.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <RevealSection delay={(index % 4) * 80} key={service.id}>
                <article
                  className={`grid scroll-mt-32 overflow-hidden rounded-[26px] border border-[#0f172c]/10 bg-white shadow-[0_18px_60px_rgba(15,23,44,0.09)] dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[0.95fr_1.05fr] ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                  id={service.id}
                >
                  <div className="relative min-h-[300px] overflow-hidden">
                    <Image
                      alt={service.alt}
                      className="object-cover transition duration-700 hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      src={service.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/54 via-transparent to-transparent" />
                  </div>

                  <div className="flex h-full flex-col justify-center p-5 md:p-7 lg:p-8">
                    <h2 className="text-2xl font-black tracking-normal text-[#0a1024] md:text-3xl dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#4a5874] dark:text-white/62">
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
                        View Service
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
