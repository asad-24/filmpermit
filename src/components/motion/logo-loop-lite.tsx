"use client";

import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { productionPartners } from "@/lib/site-data";

const SPEED = 90;
const GAP = 40;
const MAX_COPIES = 6;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? true),
      { threshold: 0 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

export function LogoLoopLite() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLUListElement>(null);
  const dragStartRef = useRef({ offset: 0, x: 0 });

  const reducedMotion = usePrefersReducedMotion();
  const inView = useInView(containerRef);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sequenceWidth, setSequenceWidth] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const measure = useCallback(() => {
    const nextContainerWidth = containerRef.current?.clientWidth ?? 0;
    const nextSequenceWidth = sequenceRef.current?.getBoundingClientRect().width ?? 0;

    setContainerWidth(nextContainerWidth);
    setSequenceWidth(nextSequenceWidth > 0 ? Math.ceil(nextSequenceWidth) : 0);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const container = containerRef.current;
    const sequence = sequenceRef.current;
    if (!container) return;

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    });

    observer.observe(container);
    if (sequence) observer.observe(sequence);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [measure]);

  const copyCount = useMemo(() => {
    if (!sequenceWidth || !containerWidth) return 2;

    const requiredCopies = Math.ceil((containerWidth + sequenceWidth) / sequenceWidth);
    return Math.min(Math.max(2, requiredCopies), MAX_COPIES);
  }, [containerWidth, sequenceWidth]);

  const readTrackOffset = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const transform = window.getComputedStyle(track).transform;
    if (!transform || transform === "none") return 0;

    try {
      return new DOMMatrixReadOnly(transform).m41;
    } catch {
      return 0;
    }
  }, []);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) return;

      const offset = readTrackOffset();
      dragStartRef.current = { offset, x: event.clientX };
      setDragOffset(offset);
      setIsInteracting(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [readTrackOffset]
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isInteracting || sequenceWidth <= 0) return;

      const delta = event.clientX - dragStartRef.current.x;
      const rawOffset = dragStartRef.current.offset + delta;
      const wrappedOffset = ((rawOffset % sequenceWidth) + sequenceWidth) % sequenceWidth;
      setDragOffset(wrappedOffset - sequenceWidth);
    },
    [isInteracting, sequenceWidth]
  );

  const stopInteraction = useCallback((event?: ReactPointerEvent<HTMLDivElement>) => {
    if (event?.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsInteracting(false);
    setDragOffset(0);
  }, []);

  const duration = sequenceWidth > 0 ? sequenceWidth / SPEED : 1;
  const shouldAnimate =
    productionPartners.length > 0 &&
    sequenceWidth > 0 &&
    inView &&
    !reducedMotion &&
    !isInteracting;

  const loopStyle = useMemo(
    () =>
      ({
        "--logo-loop-duration": `${duration}s`,
        "--logo-loop-sequence-width": `${sequenceWidth}px`,
      }) as CSSProperties,
    [duration, sequenceWidth]
  );

  return (
    <div
      aria-label="Production support categories"
      className="logo-loop-container relative w-full cursor-grab touch-pan-y overflow-x-hidden active:cursor-grabbing"
      dir="ltr"
      onPointerCancel={stopInteraction}
      onPointerDown={handlePointerDown}
      onPointerLeave={() => stopInteraction()}
      onPointerMove={handlePointerMove}
      onPointerUp={stopInteraction}
      ref={containerRef}
      role="region"
      style={loopStyle}
    >
      <style>{`
        @keyframes logo-loop-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(calc(-1 * var(--logo-loop-sequence-width)), 0, 0); }
        }
      `}</style>

      <div
        className="flex w-max select-none will-change-transform [content-visibility:auto]"
        ref={trackRef}
        style={{
          animationDirection: "reverse",
          animationDuration: "var(--logo-loop-duration)",
          animationIterationCount: "infinite",
          animationName: shouldAnimate ? "logo-loop-marquee" : "none",
          animationTimingFunction: "linear",
          transform: isInteracting ? `translate3d(${dragOffset}px, 0, 0)` : undefined,
        }}
      >
        {Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            aria-hidden={copyIndex > 0}
            className="flex min-h-[72px] shrink-0 items-center"
            key={`copy-${copyIndex}`}
            ref={copyIndex === 0 ? sequenceRef : undefined}
            role="list"
            style={{ gap: `${GAP}px`, paddingRight: `${GAP}px` }}
          >
            {productionPartners.map((item) => (
              <li className="flex-none" key={`${copyIndex}-${item}`} role="listitem">
                <span className="inline-flex h-12 w-[15.5rem] select-none items-center justify-center rounded-full border border-white/18 bg-white/82 px-5 text-center text-xs font-black uppercase tracking-[0.14em] text-[#0f172c]/72 shadow-sm [-webkit-user-drag:none] dark:border-white/10 dark:bg-white/[0.08] dark:text-white/74">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
