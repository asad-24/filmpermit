import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlogCards } from "@/components/blog/blog-cards";
import { CTA } from "@/components/sections/cta";
import { EmiratesBanner } from "@/components/sections/emirates-banner";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { buttonVariants } from "@/components/ui/button";
import { faqs, serviceCards, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
      {
        "@type": "Service",
        name: "UAE filming permits and production support",
        areaServed: "United Arab Emirates",
        provider: {
          "@type": "Organization",
          name: site.name,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Production support services",
          itemListElement: serviceCards.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />
      <Hero />
      <ServicesOverview />
      <EmiratesBanner />
      <FAQ />
      <section className="relative overflow-hidden bg-[#f5f7fb] px-4 py-14 dark:bg-[#080e1f] sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#00a86b]/14 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#00a86b] sm:text-sm sm:tracking-[0.22em] dark:text-[#7de8c5]">
                From Our Blog
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-[#0a1024] sm:text-4xl md:text-5xl dark:text-white">
                Industry Insights & Guides
              </h2>
            </div>
            <Link
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 w-fit rounded-full border-[#0f172c]/15 bg-white px-5 text-sm font-black text-[#0a1024] hover:-translate-y-0.5 hover:border-[#00a86b]/45 hover:bg-[#00a86b] hover:text-white sm:h-12 sm:px-6 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-[#00a86b]"
              )}
              href="/blog"
            >
              Learn More
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <BlogCards limit={3} />
        </div>
      </section>
      <CTA />
    </>
  );
}
