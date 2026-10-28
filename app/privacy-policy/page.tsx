import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  FileText,
  Lock,
  Cookie,
  UserCheck,
  Mail,
  AlertCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Qualyzen",
  description:
    "Qualyzen privacy policy covering data collection, use, retention, and your rights.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        variant="light"
        eyebrow="Legal & Governance"
        headline="Privacy Policy"
        subtext="How Qualyzen collects, handles, safeguards, and respects your personal and organizational information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site" style={{ maxWidth: "860px" }}>
          {/* Metadata Card: Last Updated and Template Note */}
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
              <AlertCircle
                size={16}
                color="var(--color-teal)"
                style={{ flexShrink: 0, marginTop: "0.15rem" }}
              />
              <span>
                <strong>Implementation Notice:</strong> This privacy policy sets out
                the foundational operational framework for Qualyzen. Specific
                retention periods, cookie technical parameters, and local legal
                counsel disclosures are to be finalized prior to final commercial launch.
              </span>
            </div>
          </div>

          {/* Policy Body */}
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
                  <Shield size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  1. Information We Collect
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
                Qualyzen collects information directly from you when you interact
                with our digital platforms or communicate with our validation teams.
                We limit collection strictly to information necessary for professional
                engagement:
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {[
                  {
                    title: "Enquiry & Request for Quote Forms",
                    desc: "Contact information including your name, corporate email address, organization name, facility location, telephone number, and details regarding your equipment, CSV, or qualification requirements.",
                  },
                  {
                    title: "Feedback & Survey Forms",
                    desc: "Ratings, feedback comments, and service review details provided voluntarily following consultation or project milestone completions.",
                  },
                  {
                    title: "Website Technical & Analytics Data",
                    desc: "Anonymized or pseudonymous technical information collected automatically, such as IP addresses, browser types, operating systems, referring URLs, and page navigation patterns.",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "1rem 1.25rem",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        color: "var(--color-heading)",
                        fontSize: "var(--text-sm)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.title}
                    </strong>
                    <span
                      style={{
                        color: "var(--color-body)",
                        fontSize: "var(--text-xs)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
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
                  2. How We Use Information
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
                We process personal and organizational data for legitimate commercial
                and technical consulting purposes, including:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.75rem",
                }}
              >
                {[
                  "Responding promptly to technical inquiries, scoping requests, and qualification proposals.",
                  "Evaluating project feasibility and preparing structured commercial and technical documentation.",
                  "Improving website navigation, content clarity, and informational resources for pharmaceutical professionals.",
                  "Maintaining professional communication regarding project deliverables, schedule milestones, and technical questions.",
                  "Satisfying regulatory, accounting, and legal recordkeeping standards applicable to professional service providers.",
                ].map((useCase, index) => (
                  <div
                    key={index}
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
                        color: "var(--color-body)",
                        lineHeight: 1.5,
                      }}
                    >
                      {useCase}
                    </span>
                  </div>
                ))}
              </div>
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
                  <Clock size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  3. Data Retention
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
                We retain client and prospective client information only for as long
                as necessary to satisfy the objectives for which it was gathered:
              </p>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.25rem",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.6,
                }}
              >
                <p style={{ margin: "0 0 0.5rem" }}>
                  <strong>Enquiry & Proposal Records:</strong> Enquiry data is
                  retained for <strong>[PLACEHOLDER: e.g., 24 months]</strong> following
                  the initial interaction or formal proposal conclusion, unless an ongoing
                  contractual relationship is established.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Contractual & Validation Records:</strong> Data associated with
                  executed validation protocols, technical assessments, and consulting
                  agreements are retained in accordance with applicable pharmaceutical
                  quality agreements and statutory requirements. Specific retention
                  schedules remain subject to client master service agreements.
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
                  <Lock size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  4. Data Security
                </h2>
              </div>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                }}
              >
                Qualyzen implements administrative, technical, and physical safeguards
                engineered to protect personal data against accidental loss, unauthorized
                access, misuse, alteration, or disclosure. All web communications are
                encrypted using industry-standard TLS (Transport Layer Security).
                Access to prospective client and project documentation is restricted
                strictly to authorized personnel bound by rigorous non-disclosure and
                confidentiality agreements.
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
                  <Cookie size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  5. Cookies & Tracking Technologies
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
                Our website utilizes minimal, essential cookies and aggregated analytics
                to ensure secure operation and measure general audience interaction:
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
                <p style={{ margin: "0 0 0.5rem" }}>
                  <strong>Essential Cookies:</strong> Necessary for core site security,
                  form session handling, and CSRF protection.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Analytics Cookies [PLACEHOLDER]:</strong> Minimal, privacy-focused
                  analytics cookies may be deployed to evaluate aggregate page visits, device
                  breakdowns, and referral channels. Specific cookie names, durations, and
                  opt-out mechanisms will be updated as analytical tooling is configured.
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
                  <UserCheck size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  6. Your Rights
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
                Subject to applicable data protection regulations, you possess rights
                regarding the personal data you provide:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "0.75rem",
                }}
              >
                {[
                  {
                    title: "Right to Access",
                    desc: "Request a copy of the personal information held by Qualyzen.",
                  },
                  {
                    title: "Right to Rectification",
                    desc: "Request correction of inaccurate or incomplete contact details.",
                  },
                  {
                    title: "Right to Erasure",
                    desc: "Request deletion of contact records, subject to statutory retention limits.",
                  },
                  {
                    title: "Right to Object / Restrict",
                    desc: "Object to the processing or request limitation of technical communications.",
                  },
                ].map((right, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "var(--color-bg)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "1rem",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-heading)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {right.title}
                    </strong>
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--color-body)",
                        lineHeight: 1.5,
                      }}
                    >
                      {right.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 7 */}
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
                  <Mail size={18} />
                </div>
                <h2
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    margin: 0,
                  }}
                >
                  7. Contact for Privacy Matters
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
                If you have questions, requests, or concerns regarding this Privacy
                Policy or wish to exercise any of your data rights, please contact our
                privacy representative:
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
                  <strong>Entity:</strong> {SITE_CONFIG.name}
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
                    [PLACEHOLDER — privacy@qualyzen.com or designated compliance email]
                  </span>
                </div>
                <div>
                  <strong>Corporate Inquiries:</strong>{" "}
                  <Link href="/contact-us" style={{ color: "var(--color-teal)" }}>
                    Qualyzen Contact Page
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
