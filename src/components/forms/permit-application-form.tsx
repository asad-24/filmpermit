"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { Calendar, Send } from "lucide-react";

import { site } from "@/lib/site-data";

const fieldClass =
  "h-[60px] w-full rounded-xl border border-[#c8d3e6] bg-[#f3f5fa] px-5 text-base text-[#0a1024] outline-none transition placeholder:text-[#9ba9c1] focus:border-[#0a1024] focus:ring-3 focus:ring-[#0a1024]/10";

export function PermitApplicationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const company = String(form.get("company") ?? "");
    const projectType = String(form.get("projectType") ?? "");
    const locations = String(form.get("locations") ?? "");
    const startDate = String(form.get("startDate") ?? "");
    const endDate = String(form.get("endDate") ?? "");
    const crewSize = String(form.get("crewSize") ?? "");
    const description = String(form.get("description") ?? "");

    const subject = encodeURIComponent(`Permit application from ${name}`);
    const body = encodeURIComponent(
      [
        `Full Name: ${name}`,
        `Email Address: ${email}`,
        `Phone Number: ${phone}`,
        `Company Name: ${company}`,
        `Project Type: ${projectType}`,
        `Desired Filming Locations: ${locations}`,
        `Start Date: ${startDate}`,
        `End Date: ${endDate}`,
        `Crew Size: ${crewSize}`,
        "",
        "Project Description:",
        description,
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="grid gap-7" onSubmit={handleSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name *">
          <input className={fieldClass} name="name" placeholder="John Smith" required />
        </Field>
        <Field label="Email Address *">
          <input
            className={fieldClass}
            name="email"
            placeholder="john@company.com"
            required
            type="email"
          />
        </Field>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Phone Number *">
          <input className={fieldClass} name="phone" placeholder="+971 50 123 4567" required />
        </Field>
        <Field label="Company Name">
          <input className={fieldClass} name="company" placeholder="Production Company Ltd" />
        </Field>
      </div>

      <Field label="Project Type *">
        <select className={`${fieldClass} appearance-none`} name="projectType" required>
          <option value="">Select project type</option>
          <option>Commercial / Brand Film</option>
          <option>Documentary</option>
          <option>Corporate Video</option>
          <option>Photography Shoot</option>
          <option>Music Video</option>
          <option>Social / Creator Content</option>
          <option>Feature / TV Production</option>
        </select>
      </Field>

      <Field label="Desired Filming Locations *">
        <input
          className={fieldClass}
          name="locations"
          placeholder="e.g., Dubai Marina, Desert, Heritage Village"
          required
        />
      </Field>

      <div className="grid gap-6 md:grid-cols-3">
        <Field label="Start Date *">
          <DateLikeInput name="startDate" required />
        </Field>
        <Field label="End Date *">
          <DateLikeInput name="endDate" required />
        </Field>
        <Field label="Crew Size">
          <input className={fieldClass} inputMode="numeric" name="crewSize" placeholder="e.g., 25" />
        </Field>
      </div>

      <Field label="Project Description *">
        <textarea
          className="min-h-44 w-full rounded-xl border border-[#c8d3e6] bg-[#f3f5fa] px-5 py-4 text-base leading-7 text-[#0a1024] outline-none transition placeholder:text-[#9ba9c1] focus:border-[#0a1024] focus:ring-3 focus:ring-[#0a1024]/10"
          name="description"
          placeholder="Tell us about your project, specific requirements, or any questions you have..."
          required
        />
      </Field>

      <button
        className="inline-flex h-[68px] w-full items-center justify-center gap-4 rounded-xl bg-[#070c1f] px-6 text-lg font-black text-white transition hover:-translate-y-0.5 hover:bg-[#101936] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#070c1f]/25"
        type="submit"
      >
        Submit Application
        <Send className="size-5" />
      </button>

      {sent ? (
        <p className="text-sm font-semibold text-[#00a86b]">
          Your email client has been opened with the application details.
        </p>
      ) : null}
    </form>
  );
}

function Field({ children, label }: { children: ReactNode; label: string }) {
  return (
    <label className="grid gap-3 text-[15px] font-semibold text-[#070c1f]">
      {label}
      {children}
    </label>
  );
}

function DateLikeInput({ name, required }: { name: string; required?: boolean }) {
  return (
    <div className="relative">
      <input
        className={`${fieldClass} pr-12`}
        inputMode="numeric"
        name={name}
        placeholder="dd/mm/yyyy"
        required={required}
      />
      <Calendar className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-[#070c1f]" />
    </div>
  );
}
