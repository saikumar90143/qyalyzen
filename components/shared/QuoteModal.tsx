"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Loader2, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import { quoteFormSchema, type QuoteFormData, SERVICE_LABELS, CONTACT_METHOD_LABELS } from "@/lib/schemas";
import Link from "next/link";

interface QuoteModalProps {
  onClose: () => void;
  preselectedService?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

export function QuoteModal({ onClose, preselectedService }: QuoteModalProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      preferredContact: "email",
      service: preselectedService as QuoteFormData["service"] | undefined,
    },
  });

  // Focus trap + close on Escape
  useEffect(() => {
    firstFocusRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitState("loading");
    setSubmitError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json.message || "Something went wrong. Please try again.");
        setSubmitState("error");
        return;
      }
      setSubmitState("success");
      reset();
    } catch {
      setSubmitError("A network error occurred. Please check your connection and try again.");
      setSubmitState("error");
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-panel" ref={panelRef}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 1.75rem 1rem",
            borderBottom: "1px solid var(--color-border)",
            position: "sticky",
            top: 0,
            background: "var(--color-bg-card)",
            borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
          }}
        >
          <div>
            <h2 id="quote-modal-title" style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
              Request a Quote
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
              Tell us about your project and we&apos;ll be in touch.
            </p>
          </div>
          <button
            ref={firstFocusRef}
            onClick={onClose}
            aria-label="Close quote form"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "0.375rem",
              cursor: "pointer",
              color: "var(--color-body)",
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "1.5rem 1.75rem 2rem" }} className="modal-body-responsive">
          {submitState === "success" ? (
            <SuccessState onClose={onClose} />
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="modal-form-grid">
                {/* Full Name */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField label="Full Name *" error={errors.fullName?.message} htmlFor="quote-fullName">
                    <input id="quote-fullName" type="text" className={`form-input ${errors.fullName ? "error" : ""}`} placeholder="Your full name" {...register("fullName")} autoComplete="name" />
                  </FormField>
                </div>

                {/* Company */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField label="Company Name *" error={errors.company?.message} htmlFor="quote-company">
                    <input id="quote-company" type="text" className={`form-input ${errors.company ? "error" : ""}`} placeholder="Your company or organisation" {...register("company")} autoComplete="organization" />
                  </FormField>
                </div>

                {/* Email */}
                <div className="modal-col-half">
                  <FormField label="Business Email *" error={errors.email?.message} htmlFor="quote-email">
                    <input id="quote-email" type="email" className={`form-input ${errors.email ? "error" : ""}`} placeholder="you@company.com" {...register("email")} autoComplete="email" />
                  </FormField>
                </div>

                {/* Phone */}
                <div className="modal-col-half">
                  <FormField label="Phone Number *" error={errors.phone?.message} htmlFor="quote-phone">
                    <input id="quote-phone" type="tel" className={`form-input ${errors.phone ? "error" : ""}`} placeholder="+91 98765 43210" {...register("phone")} autoComplete="tel" />
                  </FormField>
                </div>

                {/* Service */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField label="Service Required *" error={errors.service?.message} htmlFor="quote-service">
                    <div style={{ position: "relative" }}>
                      <select id="quote-service" className={`form-input ${errors.service ? "error" : ""}`} style={{ appearance: "none", paddingRight: "2.5rem" }} {...register("service")}>
                        <option value="">Select a service…</option>
                        {Object.entries(SERVICE_LABELS).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--color-muted)" }} />
                    </div>
                  </FormField>
                </div>

                {/* Equipment / System */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField label="Equipment / System Type" error={errors.equipmentSystem?.message} htmlFor="quote-equipment">
                    <input id="quote-equipment" type="text" className="form-input" placeholder="e.g. SCADA system, tablet press, HPLC…" {...register("equipmentSystem")} />
                  </FormField>
                </div>

                {/* Project Description */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField label="Project Description *" error={errors.projectDescription?.message} htmlFor="quote-description">
                    <textarea
                      id="quote-description"
                      className={`form-input ${errors.projectDescription ? "error" : ""}`}
                      style={{ minHeight: "100px", resize: "vertical" }}
                      placeholder="Brief description of your validation or service requirement…"
                      {...register("projectDescription")}
                    />
                  </FormField>
                </div>

                {/* Preferred Contact */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField label="Preferred Contact Method *" error={errors.preferredContact?.message} htmlFor="quote-contact">
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      {Object.entries(CONTACT_METHOD_LABELS).map(([key, label]) => (
                        <label key={key} style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "var(--text-sm)", cursor: "pointer", fontWeight: 400 }}>
                          <input type="radio" value={key} {...register("preferredContact")} style={{ accentColor: "var(--color-teal)" }} />
                          {label}
                        </label>
                      ))}
                    </div>
                  </FormField>
                </div>

                {/* Consent */}
                <div style={{ gridColumn: "span 2" }}>
                  <FormField error={errors.consent?.message} htmlFor="quote-consent">
                    <label style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", cursor: "pointer", fontSize: "var(--text-sm)", color: "var(--color-body)", fontWeight: 400 }}>
                      <input id="quote-consent" type="checkbox" {...register("consent")} style={{ marginTop: "0.125rem", accentColor: "var(--color-teal)", flexShrink: 0 }} />
                      <span>
                        I agree to the{" "}
                        <Link href="/privacy-policy" target="_blank" style={{ color: "var(--color-teal)" }}>
                          Privacy Policy
                        </Link>
                        {" "}and consent to Qualyzen processing my enquiry.
                      </span>
                    </label>
                  </FormField>
                </div>
              </div>

              {/* Error message */}
              {submitState === "error" && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "var(--radius-md)", marginBottom: "1rem" }}>
                  <AlertCircle size={16} color="var(--color-error)" />
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-error)" }}>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitState === "loading"}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem", opacity: submitState === "loading" ? 0.7 : 1 }}
              >
                {submitState === "loading" ? (
                  <>
                    <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                    Submitting…
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 540px) {
          .modal-form-grid {
            grid-template-columns: 1fr !important;
            gap: 0.875rem !important;
          }
          .modal-form-grid > div {
            grid-column: span 1 !important;
          }
          .modal-col-half {
            grid-column: span 1 !important;
          }
          .modal-body-responsive {
            padding: 1.125rem 1rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

function FormField({
  label,
  error,
  htmlFor,
  children,
}: {
  label?: string;
  error?: string;
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label htmlFor={htmlFor} className="form-label">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="form-error" role="alert">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
        <CheckCircle size={56} color="var(--color-teal)" />
      </div>
      <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
        Enquiry Received
      </h3>
      <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Thank you for your enquiry. A member of the Qualyzen team will review your request and be in touch using your preferred contact method.
      </p>
      <button onClick={onClose} className="btn-primary" style={{ margin: "0 auto" }}>
        Close
      </button>
    </div>
  );
}
