import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Qualyzen",
  description:
    "Contact Qualyzen for pharmaceutical validation consulting, CSV & PLC qualification, GxP spreadsheet verification, and technical documentation inquiries.",
  path: "/contact-us",
  keywords: [
    "Contact Qualyzen",
    "pharmaceutical validation contact",
    "CSV enquiry",
    "equipment qualification consulting",
    "pharma compliance support",
  ],
});

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Get In Touch"
        headline="Contact Qualyzen"
        subtext="Discuss your validation requirements, computerized system assessments, or technical documentation needs with our pharmaceutical compliance team."
        breadcrumbs={[{ label: "Contact Us", href: "/contact-us" }]}
      />

      <ContactFormSection />

      <FinalCta />
    </>
  );
}
