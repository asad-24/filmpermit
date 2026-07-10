import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Car,
  Drone,
  FileCheck2,
  ShieldCheck,
  Users,
} from "lucide-react";

import { BlurText } from "@/components/motion/blur-text";
import { FadeContent } from "@/components/motion/fade-content";
import { PointerGlowBackground } from "@/components/motion/pointer-glow-background";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const floatingIcons = [
  { Icon: FileCheck2, label: "Permits", left: "14%", top: "28%", depth: 1, duration: "9s", delay: "-1s" },
  { Icon: Camera, label: "Camera", left: "24%", top: "18%", depth: 0.8, duration: "11s", delay: "-5s" },
  { Icon: Users, label: "Crew", left: "17%", top: "58%", depth: 0.9, duration: "10s", delay: "-3s" },
  { Icon: Drone, label: "Drone", left: "80%", top: "25%", depth: 1.1, duration: "12s", delay: "-7s" },
  { Icon: Car, label: "Logistics", left: "86%", top: "54%", depth: 0.75, duration: "13s", delay: "-2s" },
];

const chips = [
  { Icon: FileCheck2, text: "Filming Permits", href: "/services#permits" },
  { Icon: Camera, text: "Photography Permits", href: "/services#photography-permits" },
  { Icon: Users, text: "Crew Hire", href: "/services#crew-hire" },
  { Icon: Drone, text: "Drone Support", href: "/services#drone-support" },
  { Icon: Car, text: "Production Logistics", href: "/services#production-logistics" },
];

export function Hero() {
  return (
    <PointerGlowBackground>
      <section className="relative z-10 min-h-screen overflow-hidden px-4 pb-14 pt-28 sm:px-6 sm:pt-28 md:pt-36">
        <div className="pointer-events-none absolute inset-0">
          {floatingIcons.map(({ Icon, label, left, top, depth, duration, delay }) => (
            <div
              aria-label={label}
              className="floating-icon absolute hidden rounded-3xl border border-[#0f172c]/10 bg-white/80 p-4 text-[#2f6df6] shadow-[0_18px_50px_rgba(15,23,44,0.12)] backdrop-blur-md sm:block dark:border-white/15 dark:bg-white/10 dark:shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
              key={label}
              style={{
                left,
                top,
                ["--depth" as string]: depth,
                ["--float-duration" as string]: duration,
                ["--float-delay" as string]: delay,
              }}
            >
              <Icon className="size-9" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center justify-center sm:min-h-[calc(100vh-9rem)]">
          <div className="mx-auto w-full max-w-5xl min-w-0 text-center">
            <FadeContent blur>
              <div className="mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[#0f172c]/10 bg-white/80 px-3 py-2 text-center text-[10px] font-black uppercase tracking-[0.1em] text-[#0f172c]/78 shadow-sm backdrop-blur sm:px-4 sm:text-[11px] sm:tracking-[0.16em] dark:border-white/20 dark:bg-white/10 dark:text-white/88">
                FilmPermit.ae
                <span className="size-1 rounded-full bg-[#2f6df6]" />
                UAE Filming Support
              </div>
            </FadeContent>

            <h1 className="mx-auto mt-6 max-w-[20rem] text-[2.35rem] font-black leading-[1.04] tracking-normal text-[#0a1024] sm:max-w-3xl sm:text-5xl md:max-w-5xl md:text-7xl dark:text-white">
              <BlurText
                as="span"
                className="block break-words text-center"
                text="Apply for UAE Filming"
              />
              <BlurText
                as="span"
                className="block break-words text-center text-[#0f172c]/88 dark:text-white/90"
                delay={28}
                text="& Photography Permits"
              />
            </h1>

            <FadeContent className="mx-auto mt-5 max-w-3xl" delay={250}>
              <p className="text-base leading-8 text-[#4a5874] sm:text-lg dark:text-white/82">
                Your local partner for compliant permits, crew, equipment,
                customs, logistics, and on-ground production support across the
                Emirates.
              </p>
            </FadeContent>

            <FadeContent className="mt-9" delay={350} blur>
              <div className="mx-auto w-full max-w-4xl rounded-2xl border border-[#0f172c]/10 bg-white/82 p-4 text-left shadow-[0_22px_70px_rgba(15,23,44,0.12)] backdrop-blur-md sm:rounded-[28px] sm:p-5 dark:border-white/15 dark:bg-white/10 dark:shadow-[0_22px_70px_rgba(0,0,0,0.22)]">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border border-[#0f172c]/10 bg-[#f5f7fb] text-[#2f6df6] sm:size-14 dark:border-white/15 dark:bg-white/10">
                      <ShieldCheck className="size-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#0f172c]/10 bg-[#0f172c]/5 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#0f172c]/70 sm:tracking-[0.18em] dark:border-white/10 dark:bg-black/10 dark:text-white/80">
                        <span className="size-2 rounded-full bg-[#2f6df6]" />
                        Featured Service
                      </div>
                      <h2 className="mt-3 max-w-full text-[1.55rem] font-black leading-tight text-[#0a1024] sm:text-xl dark:text-white">
                        UAE filming permit coordination
                      </h2>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-[#4a5874] dark:text-white/72">
                        Share your brief, dates, locations, crew size, and
                        equipment list. We will guide the right permit route
                        before your shoot day.
                      </p>
                    </div>
                  </div>

                  <Link
                    className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#2f6df6] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#5b8cff] hover:shadow-xl sm:w-auto"
                    href="/contact?type=permit"
                  >
                    Start Application
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["24/7", "Permit guidance for urgent shoots"],
                    ["7", "Emirates covered through local support"],
                    ["Full", "Crew, gear, logistics, and vendors"],
                  ].map(([value, label]) => (
                    <div
                      className="rounded-2xl border border-[#0f172c]/10 bg-[#f5f7fb]/80 px-4 py-3 dark:border-white/10 dark:bg-white/[0.08]"
                      key={label}
                    >
                      <div className="text-xl font-black text-[#2f6df6]">{value}</div>
                      <p className="mt-1 text-sm text-[#4a5874] dark:text-white/70">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeContent>

            <div className="mt-8 flex max-w-full flex-wrap justify-center gap-2 pb-2">
              {chips.map(({ Icon, text, href }) => (
                <Link
                  className="group inline-flex max-w-full items-center gap-2 rounded-full border border-[#0f172c]/10 bg-white/80 px-3 py-2 text-xs font-semibold text-[#0f172c]/82 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/15"
                  href={href}
                  key={text}
                >
                  <Icon className="size-4 text-[#2f6df6] transition group-hover:scale-110" />
                  {text}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-[#2f6df6] px-7 font-black text-white hover:-translate-y-0.5 hover:bg-[#5b8cff]"
                )}
                href="/contact?type=permit"
              >
                Apply For A Permit
                <ArrowRight className="size-4" />
              </Link>
              <Link
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 rounded-full border-[#0f172c]/20 bg-white px-7 font-black text-[#0f172c] hover:bg-[#0f172c] hover:text-white dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#0f172c]"
                )}
                href="/services"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PointerGlowBackground>
  );
}
