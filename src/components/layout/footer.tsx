import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navItems, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="navy-glow bg-[#0f172c] text-white">
      <div className="relative mx-auto max-w-6xl px-4 pt-14">
        <div className="mb-12 rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <h2 className="text-2xl font-black tracking-normal">
            Stay Updated on UAE Filming News
          </h2>
          <p className="mt-3 text-sm text-white/65">
            Get updates on permits, locations, and production logistics.
          </p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              aria-label="Email address"
              className="h-11 rounded-xl border-white/15 bg-white/10 text-white placeholder:text-white/40"
              placeholder="Enter your email"
              type="email"
            />
            <Button
              className="h-11 rounded-xl bg-[#2f6df6] px-6 font-black text-white hover:bg-[#5b8cff]"
              type="button"
            >
              Subscribe
              <Send className="size-4" />
            </Button>
          </form>
        </div>

        <div className="grid gap-10 pb-10 md:grid-cols-[1.35fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <Link className="inline-flex items-center gap-3" href="/">
              <Image
                alt={site.name}
                className="h-16 w-auto rounded-lg object-contain"
                height={1024}
                src="/assests/logo.png"
                width={1536}
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
              Your trusted partner for UAE filming permits, photography permits,
              production logistics, crew, equipment, and on-ground support.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span className="size-2 rounded-full bg-[#2f6df6]" />
              Dubai, UAE
            </div>
          </div>

          <FooterLinks title="Quick Links" links={navItems.map((item) => ({ label: item.label, href: item.href }))} />

          <FooterLinks
            title="Services"
            links={[
              { label: "Filming Permits", href: "/services#permits" },
              { label: "Customs Clearance", href: "/services#customs-clearance" },
              { label: "Crew Hire", href: "/services#crew-hire" },
              { label: "Equipment Rental", href: "/services#equipment-rental" },
            ]}
          />

          <div>
            <p className="text-sm font-black text-white">Contact Info</p>
            <div className="mt-4 space-y-4 text-sm text-white/78">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 flex-none text-[#2f6df6]" />
                <p>{site.address}</p>
              </div>
              <a className="flex items-center gap-3 transition hover:text-white" href={`mailto:${site.email}`}>
                <Mail className="size-4 flex-none text-[#2f6df6]" />
                {site.email}
              </a>
              <a className="flex items-center gap-3 transition hover:text-white" href={`tel:${site.phone}`}>
                <Phone className="size-4 flex-none text-[#2f6df6]" />
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-3 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link className="transition hover:text-white" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="transition hover:text-white" href="/terms">
                Terms
              </Link>
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
      <p className="text-sm font-black text-white">{title}</p>
      <ul className="mt-4 space-y-3 text-sm text-white/78">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <Link className="group inline-flex items-center gap-2 transition hover:text-white" href={link.href}>
              {link.label}
              <ArrowUpRight className="size-4 opacity-0 transition group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
