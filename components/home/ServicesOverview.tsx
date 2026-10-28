import React from "react";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Cpu, Table, FlaskConical, Bot } from "lucide-react";

const services = [
  {
    icon: <Cpu size={22} />,
    title: "CSV & PLC Validation",
    description:
      "Structured validation of computerized systems including PLC, HMI, SCADA, and automation equipment. Covers risk assessment, requirements traceability, and test evidence documentation.",
    highlights: [
      "Functional and risk-based assessment",
      "Requirements and traceability matrix",
      "Validation protocols and final reports",
    ],
    href: "/validations/csv-plc-validation",
  },
  {
    icon: <Table size={22} />,
    title: "Excel Sheet Validation",
    description:
      "GxP-critical spreadsheet validation covering formula verification, input/output checks, access controls, and full documentation aligned to intended use and risk level.",
    highlights: [
      "Formula and calculation verification",
      "Boundary and negative test cases",
      "Traceability and test evidence records",
    ],
    href: "/validations/excel-sheet-validation",
  },
  {
    icon: <FlaskConical size={22} />,
    title: "Equipment Qualification Support",
    description:
      "Support for IQ, OQ, and PQ activities for pharmaceutical manufacturing and laboratory equipment. Scope and approach are agreed based on equipment risk and intended use.",
    highlights: [
      "Installation and operational qualification",
      "Acceptance criteria and protocol development",
      "Deviation records and qualification reports",
    ],
    href: "/validations/equipment-qualification-support",
  },
  {
    icon: <Bot size={22} />,
    title: "Artificial Intelligence",
    description:
      "AI-assisted documentation tools for pharmaceutical validation workflows—including document classification, knowledge retrieval, and report drafting support with human review checkpoints.",
    highlights: [
      "AI-assisted document workflows",
      "Validation evidence organisation",
      "Human review and approval at every stage",
    ],
    href: "/validations/artificial-intelligence",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container-site">
        {/* Section header */}
        <div style={{ marginBottom: "3rem", maxWidth: "640px" }}>
          <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
            Our Validation Services
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--color-heading)",
              lineHeight: 1.2,
              marginBottom: "0.875rem",
            }}
          >
            Validation Support Built Around{" "}
            <span className="text-gradient-teal">Your Operations</span>
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
            Each engagement is scoped to your specific equipment, systems, risk
            level, and quality requirements—providing structured documentation and
            professional support across the project lifecycle.
          </p>
        </div>

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
