import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/site-data";

export function FAQ() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 dark:bg-[#080e1f]" id="faq">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#0f172c]/10 blur-3xl dark:bg-[#2f6df6]/12" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6df6]">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#0f172c] md:text-5xl dark:text-white">
            Clear answers before your shoot starts.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#4a5874] dark:text-white/62">
            Every project is different. These answers cover common permit and
            production support questions for UAE shoots.
          </p>
        </div>

        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              className="group rounded-2xl bg-white/90 p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10 transition hover:shadow-[0_14px_40px_rgba(13,53,76,0.12)] dark:bg-white/[0.06] dark:ring-white/10"
              key={faq.question}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-[#0f172c] dark:text-white">
                {faq.question}
                <ChevronDown className="size-5 shrink-0 text-[#2f6df6] transition group-open:rotate-180" />
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
