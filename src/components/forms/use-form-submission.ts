"use client";

import { type FormEvent, useRef, useState } from "react";
import type { FormKind } from "@/lib/form-emails";

export function useFormSubmission(kind: FormKind) {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const inFlight = useRef(false);
  const submission = useRef({ fingerprint: "", id: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    const fingerprint = JSON.stringify(fields);
    if (fingerprint !== submission.current.fingerprint) {
      submission.current = { fingerprint, id: crypto.randomUUID() };
    }
    inFlight.current = true;
    setPending(true);
    setError("");
    setSent(false);
    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, fields, submissionId: submission.current.id }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) throw new Error(result?.error || "Unable to submit your form. Please try again.");
      form.reset();
      submission.current = { fingerprint: "", id: "" };
      setSent(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to submit your form. Please try again.");
    } finally {
      inFlight.current = false;
      setPending(false);
    }
  }

  return { sent, pending, error, handleSubmit, closeSuccess: () => setSent(false) };
}
