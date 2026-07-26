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
  const logoSize =
    size === "drawer"
      ? "h-[7.25rem] w-[11rem]"
      : size === "footer"
        ? "h-[8rem] w-[12rem]"
        : "h-[3.55rem] w-[5.35rem] sm:h-[3.9rem] sm:w-[5.9rem]";

  return (
    <Link
      aria-label={`${site.name} home`}
      className={cn(
        "group inline-flex items-center justify-center transition hover:-translate-y-0.5",
        className
      )}
      href="/"
      onClick={onClick}
    >
      <span className={cn("relative block", logoSize)}>
        <Image
          alt={site.name}
          className="object-contain transition duration-300 group-hover:scale-[1.03]"
          fill
          loading={size === "header" ? "eager" : undefined}
          priority={size === "header"}
          sizes={
            size === "drawer"
              ? "176px"
              : size === "footer"
                ? "192px"
                : "(max-width: 640px) 86px, 94px"
          }
          src="/assests/new_logo.png"
        />
      </span>
    </Link>
  );
}
