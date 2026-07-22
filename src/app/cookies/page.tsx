import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Cookies policy for FilmPermit.ae, including essential cookies, analytics, consent storage, and browser controls.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies Policy"
      title="How Cookies Support This Website"
      description={`${site.name} uses cookies and similar browser storage to remember choices, improve website performance, and understand how visitors use our UAE filming permit and production support pages.`}
      sections={[
        {
          title: "What Cookies Are",
          body: [
            "Cookies are small text files stored by your browser. Similar technologies, such as localStorage, can also remember choices made on a website.",
            "They help websites work reliably, remember preferences, measure performance, and improve the experience for returning visitors.",
          ],
        },
        {
          title: "Cookies We May Use",
          body: [
            "We use essential cookies or browser storage for basic website functions such as theme preferences, admin sessions, and cookie consent choices.",
            "We may use analytics or performance tools to understand which pages visitors use, which services are most relevant, and how the website can be improved.",
          ],
          bullets: [
            "Essential cookies for site operation and consent storage",
            "Preference storage for display and experience choices",
            "Analytics data for page performance and visitor flow",
            "Security-related cookies for protected admin areas",
          ],
        },
        {
          title: "Cookie Consent",
          body: [
            "When you accept cookies on this website, your choice is stored so the banner does not keep appearing on future visits.",
            "If you clear your browser data, use another device, or change browser settings, the banner may appear again.",
          ],
        },
        {
          title: "Managing Cookies",
          body: [
            "You can control or delete cookies through your browser settings. Blocking some cookies may affect preferences, saved consent, admin access, or website behavior.",
            "Most browsers let you clear cookies for one website, block third-party cookies, or delete all stored site data.",
          ],
        },
        {
          title: "Updates",
          body: [
            "We may update this Cookies Policy if website features, analytics tools, or consent practices change.",
            "The latest version will always be published on this page with the current update date.",
          ],
        },
      ]}
    />
  );
}
