import { BlogCards } from "@/components/blog/blog-cards";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyUAE } from "@/components/sections/why-uae";
import { faqs, serviceCards, site } from "@/lib/site-data";

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
      <Mission />
      <ServicesOverview />
      <WhyUAE />
      <FAQ />
      <section className="bg-[#f5f7fb] px-6 py-20 dark:bg-[#0a1024]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#8490a8] dark:text-[#9fb8ff]">
                From Our Blog
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
                Industry Insights & Guides
              </h2>
            </div>
          </div>
          <BlogCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
