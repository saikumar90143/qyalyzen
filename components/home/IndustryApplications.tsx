"use client";

import React from "react";

const industries = [
  {
    icon: "💊",
    title: "Pharmaceutical Manufacturing",
    description:
      "Solid dose, liquid, parenteral, and topical pharmaceutical manufacturing facilities requiring equipment qualification and process system validation.",
  },
  {
    icon: "🧪",
    title: "Quality Control Laboratories",
    description:
      "QC laboratories using computerized analytical instruments, LIMS, and GxP-critical spreadsheets for product testing and release.",
  },
  {
    icon: "⚙️",
    title: "Engineering & Maintenance",
    description:
      "Engineering teams managing commissioning, qualification, and maintenance documentation for manufacturing equipment and automated systems.",
  },
  {
    icon: "🏭",
    title: "Formulation Operations",
    description:
      "Tablet compression, granulation, coating, filling, and packaging operations with associated PLC and automation control systems.",
  },
  {
    icon: "🔬",
    title: "Research & Development",
    description:
      "R&D environments using GxP-applicable spreadsheets, laboratory instruments, and data management systems requiring documented validation.",
  },
  {
    icon: "📋",
    title: "Quality Assurance Teams",
    description:
      "QA functions responsible for managing validation master plans, qualification oversight, and technical documentation control.",
  },
];

export function IndustryApplications() {
  return (
    <section
      style={{
        background: "var(--color-bg)",
        paddingBlock: "5rem",
      }}
    >
      <div className="container-site">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
            Industry Applications
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--color-heading)", lineHeight: 1.2, marginBottom: "0.875rem" }}>
            Regulated Environments We Support
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
            Qualyzen works with pharmaceutical manufacturers, quality teams, and
            engineering departments operating in regulated manufacturing and laboratory
            environments.
          </p>
        </div>

        {/* Industry grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {industries.map((industry) => (
            <div
              key={industry.title}
              style={{
                padding: "1.5rem",
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-teal)";
                el.style.boxShadow = "0 4px 16px rgba(19,168,158,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }} aria-hidden="true">
                {industry.icon}
              </div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.375rem" }}>
                {industry.title}
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
