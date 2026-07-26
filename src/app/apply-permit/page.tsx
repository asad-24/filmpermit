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
    <main className="bg-white px-6 pb-20 pt-28 text-[#070c1f] md:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.58fr] lg:items-start">
        <div>
          <h1 className="text-3xl font-black tracking-normal md:text-4xl">
            Begin Your Application
          </h1>
          <div className="mt-10 max-w-3xl">
            <PermitApplicationForm />
          </div>
        </div>

        <aside className="rounded-2xl bg-[#f0f2f8] p-6 md:p-7 lg:sticky lg:top-32">
          <h2 className="text-xl font-black tracking-normal">Prefer to Talk First?</h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-[#6d7c96]">
            Our team is ready to answer your questions and help you plan your
            production.
          </p>

          <a
            className="mt-7 inline-flex h-14 w-full items-center justify-center gap-4 rounded-xl border-2 border-[#070c1f] px-6 text-sm font-black text-[#070c1f] transition hover:-translate-y-0.5 hover:bg-[#070c1f] hover:text-white"
            href={`https://wa.me/${site.whatsapp}`}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="size-6" />
            Contact Our Team
          </a>

          <div className="my-7 h-px bg-[#cbd4e5]" />

          <Link
            className="inline-flex items-center gap-3 text-base font-bold text-[#53637f] transition hover:text-[#070c1f]"
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
