import { confirmationEmail, formFields, type FormKind } from "@/lib/form-emails";
import { site } from "@/lib/site-data";
import { isFormMailConfigured, sendFormEmails } from "@/lib/form-mailer";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();
const emailPattern = /^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/;

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = ["https://filmpermit.ae", "https://www.filmpermit.ae"];
  if (process.env.NODE_ENV !== "production") allowedOrigins.push(new URL(request.url).origin);
  if (origin && !allowedOrigins.includes(origin)) {
    return Response.json({ error: "Please submit the form from this website." }, { status: 403 });
  }

  const raw = await request.text();
  if (raw.length > 20000) {
    return Response.json({ error: "Your submission is too long." }, { status: 413 });
  }
  let body;
  try { body = JSON.parse(raw); } catch {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }
  if (!body || !["application", "contact"].includes(body.kind) || !body.fields ||
      typeof body.fields !== "object" || typeof body.submissionId !== "string" ||
      !/^[a-f0-9-]{36}$/i.test(body.submissionId)) {
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  const kind = body.kind as FormKind;
  const fields: Record<string, string> = {};
  for (const field of Object.keys(formFields[kind])) {
    const value = body.fields[field] ?? "";
    if (typeof value !== "string" || value.length > (field === "description" || field === "message" ? 5000 : 300)) {
      return Response.json({ error: "Please shorten your form details." }, { status: 400 });
    }
    fields[field] = value.trim();
  }
  const required = ["name", "email", "phone", kind === "application" ? "projectType" : "message"];
  if (required.some((field) => !fields[field]) || !emailPattern.test(fields.email) ||
      /[\r\n]/.test(fields.name)) {
    return Response.json({ error: "Please provide your name, valid email, phone number, and project details." }, { status: 400 });
  }

  const to = process.env.FORM_EMAIL_TO || site.email;
  if (!isFormMailConfigured()) {
    return Response.json({ error: "Online submissions are temporarily unavailable. Please contact info@filmpermit.ae or call + 971 50 5656 739." }, { status: 503 });
  }

  const now = Date.now();
  for (const [key, entry] of attempts) {
    if (entry.resetAt <= now) attempts.delete(key);
  }
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") || fields.email.toLowerCase();
  const limit = attempts.get(key) || { count: 0, resetAt: now + 10 * 60 * 1000 };
  if (limit.count >= 5) {
    return Response.json({ error: "Too many submissions. Please try again in 10 minutes." }, { status: 429 });
  }
  attempts.set(key, { ...limit, count: limit.count + 1 });

  const confirmation = confirmationEmail(kind, fields.name);
  try {
    await sendFormEmails(`form-${kind}-${body.submissionId}`, [
        {
          to, replyTo: fields.email,
          subject: `${kind === "application" ? "Permit application" : "New production support enquiry"} from ${fields.name}`,
          text: Object.entries(formFields[kind]).map(([field, label]) => `${label}: ${fields[field]}`).join("\n\n"),
        },
        { to: fields.email, replyTo: to, ...confirmation },
      ]);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Form email submission failed:", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: "We could not submit your form. Please try again or contact info@filmpermit.ae." }, { status: 502 });
  }
}
