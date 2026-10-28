import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  AlertTriangle,
  Scale,
  ShieldAlert,
  HelpCircle,
  Building2,
  Clock,
  Compass,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Qualyzen",
  description:
    "Terms and conditions governing the use of the Qualyzen website and validation support services.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        variant="light"
        eyebrow="Legal & Governance"
        headline="Terms & Conditions"
        subtext="Terms governing website access, service quotations, and engagement boundaries for Qualyzen validation support services."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms-and-conditions" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site" style={{ maxWidth: "860px" }}>
          {/* Metadata Card: Last Updated and Jurisdiction Notice */}
          <div
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem",
              marginBottom: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-teal-dark)",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
              }}
            >
              <Clock size={16} />
              <span>Effective / [Last Updated: DD Month YYYY]</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                background: "rgba(19, 168, 158, 0.08)",
                border: "1px dashed var(--color-teal)",
                borderRadius: "var(--radius-md)",
                padding: "0.75rem 1rem",
                fontSize: "var(--text-xs)",
                color: "var(--color-body)",
                lineHeight: 1.5,
              }}
            >
              <Compass
                size={16}
                color="var(--color-teal)"
                style={{ flexShrink: 0, marginTop: "0.15rem" }}
              />
              <span>
                <strong>Legal Notice:</strong> These terms contain baseline general
                terms and placeholders for jurisdiction-specific legal provisions.
                Specific master services agreements (MSAs) or statements of work (SOWs)
                executed with clients take precedence over website terms where indicated.
              </span>
            </div>
          </div>

          {/* CRITICAL REGULATORY DISCLAIMER CALLOUT */}
          <div
            style={{
              background: "#fffbeb",
              border: "2px solid #f59e0b",
              borderRadius: "var(--radius-lg)",
              padding: "1.5rem 1.75rem",
              marginBottom: "2.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <AlertTriangle
              size={24}
              color="#d97706"
              style={{ flexShrink: 0, marginTop: "0.2rem" }}
            />
            <div>
              <h3
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 800,
                  color: "#92400e",
                  marginBottom: "0.5rem",
                }}
              >
                Important Pharmaceutical Validation Disclaimer
              </h3>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "#78350f",
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                Qualyzen provides validation support services. Engaging Qualyzen does not
                guarantee regulatory compliance or audit outcomes. Clients remain
                responsible for their own compliance programmes.
              </p>
            </div>
          </div>

          {/* Terms Container */}
          <div
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            {/* Section 1 */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <FileText size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  1. Use of Website
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                }}
              >
                By accessing and using this website, you agree to be bound by these
                Terms and Conditions and all applicable laws and regulations. If you
                do not agree with any of these terms, you are prohibited from using or
                accessing this site.
              </p>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Website content is provided solely for informational and professional
                enquiry purposes. You agree not to misuse this website, introduce
                malicious code, attempt unauthorized access to server infrastructure, or
                extract bulk materials without explicit written consent.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  2. Services & Project Engagements
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                }}
              >
                Qualyzen provides pharmaceutical validation consulting, equipment
                qualification support, computerized system validation (CSV) assessment,
                and technical documentation services. Information presented on this
                website does not constitute a binding commercial offer or guarantee
                of service availability.
              </p>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Formal engagements are initiated solely through mutually executed
                Statements of Work (SOW), Quality Agreements, or Master Services
                Agreements detailing technical boundaries, deliverables, acceptance
                criteria, and commercial terms.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ShieldAlert size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  3. Limitation of Liability & Professional Service Disclaimer
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Pharmaceutical manufacturing, equipment qualification, and computerized
                systems operate in heavily regulated environments subject to regional
                health authorities (such as US FDA, EMA, MHRA, CDSCO, and WHO).
              </p>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-body)",
                  lineHeight: 1.6,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong>Client Quality Responsibility:</strong> The client retains
                  full ultimate regulatory and legal responsibility for their own
                  manufacturing operations, quality management system (QMS), batch
                  release decisions, and regulatory inspection outcomes. Qualyzen operates
                  in an advisory and technical execution capacity.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>No Guarantee of Regulatory Approval:</strong> While Qualyzen
                  executes activities aligned with recognized industry standards (e.g.,
                  GAMP 5, ISPE guidelines, 21 CFR Part 11 principles), engaging Qualyzen
                  does not constitute a guarantee that regulatory authorities or audit
                  inspectors will approve systems, facilities, or submissions.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Exclusion of Consequential Damages:</strong> To the maximum
                  extent permitted by law, Qualyzen shall not be liable for any indirect,
                  consequential, punitive, or special damages, including production downtime,
                  batch rejection, loss of profits, or regulatory citations.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Scale size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  4. Intellectual Property
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                }}
              >
                All materials contained on this website, including technical guides,
                text, brand assets, logos, and layout design, are the intellectual
                property of Qualyzen and protected by copyright and intellectual
                property legislation.
              </p>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Client project deliverables, executed test protocols, and proprietary
                manufacturing data generated under specific contract agreements are
                governed by the intellectual property clauses defined in each respective
                engagement contract.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Compass size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  5. Governing Law & Jurisdiction
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "0.75rem",
                }}
              >
                These Terms and Conditions and any dispute arising from the use of
                this website shall be governed by and construed in accordance with the
                laws of <strong>[PLACEHOLDER: Jurisdiction / State, Country]</strong>.
              </p>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.25rem",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-body)",
                  lineHeight: 1.6,
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong>[PLACEHOLDER Jurisdiction Clause]:</strong> Any disputes or
                  claims arising out of or in connection with these terms or website
                  usage shall be subject to the exclusive jurisdiction of the competent
                  courts in [City, State, India]. Contractual service disputes are
                  governed by the arbitration and dispute resolution provisions in each
                  signed agreement.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <HelpCircle size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  6. Contact & Legal Inquiries
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                For questions regarding these Terms and Conditions or to request technical
                service discussions, please contact our team:
              </p>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  fontSize: "var(--text-sm)",
                }}
              >
                <div>
                  <strong>Organization:</strong> {SITE_CONFIG.name}
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    style={{
                      color: "var(--color-teal)",
                      textDecoration: "underline",
                    }}
                  >
                    {SITE_CONFIG.contact.email}
                  </a>{" "}
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)" }}>
                    [PLACEHOLDER — legal@qualyzen.com or info@qualyzen.com]
                  </span>
                </div>
                <div>
                  <strong>General Inquiries:</strong>{" "}
                  <Link href="/contact-us" style={{ color: "var(--color-teal)" }}>
                    Contact Qualyzen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
