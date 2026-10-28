import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { AccordionFaq } from "@/components/shared/AccordionFaq";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FinalCta } from "@/components/home/FinalCta";
import {
  ArrowRight,
  CheckCircle2,
  FileSpreadsheet,
  Calculator,
  ShieldCheck,
  Lock,
  GitCommit,
  Database,
  AlertCircle,
  Layers,
  FileCheck2,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Excel Spreadsheet Validation for Pharma | Qualyzen",
  description:
    "Qualyzen delivers compliant Excel spreadsheet validation for pharmaceutical laboratories and manufacturing—covering GxP formula verification, boundary testing, access security, and audit-ready documentation.",
  path: "/validations/excel-sheet-validation",
  keywords: [
    "Excel spreadsheet validation pharma",
    "GxP spreadsheet validation",
    "pharmaceutical Excel validation",
    "21 CFR Part 11 spreadsheet compliance",
    "Annex 11 Excel validation",
    "spreadsheet formula verification",
    "pharma laboratory Excel qualification",
    "data integrity spreadsheet validation",
  ],
});

const validationElements = [
  {
    icon: <Calculator size={20} />,
    title: "Formulas & Calculations",
    desc: "Line-by-line verification of cell formulas, mathematical algorithms, constants, rounding rules, unit conversions, and built-in function logic against verified reference calculations.",
  },
  {
    icon: <Layers size={20} />,
    title: "Input & Output Checks",
    desc: "Verification of input parameter formats, data types, dependent dropdowns, display formatting, and output precision across all defined operational ranges.",
  },
  {
    icon: <AlertCircle size={20} />,
    title: "Boundary & Negative Testing",
    desc: "Rigorous stress testing with upper/lower boundary thresholds, zero inputs, empty cells, invalid data types, text in numeric fields, and out-of-specification values to confirm robust error handling.",
  },
  {
    icon: <Lock size={20} />,
    title: "Access Controls & Protection",
    desc: "Evaluation of worksheet locking, password-protected formula cells, hidden calculation sheets, user permission tiers, and macro/VBA project security settings.",
  },
  {
    icon: <GitCommit size={20} />,
    title: "Change Control Considerations",
    desc: "Establishing version control protocols, template change logs, modification tracking procedures, and revalidation trigger criteria for future spreadsheet revisions.",
  },
  {
    icon: <Database size={20} />,
    title: "Data Integrity & ALCOA+",
    desc: "Ensuring spreadsheets adhere to ALCOA+ principles through clear attribution, original record protection, contemporaneous entry handling, and secure archival practices.",
  },
];

const riskTiers = [
  {
    tier: "Low Risk",
    category: "Category 1 / Simple Templates",
    criteria: "Standard data recording sheets with minimal or purely basic arithmetic (+, -, sum), no complex decision logic, and no direct batch release impact.",
    validationDepth: "Documented intended use, formula verification against manual calculations, basic cell protection check, and summary release note.",
  },
  {
    tier: "Medium Risk",
    category: "Category 2 / Analytical Worksheets",
    criteria: "Worksheets containing multi-step statistical formulas, regression analysis, rounding logic, or indirect influence on analytical certificates of analysis (CoAs).",
    validationDepth: "Formal validation protocol (IQ/OQ), boundary and limit testing, verified test datasets, access control challenge, and validation summary report.",
  },
  {
    tier: "High Risk",
    category: "Category 3 / Critical & Macro-Driven",
    criteria: "Complex workbooks containing custom VBA/macros, automated data import/export routines, or direct critical impact on batch release, API yield, or regulatory filing.",
    validationDepth: "Comprehensive lifecycle documentation: URS, functional spec, code review of macros, full boundary & stress testing, electronic record security review, and full RTM.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Scope & Risk Assessment",
    description:
      "Inventory the spreadsheet, determine regulatory impact (GxP vs non-GxP), classify criticality according to GAMP 5 principles, and establish the validation strategy.",
  },
  {
    number: "02",
    title: "Intended-Use Definition",
    description:
      "Document user requirements and functional expectations—defining exact input variables, acceptable operational ranges, calculation formulas, and expected outputs.",
  },
  {
    number: "03",
    title: "Formula & Logic Review",
    description:
      "Conduct a systematic mathematical review of all calculation cells, hidden sheets, named ranges, conditional statements, and embedded macro/VBA code.",
  },
  {
    number: "04",
    title: "Test Execution",
    description:
      "Execute documented test scripts including baseline verification, extreme boundary values, invalid data inputs, and negative error-handling challenges.",
  },
  {
    number: "05",
    title: "Access & Protection Review",
    description:
      "Challenge cell protections, locked formula layers, template write restrictions, workbook structure security, and version designation integrity.",
  },
  {
    number: "06",
    title: "Documentation & Report",
    description:
      "Compile the Requirements Traceability Matrix (RTM), test execution evidence, deviation logs, master template lock status, and the formal Validation Summary Report.",
  },
];

const faqs = [
  {
    q: "What does Excel spreadsheet validation cover in a pharmaceutical facility?",
    a: "Excel spreadsheet validation covers any spreadsheet used in GxP-regulated operations that influences product quality, batch release, stability testing, environmental monitoring, or regulatory reporting. It systematically verifies mathematical formula accuracy, automated logic (including macros), input cell boundaries, data integrity safeguards, template protection, and change management procedures.",
  },
  {
    q: "How is the risk level and validation depth determined?",
    a: "Validation depth is determined using a risk-based approach guided by GAMP 5 principles. We assess the complexity of the spreadsheet (standard formulas vs custom VBA macros) and its direct impact on patient safety, product quality, and regulatory compliance. High-risk spreadsheets that directly govern batch release undergo exhaustive boundary testing and formal protocol documentation, whereas lower-risk operational logs require streamlined verification.",
  },
  {
    q: "What documents and evidence are produced at project conclusion?",
    a: "A complete validation deliverable package typically includes: Validation Plan / Risk Assessment, User Requirements Specification (URS), Functional Specification & Formula Inventory, Validation Protocol (test scripts for calculation, boundary, and security testing), executed test evidence with screenshots and reference calculations, Requirements Traceability Matrix (RTM), and a formal Validation Summary Report (VSR) approving the spreadsheet template for routine GxP use.",
  },
  {
    q: "How long does an Excel validation project typically take?",
    a: "A single standard analytical or calculation spreadsheet typically requires 1 to 2 weeks from initial scoping and formula inventory through to final report sign-off. Highly complex workbooks featuring extensive VBA code, database connections, or multi-tab cross-referencing may require 2 to 3 weeks. Multiple spreadsheets can be batched under a consolidated validation framework to optimize timeline efficiency.",
  },
  {
    q: "Can existing (legacy) spreadsheets already in routine use be validated?",
    a: "Yes. Retrospective validation can be performed on spreadsheets currently in use. The process begins with a gap assessment against current GxP and data integrity expectations, followed by formula auditing, remediation of unsecured cells or unverified macros, formal testing against historical and simulated test data, and lock-down of a validated master template under revision control.",
  },
];

export default function ExcelSheetValidationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Excel Spreadsheet Validation",
              "GxP-compliant Excel spreadsheet validation for pharmaceutical operations covering formula verification, boundary testing, access controls, and audit-ready documentation.",
              "/validations/excel-sheet-validation"
            )
          ),
        }}
      />

      <PageHero
        eyebrow="Validation Services"
        headline="Excel Spreadsheet Validation"
        subtext="Ensure data integrity, mathematical precision, and regulatory compliance for your GxP-critical spreadsheets in pharmaceutical manufacturing, quality control, and R&D operations."
        breadcrumbs={[
          { label: "Validations", href: "/validations" },
          { label: "Excel Sheet Validation", href: "/validations/excel-sheet-validation" },
        ]}
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Us"
        ctaSecondaryHref="/contact-us"
      />

      {/* Overview */}
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
              <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
                Regulatory Context & Scope
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                  fontWeight: 800,
                  color: "var(--color-heading)",
                  marginBottom: "1rem",
                  lineHeight: 1.25,
                }}
              >
                Why GxP Spreadsheets Require Formal Validation
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Spreadsheets created in Microsoft Excel are ubiquitous across pharmaceutical laboratories,
                formulation suites, and production planning offices. When spreadsheets perform calculations
                that impact batch disposition, analytical assay results, shelf-life estimation, or regulatory
                submissions, they are categorized as computerized systems under FDA 21 CFR Part 11, EU GMP
                Annex 11, and PIC/S guidance.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Without formal validation, unverified spreadsheets represent a significant data integrity risk:
                formula errors may remain undetected, unprotected cells can be accidentally overwritten,
                and unauthorized modifications can compromise compliance.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
                Qualyzen provides an independent, structured spreadsheet validation service that verifies
                intended use, proves calculation accuracy against known reference datasets, establishes
                tamper-resistant cell protections, and delivers audit-ready qualification documentation.
              </p>
            </div>

            <div>
              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-teal)",
                    }}
                  >
                    <FileSpreadsheet size={20} />
                  </div>
                  <h3
                    style={{
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      margin: 0,
                    }}
                  >
                    Common GxP Spreadsheet Applications
                  </h3>
                </div>

                {[
                  "QC Laboratory assay, potency, and related substances calculations",
                  "Dissolution profile data processing and f1/f2 comparison statistics",
                  "Finished product batch release and yield reconciliation sheets",
                  "Stability study data evaluation, shelf-life trending, and linear regressions",
                  "Environmental monitoring trend tracking and action-level alerts",
                  "Calibration worksheets for analytical balances and spectrophotometers",
                  "Cleaning validation swab recovery and residue limit calculations",
                  "Method validation accuracy, precision, and linearity evaluation templates",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      color="var(--color-teal)"
                      style={{ flexShrink: 0, marginTop: "0.2rem" }}
                    />
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}

                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    marginTop: "1.25rem",
                    fontStyle: "italic",
                    borderTop: "1px solid var(--color-border)",
                    paddingTop: "0.875rem",
                  }}
                >
                  Each template is validated against its unique operational parameters and user requirement
                  specifications to ensure strict fitness for intended purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Validated */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "700px", marginInline: "auto" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Core Technical Verification
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.875rem",
              }}
            >
              What Gets Validated During Spreadsheet Qualification
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Our validation approach interrogates every functional dimension of the spreadsheet,
              protecting your operations from algorithmic errors, unintended edits, and data integrity vulnerabilities.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {validationElements.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "var(--shadow-card)",
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
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "var(--text-base)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk-based approach */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "720px", marginInline: "auto" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Tailored Validation Strategy
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.875rem",
              }}
            >
              Risk-Based Approach to Spreadsheet Validation
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Not every spreadsheet requires the same depth of testing. In alignment with GAMP 5 and FDA
              guidelines, validation rigor is scaled according to spreadsheet complexity and patient-risk criticality.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {riskTiers.map((tier) => (
              <div
                key={tier.tier}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    background: "var(--color-navy)",
                    color: "var(--color-white)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    borderRadius: "var(--radius-full)",
                    marginBottom: "0.75rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {tier.tier}
                </div>
                <h3
                  style={{
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tier.category}
                </h3>
                <div style={{ marginBottom: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "var(--text-xs)",
                      fontWeight: 700,
                      color: "var(--color-teal-dark)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Applicability Criteria
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    {tier.criteria}
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "var(--text-xs)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Required Validation Depth
                  </h4>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    {tier.validationDepth}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1.25rem 1.5rem",
              background: "var(--color-bg)",
              borderLeft: "4px solid var(--color-teal)",
              borderRadius: "0 var(--radius-md) var(--radius-md) 0",
            }}
          >
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", margin: 0, lineHeight: 1.6 }}>
              <strong>Quality Assurance Note:</strong> Regardless of risk classification, all validated spreadsheets
              are secured with protected master templates, restricted editing rights, and controlled release
              procedures to prevent unapproved changes.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "650px", marginInline: "auto" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              End-to-End Execution
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.875rem",
              }}
            >
              Our 6-Step Validation Process
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Qualyzen follows an organized, lifecycle-compliant methodology that ensures rapid execution
              without compromising on rigorous pharmaceutical documentation standards.
            </p>
          </div>
          <ProcessSteps steps={processSteps} variant="vertical" />
        </div>
      </section>

      {/* Mid-page Quote CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)",
          paddingBlock: "3.5rem",
          color: "var(--color-white)",
        }}
      >
        <div className="container-site">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.2rem 0.625rem",
                  background: "rgba(19,168,158,0.2)",
                  color: "var(--color-teal-light)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  borderRadius: "var(--radius-full)",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Fast-Track Validation
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                  fontWeight: 800,
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                Have critical calculation sheets ready for review?
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
                Send us your workbook requirements or existing templates under NDA. We will evaluate the calculation
                complexity and provide a clear validation protocol quote.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/request-quote" className="btn-primary">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/contact-us" className="btn-ghost-white">
                Speak with an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Got Questions?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.5rem",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.6 }}>
              Key considerations regarding spreadsheet qualification, regulatory guidelines, and project execution.
            </p>
          </div>
          <AccordionFaq items={faqs} />
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/request-quote" className="btn-primary">
              Request a Custom Quote <ArrowRight size={16} />
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
