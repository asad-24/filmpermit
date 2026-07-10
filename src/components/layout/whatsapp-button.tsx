import { MessageCircle } from "lucide-react";

import { site } from "@/lib/site-data";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I need help with a UAE filming or photography permit."
  );

  return (
    <a
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#0f172c]/30 transition hover:scale-105"
      href={`https://wa.me/${site.whatsapp}?text=${message}`}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
