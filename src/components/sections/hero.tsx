import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BlurText } from "@/components/motion/blur-text";
import { FadeContent } from "@/components/motion/fade-content";
import { LogoLoopLite } from "@/components/motion/logo-loop-lite";
import { buttonVariants } from "@/components/ui/button";
import { heroCredibility } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative z-10 overflow-hidden px-4 pb-8 pt-24 text-white sm:px-6 sm:pb-10 md:pt-32 lg:min-h-screen lg:pt-36">
      <Image
        alt="Cinematic Dubai production setup with camera and skyline"
        className="absolute inset-0 z-0 object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/cinematic-hero.png"
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(5,9,21,0.86)_0%,rgba(5,9,21,0.58)_48%,rgba(5,9,21,0.18)_100%)]" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center py-6 sm:min-h-[calc(100svh-7rem)] lg:min-h-[calc(100vh-7rem)] lg:py-0">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
          <div className="max-w-5xl lg:col-span-2">
            <FadeContent blur>
              <div className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.12em] text-white/88 shadow-sm backdrop-blur sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]">
                FilmPermit.ae
                <span className="size-1 rounded-full bg-[#00a86b]" />
                Trusted UAE Film Permit Coordination
              </div>
            </FadeContent>

            <h1 className="mt-5 max-w-5xl text-[2.35rem] font-black leading-[1.02] tracking-normal sm:mt-6 sm:text-5xl md:text-6xl lg:text-6xl">
              <BlurText as="span" className="block" text="Everything You Need" />
              <BlurText
                as="span"
                className="block text-white/88"
                delay={32}
                text="To Film In The UAE."
              />
            </h1>

            <FadeContent className="mt-5 max-w-4xl sm:mt-6" delay={260}>
              <p className="text-sm leading-7 text-white/76 sm:text-base sm:leading-8 md:text-lg">
                From permits to production logistics, we coordinate everything
                your crew needs to film smoothly across Dubai, Abu Dhabi,
                Sharjah, and the rest of the UAE.
              </p>
            </FadeContent>

            <FadeContent className="mt-6 sm:mt-7" delay={320} blur>
              <div className="grid max-w-2xl grid-cols-2 gap-2 sm:gap-3">
                {heroCredibility.map((point) => (
                  <div
                    className="min-w-0 rounded-2xl border border-white/14 bg-white/10 px-2 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur sm:px-4 sm:py-4"
                    key={point.label}
                  >
                    <div className="text-2xl font-black tracking-normal text-white sm:text-3xl">
                      {point.value}
                    </div>
                    <p className="mt-1 text-[10px] font-black uppercase leading-4 tracking-[0.08em] text-[#7de8c5] sm:text-xs sm:tracking-[0.14em]">
                      {point.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeContent>

            <FadeContent className="mt-7 sm:mt-9" delay={360} blur>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 w-full rounded-full bg-[#00a86b] px-5 text-sm font-black text-white hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-xl hover:shadow-[#00a86b]/25 sm:h-12 sm:w-auto sm:px-7"
                  )}
                  href="/apply-permit"
                >
                  Apply For A Permit
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-11 w-full rounded-full border-white/25 bg-white/10 px-5 text-sm font-black text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white hover:text-[#0a1024] sm:h-12 sm:w-auto sm:px-7"
                  )}
                  href="/services"
                >
                  Explore Our Services
                </Link>
              </div>
            </FadeContent>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl hidden sm:block">
        <LogoLoopLite />
      </div>
    </section>
  );
}
