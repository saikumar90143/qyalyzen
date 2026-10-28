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
  Wrench,
  Gauge,
  Activity,
  AlertTriangle,
  FileCheck,
  ShieldCheck,
  Layers,
  Settings,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pharmaceutical Equipment Qualification Support | Qualyzen",
  description:
    "Qualyzen provides structured pharmaceutical equipment qualification support covering IQ, OQ, and PQ protocol generation, execution guidance, deviation management, and compliance documentation.",
  path: "/validations/equipment-qualification-support",
  keywords: [
    "pharmaceutical equipment qualification",
    "IQ OQ PQ qualification",
    "installation qualification pharma",
    "operational qualification equipment",
    "performance qualification pharma",
    "autoclave qualification",
    "tablet press qualification",
    "HPLC qualification",
    "Annex 15 qualification",
    "equipment qualification protocol",
  ],
});

const qualificationStages = [
  {
    phase: "IQ",
    title: "Installation Qualification",
    subtitle: "Verification of physical, electrical, and environmental installation",
    focus:
      "Confirms that equipment, piping, services, and instrumentation are supplied, installed, and documented in accordance with manufacturer specifications and engineering design.",
    activities: [
      "Verification of equipment physical location, floor anchoring, and clearances",
      "Utility supply confirmation (power, compressed air, WFI, purified water, steam, HVAC)",
      "Materials of construction (MOC) and contact surface certificate verification (e.g., 316L SS)",
      "P&ID walkthrough, component tag verification, and serial number matching",
      "Critical instrument inventory, calibration certificates, and range checks",
      "Manuals, electrical schematics, drawings, and spare parts list availability",
    ],
    deliverables: "Executed IQ protocol, as-built component list, calibrated instrument log, utility verification sheets.",
  },
  {
    phase: "OQ",
    title: "Operational Qualification",
    subtitle: "Verification of functional capabilities and operational limits",
    focus:
      "Confirms that the equipment operates within defined operating ranges, alert thresholds, and safety interlocks under simulated production conditions.",
    activities: [
      "Verification of human-machine interface (HMI), pushbuttons, and alarms",
      "Safety interlock, emergency stop, and fail-safe shutdown testing",
      "Speed, temperature, pressure, and motor torque control across operating limits",
      "Power failure, power recovery, and data retention behavior testing",
      "Standard operating procedure (SOP) draft verification and operator safety checks",
      "Critical alarm generation and boundary parameter challenge testing",
    ],
    deliverables: "Executed OQ protocol, test execution challenge logs, alarm matrix verification, operational boundary evidence.",
  },
  {
    phase: "PQ",
    title: "Performance Qualification",
    subtitle: "Demonstration of consistent performance under process conditions",
    focus:
      "Demonstrates that the equipment performs consistently and reproducibly under routine operating conditions using actual process materials or approved simulant media.",
    activities: [
      "Testing over multiple consecutive batches or operational cycles",
      "Thermal mapping and temperature distribution/penetration under loaded conditions",
      "Product quality attribute consistency (e.g., tablet hardness, weight variation, friability)",
      "Yield recovery, filling weight accuracy, and reject mechanism verification",
      "Worst-case batch size and maximum cycle duration challenge testing",
      "Statistical evaluation of process capability and repeatability",
    ],
    deliverables: "Executed PQ protocol, analytical test results, thermal mapping profiles, qualification summary report.",
  },
];

const equipmentExamples = [
  {
    name: "Autoclaves & Steam Sterilizers",
    category: "Sterile & Thermal Processing",
    scope: "Empty chamber heat distribution, loaded chamber heat penetration (F0 calculation), biological indicator challenge, Bowie-Dick vacuum leak tests.",
  },
  {
    name: "Tablet Presses & Capsule Fillers",
    category: "Solid Oral Dosage",
    scope: "Turret speed ranges, compression force monitoring, feeder dosing accuracy, tablet weight/thickness uniformity, reject gate timing.",
  },
  {
    name: "Vial & Ampoule Filling Lines",
    category: "Sterile Liquid Processing",
    scope: "Peristaltic/piston pump dispensing precision, nitrogen purging rates, stoppering seating, aluminum crimp seal integrity, particulate controls.",
  },
  {
    name: "Freeze Dryers (Lyophilizers)",
    category: "Biologics & Injectables",
    scope: "Shelf temperature uniformity, condenser cooling rates, vacuum pull-down and leak rate tests, SIP/CIP cycle qualification.",
  },
  {
    name: "HPLC & Chromatography Systems",
    category: "QC Analytical Instruments",
    scope: "Flow rate accuracy and precision, column compartment temperature control, detector wavelength accuracy, autosampler carryover, injection repeatability.",
  },
  {
    name: "Mixing Vessels & Granulators",
    category: "Formulation & Processing",
    scope: "Impeller and chopper speed verification, jacket heating/cooling rates, load cell weighing accuracy, spray nozzle distribution, CIP spray ball coverage.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Equipment Review",
    description:
      "Examine manufacturer manuals, engineering specifications (URS/FDS), P&IDs, calibration records, and regulatory risk factors to define the qualification strategy.",
  },
  {
    number: "02",
    title: "Protocol Development",
    description:
      "Draft custom IQ, OQ, and PQ protocols specifying test scripts, clear acceptance criteria, sampling plans, calibrated test equipment needs, and prerequisite sign-offs.",
  },
  {
    number: "03",
    title: "IQ Activities",
    description:
      "Perform physical inspections, verify utility connections, confirm materials of construction, record instrument calibration status, and document component installations.",
  },
  {
    number: "04",
    title: "OQ Activities",
    description:
      "Execute operational challenges across normal and boundary ranges, verify safety alarms and interlocks, test power-loss responses, and verify operational SOP steps.",
  },
  {
    number: "05",
    title: "PQ & Reporting",
    description:
      "Support performance testing under loaded conditions, evaluate product quality metrics, investigate deviations, compile raw data packages, and finalize the Qualification Report.",
  },
];

const faqs = [
  {
    q: "What do IQ, OQ, and PQ mean in pharmaceutical equipment qualification?",
    a: "IQ (Installation Qualification) verifies that the equipment and all ancillary utilities are installed according to manufacturer specifications and design criteria. OQ (Operational Qualification) verifies that the equipment operates as intended across all operational ranges, including boundary limits and safety interlocks. PQ (Performance Qualification) demonstrates that the equipment consistently produces results meeting predetermined quality specifications under real production conditions.",
  },
  {
    q: "How is the qualification scope determined for different types of equipment?",
    a: "The qualification scope is determined through a formal risk assessment (e.g., GAMP 5 and Annex 15 principles) based on the equipment's direct impact on product quality, patient safety, and process criticality. Simple auxiliary equipment may require only verified commissioning and an IQ/OQ protocol, whereas critical processing units like sterile filling lines or autoclaves require full IQ, OQ, and exhaustive multi-cycle PQ with thermal mapping.",
  },
  {
    q: "How are deviations managed during qualification protocol execution?",
    a: "Any result or parameter that does not meet the predefined protocol acceptance criteria is immediately logged as a formal deviation. The deviation is categorized by risk (minor, major, or critical), thoroughly investigated to determine root cause, and resolved through corrective action, recalibration, or protocol amendment before the qualification summary report can be approved.",
  },
  {
    q: "What role does instrument calibration play in equipment qualification?",
    a: "Calibrated instrumentation is the bedrock of valid qualification data. All critical instruments attached to the equipment (such as temperature probes, pressure transducers, flow meters, and timers), as well as all external test instruments used by qualification engineers (such as wireless temperature loggers or tachometers), must have valid, traceable calibration certificates prior to initiating OQ or PQ testing.",
  },
  {
    q: "Can Qualyzen assist with legacy equipment or re-qualification following relocation?",
    a: "Yes. Qualyzen assists pharmaceutical manufacturers with retrospective qualification for legacy machines lacking complete historical documentation, as well as requalification support when equipment is relocated, overhauled, or subjected to major engineering modifications. We begin with a documentation and physical gap assessment, followed by customized protocols targeted at proving continued fitness for intended use.",
  },
];

export default function EquipmentQualificationSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Equipment Qualification Support",
              "Comprehensive pharmaceutical equipment qualification support covering IQ, OQ, and PQ protocol generation, execution guidance, deviation management, and regulatory compliance.",
              "/validations/equipment-qualification-support"
            )
          ),
        }}
      />

      <PageHero
        eyebrow="Validation Services"
        headline="Equipment Qualification Support"
        subtext="Independent qualification support for pharmaceutical manufacturing, packaging, and laboratory equipment—delivering robust IQ, OQ, and PQ protocols, execution oversight, and audit-ready reports."
        breadcrumbs={[
          { label: "Validations", href: "/validations" },
          { label: "Equipment Qualification Support", href: "/validations/equipment-qualification-support" },
        ]}
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Us"
        ctaSecondaryHref="/contact-us"
      />

      {/* Overview section */}
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
                Lifecycle Approach
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
                The Pharmaceutical Qualification Framework
              </h2>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                Equipment qualification is an essential requirement under WHO GMP, EU GMP Annex 15, and
                FDA guidance. It establishes documented evidence that manufacturing and laboratory equipment
                is correctly installed, operates predictably across designated operational ranges, and consistently
                yields medicinal products that meet predefined quality specifications.
              </p>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginBottom: "1rem",
                }}
              >
                At Qualyzen, we help pharmaceutical manufacturers, CDMOs, and biotech facilities plan and execute
                qualification programs with structured protocols, well-defined acceptance criteria, and thorough
                evidence packages that satisfy domestic and international regulatory audits.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
                Our engineers bridge the gap between engineering handover and quality assurance release, ensuring
                every mechanical, electrical, and control facet is rigorously challenged.
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
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
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
                    <ShieldCheck size={20} />
                  </div>
                  <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", margin: 0 }}>
                    Qualification Deliverables
                  </h3>
                </div>

                {[
                  "Design Qualification (DQ) review and URS traceability",
                  "Installation Qualification (IQ) protocols and execution logs",
                  "Operational Qualification (OQ) protocols and challenge scripts",
                  "Performance Qualification (PQ) protocols with sampling regimens",
                  "Critical instrumentation calibration verification logs",
                  "Formal deviation logging, investigation, and CAPA resolution",
                  "Post-execution data compilation and trace matrix updates",
                  "Final Qualification Summary Reports (QSR) for QA sign-off",
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IQ / OQ / PQ Breakdown Table / Cards */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "720px", marginInline: "auto" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              The 3-Phase Structure
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.875rem",
              }}
            >
              IQ, OQ, and PQ: Activities & Evidence
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              A systematic qualification hierarchy ensures foundational physical integrity before functional
              parameters are tested, and functional stability before routine process performance is evaluated.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "1.75rem",
            }}
          >
            {qualificationStages.map((stage) => (
              <div
                key={stage.phase}
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "var(--shadow-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 900,
                      color: "var(--color-teal)",
                      background: "var(--color-teal-muted)",
                      padding: "0.35rem 0.85rem",
                      borderRadius: "var(--radius-md)",
                    }}
                  >
                    {stage.phase}
                  </span>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase" }}>
                    Stage {stage.phase === "IQ" ? "1" : stage.phase === "OQ" ? "2" : "3"}
                  </span>
                </div>

                <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
                  {stage.title}
                </h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-teal-dark)", fontWeight: 600, marginBottom: "1rem" }}>
                  {stage.subtitle}
                </p>

                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  {stage.focus}
                </p>

                <div style={{ marginBottom: "1.5rem", flex: 1 }}>
                  <h4
                    style={{
                      fontSize: "var(--text-xs)",
                      fontWeight: 700,
                      color: "var(--color-heading)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Core Verification Activities
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {stage.activities.map((act, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "var(--text-xs)", color: "var(--color-body)" }}>
                        <span style={{ color: "var(--color-teal)", fontWeight: 700, flexShrink: 0 }}>•</span>
                        <span style={{ lineHeight: 1.5 }}>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: "var(--color-bg)",
                    borderTop: "1px solid var(--color-border)",
                    padding: "1rem",
                    borderRadius: "var(--radius-md)",
                    marginTop: "auto",
                  }}
                >
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-navy)", display: "block", marginBottom: "0.25rem" }}>
                    Documented Evidence:
                  </span>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.5 }}>
                    {stage.deliverables}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Scope Note Banner */}
          <div
            style={{
              marginTop: "2.5rem",
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderLeft: "4px solid var(--color-teal)",
              borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
              padding: "1.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <Sparkles size={22} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
            <div>
              <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
                Important Note on Project Scoping
              </h4>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", margin: 0, lineHeight: 1.6 }}>
                The exact qualification stages, depth of testing, and challenge criteria depend entirely on equipment
                risk criticality, direct vs indirect product contact, regulatory classification, and the specific
                scope agreed between your Quality Assurance team and Qualyzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Examples */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "680px", marginInline: "auto" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Practical Applications
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.875rem",
              }}
            >
              Equipment Qualification Examples
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              Qualyzen supports qualification protocols and testing across a broad spectrum of pharmaceutical
              manufacturing and QC laboratory instrumentation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {equipmentExamples.map((item) => (
              <div
                key={item.name}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.5rem",
                    background: "var(--color-teal-muted)",
                    color: "var(--color-teal-dark)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    borderRadius: "var(--radius-full)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {item.category}
                </span>
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, margin: 0 }}>
                  <strong style={{ color: "var(--color-heading)" }}>Typical Qualification Scope:</strong> {item.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Development & Deviation Management */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
            className="two-col-grid"
          >
            {/* Protocol Development */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.25rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-teal-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-teal)",
                  marginBottom: "1.25rem",
                }}
              >
                <FileCheck size={22} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>
                Qualification Protocol Development
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
                A successful qualification campaign begins with a meticulously drafted protocol. Qualyzen authors
                rigorous, custom protocols aligned with your internal Site Master Plan and applicable pharmacopeial
                standards (USP/EP/IP).
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Clear objective, scope, and system boundary definitions",
                  "Defined prerequisites (utilities, calibration, SOP drafts)",
                  "Step-by-step test instructions with expected visual and measured outcomes",
                  "Unambiguous quantitative and qualitative acceptance criteria",
                  "Pre-approved data recording sheets and sampling matrices",
                  "Formal multi-departmental pre-execution sign-off blocks",
                ].map((pt, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "var(--text-xs)", color: "var(--color-body)" }}>
                    <CheckCircle2 size={14} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deviations & Acceptance Criteria */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.25rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(217, 119, 6, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-warning)",
                  marginBottom: "1.25rem",
                }}
              >
                <AlertTriangle size={22} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>
                Deviation & Acceptance Criteria Management
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
                When test measurements fall outside predetermined parameters or unexpected equipment behavior occurs,
                a formal deviation management process is triggered immediately to preserve regulatory integrity.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Immediate logging with protocol test case reference and timestamp",
                  "Impact classification: Minor (non-critical), Major, or Critical",
                  "Root cause investigation in collaboration with facility engineers",
                  "Definition of corrective action (e.g., re-calibration, mechanical tuning)",
                  "Structured re-testing protocol and documented acceptance verification",
                  "Formal QA concurrence and justification prior to protocol closure",
                ].map((pt, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "var(--text-xs)", color: "var(--color-body)" }}>
                    <CheckCircle2 size={14} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ lineHeight: 1.5 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "680px", marginInline: "auto" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Our Approach
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.875rem",
              }}
            >
              5-Step Equipment Qualification Workflow
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
              From initial technical review through to operational handover, our team ensures seamless execution
              at each qualification gateway.
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
                Commissioning & Qualification
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                  fontWeight: 800,
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                Upgrading or installing new pharmaceutical equipment?
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
                Share your equipment technical sheets, P&IDs, and regulatory targets with our specialists. We will
                craft a tailored qualification proposal aligned with your commissioning timetable.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/request-quote" className="btn-primary">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <Link href="/contact-us" className="btn-ghost-white">
                Contact Technical Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Common Queries
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
              Key answers about equipment qualification methodologies, deviations, and regulatory compliance.
            </p>
          </div>
          <AccordionFaq items={faqs} />
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/request-quote" className="btn-primary">
              Discuss Your Qualification Scope <ArrowRight size={16} />
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
