import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { AccordionFaq } from "@/components/shared/AccordionFaq";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { FinalCta } from "@/components/home/FinalCta";
import { ArrowRight, CheckCircle2, Shield, FileText, AlertTriangle, Database, Lock, GitBranch } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "CSV & PLC Validation Services | Qualyzen",
  description:
    "Qualyzen provides computerized system validation (CSV) and PLC, HMI, SCADA validation services for pharmaceutical manufacturers—covering risk assessment, requirements traceability, test protocols, and structured documentation.",
  path: "/validations/csv-plc-validation",
  keywords: [
    "CSV validation pharmaceutical",
    "PLC validation pharma",
    "SCADA validation",
    "HMI validation",
    "computerized system validation",
    "21 CFR Part 11",
    "GAMP 5 validation",
    "pharmaceutical automation validation",
  ],
});

const processSteps = [
  { number: "01", title: "Project Scoping", description: "Define system boundaries, intended use, and regulatory context. Agree on project scope and deliverables with your quality team." },
  { number: "02", title: "Risk Assessment", description: "Assess system risk, criticality, and functional impact. Use a risk-based approach to prioritise validation activities." },
  { number: "03", title: "Requirements Definition", description: "Document user requirements and functional specifications. Build a requirements traceability matrix linking requirements to test cases." },
  { number: "04", title: "Protocol Development", description: "Prepare validation protocols, test scripts, and acceptance criteria aligned to agreed requirements and risk level." },
  { number: "05", title: "Testing & Evidence", description: "Execute test cases, record results, and document observed evidence. Manage deviations formally within the agreed process." },
  { number: "06", title: "Report & Closure", description: "Prepare validation summary report. Review outstanding items and deviations. Obtain required approvals and close the project." },
];

const faqs = [
  { q: "What systems does CSV validation apply to?", a: "CSV applies to computerized systems used in GxP-regulated processes, including PLC, HMI, SCADA, batch management software, process control systems, data acquisition systems, and related automation equipment. The applicable validation approach depends on system risk, intended use, and the regulatory requirements of your facility." },
  { q: "What regulatory references are relevant to CSV?", a: "Relevant guidance includes GAMP 5 (A Risk-Based Approach to Compliant GxP Computerized Systems), FDA 21 CFR Part 11 (Electronic Records; Electronic Signatures), EU GMP Annex 11 (Computerised Systems), and applicable ICH guidelines. The appropriate references for your project depend on your facility's markets and applicable regulations. Qualyzen does not claim formal accreditation against these standards." },
  { q: "What is included in a typical CSV project?", a: "A typical CSV project may include: project scoping and requirements gathering, risk assessment, user requirements specification (URS) review, functional specification (FS) review, validation plan preparation, test protocol development, test execution and evidence collection, deviation management, and preparation of a validation summary report. The exact scope is agreed with the client." },
  { q: "Can you validate a PLC that has already been installed and running?", a: "Yes. We can assist with retrospective validation of existing PLC systems, including gap assessments against current requirements, documentation remediation, and supplementary testing as appropriate. The feasibility depends on the system configuration, available documentation, and agreed scope." },
  { q: "What is a traceability matrix?", a: "A requirements traceability matrix (RTM) links each user requirement or risk to one or more test cases, and records whether each test was completed satisfactorily. It provides documented evidence that all defined requirements have been tested and demonstrates that the validation was systematic and complete." },
  { q: "How does data integrity relate to CSV?", a: "Data integrity is a key consideration in CSV. The validation process should confirm that the system generates, stores, and transmits data accurately, securely, and in a manner that supports audit trail, traceability, and compliance with applicable data integrity expectations such as ALCOA+ principles." },
];

const scopeItems = [
  { icon: <Shield size={18} />, title: "Risk Assessment", desc: "Risk identification, classification, and prioritisation using a structured risk matrix appropriate to system complexity." },
  { icon: <GitBranch size={18} />, title: "Requirements Traceability", desc: "User requirements, functional specifications, and test case linkage documented in a formal traceability matrix." },
  { icon: <FileText size={18} />, title: "Validation Protocols", desc: "IQ, OQ, and PQ protocols tailored to the system type, risk level, and applicable regulatory references." },
  { icon: <Database size={18} />, title: "Data Integrity", desc: "Audit trail review, access control verification, and data accuracy checks aligned to ALCOA+ principles." },
  { icon: <Lock size={18} />, title: "Access & Security", desc: "User access management, role-based permissions, and system security configuration review and testing." },
  { icon: <AlertTriangle size={18} />, title: "Deviation Management", desc: "Formal recording, investigation, and closure of deviations identified during testing, with risk-based impact assessment." },
];

export default function CsvPlcValidationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd("CSV & PLC Validation", "Computerized system validation for PLC, HMI, SCADA, and pharmaceutical automation systems.", "/validations/csv-plc-validation")) }}
      />

      <PageHero
        eyebrow="Validation Services"
        headline="CSV & PLC Validation"
        subtext="Structured computerized system validation for PLC, HMI, SCADA, and automation systems in pharmaceutical manufacturing—covering risk assessment, requirements traceability, testing, and documentation."
        breadcrumbs={[{ label: "Validations", href: "/validations" }, { label: "CSV & PLC Validation", href: "/validations/csv-plc-validation" }]}
        ctaLabel="Request a Quote"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Us"
        ctaSecondaryHref="/contact-us"
      />

      {/* Overview */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="two-col-grid">
            <div>
              <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>Overview</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "1rem" }}>
                What is Computerized System Validation?
              </h2>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
                Computerized System Validation (CSV) is the documented process of providing evidence that
                a computerized system consistently performs as intended and in a manner that is suitable
                for its intended use in a GxP-regulated environment.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
                In pharmaceutical manufacturing, computerized systems including PLC (Programmable Logic
                Controllers), HMI (Human-Machine Interfaces), SCADA (Supervisory Control and Data
                Acquisition) systems, and batch management software often directly or indirectly affect
                product quality, patient safety, or data integrity.
              </p>
              <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
                A well-executed CSV programme ensures that these systems are properly assessed,
                tested against defined requirements, and supported by structured documentation
                that can withstand regulatory scrutiny.
              </p>
            </div>
            <div>
              <div style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "2rem" }}>
                <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "1rem" }}>Applicable System Types</h3>
                {[
                  "PLC and programmable automation controllers",
                  "HMI and operator interface systems",
                  "SCADA and supervisory control systems",
                  "Batch management and recipe control software",
                  "Process data historians and logging systems",
                  "Building management systems (BMS) — where GxP applicable",
                  "Environmental monitoring systems",
                  "Laboratory instrument software interfaces",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem" }}>
                    <CheckCircle2 size={14} color="var(--color-teal)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-body)" }}>{item}</span>
                  </div>
                ))}
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginTop: "1rem", fontStyle: "italic" }}>
                  The applicable validation approach for each system type depends on intended use, risk level, and project scope agreed with the client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory context */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>
              Regulatory and Industry Guidance
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
              CSV activities in pharmaceutical environments are informed by several regulatory and industry guidelines. Qualyzen supports projects with reference to these frameworks but does not claim formal accreditation or certification against them.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              { ref: "GAMP 5", title: "Risk-Based Approach", desc: "Industry guidance from ISPE providing a risk-based framework for GxP computerized system validation. Qualyzen uses GAMP principles as a reference framework for scoping and categorising systems." },
              { ref: "21 CFR Part 11", title: "Electronic Records & Signatures", desc: "US FDA regulation covering electronic records and electronic signatures in GxP systems. Relevant for systems used by facilities targeting or operating in the US market." },
              { ref: "EU GMP Annex 11", title: "Computerised Systems (EU)", desc: "EU GMP guidance covering the validation and maintenance of computerized systems in pharmaceutical manufacturing environments in Europe." },
              { ref: "ALCOA+", title: "Data Integrity Principles", desc: "Data integrity framework ensuring data is Attributable, Legible, Contemporaneous, Original, Accurate—and additionally Complete, Consistent, Enduring, and Available." },
            ].map((item) => (
              <div key={item.ref} style={{ padding: "1.5rem", background: "var(--color-bg-card)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                <span style={{ display: "inline-block", padding: "0.2rem 0.625rem", background: "var(--color-teal-muted)", color: "var(--color-teal-dark)", fontSize: "var(--text-xs)", fontWeight: 700, borderRadius: "var(--radius-full)", marginBottom: "0.625rem" }}>{item.ref}</span>
                <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.375rem" }}>{item.title}</h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of service */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>Scope of CSV & PLC Validation Support</h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>The following activities may be included in a project, depending on the agreed scope:</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {scopeItems.map((item) => (
              <div key={item.title} style={{ padding: "1.5rem", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.625rem", color: "var(--color-teal)" }}>
                  {item.icon}
                  <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", margin: 0 }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>Engagement Process</h2>
          </div>
          <ProcessSteps steps={processSteps} variant="vertical" />
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site" style={{ maxWidth: "780px" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
          <AccordionFaq items={faqs} />
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/request-quote" className="btn-primary">Request a Quote <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <FinalCta />
      <style>{`.two-col-grid { @media (max-width: 1023px) { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
