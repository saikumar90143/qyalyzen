import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0a1829 0%, var(--color-navy) 45%, #1a3558 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Hero"
    >
      {/* Grid overlay */}
      <div
        className="hero-grid-bg"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "28rem",
          height: "28rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(19,168,158,0.12) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "20rem",
          height: "20rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(19,168,158,0.07) 0%, transparent 70%)",
          zIndex: 0,
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Text content */}
          <div>
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1.5rem",
                padding: "0.375rem 0.875rem",
                background: "rgba(19,168,158,0.15)",
                border: "1px solid rgba(19,168,158,0.3)",
                borderRadius: "var(--radius-full)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--color-teal)",
                  animation: "pulse-teal 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-teal-light)",
                }}
              >
                Pharmaceutical Validation & Engineering Support
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                color: "var(--color-white)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              Confidence in Every{" "}
              <span className="text-gradient-teal">Validation.</span>
              <br />
              Clarity in Every{" "}
              <span style={{ color: "rgba(255,255,255,0.85)" }}>Report.</span>
            </h1>

            {/* Supporting copy */}
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "520px",
              }}
            >
              Qualyzen supports pharmaceutical manufacturers with equipment
              validation, computerized system assessment, qualification
              activities, and structured technical documentation—helping teams
              build confidence in their processes and records.
            </p>

            {/* CTAs */}
            <div
              className="btn-responsive-group"
              style={{ marginBottom: "2.5rem" }}
            >
              <Link href="/request-quote" className="btn-primary" style={{ fontSize: "var(--text-base)", padding: "0.875rem 2rem" }}>
                Request a Quote
                <ArrowRight size={18} />
              </Link>
              <Link href="/validations" className="btn-ghost-white" style={{ fontSize: "var(--text-base)", padding: "0.875rem 2rem" }}>
                Explore Our Services
              </Link>
            </div>

            {/* Trust statement */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <Shield size={16} color="var(--color-teal)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>
                Precision-led assessments. Structured documentation. Professional support.
              </p>
            </div>
          </div>

          {/* Right: Pharma visual composition */}
          <div className="hero-visual" aria-hidden="true">
            <HeroVisual />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-visual {
            display: flex !important;
            justify-content: center !important;
            max-width: 520px;
            margin: 0 auto;
          }
        }
        @media (max-width: 767px) {
          .hero-visual {
            display: none !important;
          }
        }
        @keyframes pulse-teal {
          0%, 100% { box-shadow: 0 0 0 0 rgba(19, 168, 158, 0.4); }
          50% { box-shadow: 0 0 0 6px rgba(19, 168, 158, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "520px",
        margin: "0 auto",
      }}
    >
      {/* Main instrument illustration */}
      <div
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "var(--radius-xl)",
          padding: "2rem",
          backdropFilter: "blur(10px)",
          position: "relative",
          overflow: "hidden",
          animation: "float 6s ease-in-out infinite",
        }}
      >
        {/* Header bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
          </div>
          <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
            VALIDATION SYSTEM v2.4
          </span>
        </div>

        {/* System diagram */}
        <PharmaSystemDiagram />

        {/* Status indicators */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem", marginTop: "1.25rem" }}>
          {[
            { label: "System Status", value: "ASSESSED", color: "#22c55e" },
            { label: "Validation Stage", value: "IQ COMPLETE", color: "var(--color-teal)" },
            { label: "Protocol Ref", value: "VAL-2024-001", color: "rgba(255,255,255,0.7)" },
            { label: "Risk Level", value: "MEDIUM", color: "#f59e0b" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-md)",
                padding: "0.5rem 0.75rem",
              }}
            >
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: item.color, fontFamily: "monospace" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating doc card */}
      <div
        style={{
          position: "absolute",
          bottom: "-1.5rem",
          left: "-2rem",
          background: "var(--color-bg-card)",
          borderRadius: "var(--radius-lg)",
          padding: "0.875rem 1rem",
          boxShadow: "var(--shadow-modal)",
          minWidth: "180px",
          animation: "float 7s ease-in-out infinite 0.5s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.375rem" }}>
          <div style={{ width: "20px", height: "24px", background: "var(--color-teal)", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "10px", height: "2px", background: "white", borderRadius: "1px" }} />
          </div>
          <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-heading)" }}>Validation Report</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {["Protocol reviewed", "Tests executed", "Deviations logged"].map((line) => (
            <div key={line} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              <span style={{ fontSize: "9px", color: "var(--color-body)" }}>{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating compliance card */}
      <div
        style={{
          position: "absolute",
          top: "-1rem",
          right: "-1.5rem",
          background: "var(--color-navy)",
          border: "1px solid rgba(19,168,158,0.3)",
          borderRadius: "var(--radius-lg)",
          padding: "0.875rem 1rem",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          animation: "float 8s ease-in-out infinite 1s",
        }}
      >
        <div style={{ fontSize: "9px", color: "var(--color-teal)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>
          Documentation
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {["Validation Plan", "Test Protocol", "Final Report"].map((doc, i) => (
            <div key={doc} style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <ChevronRight size={8} color={i === 1 ? "var(--color-teal)" : "rgba(255,255,255,0.4)"} />
              <span style={{ fontSize: "10px", color: i === 1 ? "white" : "rgba(255,255,255,0.5)", fontWeight: i === 1 ? 600 : 400 }}>{doc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PharmaSystemDiagram() {
  return (
    <svg
      viewBox="0 0 400 200"
      style={{ width: "100%", height: "auto" }}
      aria-hidden="true"
    >
      {/* Background grid */}
      <defs>
        <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#13A89E" />
          <stop offset="100%" stopColor="#1dcfc4" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#heroGrid)" rx="8" />

      {/* PLC Block */}
      <rect x="20" y="70" width="90" height="60" rx="6" fill="rgba(19,168,158,0.2)" stroke="rgba(19,168,158,0.5)" strokeWidth="1.5" />
      <text x="65" y="96" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontWeight="700">PLC</text>
      <text x="65" y="110" textAnchor="middle" fill="rgba(19,168,158,0.9)" fontSize="7">CONTROLLER</text>
      {/* LED indicators */}
      <circle cx="35" cy="118" r="3" fill="#22c55e" />
      <circle cx="45" cy="118" r="3" fill="#22c55e" />
      <circle cx="55" cy="118" r="3" fill="#f59e0b" />

      {/* HMI Block */}
      <rect x="155" y="40" width="90" height="80" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <rect x="163" y="50" width="74" height="50" rx="3" fill="rgba(19,168,158,0.12)" />
      <text x="200" y="72" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">SCADA / HMI</text>
      {/* Simulated graph */}
      <polyline points="170,95 180,85 192,90 205,78 218,82 230,74" fill="none" stroke="url(#tealGrad)" strokeWidth="1.5" />
      <text x="200" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7">DISPLAY</text>

      {/* Sensor Block */}
      <rect x="290" y="55" width="90" height="70" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <text x="335" y="82" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontWeight="700">SENSORS</text>
      {/* Sensor values */}
      <text x="305" y="97" fill="rgba(19,168,158,0.9)" fontSize="7">T: 22.4°C</text>
      <text x="305" y="107" fill="rgba(19,168,158,0.9)" fontSize="7">P: 1.013 bar</text>
      <text x="305" y="117" fill="rgba(255,255,255,0.5)" fontSize="7">pH: 7.2</text>

      {/* Connection lines */}
      <line x1="110" y1="100" x2="155" y2="80" stroke="url(#tealGrad)" strokeWidth="1.5" strokeDasharray="4,3" />
      <line x1="245" y1="80" x2="290" y2="90" stroke="url(#tealGrad)" strokeWidth="1.5" strokeDasharray="4,3" />

      {/* Data flow arrows */}
      <polygon points="152,79 145,73 145,85" fill="rgba(19,168,158,0.6)" />
      <polygon points="287,89 280,83 280,95" fill="rgba(19,168,158,0.6)" />

      {/* Bottom label */}
      <text x="200" y="185" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontStyle="italic">
        Pharmaceutical Automation System — Illustrative
      </text>
    </svg>
  );
}
