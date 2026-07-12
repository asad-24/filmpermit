"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { site } from "@/lib/site-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const service = String(form.get("service") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`New production support enquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Service: ${service}`,
        "",
        "Project Details:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-[#24304a] dark:text-white/75">
          Full name
          <Input
            className="h-12 rounded-2xl bg-[#f5f7fb] dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            name="name"
            placeholder="Your name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#24304a] dark:text-white/75">
          Email
          <Input
            className="h-12 rounded-2xl bg-[#f5f7fb] dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-[#24304a] dark:text-white/75">
          Phone / WhatsApp
          <Input
            className="h-12 rounded-2xl bg-[#f5f7fb] dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            name="phone"
            placeholder="+971 ..."
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#24304a] dark:text-white/75">
          Service needed
          <select
            className="h-12 rounded-2xl border border-input bg-[#f5f7fb] px-3 text-sm outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            name="service"
          >
            <option>Apply for a permit</option>
            <option>Production support</option>
            <option>Equipment customs clearance</option>
            <option>Crew hire</option>
            <option>Equipment rental</option>
            <option>Full UAE production support</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-black text-[#24304a] dark:text-white/75">
        Project details
        <textarea
          className="min-h-40 rounded-2xl border border-input bg-[#f5f7fb] px-4 py-4 text-sm outline-none transition placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
          name="message"
          placeholder="Shoot dates, locations, crew size, equipment, drone use, and any urgent deadlines."
          required
        />
      </label>
      <Button className="h-12 w-full rounded-full bg-[#2f6df6] px-7 font-black text-white hover:bg-[#5b8cff] sm:w-fit" type="submit">
        Send Enquiry
        <Send className="size-4" />
      </Button>
      {sent ? (
        <p className="text-sm font-medium text-emerald-700">
          Your email client has been opened with the enquiry details.
        </p>
      ) : null}
    </form>
  );
}
