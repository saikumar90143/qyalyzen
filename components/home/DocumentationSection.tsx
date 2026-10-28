"use client";

import React from "react";
import { FileText, Info } from "lucide-react";

const documents = [
  {
    name: "Validation Plan",
    code: "VAL-PLN",
    lines: ["Project scope and objectives", "Risk classification", "Approach and methodology", "Deliverables and schedule"],
    color: "var(--color-teal)",
  },
  {
    name: "Test Protocol",
    code: "VAL-PRT",
    lines: ["Test cases and scripts", "Acceptance criteria", "Expected vs actual results", "Evidence attachment refs"],
    color: "#6366f1",
  },
  {
    name: "Traceability Matrix",
    code: "VAL-TRM",
    lines: ["Requirements listing", "Test case mapping", "Pass / Fail status", "Risk cross-reference"],
    color: "#0891b2",
  },
  {
    name: "Summary Report",
    code: "VAL-RPT",
    lines: ["Validation conclusions", "Deviation summary", "Open items register", "Final sign-off section"],
    color: "#059669",
  },
];

export function DocumentationSection() {
  return (
    <section
      className="bg-gradient-navy"
      style={{ paddingBlock: "5rem", position: "relative", overflow: "hidden" }}
    >
      {/* Grid overlay */}
      <div className="hero-grid-bg" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "flex-start" }} className="docs-grid">
          <div>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", color: "var(--color-teal-light)" }}>
              Documentation & Deliverables
            </span>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--color-white)", lineHeight: 1.2, marginBottom: "1rem" }}>
              Structured Records That Support Your Quality System
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The documentation package for each engagement is agreed during project scoping.
              Depending on the scope and nature of the project, deliverables may include
              assessment reports, validation plans and protocols, qualification documentation,
              test evidence, traceability matrices, deviation records, and summary reports.
            </p>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", padding: "0.875rem 1rem", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)" }}>
              <Info size={16} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                Sample documents shown below are <strong style={{ color: "rgba(255,255,255,0.85)" }}>illustrative only</strong> and do not represent actual client documents, audit certificates, or regulatory submissions.
              </p>
            </div>
          </div>

          {/* Document cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
            className="docs-cards-grid"
          >
            {documents.map((doc) => (
              <DocumentMockup key={doc.name} {...doc} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .docs-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 560px) {
          .docs-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function DocumentMockup({ name, code, lines, color }: {
  name: string;
  code: string;
  lines: string[];
  color: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        transition: "transform 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
      }}
    >
      {/* Doc top bar */}
      <div style={{ background: color, padding: "0.75rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FileText size={14} color="white" />
        <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "white", letterSpacing: "0.04em" }}>
          {name}
        </span>
      </div>
      {/* Doc lines */}
      <div style={{ padding: "0.875rem" }}>
        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace", marginBottom: "0.5rem" }}>
          {code}-2025-XXX — ILLUSTRATIVE
        </div>
        {lines.map((line, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.375rem" }}>
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: color, flexShrink: 0 }} />
            <span style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.6)", lineHeight: 1.3 }}>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
