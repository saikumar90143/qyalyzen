import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { AccordionFaq } from "@/components/shared/AccordionFaq";
import { FinalCta } from "@/components/home/FinalCta";
import {
  Cpu,
  Table,
  FlaskConical,
  Bot,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Layers,
  Settings,
  Activity,
  Microscope,
  Info,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pharmaceutical Validation Services | Qualyzen",
  description:
    "Comprehensive pharmaceutical validation and qualification services from Qualyzen—including CSV & PLC validation, GxP spreadsheet verification, equipment qualification (IQ/OQ/PQ), and AI-assisted documentation workflows.",
  path: "/validations",
  keywords: [
    "pharmaceutical validation services",
    "equipment qualification pharma",
    "computerized system validation",
    "CSV PLC validation",
    "excel sheet validation pharma",
    "IQ OQ PQ qualification",
    "GAMP 5 validation",
    "21 CFR Part 11 compliance",
    "pharma technical documentation",
  ],
});

const serviceList = [
  {
    icon: <Cpu size={24} />,
    title: "CSV & PLC Validation",
    description:
      "Structured validation of computerized systems including PLC, HMI, SCADA, DCS, and automated process equipment, ensuring 21 CFR Part 11 and EU GMP Annex 11 alignment.",
    highlights: [
      "PLC logic & HMI screen verification",
      "SCADA & automated batch recipe testing",
      "Comprehensive Requirements Traceability Matrix (RTM)",
      "Audit trail & user access security checks",
    ],
    href: "/validations/csv-plc-validation",
  },
  {
    icon: <Table size={24} />,
    title: "Excel Sheet Validation",
    description:
      "Rigorous validation for GxP-critical spreadsheets utilized in analytical testing, batch calculation, release decisions, stability evaluation, and inventory accounting.",
    highlights: [
      "Mathematical formula and logic verification",
      "Cell locking, workbook protection & data controls",
      "Boundary condition, stress, and negative testing",
      "Audit-ready validation protocols and closure reports",
    ],
    href: "/validations/excel-sheet-validation",
  },
  {
    icon: <FlaskConical size={24} />,
    title: "Equipment Qualification Support",
    description:
      "End-to-end qualification support across pharmaceutical manufacturing and laboratory assets, encompassing Installation (IQ), Operational (OQ), and Performance (PQ) phases.",
    highlights: [
      "Pre-qualification review and URS verification",
      "IQ/OQ/PQ protocol design and test execution support",
      "Critical process parameter (CPP) challenge testing",
      "Formal deviation logging, investigation & closure",
    ],
    href: "/validations/equipment-qualification-support",
  },
  {
    icon: <Bot size={24} />,
    title: "Artificial Intelligence",
    description:
      "AI-assisted documentation tools tailored for pharmaceutical quality systems—accelerating report structuring, cross-document traceability, and protocol drafting with human QA oversight.",
    highlights: [
      "Intelligent protocol and documentation drafting",
      "Automated cross-referencing and traceability mapping",
      "SOP and regulatory guidance knowledge retrieval",
      "Strict human-in-the-loop review and approval control",
    ],
    href: "/validations/artificial-intelligence",
  },
];

const equipmentCategories = [
  {
    category: "Automation & Process Control",
    icon: <Activity size={22} color="var(--color-teal)" />,
    description:
      "Industrial automation controllers, supervisory systems, and monitoring platforms regulating critical pharmaceutical operations.",
    items: [
      "Programmable Logic Controllers (PLC)",
      "Human-Machine Interfaces (HMI)",
      "SCADA & Distributed Control Systems (DCS)",
      "Building Management Systems (BMS)",
      "Environmental Monitoring Systems (EMS)",
      "Continuous Data Acquisition Units",
    ],
  },
  {
    category: "Solid Oral Dosage Equipment",
    icon: <Settings size={22} color="var(--color-teal)" />,
    description:
      "Core processing and packaging machines employed in tablet, capsule, and dry powder manufacturing suites.",
    items: [
      "High-Speed Rotary Tablet Presses",
      "Automatic Capsule Filling Machines",
      "Rapid Mixer Granulators (RMG)",
      "Fluid Bed Dryers & Coaters (FBD / FBC)",
      "Auto-Coating Systems",
      "Primary Blister Packaging Lines",
    ],
  },
  {
    category: "Sterile & Liquid Manufacturing",
    icon: <Layers size={22} color="var(--color-teal)" />,
    description:
      "Aseptic processing machinery and thermal systems requiring high-integrity operational controls and sterile assurance.",
    items: [
      "Porous Load Steam Sterilizers (Autoclaves)",
      "Depyrogenation Dry Heat Tunnels",
      "Vial Washing, Filling & Stoppering Lines",
      "Industrial Lyophilizers (Freeze Dryers)",
      "Clean-in-Place (CIP) & Sterilize-in-Place (SIP) Skids",
      "WFI & Pure Steam Generation / Distribution Skids",
    ],
  },
  {
    category: "QC & Analytical Laboratory Instruments",
    icon: <Microscope size={22} color="var(--color-teal)" />,
    description:
      "High-precision laboratory instrumentation requiring rigorous software validation and analytical hardware qualification.",
    items: [
      "High-Performance Liquid Chromatographs (HPLC / UHPLC)",
      "Gas Chromatographs (GC / Headspace)",
      "UV-Vis Spectrophotometers",
      "Automated Dissolution Test Apparatus",
      "Analytical & Micro-Balances",
      "Stability Chambers & Controlled Freezers",
    ],
  },
];

const validationStages = [
  {
    number: "01",
    title: "Project Scoping & VMP Alignment",
    description:
      "Establish system boundaries, regulatory applicability, intended use, and alignment with the site Validation Master Plan (VMP).",
  },
  {
    number: "02",
    title: "Risk Assessment & Impact Categorization",
    description:
      "Conduct structured risk analysis (FMEA / GAMP Category) to evaluate potential impacts on product quality, patient safety, and data integrity.",
  },
  {
    number: "03",
    title: "Requirements & Traceability Matrix",
    description:
      "Formulate or review User Requirements Specifications (URS), Functional Specifications (FS), and the Requirements Traceability Matrix (RTM).",
  },
  {
    number: "04",
    title: "Protocol Authoring & Review",
    description:
      "Develop IQ, OQ, PQ, or CSV protocols with objective acceptance criteria, step-by-step test scripts, and pre-execution approvals.",
  },
  {
    number: "05",
    title: "Protocol Execution & Deviation Management",
    description:
      "Execute test scripts against physical or software systems, record primary data, gather evidence, and formally investigate any deviations.",
  },
  {
    number: "06",
    title: "Summary Reporting & Regulatory Handover",
    description:
      "Draft comprehensive Validation Summary Reports (VSR), resolve open actions, verify traceability, and facilitate QA sign-off.",
  },
];

const documentationDeliverables = [
  {
    title: "Validation Plans & Master Alignment",
    description:
      "Project-specific validation plans delineating scope, roles, responsibilities, testing methodologies, and acceptance standards.",
  },
  {
    title: "URS & Functional Design Reviews",
    description:
      "Critical appraisal of user requirements and functional design specifications to ensure testability and regulatory compliance.",
  },
  {
    title: "Risk Assessment Reports",
    description:
      "Documented GAMP 5 and ICH Q9 compliant risk assessments justifying the depth and rigor of validation testing.",
  },
  {
    title: "Requirements Traceability Matrix (RTM)",
    description:
      "Bidirectional traceability linking each user requirement to specific functional specs, test scripts, and execution records.",
  },
  {
    title: "IQ, OQ & PQ Test Protocols",
    description:
      "Detailed, structured test protocols with step-by-step instructions, expected results, sign-offs, and data capture tables.",
  },
  {
    title: "Objective Test Evidence Dossiers",
    description:
      "Compiled execution records containing printouts, screenshots, raw data logs, and calibrated test instrument certificates.",
  },
  {
    title: "Deviation Investigation Reports",
    description:
      "Systematic root cause analysis, risk impact assessment, and corrective remediation documentation for testing discrepancies.",
  },
  {
    title: "Validation Summary Reports (VSR)",
    description:
      "Formal closure documents synthesizing execution outcomes, deviation dispositions, and the qualified status statement.",
  },
];

const faqs = [
  {
    q: "What is the difference between Equipment Qualification and System Validation?",
    a: "Qualification specifically pertains to physical equipment, utilities, and analytical instruments—traditionally partitioned into Design Qualification (DQ), Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). Validation represents the overarching umbrella encompassing computerized systems (CSV), manufacturing processes, cleaning procedures, and analytical methods. In modern pharmaceutical practice, equipment qualification and computerized system validation frequently proceed hand-in-hand.",
  },
  {
    q: "Which regulatory frameworks govern Qualyzen's validation services?",
    a: "Our validation methodologies reference recognized international guidance including ISPE GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems, Second Edition), FDA 21 CFR Part 11 (Electronic Records; Electronic Signatures), EU GMP Annex 11 (Computerised Systems), EU GMP Annex 15 (Qualification and Validation), and ICH Q9 (Quality Risk Management). We align documentation to these benchmarks while tailoring protocols to your site SOPs.",
  },
  {
    q: "Can Qualyzen assist with legacy or retrospective validation of existing systems?",
    a: "Yes. For operational equipment or legacy computerized systems that lack complete documentation, Qualyzen executes structured gap assessments. We reconstruct User Requirements Specifications, establish retrospective qualification protocols, verify critical configurations, and deliver remediation summary reports to establish audit readiness.",
  },
  {
    q: "How does Qualyzen handle on-site testing versus remote documentation support?",
    a: "We offer flexible delivery models. Scoping, risk assessments, protocol authoring, and documentation compilation are routinely performed remotely in close coordination with your subject matter experts. For physical test execution and evidence collection, our validation specialists can either deploy on-site to execute protocols directly or guide your internal engineering and QC teams through supervised execution.",
  },
  {
    q: "What typical timeline should we anticipate for a validation engagement?",
    a: "Timelines depend on the system complexity, documentation maturity, and change control procedures. A standard GxP Excel spreadsheet validation typically takes 3 to 7 business days. Standalone equipment qualification or PLC validation typically spans 2 to 4 weeks from scoping through protocol execution and report sign-off. We provide clear milestone schedules during initial project scoping.",
  },
];

export default function ValidationsHubPage() {
  return (
    <>
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Pharmaceutical Validation & Qualification Services",
              "Comprehensive pharmaceutical validation services including CSV & PLC validation, GxP spreadsheet verification, equipment qualification, and AI-assisted documentation.",
              "/validations"
            )
          ),
        }}
      />

      {/* Page Hero */}
      <PageHero
        variant="navy"
        eyebrow="Specialized Life Sciences Consulting"
        headline="Pharmaceutical Validation & Qualification Services"
        subtext="Structured, risk-based validation and qualification support tailored to pharmaceutical manufacturing, automated process systems, and quality control laboratories."
        breadcrumbs={[{ label: "Validations", href: "/validations" }]}
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Our Team"
        ctaSecondaryHref="/contact-us"
      />

      {/* Introduction Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
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
                Industry Context
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
                Documented Evidence for Uncompromising Quality
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                In the pharmaceutical and life sciences industries, validation is not a mere procedural
                exercise—it is the foundational guarantee that every piece of machinery, automated controller,
                and analytical system operates with reproducible precision, protecting product efficacy and
                patient safety.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Whether qualifying a high-speed tablet press, validating an automated PLC/SCADA batch recipe, or
                verifying an analytical Excel spreadsheet, regulatory authorities demand defensible, traceable,
                and complete objective evidence across the entire system lifecycle.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>
                    <strong>Risk-Based Focus:</strong> Applying ISPE GAMP 5 principles to scale testing effort
                    commensurate with risk to product quality and data integrity.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>
                    <strong>Audit-Ready Documentation:</strong> Standardized protocols, clear acceptance
                    criteria, objective evidence attachments, and structured deviation records.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>
                    <strong>Cross-Functional Alignment:</strong> Seamless integration between engineering,
                    automation, quality control, and QA release functions.
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.25rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-heading)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ShieldCheck size={22} color="var(--color-teal)" />
                Core Validation Disciplines
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ paddingBottom: "1.25rem", borderBottom: "1px solid var(--color-border)" }}>
                  <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "0.25rem" }}>
                    Equipment Qualification (IQ / OQ / PQ)
                  </h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    Verification that mechanical, electrical, and process equipment is installed correctly, operates within defined parameter ranges, and demonstrates process consistency under simulated operational loads.
                  </p>
                </div>
                <div style={{ paddingBottom: "1.25rem", borderBottom: "1px solid var(--color-border)" }}>
                  <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "0.25rem" }}>
                    Computerized System Validation (CSV)
                  </h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    Lifecycle assurance for automated controllers, supervisory systems, and quality software—guaranteeing logic integrity, audit trails, secure electronic records, and user access management.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-navy)", marginBottom: "0.25rem" }}>
                    Data Integrity & Analytical Spreadsheets
                  </h4>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                    Rigorous verification of calculations, cell protection, and change controls in custom spreadsheets that support lot release, potency assays, or stability metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Service Cards */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Our Core Offerings
            </span>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Specialized Validation Service Streams
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Qualyzen provides targeted technical support tailored to the specific risk profile,
              system category, and regulatory requirements of your pharmaceutical operation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {serviceList.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Examples Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
              Scope of Coverage
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
              Equipment & Automated Systems Supported
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Our validation consultants possess hands-on familiarity across a wide spectrum of pharmaceutical manufacturing, packaging, utility, and laboratory technologies.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {equipmentCategories.map((cat) => (
              <div
                key={cat.category}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
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
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "var(--text-base)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      lineHeight: 1.3,
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-body)",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {cat.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                    marginTop: "auto",
                  }}
                >
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "var(--text-xs)",
                        color: "var(--color-heading)",
                        fontWeight: 500,
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "var(--color-teal)",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Project Stages */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
              Project Lifecycle
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
              Structured Project Execution Stages
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              From initial user requirement formulation through to protocol closure, every project adheres to a disciplined, transparent stage-gate methodology.
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
            <ProcessSteps steps={validationStages} variant="horizontal" />
          </div>
        </div>
      </section>

      {/* Documentation Deliverables Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Tangible Outcomes
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
              Comprehensive Documentation Deliverables
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              A validation project is only as strong as its documentation. Qualyzen delivers complete,
              defensible documentation packages engineered to withstand rigorous regulatory audits.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {documentationDeliverables.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <FileCheck size={18} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                  <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)" }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, paddingLeft: "1.9rem" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Guidance & Caveats */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div
            style={{
              background: "linear-gradient(135deg, var(--color-navy) 0%, #162d52 100%)",
              borderRadius: "var(--radius-xl)",
              padding: "3rem 2.5rem",
              color: "var(--color-white)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  background: "rgba(19,168,158,0.2)",
                  color: "var(--color-teal-light)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                <Info size={14} />
                Regulatory Frameworks & Important Notice
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.75vw, 2.25rem)",
                  fontWeight: 800,
                  color: "var(--color-white)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Aligned to Global Standards, Rooted in Risk Management
              </h2>

              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                Qualyzen structures all validation protocols, risk models, and reporting deliverables in direct reference to established international standards and industry guidance:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div style={{ fontWeight: 700, color: "var(--color-teal-light)", fontSize: "var(--text-sm)", marginBottom: "0.25rem" }}>
                    ISPE GAMP® 5 (2nd Ed)
                  </div>
                  <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    A Risk-Based Approach to Compliant GxP Computerized Systems.
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div style={{ fontWeight: 700, color: "var(--color-teal-light)", fontSize: "var(--text-sm)", marginBottom: "0.25rem" }}>
                    FDA 21 CFR Part 11
                  </div>
                  <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    Electronic Records; Electronic Signatures and audit trail compliance.
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div style={{ fontWeight: 700, color: "var(--color-teal-light)", fontSize: "var(--text-sm)", marginBottom: "0.25rem" }}>
                    EU GMP Annex 11 &amp; 15
                  </div>
                  <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    Computerised Systems and Qualification &amp; Validation requirements.
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.06)", padding: "1rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div style={{ fontWeight: 700, color: "var(--color-teal-light)", fontSize: "var(--text-sm)", marginBottom: "0.25rem" }}>
                    ICH Q9 &amp; ALCOA+ Principles
                  </div>
                  <div style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    Quality Risk Management &amp; Data Integrity standards.
                  </div>
                </div>
              </div>

              {/* Regulatory Caveat Notice */}
              <div
                style={{
                  background: "rgba(16, 35, 63, 0.6)",
                  borderLeft: "4px solid var(--color-teal)",
                  padding: "1rem 1.25rem",
                  borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                  fontSize: "var(--text-xs)",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "var(--color-white)" }}>Important Regulatory Notice:</strong> Qualyzen is an independent validation consulting and technical documentation provider. Our work references and reflects applicable guidelines (such as GAMP 5, 21 CFR Part 11, EU GMP Annex 11, and ICH Q9). Qualyzen does not claim formal regulatory accreditation, direct inspection endorsement, or certification by any statutory health agency (such as US FDA, EMA, MHRA, or CDSCO). Ultimate regulatory responsibility, standard operating procedure approval, and product release sign-off remain the exclusive prerogative of the regulated manufacturing license holder.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ maxWidth: "680px", marginBottom: "3rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Common Questions
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
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Answers to common queries regarding our validation approach, scoping criteria, and regulatory documentation standards.
            </p>
          </div>

          <div style={{ maxWidth: "860px" }}>
            <AccordionFaq items={faqs} />
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
