"use client";

import React from "react";
import { CheckSquare, FileSearch, Target, MessageSquareText, AlertTriangle, Users } from "lucide-react";

const benefits = [
  {
    icon: <CheckSquare size={22} />,
    title: "Structured Project Execution",
    description:
      "Each engagement follows a defined project structure with clear milestones, scope agreement, and organised delivery—so your team knows what to expect at every stage.",
  },
  {
    icon: <FileSearch size={22} />,
    title: "Clear Scope and Deliverables",
    description:
      "Deliverables are agreed upfront. You receive documentation that is specific to your system, your risk level, and your quality requirements—not generic templates.",
  },
  {
    icon: <Target size={22} />,
    title: "Organised Documentation",
    description:
      "Structured records, traceable evidence, and well-organised report formats support your internal quality system and are available for review when needed.",
  },
  {
    icon: <MessageSquareText size={22} />,
    title: "Technical Communication",
    description:
      "We communicate findings, observations, and project status clearly. Technical matters are explained in a way that supports your team's decision-making.",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Risk-Based Assessment",
    description:
      "Activities are prioritised and scoped according to the risk and criticality of the system or equipment—ensuring effort is applied where it adds the most value.",
  },
  {
    icon: <Users size={22} />,
    title: "Support for Client Quality Teams",
    description:
      "We work alongside your QA, engineering, and validation teams—not as a replacement for them—providing technical support and structured documentation for your own quality system.",
  },
];

export function WhyQualyzen() {
  return (
    <section
      style={{
        background: "var(--color-bg-card)",
        paddingBlock: "5rem",
      }}
    >
      <div className="container-site">
        {/* Header */}
        <div style={{ marginBottom: "3rem", maxWidth: "640px" }}>
          <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
            Why Qualyzen
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--color-heading)", lineHeight: 1.2, marginBottom: "0.875rem" }}>
            What We Bring to Your Validation Projects
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7 }}>
            Qualyzen focuses on delivering structured, honest, technically sound
            validation support—without overpromising outcomes or regulatory results
            that depend on factors beyond our control.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                padding: "1.75rem",
                background: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-teal)";
                el.style.boxShadow = "0 4px 20px rgba(19,168,158,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-border)";
                el.style.boxShadow = "none";
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
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem", lineHeight: 1.3 }}>
                {benefit.title}
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
