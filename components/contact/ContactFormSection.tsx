"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
  SERVICE_LABELS,
} from "@/lib/schemas";
import { SITE_CONFIG } from "@/lib/config";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Map,
  ChevronDown,
} from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactFormSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setErrorMessage(
          result.message || "Failed to submit enquiry. Please try again or email us directly."
        );
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      reset();
    } catch {
      setErrorMessage(
        "A network communication error occurred. Please check your internet connection or email us directly."
      );
      setSubmitStatus("error");
    }
  };

  return (
    <section className="section-py" style={{ background: "var(--color-bg)" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-layout-grid"
        >
          {/* Form Column */}
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
                Send an Enquiry
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
                Connect With Our Validation Team
              </h2>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.6 }}>
                Fill out the details below to initiate a discussion regarding your validation, qualification, or compliance documentation needs.
              </p>
            </div>

            {submitStatus === "success" ? (
              <div
                style={{
                  padding: "3rem 2rem",
                  textAlign: "center",
                  background: "var(--color-bg)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      borderRadius: "50%",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-teal)",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-heading)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Enquiry Successfully Sent
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-body)",
                    maxWidth: "460px",
                    margin: "0 auto 1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for reaching out to Qualyzen. A validation specialist will review your inquiry and follow up within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus("idle")}
                  className="btn-primary"
                  style={{ margin: "0 auto" }}
                >
                  Send Another Message
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
                  className="form-fields-grid"
                >
                  {/* Full Name */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="contact-fullName" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      className={`form-input ${errors.fullName ? "error" : ""}`}
                      placeholder="e.g. Dr. Rajesh Sharma"
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

                  {/* Company */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="contact-company" className="form-label">
                      Company / Organization{" "}
                      <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      className={`form-input ${errors.company ? "error" : ""}`}
                      placeholder="e.g. Apex Biotech Laboratories Ltd."
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

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="form-label">
                      Business Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${errors.email ? "error" : ""}`}
                      placeholder="name@company.com"
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
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number{" "}
                      <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <input
                      id="contact-phone"
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

                  {/* Service Dropdown */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="contact-service" className="form-label">
                      Service Area of Interest{" "}
                      <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        id="contact-service"
                        className={`form-input ${errors.service ? "error" : ""}`}
                        style={{ appearance: "none", paddingRight: "2.5rem" }}
                        {...register("service")}
                      >
                        <option value="">Select a service category…</option>
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

                  {/* Message */}
                  <div style={{ gridColumn: "span 2" }}>
                    <label htmlFor="contact-message" className="form-label">
                      Message / Project Scoping Details *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className={`form-input ${errors.message ? "error" : ""}`}
                      style={{ resize: "vertical" }}
                      placeholder="Please share details about your equipment, computerized systems, regulatory deadlines, or documentation questions…"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="form-error" role="alert">
                        <AlertCircle size={12} />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Consent */}
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
                        I agree to the{" "}
                        <Link
                          href="/privacy-policy"
                          target="_blank"
                          style={{ color: "var(--color-teal)", textDecoration: "underline" }}
                        >
                          Privacy Policy
                        </Link>{" "}
                        and consent to Qualyzen processing my contact information to respond to this inquiry. *
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

                {/* Error Banner */}
                {submitStatus === "error" && (
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
                      {errorMessage}
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div style={{ marginTop: "1.5rem" }}>
                  <button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "0.875rem 2rem",
                      opacity: submitStatus === "loading" ? 0.75 : 1,
                    }}
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                        Submitting Enquiry…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & Sidebar Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Quick Contact Card */}
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
                Contact Information
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Email */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-teal)",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                      Email Address
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 600,
                        color: "var(--color-heading)",
                        wordBreak: "break-all",
                      }}
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                    <span style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginTop: "2px" }}>
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-teal)",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                      Telephone
                    </span>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 600,
                        color: "var(--color-heading)",
                      }}
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <span style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginTop: "2px" }}>
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-teal)",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                      Office Location
                    </span>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-heading)", fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                      {SITE_CONFIG.contact.address.line1}
                      <br />
                      {SITE_CONFIG.contact.address.line2}
                      <br />
                      {SITE_CONFIG.contact.address.country}
                    </p>
                    <span style={{ display: "block", fontSize: "11px", color: "var(--color-muted)", marginTop: "2px" }}>
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-teal-muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-teal)",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", display: "block" }}>
                      Operating Hours
                    </span>
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--color-heading)", fontWeight: 500, margin: 0 }}>
                      {SITE_CONFIG.contact.businessHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
                <Map size={20} color="var(--color-teal)" />
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", margin: 0 }}>
                  Facility Location Map
                </h3>
              </div>

              <div
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={SITE_CONFIG.contact.mapEmbedUrl}
                  title="Qualyzen office location map"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block", width: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 1023px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 600px) {
          .form-fields-grid {
            grid-template-columns: 1fr !important;
          }
          .form-fields-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
