import type { Metadata } from "next";

import { LegalPage } from "@/components/sections/legal-page";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for FilmPermit.ae, covering personal information, enquiries, cookies, analytics, and data handling.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How We Handle Your Information"
      description={`${site.name} respects the privacy of producers, agencies, location teams, crew, suppliers, and website visitors who contact us about UAE filming permits and production support.`}
      sections={[
        {
          title: "Information We Collect",
          body: [
            "We collect information you choose to share when you submit a permit enquiry, contact form, email, phone request, WhatsApp message, newsletter signup, or production brief.",
            "This may include your name, company, email address, phone number, shoot dates, locations, equipment details, crew size, project type, and other information needed to understand your request.",
          ],
          bullets: [
            "Contact details and company information",
            "Production brief and permit requirements",
            "Technical details for equipment, crew, drone, and logistics",
            "Website usage data such as pages viewed and consent choices",
          ],
        },
        {
          title: "How We Use Information",
          body: [
            "We use your information to respond to enquiries, recommend the right permit path, coordinate requested production support, prepare documentation guidance, and communicate about your project.",
            "We may also use limited website data to improve the site, understand which services visitors are interested in, and keep our content useful for international crews filming in the UAE.",
          ],
          bullets: [
            "Responding to permit and production support enquiries",
            "Planning services such as permits, customs, crew, locations, and transport",
            "Improving website content and service clarity",
            "Sending updates only when you have requested them",
          ],
        },
        {
          title: "Sharing Information",
          body: [
            "When required for a project, we may share relevant details with trusted local partners, production suppliers, location representatives, hotels, transport providers, or authority-facing coordination channels.",
            "We do not sell personal information. We share only what is reasonably needed to respond to your request, support the project, meet legal obligations, or protect our business and users.",
          ],
        },
        {
          title: "Data Retention and Security",
          body: [
            "We keep enquiry and project information only as long as needed for communication, operational records, legal compliance, and service improvement.",
            "We use reasonable administrative and technical safeguards to protect information, but no website, email system, or online transmission can be guaranteed as completely secure.",
          ],
        },
        {
          title: "Your Choices",
          body: [
            "You may request access, correction, or deletion of personal information by contacting us. Some records may need to be retained when required for legal, tax, dispute, or operational reasons.",
            "You can manage browser cookies through your browser settings and review our Cookies page for more detail about consent and website tracking choices.",
          ],
        },
      ]}
    />
  );
}
