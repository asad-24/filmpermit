import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      <section className="bg-[#0f172c] px-6 pb-28 pt-40 text-center text-white dark:bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.14),transparent_32rem),#07111f]">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-black tracking-normal md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Everything you need to know about filming permits and production
            services in the UAE.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 dark:bg-[#0f172c]">
        <div className="mx-auto max-w-3xl">
          <h2 className="border-b border-[#0f172c]/10 pb-4 text-xl font-black text-[#0a1024] dark:border-white/10 dark:text-white">
            Filming Permits
          </h2>
          <div className="mt-5 grid gap-4">
            {pageFaqs.map((faq) => (
              <details
                className="group rounded-lg border border-[#0f172c]/10 bg-white p-5 dark:border-white/10 dark:bg-[#0a1024]"
                key={faq.question}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-[#0a1024] dark:text-white">
                  {faq.question}
                  <ChevronDown className="size-4 shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#647086] dark:text-white/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] px-6 py-20 text-center dark:bg-[#0a1024]/80">
        <h2 className="text-3xl font-black text-[#0a1024] dark:text-white">
          Still Have Questions?
        </h2>
        <p className="mt-4 text-[#8490a8] dark:text-white/55">
          Our team is here to help with personalized guidance.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className={cn(buttonVariants(), "h-11 px-7")} href="/contact">
            Contact Us
            <ArrowRight className="size-4" />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "h-11 bg-transparent px-7")}
            href="/contact?type=permit"
          >
            Start Application
          </Link>
        </div>
      </section>
    </>
  );
}
