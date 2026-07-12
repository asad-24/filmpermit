import { Quote } from "lucide-react";

import { RevealSection } from "@/components/motion/reveal-section";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 dark:bg-[#0a1024]">
      <div className="pointer-events-none absolute -right-32 top-8 h-80 w-80 rounded-full bg-[#00a86b]/14 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <RevealSection className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
            Producer confidence
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-normal text-[#0a1024] md:text-6xl dark:text-white">
            Built for teams who cannot afford confusion.
          </h2>
        </RevealSection>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <RevealSection delay={index * 100} key={item.name}>
              <article className="h-full rounded-[30px] border border-[#0f172c]/10 bg-[#f5f7fb]/80 p-6 shadow-[0_18px_60px_rgba(15,23,44,0.07)] backdrop-blur transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.06]">
                <Quote className="size-8 text-[#00a86b]" />
                <p className="mt-6 text-lg leading-8 text-[#24304a] dark:text-white/78">
                  “{item.quote}”
                </p>
                <div className="mt-8 border-t border-[#0f172c]/10 pt-5 dark:border-white/10">
                  <p className="font-black text-[#0a1024] dark:text-white">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-[#647086] dark:text-white/55">
                    {item.role}
                  </p>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
