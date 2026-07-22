import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using FilmPermit.ae and requesting UAE filming permit coordination and production support.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Website and Service Terms"
      description={`These terms explain how visitors, clients, agencies, production companies, and suppliers may use ${site.name} and request UAE filming permit coordination or production support.`}
      sections={[
        {
          title: "Using This Website",
          body: [
            "By using this website, you agree to use it lawfully and only for legitimate enquiries related to filming permits, photography permits, production logistics, crew, equipment, locations, customs, drone support, accommodation, and related services.",
            "You must not misuse the website, submit false information, attempt unauthorized access, copy content for misleading purposes, or interfere with the normal operation of the site.",
          ],
        },
        {
          title: "Service Enquiries",
          body: [
            "Submitting a contact form, permit request, email, or message does not automatically create a confirmed engagement. A project becomes active only when scope, responsibilities, fees, timelines, and deliverables are agreed in writing.",
            "Permit requirements, authority processes, costs, approval timelines, and supporting documents can vary by emirate, location, shoot type, equipment, drone use, crew size, and other project details.",
          ],
          bullets: [
            "Project scope must be confirmed before work begins",
            "Authority approvals are subject to applicable rules and review",
            "Client information must be accurate and complete",
            "Timelines depend on project complexity and stakeholder response",
          ],
        },
        {
          title: "Client Responsibilities",
          body: [
            "Clients are responsible for providing accurate project information, final shoot details, usage details, equipment lists, crew information, location requirements, and any documents needed for coordination.",
            "Clients must follow applicable UAE laws, venue rules, permit conditions, safety requirements, and authority instructions during pre-production, production, and wrap.",
          ],
        },
        {
          title: "Content and Intellectual Property",
          body: [
            "Website text, design, images, layout, and branding are provided for informational use and may not be copied, republished, or presented as another company’s material without permission.",
            "Client project materials remain owned by the client or their respective rights holders. We use supplied materials only as needed to understand and support the request.",
          ],
        },
        {
          title: "Limitations",
          body: [
            "The website provides general information and practical coordination support. It does not replace official legal advice, government guidance, authority instructions, or final permit conditions.",
            "We aim to keep information accurate and useful, but requirements may change. Users should verify final requirements for each project before filming.",
          ],
        },
      ]}
    />
  );
}
