import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, Timer } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { RevealSection } from "@/components/motion/reveal-section";
import { PageHero } from "@/components/sections/page-hero";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FilmPermit.ae for UAE filming permits, photography permits, production logistics, equipment support, and on-ground production coordination.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f5f7fb] dark:bg-[#080e1f]">
      <PageHero
        eyebrow="Apply / Contact"
        image="/images/permit-journey.png"
        title="Tell us what you need to film in the UAE."
        description="Send the production essentials once. We will help map the right permit route, support requirements, and next steps."
      />

      <section className="relative overflow-hidden px-6 py-20">
        <Image
          alt=""
          className="absolute inset-0 object-cover opacity-20 dark:opacity-24"
          fill
          sizes="100vw"
          src="/images/production-services.png"
        />
        <div className="absolute inset-0 bg-[#f5f7fb]/86 dark:bg-[#080e1f]/88" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <RevealSection>
            <div className="space-y-6">
           

              <div className="grid gap-4 sm:grid-cols-2">
                <ContactTile icon={<Mail className="size-5" />} label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactTile icon={<Phone className="size-5" />} label="Phone" value={site.phone} href={`tel:${site.phone}`} />
                <ContactTile icon={<MessageCircle className="size-5" />} label="WhatsApp" value="Start a chat" href={`https://wa.me/${site.whatsapp}`} />
                <ContactTile icon={<MapPin className="size-5" />} label="Base" value={site.address} />
              </div>
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <div className="rounded-[26px] border border-[#0f172c]/10 bg-white p-5 shadow-[0_18px_70px_rgba(15,23,44,0.09)] md:p-7 dark:border-white/10 dark:bg-white/[0.05]">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#00a86b] text-white">
                  <Timer className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00a86b]">
                    Production intake
                  </p>
                  <h2 className="text-xl font-black text-[#0a1024] dark:text-white">
                    Project Enquiry
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#647086] dark:text-white/58">
                The form opens your email client with the enquiry details ready
                to send to our team.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}

function ContactTile({
  href,
  icon,
  label,
  value,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const className =
    "group rounded-2xl border border-[#0f172c]/10 bg-white/82 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,44,0.08)] dark:border-white/10 dark:bg-white/[0.06]";
  const content = (
    <>
      <span className="flex size-11 items-center justify-center rounded-xl bg-[#0a1024] text-[#00a86b] dark:bg-[#00a86b] dark:text-white">
        {icon}
      </span>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-[#00a86b]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[#24304a] dark:text-white/72">
        {value}
      </p>
    </>
  );

  return href ? (
    <a className={className} href={href} rel="noreferrer" target={href.startsWith("http") ? "_blank" : undefined}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}
