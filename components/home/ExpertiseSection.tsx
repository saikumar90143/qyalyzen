import React from "react";
import { CheckCircle2 } from "lucide-react";

const expertiseItems = [
  {
    category: "Automation Systems",
    examples: [
      "PLC, HMI, SCADA, and industrial automation control systems",
      "Batch management and recipe control software",
      "Equipment operating parameters and functional checks",
      "Network infrastructure supporting regulated systems",
    ],
    note: "Assessment scope depends on intended use, criticality, and applicable regulatory context.",
  },
  {
    category: "Equipment Qualification",
    examples: [
      "Installation Qualification (IQ) — confirming correct installation",
      "Operational Qualification (OQ) — verifying system operates within specification",
      "Performance Qualification (PQ) — demonstrating consistent performance under conditions of use",
      "Supporting instrument calibration and documentation review",
    ],
    note: "The applicable qualification stages are determined by equipment risk, intended use, and client quality procedures.",
  },
  {
    category: "Spreadsheet & Software Tools",
    examples: [
      "GxP-critical Excel spreadsheets used in manufacturing or QC",
      "Formula and calculation verification",
      "Access controls and change-control considerations",
      "Data integrity checks and traceability documentation",
    ],
    note: "Validation scope and methodology are agreed with the client based on spreadsheet risk and intended use.",
  },
  {
    category: "Validation Documentation",
    examples: [
      "Requirements traceability and risk-based testing approaches",
      "Validation plans, protocols, and test scripts",
      "Evidence collection, deviation documentation, and closure",
      "Validation summary reports and final approval documentation",
    ],
    note: "All deliverables are defined during project scoping and agreed before work begins.",
  },
];

export function ExpertiseSection() {
  return (
    <section
      style={{
        background: "var(--color-bg-card)",
        paddingBlock: "5rem",
      }}
    >
      <div className="container-site">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="expertise-grid">
          {/* Left: Text */}
          <div>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Equipment & System Expertise
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--color-heading)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Pharmaceutical Equipment and Computerized Systems May Require Documented Assessment
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1rem" }}>
              The nature and extent of validation or qualification activities depends on the
              equipment's intended use, its potential impact on product quality, the risk level
              assigned, and the applicable regulatory or quality requirements of your organisation.
            </p>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Qualyzen works with pharmaceutical quality, engineering, and validation teams to
              plan appropriate activities, execute documented assessments, and prepare structured
              records that support your internal quality system.
            </p>
            <div
              style={{
                padding: "1rem 1.25rem",
                background: "var(--color-teal-muted)",
                borderLeft: "3px solid var(--color-teal)",
                borderRadius: "0 var(--radius-md) var(--radius-md) 0",
                fontSize: "var(--text-sm)",
                color: "var(--color-teal-dark)",
                lineHeight: 1.6,
              }}
            >
              <strong>Important:</strong> The terms &ldquo;validation,&rdquo; &ldquo;qualification,&rdquo; &ldquo;assessment,&rdquo; and &ldquo;verification&rdquo; have specific meanings. Qualyzen clearly distinguishes these activities when scoping each engagement.
            </div>
          </div>

          {/* Right: Expertise items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {expertiseItems.map((item) => (
              <div
                key={item.category}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.25rem",
                }}
              >
                <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.75rem" }}>
                  {item.category}
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "0.75rem" }}>
                  {item.examples.map((ex) => (
                    <li key={ex} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.5 }}>
                      <CheckCircle2 size={13} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {ex}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontStyle: "italic" }}>
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
