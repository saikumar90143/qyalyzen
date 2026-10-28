import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles, CheckSquare, Layers } from "lucide-react";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { AccordionFaq } from "@/components/shared/AccordionFaq";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FinalCta } from "@/components/home/FinalCta";
import { SALES_SERVICES_CONFIG } from "@/lib/config";

const service = SALES_SERVICES_CONFIG.serviceThree;

export const metadata: Metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/sales-services/service-three",
});

export default function ServiceThreePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              service.title,
              service.shortDescription,
              "/sales-services/service-three"
            )
          ),
        }}
      />

      <PageHero
        eyebrow="Sales & Services"
        headline={service.heroHeadline}
        subtext={service.heroSubtext}
        breadcrumbs={[
          { label: "Sales & Services", href: "/sales-services" },
          { label: service.title, href: "/sales-services/service-three" },
        ]}
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Us"
        ctaSecondaryHref="/contact-us"
      />

      {/* Placeholder Notice */}
      <div
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-border)",
          padding: "1rem 0",
        }}
      >
        <div className="container-site">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "rgba(19, 168, 158, 0.08)",
              border: "1px dashed var(--color-teal)",
              borderRadius: "var(--radius-md)",
              padding: "0.875rem 1.25rem",
              color: "var(--color-heading)",
              fontSize: "var(--text-sm)",
              lineHeight: 1.5,
            }}
          >
            <AlertCircle
              size={20}
              color="var(--color-teal)"
              style={{ flexShrink: 0 }}
            />
            <span>
              <strong>[PLACEHOLDER]</strong> Service details to be updated when
              actual service information is provided. Contact Qualyzen to discuss
              requirements.
            </span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="two-col-grid"
          >
            <div>
              <span
                className="section-label"
                style={{ marginBottom: "0.75rem", display: "inline-flex" }}
              >
                Overview
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "var(--color-heading)",
                  marginBottom: "1.25rem",
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {service.overview}
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/request-quote" className="btn-primary">
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact-us"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-heading)",
                    fontWeight: 600,
                    fontSize: "var(--text-sm)",
                    background: "var(--color-bg)",
                  }}
                >
                  Speak with an Expert
                </Link>
              </div>
            </div>

            {/* Overview Sidebar Card */}
            <div>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Sparkles size={20} color="var(--color-teal)" />
                  <h3
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      margin: 0,
                    }}
                  >
                    Key Highlights
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-body)",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {service.shortDescription}
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color="var(--color-teal)"
                        style={{ flexShrink: 0, marginTop: "0.2rem" }}
                      />
                      <span
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-heading)",
                          fontWeight: 500,
                        }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              className="section-label"
              style={{
                marginBottom: "0.75rem",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              Why Choose Qualyzen
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.75rem",
              }}
            >
              Key Benefits & Capabilities
            </h2>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--color-body)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Upskill technical and QA staff with real-world case studies, protocol
              preparation workshops, and data integrity fundamentals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal-dark)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckSquare size={18} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      marginBottom: "0.375rem",
                    }}
                  >
                    {benefit}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-body)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Supported with technical review, transparent communication, and
                    validation readiness.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Service Cards */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              className="section-label"
              style={{
                marginBottom: "0.75rem",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              Service Coverage
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.75rem",
              }}
            >
              Scope of Service
            </h2>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--color-body)",
                maxWidth: "580px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Specific technical activities and deliverables included within this service
              offering:
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {service.scope.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all var(--transition-base)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      background: "var(--color-teal-muted)",
                      color: "var(--color-teal-dark)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 700,
                      marginBottom: "1rem",
                    }}
                  >
                    Scope Item {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-body)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Defined in alignment with project specifications and verified against
                    quality benchmarks.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1.25rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                    color: "var(--color-teal)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                  }}
                >
                  <Layers size={14} /> Included in Engagement
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              className="section-label"
              style={{
                marginBottom: "0.75rem",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              Methodology
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.75rem",
              }}
            >
              Execution Process
            </h2>
            <p
              style={{
                fontSize: "var(--text-base)",
                color: "var(--color-body)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A systematic 5-stage framework guiding each engagement from initial scoping
              to final handover.
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <ProcessSteps steps={[...service.processSteps]} variant="vertical" />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site" style={{ maxWidth: "780px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span
              className="section-label"
              style={{
                marginBottom: "0.75rem",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              Questions & Answers
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.5rem",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-body)",
              }}
            >
              Common inquiries regarding this service scope and coordination process.
            </p>
          </div>

          <AccordionFaq items={[...service.faqs]} />

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/request-quote" className="btn-primary">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />

      <style>{`
        .two-col-grid {
          @media (max-width: 1023px) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
