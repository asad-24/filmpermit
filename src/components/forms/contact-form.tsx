"use client";

import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormSubmission } from "@/components/forms/use-form-submission";

export function ContactForm() {
  const { sent, pending, error, handleSubmit } = useFormSubmission("contact");

  return (
    <form aria-busy={pending} className="grid gap-4" onSubmit={handleSubmit}>
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
            required
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
          required
        />
      </label>
      <Button className="h-12 w-full rounded-full bg-[#00a86b] px-7 font-black text-white hover:bg-[#18c987] sm:w-fit" disabled={pending} type="submit">
        {pending ? "Submitting..." : "Submit"}
        <Send className="size-4" />
      </Button>
      {sent ? (
        <p role="status" className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          Thank you for contacting Filmpermit.ae. Our team will get in touch with you as soon as possible.
        </p>
      ) : null}
      {error ? <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-400">{error}</p> : null}
    </form>
  );
}
