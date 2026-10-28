"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function FinalCta() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--color-teal-dark) 0%, var(--color-teal) 50%, #1dcfc4 100%)",
        paddingBlock: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          right: "-5rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "24rem",
          height: "24rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          left: "-3rem",
          bottom: "-3rem",
          width: "16rem",
          height: "16rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
        }}
        aria-hidden="true"
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 900,
            color: "var(--color-white)",
            lineHeight: 1.15,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Planning a Validation Project?
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "rgba(255,255,255,0.85)",
            maxWidth: "580px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Tell us about your equipment, computerized system, or documentation
          requirements. Our team can discuss the appropriate scope of support.
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link
            href="/request-quote"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--color-white)",
              color: "var(--color-teal-dark)",
              fontWeight: 700,
              fontSize: "var(--text-base)",
              padding: "0.875rem 2rem",
              borderRadius: "var(--radius-full)",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
            }}
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/contact-us"
            className="btn-ghost-white"
            style={{ fontSize: "var(--text-base)", padding: "0.875rem 2rem" }}
          >
            <Mail size={18} />
            Contact Qualyzen
          </Link>
        </div>
      </div>
    </section>
  );
}
