import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Car,
  Drone,
  FileCheck2,
  Users,
} from "lucide-react";

import { BlurText } from "@/components/motion/blur-text";
import { FadeContent } from "@/components/motion/fade-content";
import { LogoLoopLite } from "@/components/motion/logo-loop-lite";
import { PointerGlowBackground } from "@/components/motion/pointer-glow-background";
import { buttonVariants } from "@/components/ui/button";
import { heroCredibility } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const floatingIcons = [
  { Icon: FileCheck2, label: "Permits", left: "11%", top: "24%", depth: 1, duration: "9s", delay: "-1s" },
  { Icon: Camera, label: "Camera", left: "22%", top: "68%", depth: 0.72, duration: "12s", delay: "-4s" },
  { Icon: Users, label: "Crew", left: "82%", top: "28%", depth: 0.9, duration: "11s", delay: "-5s" },
  { Icon: Drone, label: "Drone", left: "88%", top: "58%", depth: 1.1, duration: "13s", delay: "-7s" },
  { Icon: Car, label: "Logistics", left: "53%", top: "78%", depth: 0.65, duration: "14s", delay: "-2s" },
];

export function Hero() {
  return (
    <PointerGlowBackground>
      <section className="relative z-10 min-h-screen overflow-hidden px-4 pb-10 pt-28 text-white sm:px-6 md:pt-36">
        <Image
          alt="Cinematic Dubai production setup with camera and skyline"
          className="absolute inset-0 z-0 object-cover"
          fill
          priority
          sizes="100vw"
          src="/images/cinematic-hero.png"
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(5,9,21,0.86)_0%,rgba(5,9,21,0.58)_48%,rgba(5,9,21,0.18)_100%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_var(--mxp,48%)_var(--myp,35%),rgba(0,168,107,0.32),transparent_28rem)]" />

        <div className="pointer-events-none absolute inset-0 z-10 hidden sm:block">
          {floatingIcons.map(({ Icon, label, left, top, depth, duration, delay }) => (
            <div
              aria-label={label}
              className="floating-icon absolute rounded-3xl border border-white/15 bg-white/10 p-4 text-[#7de8c5] shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md"
              key={label}
              style={{
                left,
                top,
                ["--depth" as string]: depth,
                ["--float-duration" as string]: duration,
                ["--float-delay" as string]: delay,
              }}
            >
              <Icon className="size-8" />
            </div>
          ))}
        </div>

        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center">
          <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
            <div className="max-w-5xl">
              <FadeContent blur>
                <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/88 shadow-sm backdrop-blur">
                  FilmPermit.ae
                  <span className="size-1 rounded-full bg-[#00a86b]" />
                  Official UAE Permit Coordination Partner
                </div>
              </FadeContent>

              <h1 className="mt-6 w-7xl text-[2.8rem] font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-6xl">
                <BlurText as="span" className="block" text="Apply for UAE Filming" />
                <BlurText
                  as="span"
                  className="block text-white/88"
                  delay={32}
                  text="& Photography Permits Today"
                />
              </h1>

              <FadeContent className="mt-6 max-w-4xl" delay={260}>
                <p className="text-base leading-8 text-white/76 sm:text-lg">
                  Official UAE permit coordination for commercial filming,
                  professional photography, drone shoots, equipment clearance,
                  locations, crew, transport, and production support.
                </p>
              </FadeContent>

              <FadeContent className="mt-7" delay={320} blur>
                <div className="grid max-w-3xl gap-3 sm:grid-cols-3">
                  {heroCredibility.map((point) => (
                    <div
                      className="rounded-2xl border border-white/14 bg-white/10 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur"
                      key={point.label}
                    >
                      <div className="text-3xl font-black tracking-normal text-white">
                        {point.value}
                      </div>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#7de8c5]">
                        {point.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeContent>

              <FadeContent className="mt-9" delay={360} blur>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-12 rounded-full bg-[#00a86b] px-7 font-black text-white hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-xl hover:shadow-[#00a86b]/25"
                    )}
                    href="/apply-permit"
                  >
                    Start Permit Application
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "h-12 rounded-full border-white/25 bg-white/10 px-7 font-black text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white hover:text-[#0a1024]"
                    )}
                    href="/services"
                  >
                    Explore Production Support
                  </Link>
                </div>
              </FadeContent>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl">
          <LogoLoopLite />
        </div>
      </section>
    </PointerGlowBackground>
  );
}
