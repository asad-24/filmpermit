import type { Metadata } from "next";

import { BlogCards } from "@/components/blog/blog-cards";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and updates about UAE filming permits, photography permits, production support, equipment customs clearance, and production logistics.",
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#0f172c] px-6 pb-16 pt-40 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9fb8ff]">
            Blog
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-normal md:text-6xl">
            UAE filming permit insights and production guides.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
            Placeholder article cards for future SEO content, news updates, and
            client education around filming in the UAE.
          </p>
        </div>
      </section>
      <section className="bg-[#f5f7fb] px-6 py-20 dark:bg-[#0f172c]">
        <div className="mx-auto max-w-7xl">
          <BlogCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
