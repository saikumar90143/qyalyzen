import React from "react";
import { AccordionFaq } from "@/components/shared/AccordionFaq";

const faqs = [
  {
    q: "What is pharmaceutical equipment validation?",
    a: "Pharmaceutical equipment validation is the documented process of demonstrating that a piece of equipment consistently performs within defined parameters and is suitable for its intended use. The appropriate validation activities—and the extent of documentation required—depend on the equipment's risk level, its impact on product quality, and the applicable quality and regulatory requirements of your organisation.",
  },
  {
    q: "What is CSV and PLC validation?",
    a: "Computerized System Validation (CSV) is the documented verification that a computerized system—such as a PLC, HMI, SCADA, or batch management system—consistently performs as intended. PLC (Programmable Logic Controller) validation specifically addresses the programming, configuration, and functional behaviour of industrial control systems. Both processes involve requirements definition, risk assessment, testing, deviation management, and the preparation of structured documentation.",
  },
  {
    q: "What is Excel spreadsheet validation?",
    a: "Excel spreadsheet validation is the structured process of demonstrating that a GxP-critical spreadsheet performs as intended. It typically includes verifying formulas, testing input and output values, checking boundary conditions, reviewing access controls, and documenting the results in a traceable manner. The scope and depth of validation depends on the spreadsheet's intended use and associated risk level.",
  },
  {
    q: "What is equipment qualification support?",
    a: "Equipment qualification support involves assisting pharmaceutical organisations in planning and executing qualification activities for manufacturing or laboratory equipment. Depending on the equipment and agreed scope, this may include Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). Qualyzen assists with protocol development, test execution coordination, deviation management, and final qualification reports.",
  },
  {
    q: "What information is needed for a quotation?",
    a: "To prepare a meaningful quotation, we typically need to understand: the type of equipment or system involved, its intended use in your process, the applicable regulatory or quality requirements, whether existing documentation is available, and the estimated scope of activities required. A short discussion or enquiry form submission is usually sufficient to begin the scoping conversation.",
  },
  {
    q: "Can Qualyzen assess existing or legacy equipment?",
    a: "Yes. Many pharmaceutical facilities have existing or legacy systems that may not have complete validation documentation. We can assist with retrospective assessments, gap analyses, and documentation remediation projects—subject to the specific equipment, risk level, and applicable requirements. The feasibility and scope of such projects are discussed during the initial scoping conversation.",
  },
  {
    q: "What documents can be provided after a project?",
    a: "The documentation package depends on the agreed project scope. Possible deliverables include: assessment reports, validation plans, test protocols, test evidence records, traceability matrices, deviation and non-conformance records, qualification summaries, and final validation reports. Specific deliverables are agreed with the client before work begins.",
  },
  {
    q: "How is the validation scope determined?",
    a: "Validation scope is determined based on a review of the equipment or system, its intended use, the associated risk level, the applicable regulatory and quality requirements, and the client's existing documentation and procedures. Qualyzen works with the client's quality and engineering teams to agree a risk-appropriate scope before any activities commence.",
  },
];

export function FaqSection() {
  return (
    <section
      style={{
        background: "var(--color-bg-card)",
        paddingBlock: "5rem",
      }}
    >
      <div className="container-site">
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-start" }} className="faq-grid">
          <div>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--color-heading)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Common Questions About Pharmaceutical Validation
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              If you don&apos;t see your question answered here, please contact us
              directly or submit a quote enquiry and we&apos;ll discuss your specific
              requirements.
            </p>
          </div>

          <AccordionFaq items={faqs} />
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
