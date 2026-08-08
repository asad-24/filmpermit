import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  footerEmirates,
  footerLegalLinks,
  serviceCards,
  site,
  socialLinks,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f7fb] text-[#0a1024] dark:bg-[#070c1c] dark:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-35">
        <Image
          alt=""
          className="object-cover"
          fill
          sizes="100vw"
          src="/images/cta-production-basecamp.png"
        />
      </div>
      <div className="absolute inset-0 bg-[#f5f7fb]/88 dark:bg-[#070c1c]/88" />
      <div className="relative mx-auto max-w-7xl px-4 pt-16">
        <div className="mb-12 grid gap-7 rounded-[34px] border border-[#0f172c]/10 bg-white/82 p-6 shadow-[0_24px_90px_rgba(15,23,44,0.12)] backdrop-blur-xl md:grid-cols-[1fr_0.9fr] md:items-center md:p-8 dark:border-white/10 dark:bg-white/[0.06]">
          <div>
            <h2 className="text-3xl font-black tracking-normal">
              Stay updated on UAE filming news.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#647086] dark:text-white/65">
              Get updates on permits, locations, and production logistics.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              aria-label="Email address"
              className="h-12 rounded-full border-[#0f172c]/15 bg-white text-[#0a1024] placeholder:text-[#647086]/70 dark:border-white/15 dark:bg-white/10 dark:text-white dark:placeholder:text-white/40"
              placeholder="Enter your email"
              type="email"
            />
            <Button
              className="h-12 rounded-full bg-[#00a86b] px-7 font-black text-white hover:bg-[#18c987]"
              type="button"
            >
              Subscribe
              <Send className="size-4" />
            </Button>
          </form>
        </div>

        <div className="grid gap-10 pb-10 md:grid-cols-[1.15fr_1fr_0.9fr_1.1fr]">
          <div>
            <Link
              aria-label={`${site.name} home`}
              className="inline-flex max-w-full rounded-2xl bg-white p-3"
              href="/"
            >
              <span className="relative block h-[9rem] w-[13.1rem] sm:h-[10.75rem] sm:w-[15.65rem] lg:h-[12.25rem] lg:w-[17.85rem]">
                <Image
                  alt={site.name}
                  className="object-contain"
                  fill
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 286px"
                  src="/assests/logo.png"
                />
              </span>
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0f172c]/10 bg-white/80 px-4 py-2 text-xs text-[#4a5874] dark:border-white/10 dark:bg-white/5 dark:text-white/80">
              <span className="size-2 rounded-full bg-[#00a86b]" />
              Dubai, UAE
            </div>
          </div>

          <FooterLinks
            title="All Services"
            links={serviceCards.map((service) => ({
              label: service.eyebrow,
              href: service.href,
            }))}
          />

          <FooterLinks
            title="Emirates"
            links={footerEmirates.map((emirate) => ({
              label: emirate,
              href: "/services",
            }))}
          />

          <div>
            <p className="text-sm font-black text-[#0a1024] dark:text-white">Contact Information</p>
            <div className="mt-4 space-y-4 text-sm text-[#4a5874] dark:text-white/78">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 flex-none text-[#00a86b]" />
                <p>{site.address}</p>
              </div>
              <a className="flex items-center gap-3 transition hover:text-[#0a1024] dark:hover:text-white" href={`mailto:${site.email}`}>
                <Mail className="size-4 flex-none text-[#00a86b]" />
                {site.email}
              </a>
              <a className="flex items-center gap-3 transition hover:text-[#0a1024] dark:hover:text-white" href={`tel:${site.phone}`}>
                <Phone className="size-4 flex-none text-[#00a86b]" />
                {site.phone}
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#647086] dark:text-white/55">
                Social Media Links
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-full border border-[#0f172c]/10 bg-white/75 px-3 text-xs font-black text-[#4a5874] transition hover:border-[#00a86b]/40 hover:text-[#00a86b] dark:border-white/10 dark:bg-white/5 dark:text-white/78 dark:hover:text-[#7de8c5]"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0f172c]/10 py-6 dark:border-white/10">
          <div className="flex flex-col gap-3 text-sm text-[#647086] md:flex-row md:items-center md:justify-between dark:text-white/65">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              {footerLegalLinks.map((link) => (
                <Link className="transition hover:text-[#0a1024] dark:hover:text-white" href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  links,
  title,
}: {
  links: Array<{ label: string; href: string }>;
  title: string;
}) {
  return (
    <div>
      <p className="text-sm font-black text-[#0a1024] dark:text-white">{title}</p>
      <ul className="mt-4 space-y-3 text-sm text-[#4a5874] dark:text-white/78">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link className="group inline-flex items-center gap-2 transition hover:text-[#0a1024] dark:hover:text-white" href={link.href}>
              {link.label}
              <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
