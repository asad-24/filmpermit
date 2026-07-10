import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CTA } from "@/components/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { article } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: article.title,
  description:
    "Learn when a filming permit is required in Dubai, what commercial productions often overlook, and how to plan a compliant UAE shoot.",
  openGraph: {
    title: article.title,
    description:
      "A practical guide for commercial productions planning filming permits in Dubai.",
    images: [article.image],
  },
};

export default function ArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: "2026-04-01",
    image: article.image,
    author: {
      "@type": "Organization",
      name: "FilmPermit.ae",
    },
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        type="application/ld+json"
      />
      <main className="bg-[#f5f7fb] pb-4 pt-36 dark:bg-[#0f172c]">
        <article className="mx-auto max-w-4xl px-6">
          <Link
            className="inline-flex items-center gap-2 text-sm font-black text-[#24304a] hover:text-[#0a1024] dark:text-white/70 dark:hover:text-white"
            href="/blog"
          >
            <ArrowLeft className="size-4" />
            Back to articles
          </Link>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-[#647086] dark:text-white/55">
            <span>{article.category}</span>
            <span>{article.date}</span>
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
            {article.title}
          </h1>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg shadow-2xl shadow-slate-950/10">
            <Image
              alt={article.alt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              src={article.image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/86 via-slate-950/35 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-8 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9fb8ff]">
                A guide for commercial productions
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight">
                Do You Really Need a Filming Permit in Dubai?
              </h2>
            </div>
          </div>

          <p className="mt-10 text-lg font-black text-[#0a1024] dark:text-white">
            Published: {article.published}
          </p>

          <div className="prose-space mt-16 rounded-lg bg-white/70 px-0 py-2 dark:bg-transparent">
            {article.sections.map((section) => (
              <section className="mb-20" key={section.heading}>
                <h2 className="text-3xl font-black tracking-normal text-[#0a1024] dark:text-white">
                  {section.heading}
                </h2>
                <div className="mt-7 space-y-7 text-lg leading-9 text-[#4a5874] dark:text-white/68">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.quote ? (
                    <blockquote className="border-l-4 border-[#0f172c]/10 pl-6 text-xl font-semibold italic text-[#0a1024] dark:border-white/15 dark:text-white">
                      “{section.quote}”
                    </blockquote>
                  ) : null}
                  {section.listIntro ? <p>{section.listIntro}</p> : null}
                  {section.items ? (
                    <ul className="grid gap-4 pl-6">
                      {section.items.map((item) => (
                        <li className="list-disc pl-2" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <div className="mb-20 rounded-lg bg-[#0f172c] p-8 text-center text-white md:p-10">
            <h2 className="text-3xl font-black tracking-normal">
              Apply for Your Filming Permit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65">
              Secure the appropriate permits early so your production stays
              aligned from pre-production through execution.
            </p>
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 bg-white text-[#0a1024] hover:bg-[#dbe7ff]"
              )}
              href="/contact?type=permit"
            >
              Apply Now for Filming Permit
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </article>
      </main>
      <CTA />
    </>
  );
}
