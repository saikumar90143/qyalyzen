import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Shield,
  Target,
  Eye,
  CheckCircle2,
  FileCheck2,
  Cpu,
  Table,
  FlaskConical,
  Bot,
  AlertCircle,
  Building2,
  ArrowRight,
  ClipboardList,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Qualyzen | Pharmaceutical Validation Experts",
  description:
    "Learn about Qualyzen's mission, structured validation approach, and commitment to delivering audit-ready technical documentation for pharmaceutical manufacturers and laboratories.",
  path: "/about-us",
  keywords: [
    "About Qualyzen",
    "pharmaceutical validation partner",
    "CSV consultants",
    "equipment qualification experts",
    "pharma compliance documentation",
    "GAMP 5 validation methodology",
  ],
});

const methodologySteps = [
  {
    number: "01",
    title: "Discovery & Risk Scoping",
    description:
      "Clarify system boundaries, regulatory criticality, user requirements, and alignment with site standard operating procedures.",
  },
  {
    number: "02",
    title: "Protocol & Matrix Authoring",
    description:
      "Draft structured qualification protocols (IQ/OQ/PQ) and Requirements Traceability Matrices with predefined acceptance criteria.",
  },
  {
    number: "03",
    title: "Quality Review & Pre-Approval",
    description:
      "Conduct collaborative review with site engineering and quality assurance to secure formal pre-execution protocol approvals.",
  },
  {
    number: "04",
    title: "Testing & Evidence Collection",
    description:
      "Execute protocol test cases systematically, compiling raw data printouts, screenshots, and managing deviations transparently.",
  },
  {
    number: "05",
    title: "Closure & Summary Handover",
    description:
      "Compile the comprehensive Validation Summary Report, resolve open action items, verify full traceability, and finalize QA sign-off.",
  },
];

const industriesSupported = [
  {
    icon: "💊",
    title: "Pharmaceutical Manufacturing",
    description:
      "Solid oral dosage, sterile injectable, liquid oral, and topical production facilities requiring rigorous machinery qualification and process system validation.",
  },
  {
    icon: "🧪",
    title: "Quality Control Laboratories",
    description:
      "QC analytical laboratories utilizing chromatography systems (HPLC/GC), spectrophotometers, dissolution units, and analytical calculation spreadsheets.",
  },
  {
    icon: "⚙️",
    title: "Engineering & Maintenance",
    description:
      "Plant engineering departments managing commissioning, qualification, calibration tracking, and preventative maintenance records for critical assets.",
  },
  {
    icon: "🏭",
    title: "Formulation Operations",
    description:
      "Granulation, fluid bed drying, rotary tablet compression, auto-coating, and packaging suites with associated PLC and automated recipe controls.",
  },
  {
    icon: "🔬",
    title: "Research & Development",
    description:
      "Formulation and analytical development environments employing GxP-critical spreadsheets, pilot-scale equipment, and analytical instrument data systems.",
  },
  {
    icon: "📋",
    title: "Quality Assurance Teams",
    description:
      "QA functions responsible for Validation Master Plan (VMP) maintenance, regulatory inspection defense, data integrity oversight, and document governance.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        variant="navy"
        eyebrow="Company Overview & Quality Philosophy"
        headline="About Qualyzen"
        subtext="A specialized pharmaceutical validation and technical documentation partner supporting life sciences manufacturers with disciplined, risk-based qualification services."
        breadcrumbs={[{ label: "About Us", href: "/about-us" }]}
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Us"
        ctaSecondaryHref="/contact-us"
      />

      {/* Company Overview Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="two-col-grid"
          >
            <div>
              <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
                Who We Are
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
                Dedicated to Methodical Pharmaceutical Validation
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Qualyzen is a dedicated technical service provider specializing in pharmaceutical validation,
                computerized system validation (CSV), equipment qualification, and regulatory documentation
                development. We partner with pharmaceutical manufacturers, compounding units, quality control
                laboratories, and engineering teams to establish defensible, audit-ready compliance records.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                In an era of intensifying regulatory scrutiny and digital transformation, pharmaceutical
                facilities encounter complex validation challenges—from automated PLC/SCADA systems and
                spreadsheet calculations to automated inspection and electronic data integrity. Qualyzen bridges
                the gap between complex technical operations and stringent regulatory requirements through
                structured, transparent documentation frameworks.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                }}
              >
                Rather than treating validation as an administrative formality, our engagements focus on genuine
                operational reliability, risk reduction, and seamless integration with existing site Quality
                Management Systems (QMS).
              </p>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem 2rem",
                color: "var(--color-white)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: 700,
                  color: "var(--color-white)",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <Shield size={22} color="var(--color-teal)" />
                Core Tenets of Qualyzen
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "0.2rem" }}>
                      Methodological Precision
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                      Every protocol adheres strictly to ISPE GAMP 5 principles, FDA 21 CFR Part 11, and EU GMP Annex 11 benchmarks.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "0.2rem" }}>
                      Traceability First
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                      Unbroken lineage linking each user requirement through risk analysis to individual test cases and final summary records.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "0.2rem" }}>
                      Independent Objectivity
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                      Unbiased third-party assessment ensuring deviations and edge-case risks are documented honestly and resolved systematically.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "0.2rem" }}>
                      Operational Non-Disruption
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                      Collaborative scheduling designed to respect manufacturing shift hours, batch release cycles, and cleanroom access rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="two-col-grid"
          >
            {/* Mission Card */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem 2rem",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "var(--color-teal)",
                }}
              />
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-teal-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-teal)",
                  marginBottom: "1.25rem",
                }}
              >
                <Target size={24} />
              </div>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem" }}>
                Our Mission
              </span>
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: 800,
                  color: "var(--color-heading)",
                  marginBottom: "1rem",
                }}
              >
                Supporting Pharmaceutical Quality Through Rigorous Validation
              </h3>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                }}
              >
                To empower pharmaceutical manufacturers and healthcare life sciences organizations with
                rigorous, structured validation methodologies and defensible technical documentation—ensuring
                that automated systems, critical equipment, and data assets operate with demonstrable integrity,
                audit readiness, and absolute fidelity to patient safety.
              </p>
            </div>

            {/* Vision Card */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem 2rem",
                boxShadow: "var(--shadow-card)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "var(--color-navy)",
                }}
              />
              <div
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(16, 35, 63, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                }}
              >
                <Eye size={24} />
              </div>
              <span className="eyebrow" style={{ display: "block", marginBottom: "0.5rem", color: "var(--color-navy)" }}>
                Our Vision
              </span>
              <h3
                style={{
                  fontSize: "var(--text-xl)",
                  fontWeight: 800,
                  color: "var(--color-heading)",
                  marginBottom: "1rem",
                }}
              >
                Being a Trusted Validation Partner for Global Pharma
              </h3>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                }}
              >
                To be widely recognized as a premier, trusted validation partner for pharmaceutical
                manufacturers—distinguished by technical depth, transparency of execution, clarity of
                reporting, and forward-looking adoption of digital tools that streamline compliance without
                diluting scientific rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Guiding Principles
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
              Our Four-Pillar Service Philosophy
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Every client engagement, whether an isolated spreadsheet validation or a facility-wide computerized
              system qualification, is governed by four core operating commitments.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Pillar 1 */}
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "var(--text-sm)",
                  marginBottom: "1rem",
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                Risk-Based
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                Validation effort is proportional to system risk. We apply structured FMEA and GAMP categorization so critical process controls receive rigorous challenge testing, while lower-risk non-GxP features avoid unnecessary overhead.
              </p>
            </div>

            {/* Pillar 2 */}
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "var(--text-sm)",
                  marginBottom: "1rem",
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                Scope-Defined
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                Clear boundaries prevent project creep. Before protocol authoring commences, we establish defined system boundaries, test parameters, sample sizes, and explicit completion criteria agreed upon by all stakeholders.
              </p>
            </div>

            {/* Pillar 3 */}
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "var(--text-sm)",
                  marginBottom: "1rem",
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                Documentation-Focused
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                In pharma regulation, if it is not documented, it did not happen. We generate structured protocols, clear test logs, objective data captures, and formal deviation dispositions designed to pass auditor cross-examination with ease.
              </p>
            </div>

            {/* Pillar 4 */}
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "var(--text-sm)",
                  marginBottom: "1rem",
                }}
              >
                4
              </div>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                Client-Supporting
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                We operate as an extension of your in-house quality and engineering teams. We adapt to your standard terminology, templates, and change control procedures, transferring knowledge rather than creating external dependencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Approach Section */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="two-col-grid"
          >
            <div>
              <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
                Quality Approach
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
                Structured Execution & Traceable Records
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Our quality framework is engineered around data integrity fundamentals—ensuring all generated
                validation records adhere to ALCOA+ principles (Attributable, Legible, Contemporaneous,
                Original, Accurate, Complete, Consistent, Enduring, and Available).
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <FileCheck2 size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.2rem" }}>
                      Pre-Approved Test Protocols
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                      No testing begins without formal pre-execution sign-off by Quality Assurance, ensuring predetermined acceptance criteria are locked in advance.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <FileCheck2 size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.2rem" }}>
                      Controlled Deviations & CAPA
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                      Unexpected test results are captured immediately in formal deviation logs with documented impact analysis, root-cause investigations, and re-test parameters.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <FileCheck2 size={20} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.2rem" }}>
                      Comprehensive Traceability
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                      Every user requirement and functional specification item is mapped directly to one or more executed test scripts within a living Requirements Traceability Matrix.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-heading)",
                  marginBottom: "1.25rem",
                }}
              >
                Data Integrity Principles in Action
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { letter: "A", name: "Attributable", detail: "Every entry, signature, and test execution note clearly traces to the specific author." },
                  { letter: "L", name: "Legible & Enduring", detail: "Permanent records stored in protected formats that remain readable throughout system life." },
                  { letter: "C", name: "Contemporaneous", detail: "Test observations recorded in real-time as execution unfolds on the plant or laboratory floor." },
                  { letter: "O", name: "Original", detail: "Direct primary printouts, raw digital files, and unmodified screenshots preserved as evidence." },
                  { letter: "A+", name: "Accurate & Complete", detail: "All data including repeat tests, failed attempts, and deviations preserved without omissions." },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      padding: "0.75rem 1rem",
                      background: "var(--color-bg)",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        minWidth: "2rem",
                        textAlign: "center",
                        fontWeight: 800,
                        color: "var(--color-teal)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {item.letter}
                    </span>
                    <div>
                      <strong style={{ fontSize: "var(--text-xs)", color: "var(--color-heading)", display: "block" }}>
                        {item.name}
                      </strong>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.5 }}>
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Technical Expertise
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
              Core Technical Competencies
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Our validation practitioners bring focused technical proficiency across software, automation logic,
              mechanical qualification, and intelligent documentation systems.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Cpu size={22} color="var(--color-teal)" />
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)" }}>
                  CSV &amp; PLC Validation
                </h3>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Logic verification, alarm testing, interlock safety checks, electronic signatures, and audit trail verification for industrial PLCs, HMIs, and SCADA architectures.
              </p>
              <Link href="/validations/csv-plc-validation" style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-teal)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                Learn more <ArrowRight size={12} />
              </Link>
            </div>

            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Table size={22} color="var(--color-teal)" />
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)" }}>
                  Excel Sheet Validation
                </h3>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Cell-by-cell formula verification, boundary condition stress tests, protected worksheet locking, password management, and GxP validation dossiers for quality calculation sheets.
              </p>
              <Link href="/validations/excel-sheet-validation" style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-teal)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                Learn more <ArrowRight size={12} />
              </Link>
            </div>

            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <FlaskConical size={22} color="var(--color-teal)" />
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)" }}>
                  Equipment Qualification
                </h3>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Comprehensive IQ, OQ, and PQ protocol generation, execution facilitation, calibration verification, and operational challenge tests for manufacturing and analytical assets.
              </p>
              <Link href="/validations/equipment-qualification-support" style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-teal)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                Learn more <ArrowRight size={12} />
              </Link>
            </div>

            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Bot size={22} color="var(--color-teal)" />
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)" }}>
                  AI Documentation Tools
                </h3>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1rem" }}>
                AI-assisted documentation structuring, regulatory knowledge retrieval, and automated cross-referencing, maintained under strict human-in-the-loop quality gate reviews.
              </p>
              <Link href="/validations/artificial-intelligence" style={{ fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-teal)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                Learn more <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Methodology Section */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
              How We Work
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
              Our Project Methodology
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              A disciplined, step-by-step engagement process designed to deliver rigorous compliance on schedule and within agreed operational constraints.
            </p>
          </div>

          <div
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "3rem 2rem",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <ProcessSteps steps={methodologySteps} variant="horizontal" />
          </div>
        </div>
      </section>

      {/* Industries and Teams Supported */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
              Sectors &amp; Teams
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
              Who We Support Across the Life Sciences
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              From floor-level engineering technicians to quality assurance directors, Qualyzen supports diverse functional roles across regulated facilities.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {industriesSupported.map((ind) => (
              <div
                key={ind.title}
                style={{
                  padding: "1.5rem",
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }} aria-hidden="true">
                  {ind.icon}
                </div>
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.375rem" }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                  {ind.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholders Section Clearly Stated */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem 2rem",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <AlertCircle size={24} color="var(--color-warning)" style={{ flexShrink: 0, marginTop: "0.25rem" }} />
              <div>
                <h3
                  style={{
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "#92400e",
                    marginBottom: "0.5rem",
                  }}
                >
                  Company Details to be Completed by Client: Founding Year, Team, Certifications
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "#78350f",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  In accordance with Qualyzen website governance standards, factual corporate identity fields
                  are deliberately preserved as placeholders until final organizational details are verified by
                  the client:
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid #fef3c7" }}>
                    <strong style={{ fontSize: "var(--text-xs)", color: "#92400e", display: "block", marginBottom: "0.25rem" }}>
                      Founding &amp; History
                    </strong>
                    <span style={{ fontSize: "var(--text-xs)", color: "#78350f" }}>
                      Incorporation year, founding milestones, and corporate background to be populated.
                    </span>
                  </div>

                  <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid #fef3c7" }}>
                    <strong style={{ fontSize: "var(--text-xs)", color: "#92400e", display: "block", marginBottom: "0.25rem" }}>
                      Leadership &amp; Key SMEs
                    </strong>
                    <span style={{ fontSize: "var(--text-xs)", color: "#78350f" }}>
                      Individual executive bios, validation SME credentials, and author profiles to be appended.
                    </span>
                  </div>

                  <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid #fef3c7" }}>
                    <strong style={{ fontSize: "var(--text-xs)", color: "#92400e", display: "block", marginBottom: "0.25rem" }}>
                      Certifications &amp; Accreditations
                    </strong>
                    <span style={{ fontSize: "var(--text-xs)", color: "#78350f" }}>
                      Specific third-party ISO certifications, memberships, or vendor affiliations to be inserted upon verification.
                    </span>
                  </div>

                  <div style={{ background: "#ffffff", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid #fef3c7" }}>
                    <strong style={{ fontSize: "var(--text-xs)", color: "#92400e", display: "block", marginBottom: "0.25rem" }}>
                      Facility &amp; Location Details
                    </strong>
                    <span style={{ fontSize: "var(--text-xs)", color: "#78350f" }}>
                      Registered office addresses, regional branch locations, and legal registration numbers.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)", textAlign: "center" }}>
        <div className="container-site" style={{ maxWidth: "700px" }}>
          <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
            Collaborate With Us
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
            Ready to Discuss Your Validation Needs?
          </h2>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-body)",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Whether preparing for an upcoming regulatory inspection, commissioning new automated machinery, or remediating legacy GxP spreadsheets, our validation specialists are ready to help.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/request-quote" className="btn-primary">
              Request a Project Quote
              <ArrowRight size={16} />
            </Link>
            <Link href="/contact-us" className="btn-secondary">
              Contact Qualyzen
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
