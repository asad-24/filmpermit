import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Website Policy",
  description:
    "Website policy for FilmPermit.ae covering content accuracy, acceptable use, communications, third-party services, and service limitations.",
};

export default function PolicyPage() {
  return (
    <LegalPage
      eyebrow="Website Policy"
      title="Our Website and Communication Policy"
      description={`${site.name} provides practical information for productions planning to film in the UAE. This policy explains how our website content, communications, and service information should be understood.`}
      sections={[
        {
          title: "Content Accuracy",
          body: [
            "We write website content to help productions understand common UAE filming permit and production support considerations. The content is informational and may be updated as services, authority expectations, or market practices change.",
            "Because permit requirements can depend on the exact emirate, location, creative use, equipment, drone needs, and production size, website content should not be treated as a final approval checklist.",
          ],
        },
        {
          title: "Acceptable Use",
          body: [
            "Visitors may use the website to learn about services, request support, read articles, and contact the team. Visitors may not use the site for fraudulent submissions, spam, scraping, impersonation, or activity that disrupts the site.",
            "We may ignore, block, or delete requests that appear abusive, misleading, unrelated to production services, or harmful to website security.",
          ],
          bullets: [
            "No spam or fraudulent enquiries",
            "No unauthorized copying of website material",
            "No attempts to bypass security controls",
            "No false representation of project details",
          ],
        },
        {
          title: "Communication Policy",
          body: [
            "When you contact us, we may reply by email, phone, WhatsApp, or another channel you provide. Response times can vary depending on project complexity, availability, weekends, holidays, and the level of detail included in the brief.",
            "A general reply does not guarantee permit approval, service availability, pricing, or production feasibility until the project has been reviewed and confirmed.",
          ],
        },
        {
          title: "Third-Party Services",
          body: [
            "Some production support may involve third-party suppliers, venues, hotels, transport providers, equipment vendors, crew, location representatives, or authority-facing coordination routes.",
            "Third-party availability, rates, timelines, requirements, and terms may change independently of this website.",
          ],
        },
        {
          title: "Policy Updates",
          body: [
            "We may update this policy when the website changes, when services expand, or when operational practices need clearer explanation.",
            "Continued use of the website after updates means you accept the latest version published on this page.",
          ],
        },
      ]}
    />
  );
}
