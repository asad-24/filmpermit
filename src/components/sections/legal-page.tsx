import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { site } from "@/lib/site-data";

type LegalSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({
  description,
  eyebrow,
  sections,
  title,
}: LegalPageProps) {
  return (
    <main className="bg-[#f5f7fb] text-[#0a1024] dark:bg-[#080e1f] dark:text-white">
      <section className="relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 sm:pb-20 sm:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(0,168,107,0.14),transparent_28rem)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="flex size-[3.25rem] items-center justify-center rounded-2xl bg-[#00a86b] text-white shadow-[0_18px_50px_rgba(0,168,107,0.25)]">
            <ShieldCheck className="size-6" />
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-[#00a86b]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#4a5874] dark:text-white/66">
            {description}
          </p>
          <p className="mt-4 text-sm font-bold text-[#647086] dark:text-white/55">
            Last updated: July 22, 2026
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6">
          {sections.map((section) => (
            <article
              className="rounded-[28px] border border-[#0f172c]/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,44,0.07)] dark:border-white/10 dark:bg-white/[0.055] sm:p-8"
              key={section.title}
            >
              <h2 className="text-2xl font-black tracking-normal text-[#0a1024] dark:text-white">
                {section.title}
              </h2>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-[#4a5874] dark:text-white/66 sm:text-base sm:leading-8">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.bullets.map((item) => (
                    <li
                      className="flex gap-3 rounded-2xl bg-[#f5f7fb] p-4 text-sm font-semibold text-[#33405e] dark:bg-white/[0.06] dark:text-white/72"
                      key={item}
                    >
                      <span className="mt-1 size-2 flex-none rounded-full bg-[#00a86b]" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          <article className="rounded-[28px] bg-[#0a1024] p-6 text-white shadow-[0_22px_80px_rgba(15,23,44,0.14)] dark:bg-[#00a86b] sm:p-8">
            <h2 className="text-2xl font-black tracking-normal">
              Questions about these terms?
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/72 dark:text-white/88">
              Contact {site.name} if you need clarification about privacy,
              cookies, website use, or production support documentation.
            </p>
            <Link
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black text-[#0a1024] transition hover:-translate-y-0.5 hover:shadow-xl"
              href={`mailto:${site.email}`}
            >
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
