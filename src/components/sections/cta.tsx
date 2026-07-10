import Link from "next/link";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

import { site } from "@/lib/site-data";

export function CTA() {
  const whatsappHref = `https://wa.me/${site.whatsapp}`;

  return (
    <section className="navy-glow bg-[#0f172c] px-6 py-16 text-white">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.8)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black text-white/90">
              <span className="size-2 rounded-full bg-[#2f6df6]" />
              Let’s plan your shoot
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Ready to start your UAE production?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-white/75">
              Tell us your shoot dates, locations, crew size, equipment, and
              deadlines. We will help you choose the right permit and support
              path.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end md:flex-col md:items-end">
            <Link
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f6df6] px-5 py-3 font-black text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#5b8cff] hover:shadow-xl sm:w-auto"
              href="/contact?type=permit"
            >
              <Mail className="size-4" />
              Apply for Permit
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-black text-white transition hover:bg-white/10 sm:w-auto"
              href={whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="size-4 opacity-90" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-white/60 md:text-right">
              Typical response time: same business day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
