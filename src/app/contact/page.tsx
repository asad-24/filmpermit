import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact FilmPermit.ae for UAE filming permits, photography permits, production logistics, equipment support, and on-ground production coordination.",
};

export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I want to apply for a UAE filming or photography permit."
  );

  return (
    <main className="bg-[#f5f7fb] dark:bg-[#0f172c]">
      <section className="bg-[#0f172c] px-6 pb-16 pt-40 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9fb8ff]">
            Contact
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-normal md:text-6xl">
            Tell us what you need to film in the UAE.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/68">
            Send dates, locations, crew size, equipment, drone requirements, and
            deadlines. We will help map the right permit and support plan.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-lg border border-[#0f172c]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="text-2xl font-black text-[#0a1024] dark:text-white">
                Company Details
              </h2>
              <div className="mt-6 grid gap-4 text-sm text-[#4a5874] dark:text-white/62">
                <a
                  className="flex items-center gap-3 hover:text-[#0a1024] dark:hover:text-white"
                  href={`mailto:${site.email}`}
                >
                  <Mail className="size-5 text-[#8490a8] dark:text-[#9fb8ff]" />
                  {site.email}
                </a>
                <a
                  className="flex items-center gap-3 hover:text-[#0a1024] dark:hover:text-white"
                  href={`tel:${site.phone}`}
                >
                  <Phone className="size-5 text-[#8490a8] dark:text-[#9fb8ff]" />
                  {site.phone}
                </a>
                <span className="flex items-center gap-3">
                  <MapPin className="size-5 text-[#8490a8] dark:text-[#9fb8ff]" />
                  {site.address}
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-[#0f172c] p-6 text-white">
              <h2 className="text-2xl font-black">Apply for a Permit</h2>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Need permit help urgently? Start on WhatsApp and include your
                production date, location, and content type.
              </p>
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-6 bg-white text-[#0a1024] hover:bg-[#dbe7ff]"
                )}
                href={`https://wa.me/${site.whatsapp}?text=${whatsappMessage}`}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle className="size-4" />
                Apply on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-[#0f172c]/10 bg-white p-6 shadow-sm md:p-8 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="text-2xl font-black text-[#0a1024] dark:text-white">
              Project Enquiry
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#647086] dark:text-white/58">
              The form opens your email client with the enquiry details ready to
              send to our team.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
