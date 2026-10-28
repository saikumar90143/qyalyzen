import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: "horizontal" | "vertical";
}

export function ProcessSteps({ steps, variant = "horizontal" }: ProcessStepsProps) {
  if (variant === "vertical") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "1.25rem", position: "relative" }}
          >
            {/* Connector line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    minHeight: "2rem",
                    background: "linear-gradient(180deg, var(--color-teal) 0%, var(--color-border) 100%)",
                    margin: "0.25rem 0",
                  }}
                />
              )}
            </div>
            {/* Content */}
            <div style={{ paddingBottom: index < steps.length - 1 ? "1.5rem" : "0", flex: 1 }}>
              <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.375rem" }}>
                {step.title}
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="process-steps-container">
      {/* Desktop view (>= 1024px) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          gap: "0",
          position: "relative",
        }}
        className="process-steps-desktop"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              padding: "0 0.875rem",
            }}
          >
            {/* Number bubble */}
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: "var(--color-teal)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "var(--text-sm)",
                fontWeight: 800,
                marginBottom: "1rem",
                position: "relative",
                zIndex: 2,
                boxShadow: "0 4px 12px rgba(19,168,158,0.3)",
              }}
            >
              {step.number}
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "calc(50% + 1.5rem)",
                  right: "calc(-50% + 1.5rem)",
                  height: "2px",
                  background: "linear-gradient(90deg, var(--color-teal) 0%, var(--color-border) 100%)",
                  zIndex: 1,
                }}
              />
            )}

            <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.375rem" }}>
              {step.title}
            </h4>
            <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet view (< 1024px) */}
      <div className="process-steps-mobile" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "1.25rem", position: "relative" }}
          >
            {/* Connector line */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  flexShrink: 0,
                  boxShadow: "0 3px 10px rgba(19,168,158,0.3)",
                }}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div
                  style={{
                    width: "2px",
                    flex: 1,
                    minHeight: "2.25rem",
                    background: "linear-gradient(180deg, var(--color-teal) 0%, var(--color-border) 100%)",
                    margin: "0.25rem 0",
                  }}
                />
              )}
            </div>
            {/* Content */}
            <div style={{ paddingBottom: index < steps.length - 1 ? "1.5rem" : "0", flex: 1 }}>
              <h4 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
                {step.title}
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .process-steps-desktop { display: grid !important; }
          .process-steps-mobile { display: none !important; }
        }
        @media (max-width: 1023px) {
          .process-steps-desktop { display: none !important; }
          .process-steps-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
