import { AnimatedCounter } from "@/components/motion/animated-counter";
import { RevealSection } from "@/components/motion/reveal-section";
import { trustMetrics } from "@/lib/site-data";

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-6 py-14 dark:bg-[#080e1f]">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {trustMetrics.map((metric, index) => (
          <RevealSection delay={index * 80} key={metric.label}>
            <div className="h-full rounded-[28px] border border-[#0f172c]/10 bg-white/82 p-6 shadow-[0_18px_60px_rgba(15,23,44,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(0,168,107,0.14)] dark:border-white/10 dark:bg-white/[0.06]">
              <div className="text-4xl font-black tracking-normal text-[#0a1024] dark:text-white">
                <AnimatedCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-[#00a86b]">
                {metric.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#647086] dark:text-white/58">
                {metric.detail}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
