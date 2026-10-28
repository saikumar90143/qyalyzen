import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteFormSection } from "@/components/quote/QuoteFormSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote | Qualyzen",
  description:
    "Request a tailored validation proposal from Qualyzen. Tell us about your pharmaceutical equipment, computerized systems, or documentation scoping requirements.",
  path: "/request-quote",
  keywords: [
    "Request a validation quote",
    "pharma CSV pricing",
    "equipment qualification cost",
    "spreadsheet validation quote",
    "validation consulting scoping",
  ],
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Transparent Scoping & Pricing"
        headline="Request a Validation Quote"
        subtext="Tell us about your equipment, computerized system, or regulatory documentation requirements. Our validation engineers will discuss project scope and deliver a structured quotation."
        breadcrumbs={[{ label: "Request a Quote", href: "/request-quote" }]}
      />

      <QuoteFormSection />

      <FinalCta />
    </>
  );
}
