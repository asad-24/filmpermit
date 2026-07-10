import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Building2, Clock3, ShieldCheck } from "lucide-react";

import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UAE filming permits, photography permits, customs clearance, crew hire, equipment rental, drone support, location scouting, logistics, and full production support.",
};

const featuredServices = [
  {
    id: "permits",
    title: "Permits",
    description:
      "Paperwork is not creative, but it should not slow creativity either. We handle filming and photography approvals so your team can focus on the shoot.",
    image: "/images/service-permits.png",
    alt: "Approved filming permit paperwork and production checklist",
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance",
    description:
      "Your gear should land ready, not stuck. We coordinate equipment documentation, airport handling, and customs support for visiting productions.",
    image: "/images/service-customs.png",
    alt: "Production crew clearing filming equipment through UAE customs",
  },
  {
    id: "crew-hire",
    title: "Crew Hire",
    description:
      "Need people who actually know the ground? We connect you with local crew, fixers, assistants, drivers, and production support teams.",
    image: "/images/service-crew.png",
    alt: "Film crew preparing camera equipment in Dubai",
  },
  {
    id: "equipment-rental",
    title: "Equipment Rental",
    description:
      "The right gear, when you need it. We help source reliable cameras, lenses, lighting, grip, sound, drone, and support equipment locally.",
    image: "/images/service-equipment.png",
    alt: "Professional filming equipment and camera rental setup",
  },
];

const additionalServices = [
  {
    title: "Studio Booking",
    description: "Access to production studios and controlled shoot spaces across the UAE.",
    icon: Building2,
  },
  {
    title: "Accommodation",
    description: "Crew housing and talent accommodation coordination for visiting teams.",
    icon: BedDouble,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance during active production windows.",
    icon: Clock3,
  },
  {
    title: "Insurance",
    description: "Production insurance and liability coverage coordination.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0f172c] px-6 pb-24 pt-36 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-black leading-tight tracking-normal md:text-6xl">
            UAE Filming & Production Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            From permits to post-production support, we provide everything you
            need for a successful shoot in the UAE.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-6 py-20 dark:bg-[#080e1f]">
        <div className="mx-auto max-w-6xl space-y-20">
          {featuredServices.map((service, index) => (
            <article
              className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-14"
              id={service.id}
              key={service.id}
            >
              <div className={index % 2 === 1 ? "md:order-2" : undefined}>
                <div className="relative aspect-[1.7/1] overflow-hidden rounded-xl shadow-[0_18px_50px_rgba(15,23,44,0.10)] ring-1 ring-[#0f172c]/10 dark:ring-white/10">
                  <Image
                    alt={service.alt}
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                    fill
                    sizes="(min-width: 1024px) 520px, 100vw"
                    src={service.image}
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : undefined}>
                <h2 className="text-2xl font-black text-[#0a1024] dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#8490a8] dark:text-white/58">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0f172c] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#19233f]"
                    href={`/services#${service.id}`}
                  >
                    View Service
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[#0f172c] px-5 text-sm font-black text-[#0f172c] transition hover:-translate-y-0.5 hover:bg-[#0f172c] hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-[#0f172c]"
                    href={`/contact?type=permit&service=${service.id}`}
                  >
                    Request This Service
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-[#0a1024]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black text-[#0a1024] dark:text-white">
            Additional Services
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  className="rounded-xl border border-[#0f172c]/12 bg-[#f5f7fb] p-6 transition hover:-translate-y-1 hover:border-[#2f6df6]/40 hover:shadow-[0_16px_40px_rgba(15,23,44,0.08)] dark:border-white/10 dark:bg-white/[0.04]"
                  key={service.title}
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-[#e8eefc] text-[#2f6df6] dark:bg-white/10">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-7 text-sm font-black text-[#0a1024] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#8490a8] dark:text-white/55">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
