import React from "react";

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h10M7 11h6" />
      </svg>
    ),
    title: "Equipment Validation & Qualification",
    description:
      "Structured IQ, OQ, and PQ support for pharmaceutical manufacturing and laboratory equipment based on intended use and applicable requirements.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M12 11V7a4 4 0 0 0-8 0v4" />
        <circle cx="12" cy="16" r="1" />
        <path d="M7 3h10M5 7h14" />
      </svg>
    ),
    title: "CSV & PLC System Validation",
    description:
      "Computerized system validation for PLC, HMI, SCADA, and automation systems—covering risk assessment, requirements traceability, and documented test evidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
        <path d="M12 13h4M12 16h4M12 19h2" />
      </svg>
    ),
    title: "Excel Spreadsheet Validation",
    description:
      "Validation of GxP-critical spreadsheets: formula verification, boundary testing, access controls, and documentation supporting traceability.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "28px", height: "28px" }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <path d="M8 13h8M8 17h6M8 9h2" />
      </svg>
    ),
    title: "Technical Documentation & Reporting",
    description:
      "Structured validation plans, protocols, test evidence, deviation records, traceability matrices, and final reports aligned to project scope.",
  },
];

export function CapabilityHighlights() {
  return (
    <section
      style={{
        background: "var(--color-bg-card)",
        paddingBlock: "3.5rem",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          {capabilities.map((cap, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              {/* Icon */}
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
                  flexShrink: 0,
                }}
              >
                {cap.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    marginBottom: "0.375rem",
                    lineHeight: 1.3,
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-body)",
                    lineHeight: 1.6,
                  }}
                >
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
