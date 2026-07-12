import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { allServices, serviceCards } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UAE filming permits, photography permits, customs clearance, crew hire, equipment rental, drone support, location scouting, logistics, and full production support.",
};

const serviceImages = [
  "/images/permit-journey.png",
  "/images/production-services.png",
  "/images/uae-locations-showcase.png",
  "/images/cta-production-basecamp.png",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Production Services"
        image="/images/production-services.png"
        title="Everything a UAE shoot needs before cameras roll."
        description="Permits, approvals, customs, crew, equipment, locations, transport, vendors, and on-ground production coordination from one local partner."
        align="center"
      />

      <section className="bg-[#f5f7fb] px-6 py-24 dark:bg-[#080e1f]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[28px] border border-[#0f172c]/10 bg-white/82 p-5 shadow-[0_18px_60px_rgba(15,23,44,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00a86b]">
                Core pillars
              </p>
              <nav className="mt-4 grid gap-2">
                {serviceCards.map((service) => (
                  <Link
                    className="rounded-2xl px-4 py-3 text-sm font-black text-[#24304a] transition hover:bg-[#00a86b]/10 hover:text-[#0a1024] dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                    href={service.href}
                    key={service.title}
                  >
                    {service.eyebrow}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="grid gap-8">
            {serviceCards.map((service, index) => (
              <RevealSection delay={index * 90} key={service.title}>
                <article
                  className="grid overflow-hidden rounded-[34px] border border-[#0f172c]/10 bg-white shadow-[0_22px_80px_rgba(15,23,44,0.1)] dark:border-white/10 dark:bg-white/[0.05] lg:grid-cols-[0.92fr_1.08fr]"
                  id={service.href.split("#")[1]}
                >
                  <div className="relative min-h-[320px] overflow-hidden">
                    <Image
                      alt={service.alt}
                      className="object-cover transition duration-700 hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      src={serviceImages[index] ?? service.image}
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a86b]">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-4 text-3xl font-black tracking-normal text-[#0a1024] dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4a5874] dark:text-white/62">
                      {service.description}
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a86b] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987]"
                        href={`/contact?type=permit&service=${service.href.split("#")[1]}`}
                      >
                        Request This Service
                        <ArrowRight className="size-4" />
                      </Link>
                      <Link
                        className="inline-flex h-12 items-center justify-center rounded-full border border-[#0f172c]/15 px-6 text-sm font-black text-[#0a1024] transition hover:-translate-y-0.5 hover:bg-[#0a1024] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#0a1024]"
                        href="/contact"
                      >
                        Talk to Producer Desk
                      </Link>
                    </div>
                  </div>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 dark:bg-[#0a1024]">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
              Full support network
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
              The details that make production smoother.
            </h2>
          </RevealSection>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {allServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <RevealSection delay={(index % 4) * 70} key={service.id}>
                  <article className="h-full rounded-[26px] border border-[#0f172c]/10 bg-[#f5f7fb] p-6 transition hover:-translate-y-1 hover:border-[#00a86b]/40 hover:shadow-[0_18px_60px_rgba(15,23,44,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0a1024] text-[#00a86b] dark:bg-[#00a86b] dark:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-6 text-base font-black text-[#0a1024] dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#647086] dark:text-white/55">
                      {service.description}
                    </p>
                  </article>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
