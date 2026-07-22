"use client";

import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { useEffect, useState } from "react";

const consentKey = "filmpermit_cookie_consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored =
        window.localStorage.getItem(consentKey) ||
        document.cookie
          .split("; ")
          .find((item) => item.startsWith(`${consentKey}=`))
          ?.split("=")[1];

      setVisible(stored !== "accepted");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function acceptCookies() {
    window.localStorage.setItem(consentKey, "accepted");
    document.cookie = `${consentKey}=accepted; max-age=15552000; path=/; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-4 z-[70] mx-auto max-w-3xl rounded-[26px] border border-[#0f172c]/10 bg-white/94 p-4 text-[#0a1024] shadow-[0_22px_90px_rgba(15,23,44,0.2)] ring-1 ring-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111f]/94 dark:text-white sm:bottom-5 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex size-11 flex-none items-center justify-center rounded-2xl bg-[#00a86b]/12 text-[#00a86b]">
          <Cookie className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black">We use cookies</p>
          <p className="mt-1 text-xs leading-6 text-[#647086] dark:text-white/64 sm:text-sm">
            We use essential cookies and consent storage to keep the website
            working and improve the experience for UAE production enquiries.
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs font-bold text-[#00a86b]">
            <Link className="hover:underline" href="/cookies">
              Cookies Policy
            </Link>
            <Link className="hover:underline" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex flex-none items-center gap-2">
          <button
            aria-label="Dismiss cookie notice"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#0f172c]/10 text-[#647086] transition hover:bg-[#0f172c]/6 hover:text-[#0a1024] dark:border-white/10 dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
            onClick={() => setVisible(false)}
            type="button"
          >
            <X className="size-4" />
          </button>
          <button
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#00a86b] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#18c987] hover:shadow-lg"
            onClick={acceptCookies}
            type="button"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
