"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { navItems, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-[#080e1f]/55 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          type="button"
        />
      ) : null}

      <header className="fixed left-0 right-0 top-3 z-[60] px-3 sm:top-4 sm:px-4">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/50 bg-white/82 px-3 py-2 text-[#0f172c] shadow-[0_18px_60px_rgba(15,23,44,0.16)] ring-1 ring-black/5 backdrop-blur-2xl transition-all duration-300 sm:px-6 sm:py-3 dark:border-white/15 dark:bg-[#07111f]/70 dark:text-white dark:shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
          )}
        >
          <Link className="flex items-center px-1" href="/" aria-label={`${site.name} home`}>
            <Image
              alt={site.name}
              className="h-9 w-auto rounded-md object-contain sm:h-11"
              height={1024}
              preload
              src="/assests/logo.png"
              width={1536}
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
            {navItems.map((item) => {
              const baseHref = item.href.split("#")[0].split("?")[0];
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : baseHref !== "/" && pathname.startsWith(baseHref);

              return (
                <Link
                  className={cn(
                    "rounded-full px-3 py-2 text-[#0f172c]/72 transition hover:bg-[#2f6df6]/10 hover:text-[#2f6df6] dark:text-white/78 dark:hover:bg-white/10 dark:hover:text-white",
                    active && "bg-[#0f172c]/8 text-[#0f172c] dark:bg-white/12 dark:text-white"
                  )}
                  href={item.href}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-[#0f172c]/20 bg-white px-4 font-black text-[#0f172c] hover:bg-[#0f172c] hover:text-white dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#0f172c]"
              )}
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              className={cn(
                buttonVariants(),
                "rounded-full bg-[#2f6df6] px-5 font-black text-white hover:-translate-y-0.5 hover:bg-[#5b8cff] hover:shadow-lg"
              )}
              href="/contact?type=permit"
            >
              Apply For A Permit
            </Link>
          </div>

          <button
            aria-expanded={open}
            aria-label="Toggle navigation"
            className={cn(
              "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0f172c]/8 text-[#0f172c] transition md:hidden dark:bg-white/10 dark:text-white"
            )}
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-white text-[#0f172c] shadow-2xl ring-1 ring-black/10 transition-transform duration-300 dark:bg-[#07111f] dark:text-white dark:ring-white/10 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          aria-label="Close menu"
          className="absolute right-4 top-4 inline-flex size-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-black/5 dark:bg-white/10 dark:ring-white/10"
          onClick={() => setOpen(false)}
          type="button"
        >
          <X className="size-5" />
        </button>

        <div className="border-b border-[#0f172c]/10 p-5 dark:border-white/10">
          <Link className="inline-flex items-center gap-3" href="/" onClick={() => setOpen(false)}>
            <Image
              alt={site.name}
              className="h-12 w-auto rounded-md object-contain"
              height={1024}
              src="/assests/logo.png"
              width={1536}
            />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <div className="grid gap-1 text-[15px] font-black">
            {navItems.map((item) => (
              <Link
                className="rounded-2xl px-4 py-3 transition hover:bg-[#2f6df6]/15 dark:hover:bg-white/10"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-[#0f172c]/10 p-4 dark:border-white/10">
          <Link
            className="inline-flex w-full items-center justify-center rounded-full bg-[#2f6df6] px-5 py-3 text-sm font-black text-white"
            href="/contact?type=permit"
            onClick={() => setOpen(false)}
          >
            Apply For A Permit
          </Link>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <QuickAction href={`https://wa.me/${site.whatsapp}`} icon={<MessageCircle className="size-4" />} label="WhatsApp" />
            <QuickAction href={`mailto:${site.email}`} icon={<Mail className="size-4" />} label="Email" />
            <QuickAction href={`tel:${site.phone}`} icon={<Phone className="size-4" />} label="Call" />
          </div>
        </div>
      </aside>
    </>
  );
}

function QuickAction({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#0f172c]/6 px-2 py-3 text-[11px] font-black text-[#0f172c] dark:bg-white/10 dark:text-white"
      href={href}
      rel="noreferrer"
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {icon}
      {label}
    </a>
  );
}
