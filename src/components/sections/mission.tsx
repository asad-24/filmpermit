import { stats } from "@/lib/site-data";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 dark:bg-[#080e1f]" id="about">
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#0f172c]/10 blur-3xl dark:bg-[#2f6df6]/12" />
      <div className="pointer-events-none absolute -left-24 bottom-4 h-64 w-64 rounded-full bg-[#2f6df6]/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6df6]">
            Our Mission
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#0f172c] md:text-5xl dark:text-white">
            Our Mission
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4a5874] dark:text-white/66">
            To simplify the filming permit process across the UAE by providing
            expert guidance, authority coordination, and production support so
            our clients can focus on creating, not paperwork.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              className="rounded-[28px] bg-white/90 p-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10 transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(13,53,76,0.14)] dark:bg-white/[0.06] dark:ring-white/10"
              key={item.label}
            >
              <div className="text-5xl font-black tracking-normal text-[#0f172c] dark:text-[#2f6df6]">
                {item.value}
              </div>
              <div className="mt-3 text-sm font-semibold text-[#647086] dark:text-white/58">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
