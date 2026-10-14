"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";

export function ApplicationSuccessDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby="application-success-title"
      aria-describedby="application-success-description"
      onCancel={onClose}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[560px] overflow-y-auto rounded-[22px] border-0 bg-white p-6 text-[#070c1f] shadow-2xl backdrop:bg-black/50 sm:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[#00a86b]">
          <CircleCheck className="size-7" />
        </span>
        <h2 id="application-success-title" className="text-xl font-bold tracking-tight sm:text-2xl">
          Application Submitted Successfully
        </h2>
      </div>
      <p id="application-success-description" className="mt-5 text-base leading-7 text-[#647086]">
        Our team will contact you within 24 hours to discuss your project. In the meantime, you can explore our services or read through our frequently asked questions.
      </p>
      <div className="mt-7 grid gap-4">
        <Link href="/services" className="inline-flex h-14 items-center justify-center gap-5 rounded-xl bg-[#070c1f] px-4 font-bold text-white transition hover:bg-[#101936]">
          View Our Services <ArrowRight className="size-5" />
        </Link>
        <Link href="/faq" className="inline-flex h-14 items-center justify-center gap-5 rounded-xl border-2 border-[#070c1f] px-4 font-bold transition hover:bg-slate-50">
          View FAQ <ArrowRight className="size-5" />
        </Link>
        <button autoFocus className="mt-1 h-12 rounded-xl font-bold hover:bg-slate-50" onClick={onClose} type="button">
          Close
        </button>
      </div>
    </dialog>
  );
}
