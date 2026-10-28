import React from "react";
import { ProcessSteps } from "@/components/shared/ProcessSteps";

const steps = [
  {
    number: "01",
    title: "Understand Requirements",
    description:
      "We discuss your equipment, system, documentation needs, applicable regulatory context, and client quality procedures to establish a clear project basis.",
  },
  {
    number: "02",
    title: "Assess Systems and Risks",
    description:
      "We review the system or equipment, assess intended use, identify applicable risks, and determine the appropriate validation or qualification approach.",
  },
  {
    number: "03",
    title: "Plan and Execute Activities",
    description:
      "A project-specific plan is agreed with the client. Testing and assessment activities are then executed following agreed protocols and procedures.",
  },
  {
    number: "04",
    title: "Document Evidence and Findings",
    description:
      "Test results, observations, deviations, and supporting evidence are carefully documented in accordance with the agreed scope and quality requirements.",
  },
  {
    number: "05",
    title: "Deliver Reports and Discuss Next Steps",
    description:
      "Final reports, qualification documentation, and deliverables are provided. Results and any outstanding items are discussed with the client team.",
  },
];

export function HowWeWork() {
  return (
    <section
      style={{
        background: "var(--color-bg)",
        paddingBlock: "5rem",
      }}
    >
      <div className="container-site">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex", justifyContent: "center" }}>
            Project Approach
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "var(--color-heading)", lineHeight: 1.2, marginBottom: "0.875rem" }}>
            How We Work
          </h2>
          <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
            The precise scope and deliverables for each engagement are agreed with the
            client before work begins. Our structured approach ensures clear communication,
            organised documentation, and transparent project delivery.
          </p>
        </div>

        {/* Steps */}
        <ProcessSteps steps={steps} variant="horizontal" />
      </div>
    </section>
  );
}
