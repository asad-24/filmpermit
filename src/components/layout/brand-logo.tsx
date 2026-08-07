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
      ? "h-[8rem] w-[12rem]"
      : size === "footer"
        ? "h-[8rem] w-[12rem]"
        : "h-[4.2rem] w-[6.3rem] sm:h-[4.55rem] sm:w-[6.9rem]";

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
              ? "192px"
              : size === "footer"
                ? "192px"
                : "(max-width: 640px) 101px, 110px"
          }
          src="/assests/new_logo.png"
        />
      </span>
    </Link>
  );
}
