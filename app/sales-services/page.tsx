import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SALES_SERVICES_CONFIG } from "@/lib/config";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Boxes,
  Gauge,
  GraduationCap,
  ArrowRight,
  Info,
  CheckCircle2,
  FileSpreadsheet,
  Headphones,
  CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Sales & Services | Qualyzen",
  description:
    "Explore Qualyzen's auxiliary pharmaceutical sales and technical services—including equipment sourcing support, calibration management documentation, and validation training workshops.",
  path: "/sales-services",
  keywords: [
    "pharmaceutical sales services",
    "pharma equipment sourcing",
    "calibration documentation support",
    "validation training workshops",
    "pharma technical consulting",
  ],
});

export default function SalesServicesHubPage() {
  const { serviceOne, serviceTwo, serviceThree } = SALES_SERVICES_CONFIG;

  const services = [
    {
      icon: <Boxes size={24} />,
      title: serviceOne.title,
      description: serviceOne.shortDescription,
      highlights: serviceOne.benefits.slice(0, 3),
      href: `/sales-services/${serviceOne.slug}`,
    },
    {
      icon: <Gauge size={24} />,
      title: serviceTwo.title,
      description: serviceTwo.shortDescription,
      highlights: serviceTwo.benefits.slice(0, 3),
      href: `/sales-services/${serviceTwo.slug}`,
    },
    {
      icon: <GraduationCap size={24} />,
      title: serviceThree.title,
      description: serviceThree.shortDescription,
      highlights: serviceThree.benefits.slice(0, 3),
      href: `/sales-services/${serviceThree.slug}`,
    },
  ];

  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Auxiliary Solutions"
        headline="Sales & Services"
        subtext="Complementary technical support designed to reinforce pharmaceutical manufacturing readiness—spanning equipment sourcing, calibration governance, and specialized workforce training."
        breadcrumbs={[{ label: "Sales & Services", href: "/sales-services" }]}
        ctaLabel="Enquire Now"
        ctaHref="/contact-us"
        ctaSecondaryLabel="Request a Quote"
        ctaSecondaryHref="/request-quote"
      />

      {/* Intro Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="two-col-grid"
          >
            <div>
              <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
                Complementary Offerings
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.625rem, 2.75vw, 2.25rem)",
                  fontWeight: 800,
                  color: "var(--color-heading)",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                Comprehensive Technical Support Across the Equipment Lifecycle
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Beyond our core validation and computerized system qualification practice, Qualyzen assists
                pharmaceutical manufacturers, QA departments, and engineering teams with vital operational
                services that precede and sustain valid system state.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                From coordinating initial equipment technical specifications to establishing traceability in
                instrument calibration registries and conducting practical team workshops, our auxiliary
                services ensure your facility maintains uncompromised quality standards from procurement
                through routine operation.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>
                    <strong>End-to-End Alignment:</strong> Seamless integration between equipment procurement, calibration records, and validation protocols.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>
                    <strong>Defensible Documentation:</strong> Structured templates, certificate verification, and audit-ready records.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>
                    <strong>Capability Empowerment:</strong> Practical workshops that upskill internal QA, QC, and automation personnel.
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-teal)",
                    flexShrink: 0,
                  }}
                >
                  <Headphones size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
                    Expert Advisory
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    Direct access to experienced validation engineers who assist with equipment scoping, vendor documentation evaluation, and FAT/SAT review.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-teal)",
                    flexShrink: 0,
                  }}
                >
                  <FileSpreadsheet size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
                    Standardized Protocols
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    Pre-tested procedures, instrument master lists, and calibration certificates structured according to GxP traceability standards.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-teal)",
                    flexShrink: 0,
                  }}
                >
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
                    Flexible Scheduling
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    On-site, virtual, or hybrid consulting tailored to your manufacturing shutdown windows and maintenance intervals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Service Cards */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Explore Services
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Our Sales &amp; Auxiliary Services
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Select a service below to explore detailed scope items, multi-step workflows, and practical answers to common questions.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "2rem",
            }}
          >
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder Services Note */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem 2rem",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "var(--radius-md)",
                background: "var(--color-teal-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-teal)",
                flexShrink: 0,
              }}
            >
              <Info size={24} />
            </div>

            <div>
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-heading)",
                  marginBottom: "0.5rem",
                }}
              >
                Configurable Auxiliary Services Notice
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                }}
              >
                The services showcased on this page—<strong>{serviceOne.title}</strong>, <strong>{serviceTwo.title}</strong>, and <strong>{serviceThree.title}</strong>—are modular service templates configured via Qualyzen&apos;s central site configuration (<code>lib/config.ts</code>).
              </p>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-muted)",
                  lineHeight: 1.6,
                }}
              >
                Specific titles, operational scopes, process phases, and FAQs can be tailored or renamed to reflect your facility&apos;s evolving service line without requiring code restructuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py" style={{ background: "var(--color-bg)", textAlign: "center" }}>
        <div className="container-site" style={{ maxWidth: "700px" }}>
          <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
            Get Started
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: "var(--color-heading)",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Discuss a Custom Support Package
          </h2>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-body)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Have questions about equipment procurement coordination, calibration master schedules, or on-site validation workshops? Reach out to our technical team today.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact-us" className="btn-primary">
              Contact Qualyzen
              <ArrowRight size={16} />
            </Link>
            <Link href="/request-quote" className="btn-secondary">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <FinalCta />

      <style>{`
        @media (max-width: 768px) {
          .two-col-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}
