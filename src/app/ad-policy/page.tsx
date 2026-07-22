import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ad Policy",
  description:
    "Advertising and promotional content policy for FilmPermit.ae, covering truthful claims, sponsored content, partner mentions, and enquiry expectations.",
};

export default function AdPolicyPage() {
  return (
    <LegalPage
      eyebrow="Ad Policy"
      title="Advertising and Promotional Content Policy"
      description={`${site.name} may publish service descriptions, promotional content, production guidance, and partner references. This policy explains how advertising and promotional claims should be understood.`}
      sections={[
        {
          title: "Truthful Service Promotion",
          body: [
            "We aim to describe our UAE filming permit coordination and production support services clearly and accurately. Promotional copy is intended to help visitors understand the type of support available.",
            "Any claim about permits, timelines, locations, equipment, drone support, or production logistics should be read in context. Final requirements depend on the details of each project and any relevant authority or supplier conditions.",
          ],
        },
        {
          title: "No Guaranteed Approvals",
          body: [
            "Advertising, website copy, service pages, or campaign material must not be interpreted as a guarantee that a filming permit, drone approval, location access, customs clearance, or supplier booking will be approved.",
            "We can coordinate, guide, and support the process, but approvals and third-party availability depend on the applicable stakeholders and requirements.",
          ],
          bullets: [
            "No guarantee of government or authority approval",
            "No guarantee of location availability",
            "No guarantee of supplier rates until confirmed",
            "No guarantee of timelines without project review",
          ],
        },
        {
          title: "Sponsored or Partner Content",
          body: [
            "If we publish sponsored content, partner features, or supplier references, we aim to present them transparently and avoid misleading visitors about the nature of the relationship.",
            "Partner or supplier mentions do not mean every supplier is available for every project, nor do they replace project-specific quotes, agreements, or operational checks.",
          ],
        },
        {
          title: "Use of Images and Examples",
          body: [
            "Images, examples, and service descriptions may be illustrative. They are used to communicate production categories such as permits, locations, crew, equipment, transport, accommodation, customs, and drone support.",
            "A visual example does not confirm availability of a specific location, crew member, item of equipment, permit route, or production outcome.",
          ],
        },
        {
          title: "Reporting Concerns",
          body: [
            "If you believe any promotional statement on this website is unclear, outdated, or misleading, contact us so we can review and update the material where appropriate.",
            "We may revise advertising, service descriptions, or policy wording as our website, services, and communication practices evolve.",
          ],
        },
      ]}
    />
  );
}
