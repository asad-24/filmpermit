import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

import { site } from "@/lib/site-data";

export function CTA() {
  const whatsappHref = `https://wa.me/${site.whatsapp}`;

  return (
    <section className="relative overflow-hidden bg-[#f5f7fb] px-4 py-14 text-white dark:bg-[#070c1c] sm:px-6 sm:py-24">
      <div className="absolute inset-0">
        <Image
          alt="UAE production basecamp ready for shoot day"
          className="object-cover"
          fill
          sizes="100vw"
          src="/images/cta-production-basecamp.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,21,0.9),rgba(5,9,21,0.62),rgba(5,9,21,0.28))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,168,107,0.3),transparent_24rem)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-7 rounded-3xl border border-white/14 bg-white/[0.08] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6 md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white/84 sm:text-xs sm:tracking-[0.18em]">
              <span className="size-2 rounded-full bg-[#00a86b]" />
              Start your UAE production
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-normal sm:mt-5 sm:text-4xl md:text-6xl">
              Tell Us About Your Production. We’ll Handle the Rest.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
              Share your shoot details and our team will recommend the correct
              permits, production logistics, crew, equipment, and local support.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end md:flex-col md:items-end">
            <Link
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00a86b] px-5 py-3 text-sm font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-xl sm:w-auto sm:px-6 sm:py-4 sm:text-base"
              href="/apply-permit"
            >
              <Mail className="size-4" />
              Apply For A Permit
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[#0a1024] sm:w-auto sm:px-6 sm:py-4 sm:text-base"
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
