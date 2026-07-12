import type { Metadata } from "next";

import { BlogCards } from "@/components/blog/blog-cards";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and updates about UAE filming permits, photography permits, production support, equipment customs clearance, and production logistics.",
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Production Guides"
        image="/images/uae-locations-showcase.png"
        title="UAE filming permit insights and production guides."
        description="Practical planning notes for producers, agencies, creators, and visiting crews preparing shoots across the Emirates."
      />
      <section className="relative overflow-hidden bg-[#f5f7fb] px-6 py-24 dark:bg-[#080e1f]">
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#2f6df6]/14 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#2f6df6] dark:text-[#9fb8ff]">
              Field Notes
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
              Read before the shoot clock starts.
            </h2>
          </div>
          <BlogCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
