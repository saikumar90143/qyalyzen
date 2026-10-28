import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CapabilityHighlights } from "@/components/home/CapabilityHighlights";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { HowWeWork } from "@/components/home/HowWeWork";
import { WhyQualyzen } from "@/components/home/WhyQualyzen";
import { DocumentationSection } from "@/components/home/DocumentationSection";
import { IndustryApplications } from "@/components/home/IndustryApplications";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Qualyzen | Pharmaceutical Validation & Qualification Services",
  description:
    "Qualyzen supports pharmaceutical manufacturers with equipment validation, CSV and PLC validation, Excel spreadsheet validation, equipment qualification support, and structured technical documentation.",
  path: "/",
  keywords: [
    "pharmaceutical equipment validation",
    "CSV validation services",
    "PLC validation",
    "equipment qualification support",
    "Excel spreadsheet validation pharma",
    "computerized system validation",
    "IQ OQ PQ qualification",
    "pharmaceutical validation documentation",
    "GAMP validation India",
    "pharmaceutical engineering support",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CapabilityHighlights />
      <ServicesOverview />
      <ExpertiseSection />
      <HowWeWork />
      <WhyQualyzen />
      <DocumentationSection />
      <IndustryApplications />
      <FaqSection />
      <FinalCta />
    </>
  );
}
