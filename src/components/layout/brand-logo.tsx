import Link from "next/link";
import Image from "next/image";

import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  onClick?: () => void;
  size?: "header" | "drawer" | "footer";
};

export function BrandLogo({
  className,
  onClick,
  size = "header",
}: BrandLogoProps) {
  const isFooter = size === "footer";
  const usesImageLogo = size === "header" || size === "drawer";

  return (
    <Link
      aria-label={`${site.name} home`}
      className={cn(
        "group inline-flex items-center rounded-full border border-[#0f172c]/10 bg-white/94 text-[#0a1024] shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/8 dark:text-white",
        size === "header" && "h-[4.35rem] w-[11.5rem] justify-center p-1 sm:h-[4.9rem] sm:w-[13.5rem]",
        size === "drawer" && "h-[5.4rem] w-[14rem] justify-center p-1",
        isFooter && "rounded-3xl px-4 py-4 pr-5 shadow-[0_14px_38px_rgba(15,23,44,0.12)]",
        className
      )}
      href="/"
      onClick={onClick}
    >
      {usesImageLogo ? (
        <span className="relative block h-full w-full overflow-hidden rounded-[1.35rem] bg-white">
          <Image
            alt=""
            aria-hidden="true"
            className="object-cover object-[center_57%] scale-[1.12] transition duration-300 group-hover:scale-[1.18]"
            fill
            priority={size === "header"}
            sizes={size === "header" ? "216px" : "224px"}
            src="/assests/filmpermit.svg"
          />
        </span>
      ) : (
        <span
          className={cn(
            "grid shrink-0 place-items-center rounded-full bg-[#00a86b] font-black text-white shadow-[0_10px_24px_rgba(0,168,107,0.28)]",
            isFooter ? "size-14 text-lg" : "size-9 text-xs sm:size-10 sm:text-sm"
          )}
        >
          FP
        </span>
      )}
      {!usesImageLogo ? (
        <span className="grid min-w-0 leading-none">
          <span
            className={cn(
              "whitespace-nowrap font-black tracking-[-0.01em]",
              isFooter ? "text-2xl" : "text-[1.05rem] sm:text-xl"
            )}
          >
            FilmPermit<span className="text-[#00a86b]">.ae</span>
          </span>
          <span
            className={cn(
              "mt-1 whitespace-nowrap font-bold uppercase tracking-[0.14em] text-[#647086] dark:text-white/58",
              isFooter ? "text-[10px]" : "hidden text-[8px] sm:block"
            )}
          >
            UAE Production Permits
          </span>
        </span>
      ) : null}
    </Link>
  );
}
