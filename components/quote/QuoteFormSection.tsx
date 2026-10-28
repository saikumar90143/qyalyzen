"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quoteFormSchema,
  type QuoteFormData,
  SERVICE_LABELS,
  CONTACT_METHOD_LABELS,
} from "@/lib/schemas";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ShieldCheck,
  Clock,
  FileCheck,
  Lock,
} from "lucide-react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function QuoteFormSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: undefined,
      equipmentSystem: "",
      projectDescription: "",
      preferredContact: "email",
      consent: false,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitState("loading");
    setSubmitError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await response.json().catch(() => ({}));

      if (!response.ok) {
        setSubmitError(
          json.message || "Failed to submit quote request. Please try again or contact us directly."
        );
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      reset();
    } catch {
      setSubmitError(
        "A network communication error occurred. Please check your connection or contact our team directly."
      );
      setSubmitState("error");
    }
  };

  return (
    <section className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="quote-layout-grid"
        >
          {/* Main Form Column */}
          <div
            className="form-card-responsive"
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <span className="section-label" style={{ marginBottom: "0.5rem", display: "inline-flex" }}>
                Project Scoping Request
              </span>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "var(--color-heading)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.25,
                }}
              >
                Request a Detailed Validation Quotation
              </h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                Provide preliminary details regarding your equipment, automated systems, or documentation
                requirements. Our technical validation team will assess the scope and deliver a tailored proposal.
              </p>
            </div>

            {submitState === "success" ? (
              <div
                style={{
                  padding: "3.5rem 2rem",
                  textAlign: "center",
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "4.5rem",
                    height: "4.5rem",
                    borderRadius: "50%",
                    background: "var(--color-teal-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-teal)",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <CheckCircle2 size={40} />
                </div>
                <h3
                  style={{
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Quote Request Received
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-body)",
                    maxWidth: "520px",
                    margin: "0 auto 1.5rem",
                    lineHeight: 1.7,
                  }}
                >
                  Thank you for submitting your project specifications. A Qualyzen validation engineer will
                  review your scope and follow up using your preferred communication channel.
                </p>

                <div
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1rem 1.5rem",
                    maxWidth: "480px",
                    margin: "0 auto 2rem",
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-teal)", fontWeight: 600, fontSize: "var(--text-xs)", marginBottom: "0.25rem" }}>
                    <Clock size={14} />
                    <span>Estimated Response Time</span>
                  </div>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", margin: 0 }}>
                    Our validation team typically delivers preliminary scoping feedback within <strong>24 to 48 business hours</strong>.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitState("idle")}
                  className="btn-primary"
                  style={{ margin: "0 auto" }}
                >
                  Submit Another Project Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}
                  className="quote-fields-grid"
                >
                  {/* Full Name */}
                  <div>
                    <label htmlFor="quote-fullName" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="quote-fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? "error" : ""}`}
                      placeholder="e.g. Priya Sharma"
                      autoComplete="name"
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="quote-company" className="form-label">
                      Company Name *
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      className={`form-input ${errors.company ? "error" : ""}`}
                      placeholder="e.g. Sun Formulation Labs Ltd."
                      autoComplete="organization"
                      {...register("company")}
                    />
                    {errors.company && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <label htmlFor="quote-email" className="form-label">
                      Business Email *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="priya.sharma@company.com"
                      autoComplete="email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="quote-phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Service Required */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="quote-service" className="form-label">
                      Primary Service Required *
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        id="quote-service"
                        className={`form-input ${errors.service ? "error" : ""}`}
                        style={{ appearance: "none", paddingRight: "2.5rem" }}
                        {...register("service")}
                      >
                        <option value="">Select a validation service…</option>
                        {Object.entries(SERVICE_LABELS).map(([key, label]) => (
                          <option key={key} value={key}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        style={{
                          position: "absolute",
                          right: "0.75rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          pointerEvents: "none",
                          color: "var(--color-muted)",
                        }}
                      />
                    </div>
                    {errors.service && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Equipment / System Type */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="quote-equipmentSystem" className="form-label">
                      Equipment or System Type{" "}
                      <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      id="quote-equipmentSystem"
                      type="text"
                      className={`form-input ${errors.equipmentSystem ? "error" : ""}`}
                      placeholder="e.g. Siemens S7-1500 PLC, SCADA Wonderware, Fette Rotary Tablet Press, HPLC..."
                      {...register("equipmentSystem")}
                    />
                    {errors.equipmentSystem && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.equipmentSystem.message}
                      </p>
                    )}
                  </div>

                  {/* Project Description */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="quote-projectDescription" className="form-label">
                      Project Description &amp; Scope Requirements *
                    </label>
                    <textarea
                      id="quote-projectDescription"
                      rows={5}
                      className={`form-input ${errors.projectDescription ? "error" : ""}`}
                      style={{ resize: "vertical" }}
                      placeholder="Please summarize the project scope, equipment quantity, facility location, target timeline, and whether protocols exist or require authoring from scratch…"
                      {...register("projectDescription")}
                    />
                    {errors.projectDescription && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.projectDescription.message}
                      </p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label className="form-label">
                      Preferred Contact Method *
                    </label>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "0.35rem" }}>
                      {Object.entries(CONTACT_METHOD_LABELS).map(([key, label]) => (
                        <label
                          key={key}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "var(--text-sm)",
                            cursor: "pointer",
                            color: "var(--color-heading)",
                            fontWeight: 500,
                          }}
                        >
                          <input
                            type="radio"
                            value={key}
                            {...register("preferredContact")}
                            style={{
                              accentColor: "var(--color-teal)",
                              width: "1rem",
                              height: "1rem",
                            }}
                          />
                          {label}
                        </label>
                      ))}
                    </div>
                    {errors.preferredContact && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.preferredContact.message}
                      </p>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        cursor: "pointer",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-body)",
                        fontWeight: 400,
                      }}
                    >
                      <input
                        type="checkbox"
                        {...register("consent")}
                        style={{
                          marginTop: "0.2rem",
                          accentColor: "var(--color-teal)",
                          flexShrink: 0,
                          width: "1rem",
                          height: "1rem",
                        }}
                      />
                      <span>
                        I confirm that the submitted information is accurate and agree to Qualyzen&apos;s{" "}
                        <Link
                          href="/privacy-policy"
                          target="_blank"
                          style={{ color: "var(--color-teal)", textDecoration: "underline" }}
                        >
                          Privacy Policy
                        </Link>{" "}
                        for the purpose of processing this quote enquiry. *
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="form-error" role="alert" style={{ marginTop: "0.375rem" }}>
                        <AlertCircle size={12} />
                        {errors.consent.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Error */}
                {submitState === "error" && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      padding: "0.875rem 1rem",
                      background: "#fef2f2",
                      border: "1px solid #fecaca",
                      borderRadius: "var(--radius-md)",
                      marginTop: "1.25rem",
                    }}
                  >
                    <AlertCircle size={18} color="var(--color-error)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--color-error)" }}>
                      {submitError}
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div style={{ marginTop: "1.75rem" }}>
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "0.875rem 2rem",
                      opacity: submitState === "loading" ? 0.75 : 1,
                    }}
                  >
                    {submitState === "loading" ? (
                      <>
                        <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                        Submitting Project Details…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Quote Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Context & Sidebar Information */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* What Happens Next Card */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: 700,
                  color: "var(--color-heading)",
                  marginBottom: "1.25rem",
                  borderBottom: "1px solid var(--color-border)",
                  paddingBottom: "0.75rem",
                }}
              >
                What Happens After Submission?
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
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
                    1
                  </div>
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.2rem" }}>
                      Initial Scope Assessment
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.5, margin: 0 }}>
                      Our validation lead reviews your equipment specs, system criticality, and deliverables against standard GxP benchmarks.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
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
                    2
                  </div>
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.2rem" }}>
                      Scoping Call (15–30 Mins)
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.5, margin: 0 }}>
                      We clarify boundary conditions, testing locations, sampling needs, and whether onsite execution or remote documentation is required.
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "1.75rem",
                      height: "1.75rem",
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
                    3
                  </div>
                  <div>
                    <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.2rem" }}>
                      Formal Proposal &amp; Timeline
                    </h4>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.5, margin: 0 }}>
                      You receive a detailed technical proposal with line-item deliverables, validation milestone dates, and transparent commercial terms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Response Time Note */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "1.75rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                <Clock size={20} color="var(--color-teal)" />
                <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-heading)", margin: 0 }}>
                  Standard Response SLA
                </h4>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                <strong>Typical Response Time:</strong> Within 24 to 48 business hours during standard operating days.
              </p>
              <span style={{ fontSize: "11px", color: "var(--color-muted)", display: "block" }}>
                [Placeholder — replace with client standard SLA]
              </span>
            </div>

            {/* Confidentiality & NDA Card */}
            <div
              style={{
                background: "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "1.75rem",
                color: "var(--color-white)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                <Lock size={18} color="var(--color-teal)" />
                <h4 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", margin: 0 }}>
                  Strict Confidentiality &amp; NDA
                </h4>
              </div>
              <p style={{ fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>
                We understand the sensitivity of proprietary manufacturing formulas, PLC logic programs, and batch records. Qualyzen operates under strict non-disclosure practices and gladly executes a bilateral NDA prior to receiving confidential documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 1023px) {
          .quote-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .quote-fields-grid {
            grid-template-columns: 1fr !important;
          }
          .quote-fields-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
