import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

import { site } from "@/lib/site-data";

export function CTA() {
  const whatsappHref = `https://wa.me/${site.whatsapp}`;

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-6 py-24 text-white dark:bg-[#070c1c]">
      <div className="absolute inset-0">
        <Image
          alt="UAE production basecamp ready for shoot day"
          className="object-cover"
          fill
          sizes="100vw"
          src="/images/cta-production-basecamp.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,21,0.9),rgba(5,9,21,0.62),rgba(5,9,21,0.28))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,109,246,0.3),transparent_24rem)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[36px] border border-white/14 bg-white/[0.08] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/84">
              <span className="size-2 rounded-full bg-[#2f6df6]" />
              Let’s plan your shoot
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Send the brief. We’ll map the permit path.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-white/72">
              Tell us your shoot dates, locations, crew size, equipment, and
              deadlines. We will help you choose the right approval and support
              route.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end md:flex-col md:items-end">
            <Link
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6df6] px-6 py-4 font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#5b8cff] hover:shadow-xl sm:w-auto"
              href="/contact?type=permit"
            >
              <Mail className="size-4" />
              Apply for Permit
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white hover:text-[#0a1024] sm:w-auto"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4 opacity-90" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-white/58 md:text-right">
              Typical response time: same business day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
