import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { faqs } from "@/lib/site-data";

export function FAQ() {
  const homeFaqs = faqs.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 dark:bg-[#080e1f] sm:px-6 sm:py-20" id="faq">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#0f172c]/10 blur-3xl dark:bg-[#00a86b]/12" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a86b]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-[#0f172c] sm:text-4xl md:text-5xl dark:text-white">
            Everything You Need To Know Before Filming In The UAE.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#4a5874] dark:text-white/62 sm:mt-5 sm:text-base sm:leading-8">
            Every project is different. These answers cover common permit and
            production support questions for UAE shoots.
          </p>
          <Link
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#00a86b] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987] sm:mt-7 sm:h-12 sm:px-6"
            href="/faq"
          >
            View All FAQs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-3">
          {homeFaqs.map((faq) => (
            <details
              className="group rounded-2xl bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10 transition hover:shadow-[0_14px_40px_rgba(13,53,76,0.12)] sm:p-6 dark:bg-white/[0.06] dark:ring-white/10"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-[#0f172c] sm:gap-5 sm:text-lg dark:text-white">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 text-[#00a86b] transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#4a5874] dark:text-white/60">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
