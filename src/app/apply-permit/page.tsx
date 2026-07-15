import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { PermitApplicationForm } from "@/components/forms/permit-application-form";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apply for a Filming Permit",
  description:
    "Begin your UAE filming permit application with production dates, locations, crew size, and project requirements.",
};

export default function ApplyPermitPage() {
  return (
    <main className="bg-white px-6 pb-24 pt-32 text-[#070c1f] md:pt-36">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-black tracking-normal md:text-5xl">
            Begin Your Application
          </h1>
          <div className="mt-10 max-w-3xl">
            <PermitApplicationForm />
          </div>
        </div>

        <aside className="rounded-2xl bg-[#f0f2f8] p-7 md:p-9 lg:sticky lg:top-32">
          <h2 className="text-2xl font-black tracking-normal">Prefer to Talk First?</h2>
          <p className="mt-7 max-w-sm text-lg leading-8 text-[#9aa7bf]">
            Our team is ready to answer your questions and help you plan your
            production.
          </p>

          <a
            className="mt-9 inline-flex h-16 w-full items-center justify-center gap-5 rounded-xl border-2 border-[#070c1f] px-6 text-base font-black text-[#070c1f] transition hover:-translate-y-0.5 hover:bg-[#070c1f] hover:text-white"
            href={`https://wa.me/${site.whatsapp}`}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="size-6" />
            Contact Our Team
          </a>

          <div className="my-9 h-px bg-[#cbd4e5]" />

          <Link
            className="inline-flex items-center gap-4 text-lg font-bold text-[#53637f] transition hover:text-[#070c1f]"
            href="/faq"
          >
            View Frequently Asked Questions
            <ArrowRight className="size-5" />
          </Link>
        </aside>
      </section>
    </main>
  );
}
