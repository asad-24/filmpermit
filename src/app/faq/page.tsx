import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { CTA } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { faqs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const extraFaqs = [
  {
    question: "Can foreign production companies film in the UAE?",
    answer:
      "Yes. Foreign companies can film in the UAE when the correct approvals, local coordination, and production documentation are arranged before the shoot.",
  },
  {
    question: "Can you handle filming permits and equipment clearance on our behalf?",
    answer:
      "We can coordinate the permit route, prepare required information, support authority submissions, and guide customs clearance planning for professional production gear.",
  },
  {
    question: "Are drone shoots allowed in Dubai?",
    answer:
      "Drone filming requires specific approvals and careful planning. Requirements depend on location, schedule, flight scope, operator status, and the production purpose.",
  },
  {
    question: "How much does a filming permit cost in Dubai or the UAE?",
    answer:
      "Costs depend on the emirate, location, shoot type, crew size, equipment, number of days, drone use, and authority requirements. Share your scope for accurate guidance.",
  },
];

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about UAE filming permits, photography permits, production support, drone filming, and equipment clearance.",
};

export default function FAQPage() {
  const pageFaqs = [...faqs, ...extraFaqs];

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        image="/images/permit-journey.png"
        title="Clear answers before your shoot starts."
        description="Common questions about UAE filming permits, drone approvals, production support, customs, crew, and planning timelines."
        align="center"
      />

      <section className="bg-[#f5f7fb] px-6 py-24 dark:bg-[#080e1f]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_1fr]">
          <RevealSection>
            <div className="sticky top-28 rounded-[32px] border border-[#0f172c]/10 bg-white/82 p-7 shadow-[0_18px_60px_rgba(15,23,44,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
                Permit desk notes
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] dark:text-white">
                Better questions create faster planning.
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#647086] dark:text-white/60">
                The most useful brief includes locations, dates, final usage,
                equipment, drone needs, crew count, and whether roads, hotels,
                government spaces, or private venues are involved.
              </p>
              <Link className={cn(buttonVariants(), "mt-7 h-11 rounded-full px-6")} href="/contact">
                Ask Our Team
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </RevealSection>

          <div className="grid gap-4">
            {pageFaqs.map((faq, index) => (
              <RevealSection delay={(index % 4) * 70} key={faq.question}>
                <details className="group rounded-[24px] border border-[#0f172c]/10 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,44,0.05)] transition hover:shadow-[0_18px_60px_rgba(15,23,44,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-[#0a1024] dark:text-white">
                    {faq.question}
                    <ChevronDown className="size-5 shrink-0 text-[#00a86b] transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-[#647086] dark:text-white/60">
                    {faq.answer}
                  </p>
                </details>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
