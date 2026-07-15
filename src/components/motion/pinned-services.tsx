"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

import { serviceCards } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type ServiceCard = (typeof serviceCards)[number];

export function PinnedServices() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const currentIndexRef = useRef(0);
  const isProgrammaticScroll = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tiltTarget, setTiltTarget] = useState({ x: 0, y: 0 });
  const current = serviceCards[currentIndex] ?? serviceCards[0];

  const changeService = (index: number) => {
    const next = serviceCards[index];

    if (!next || index === currentIndexRef.current) {
      return;
    }

    setCurrentIndex(index);
    currentIndexRef.current = index;

    if (!isProgrammaticScroll.current && scrollTriggerRef.current) {
      const trigger = scrollTriggerRef.current;
      const totalScroll = trigger.end - trigger.start;
      const targetScroll = trigger.start + (index / (serviceCards.length - 1)) * totalScroll;
      const scrollY = Math.min(Math.max(targetScroll, trigger.start + 1), trigger.end - 1);

      isProgrammaticScroll.current = true;
      gsap.to(window, {
        duration: 0.8,
        ease: "power2.inOut",
        scrollTo: scrollY,
        onComplete: () => {
          isProgrammaticScroll.current = false;
        },
      });
    }
  };

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const section = sectionRef.current;
    const sticky = stickyRef.current;

    if (!section || !sticky) {
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateHeight = () => {
      const isMobile = window.innerWidth < 768 || prefersReduced;
      section.style.height = isMobile ? "auto" : `${(serviceCards.length + 1) * window.innerHeight}px`;
    };

    updateHeight();

    let trigger: ScrollTrigger | null = null;

    const createTrigger = () => {
      trigger?.kill();

      if (window.innerWidth < 768 || prefersReduced) {
        scrollTriggerRef.current = null;
        return;
      }

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (serviceCards.length + 0.5)}`,
        pin: sticky,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (isProgrammaticScroll.current) {
            return;
          }

          const index = Math.round(self.progress * (serviceCards.length - 1));

          if (index !== currentIndexRef.current && serviceCards[index]) {
            isProgrammaticScroll.current = true;
            setCurrentIndex(index);
            currentIndexRef.current = index;
            window.setTimeout(() => {
              isProgrammaticScroll.current = false;
            }, 160);
          }
        },
      });

      scrollTriggerRef.current = trigger;
    };

    createTrigger();

    const handleResize = () => {
      updateHeight();
      createTrigger();
      ScrollTrigger.refresh();
    };

    const handlePointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (0.5 - event.clientY / window.innerHeight) * 14;
      setTiltTarget({ x, y });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointer);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointer);
      trigger?.kill();
      scrollTriggerRef.current = null;
      section.style.height = "";
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-visible scroll-mt-28 bg-[linear-gradient(-10deg,#020617_0%,#020617_34%,#0d141f_34%,#0d141f_66%,#06140f_66%,#06140f_100%)] text-white"
      id="services"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,107,0.16),transparent_58%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.1),transparent_60%)]" />
      <div
        className="sticky top-0 flex min-h-screen items-center justify-center px-3 py-8 sm:px-6"
        ref={stickyRef}
      >
        <div className="relative w-full max-w-6xl rounded-3xl border border-white/15 bg-white/12 px-4 py-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-8 lg:px-24">
          <ModeTabs
            currentService={current}
            onSelect={changeService}
            services={serviceCards}
          />

          <div className="mt-10 flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:items-start">
            <ModeImageCarousel
              currentIndex={currentIndex}
              currentService={current}
              onSelect={changeService}
              services={serviceCards}
              tiltTarget={tiltTarget}
            />

            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="w-full max-w-lg text-center lg:text-left"
              initial={{ opacity: 0, x: 18 }}
              key={`${current.href}-copy`}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-[#7de8c5]/25 bg-[#00a86b]/14 px-3 py-1 text-xs font-semibold text-[#b7ffe6]">
                {current.eyebrow}
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-[#7de8c5]">
                Production Support
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-normal sm:text-5xl">
                {current.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200">
                {current.description}
              </p>
              <div className="mt-8 grid gap-3 text-sm">
                <ServicePoint text="Dedicated UAE production coordination" />
                <ServicePoint text="Clear documents, timing, and next steps" />
                <ServicePoint text="Built around practical shoot-day realities" />
              </div>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                href={current.href}
              >
                Explore Service
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeTabs({
  currentService,
  onSelect,
  services,
}: {
  currentService: ServiceCard;
  onSelect: (index: number) => void;
  services: ServiceCard[];
}) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="relative flex w-full max-w-5xl flex-nowrap items-center justify-start gap-2 overflow-x-auto pb-1 sm:justify-center sm:gap-3">
        {services.map((service, index) => {
          const isActive = currentService.href === service.href;

          return (
            <motion.button
              animate={{ opacity: isActive ? 1 : 0.88, scale: isActive ? 1.02 : 1 }}
              aria-pressed={isActive}
              className={`flex-none whitespace-nowrap rounded-xl border px-3 py-1.5 text-center text-xs font-medium leading-tight transition-colors sm:px-4 sm:py-2 sm:text-sm lg:text-base ${
                isActive
                  ? "border-[#7de8c5]/45 bg-gradient-to-r from-[#00a86b]/30 to-sky-400/20 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              key={service.href}
              onClick={() => onSelect(index)}
              transition={{ damping: 22, mass: 0.6, stiffness: 320, type: "spring" }}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {service.eyebrow}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ModeImageCarousel({
  currentIndex,
  currentService,
  onSelect,
  services,
  tiltTarget,
}: {
  currentIndex: number;
  currentService: ServiceCard;
  onSelect: (index: number) => void;
  services: ServiceCard[];
  tiltTarget: { x: number; y: number };
}) {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const isSyncing = useRef(false);
  const [isMounted, setIsMounted] = useState(false);
  const transitionMs = 550;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper || !services.length) {
      return;
    }

    const activeIdx = typeof swiper.activeIndex === "number" ? swiper.activeIndex : 0;

    if (currentIndex !== activeIdx) {
      isSyncing.current = true;
      swiper.slideTo(currentIndex, transitionMs);
      window.setTimeout(() => {
        isSyncing.current = false;
      }, transitionMs + 50);
    }
  }, [currentIndex, services]);

  if (!isMounted) {
    return (
      <div className="relative h-[300px] w-full max-w-[320px] overflow-visible px-[5vw] sm:h-[380px] sm:max-w-[360px] sm:px-4 md:h-[450px] md:max-w-[420px] lg:w-[390px] lg:max-w-none lg:px-0 lg:pr-12">
        <TiltCard
          isFirst
          service={currentService}
          tiltTarget={tiltTarget}
        />
      </div>
    );
  }

  return (
    <div className="relative h-[300px] w-full max-w-[320px] overflow-visible px-[5vw] sm:h-[380px] sm:max-w-[360px] sm:px-4 md:h-[450px] md:max-w-[420px] lg:w-[390px] lg:max-w-none lg:px-0 lg:pr-12">
      <Swiper
        cardsEffect={{
          perSlideOffset: 12,
          perSlideRotate: 3,
          rotate: true,
          slideShadows: false,
        }}
        className="h-full w-full cursor-grab overflow-visible active:cursor-grabbing"
        effect="cards"
        grabCursor
        longSwipes
        longSwipesMs={250}
        longSwipesRatio={0.25}
        loop={false}
        modules={[EffectCards, Pagination]}
        onBeforeInit={(swiper) => {
          if (paginationRef.current) {
            swiper.params.pagination = { clickable: true, el: paginationRef.current };
          }
        }}
        onSlideChange={(swiper) => {
          if (isSyncing.current) {
            return;
          }

          const idx = typeof swiper.activeIndex === "number" ? swiper.activeIndex : 0;
          const next = services[idx];

          if (next && next.href !== currentService.href) {
            onSelect(idx);
          }
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          if (paginationRef.current) {
            swiper.params.pagination = { clickable: true, el: paginationRef.current };
            swiper.pagination?.init();
            swiper.pagination?.update();
          }
        }}
        pagination={{ clickable: true }}
        resistanceRatio={0.8}
        speed={transitionMs}
        threshold={8}
        touchStartPreventDefault={false}
      >
        {services.map((service, index) => (
          <SwiperSlide className="!overflow-visible" key={service.href}>
            <TiltCard
              isFirst={index === 0}
              service={service}
              tiltTarget={tiltTarget}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-3 flex justify-center" ref={paginationRef} />
    </div>
  );
}

function TiltCard({
  isFirst,
  service,
  tiltTarget,
}: {
  isFirst: boolean;
  service: ServiceCard;
  tiltTarget: { x: number; y: number };
}) {
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const s = useMotionValue(1);
  const rotateX = useSpring(rX, { damping: 18, mass: 0.4, stiffness: 160 });
  const rotateY = useSpring(rY, { damping: 18, mass: 0.4, stiffness: 160 });
  const scale = useSpring(s, { damping: 20, mass: 0.4, stiffness: 200 });

  useEffect(() => {
    rX.set(tiltTarget.y);
    rY.set(tiltTarget.x);
    s.set(1.02);
  }, [rX, rY, s, tiltTarget]);

  return (
    <div className="relative h-full w-full" style={{ perspective: 1000 }}>
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] shadow-lg"
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      >
        <Image
          alt={service.alt}
          className="absolute inset-0 h-full w-full select-none object-cover object-center"
          draggable={false}
          fill
          priority={isFirst}
          sizes="(min-width: 1024px) 390px, (min-width: 768px) 420px, 320px"
          src={service.image}
          style={{ transform: "translateZ(20px)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00a86b]/10 via-transparent to-black/70" />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/45 px-4 py-3 text-white shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold">{service.title}</div>
              <div className="mt-1 text-xs text-white/60">{service.eyebrow}</div>
            </div>
            <div className="grid size-10 flex-none place-items-center rounded-full bg-white/12 text-[#7de8c5]">
              <ArrowRight className="size-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ServicePoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-semibold text-white/75">
      <span className="grid size-7 flex-none place-items-center rounded-full bg-[#00a86b]/16 text-[#7de8c5]">
        <ArrowRight className="size-4" />
      </span>
      <span>{text}</span>
    </div>
  );
}
