import { createHash } from "node:crypto";
import nodemailer from "nodemailer";

type FormEmail = { to: string; replyTo: string; subject: string; text: string };
type Delivery = {
  fingerprint: string;
  accepted: number;
  expiresAt: number;
  pending?: Promise<void>;
};

// Prevent duplicate accepted messages on retries within this server process.
const deliveries = new Map<string, Delivery>();

export function isFormMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);
}

export async function sendFormEmails(submissionId: string, messages: FormEmail[]) {
  if (!isFormMailConfigured()) throw new Error("SMTP is not configured");
  const port = Number(process.env.SMTP_PORT || 465);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid SMTP port");
  const from = process.env.FORM_EMAIL_FROM || `Filmpermit.ae Team <${process.env.SMTP_USER}>`;
  const fingerprint = createHash("sha256").update(JSON.stringify({ from, messages })).digest("hex");
  for (const [key, entry] of deliveries) {
    if (!entry.pending && entry.expiresAt <= Date.now()) deliveries.delete(key);
  }
  let delivery = deliveries.get(submissionId);
  if (delivery && delivery.fingerprint !== fingerprint) throw new Error("Submission details changed; please submit again");
  if (!delivery) {
    delivery = { fingerprint, accepted: 0, expiresAt: Date.now() + 24 * 60 * 60 * 1000 };
    deliveries.set(submissionId, delivery);
  }
  if (delivery.pending) return delivery.pending;
  const state = delivery;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    disableFileAccess: true,
    disableUrlAccess: true,
  });
  state.pending = (async () => {
    while (state.accepted < messages.length) {
      const message = messages[state.accepted];
      const result = await transporter.sendMail({ from, ...message });
      if (!result.accepted.some((recipient) => String(recipient).toLowerCase() === message.to.toLowerCase())) {
        throw new Error("SMTP did not accept the message recipient");
      }
      state.accepted += 1;
    }
  })();
  try {
    await state.pending;
  } finally {
    state.pending = undefined;
    transporter.close();
  }
}
