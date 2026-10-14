export type FormKind = "application" | "contact";

export const formFields = {
  application: {
    name: "Full Name", email: "Email Address", phone: "Phone Number",
    company: "Company Name", projectType: "Project Type", locations: "Desired Filming Locations",
    startDate: "Start Date", endDate: "End Date", crewSize: "Crew Size", description: "Project Description",
  },
  contact: {
    name: "Name", email: "Email", phone: "Phone", service: "Service", message: "Project Details",
  },
};

export function confirmationEmail(kind: FormKind, name: string) {
  const greeting = `Dear ${name},`;
  const signature = "Kind regards,\nFilmpermit.ae Team";

  return kind === "application"
    ? {
        subject: "Your filming permit application has been received",
        text: `${greeting}\n\nThank you for submitting your filming permit application. We confirm that your application has been successfully received and is currently under review by our team.\n\nOur team will carefully evaluate the information provided. If additional details or documents are required, we will contact you using the email address or phone number you provided.\n\n${signature}`,
      }
    : {
        subject: "Thank you for contacting Filmpermit.ae",
        text: `${greeting}\n\nThank you for contacting Filmpermit.ae\n\nOur team will get in touch with you as soon as possible using the email address or phone number you have provided.\n\n${signature}`,
      };
}
