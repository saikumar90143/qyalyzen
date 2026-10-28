"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Star, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { feedbackFormSchema, type FeedbackFormData, FEEDBACK_CATEGORY_LABELS } from "@/lib/schemas";
import Link from "next/link";

interface FeedbackPanelProps {
  onClose: () => void;
}

type SubmitState = "idle" | "loading" | "success" | "error";

export function FeedbackPanel({ onClose }: FeedbackPanelProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string>("");
  const [hoveredStar, setHoveredStar] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackFormSchema),
  });

  const ratingValue = watch("rating") ?? 0;

  useEffect(() => {
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

  const onSubmit = async (data: FeedbackFormData) => {
    setSubmitState("loading");
    setSubmitError("");
    try {
      const res = await fetch("/api/feedback", {
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
      setSubmitError("A network error occurred. Please try again.");
      setSubmitState("error");
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-panel"
        style={{ maxWidth: "480px" }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 1.75rem 1rem", borderBottom: "1px solid var(--color-border)", position: "sticky", top: 0, background: "var(--color-bg-card)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }}>
          <div>
            <h2 id="feedback-modal-title" style={{ fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.25rem" }}>
              Share Feedback
            </h2>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
              Your feedback helps us improve.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close feedback form"
            style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "0.375rem", cursor: "pointer", color: "var(--color-body)" }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: "1.5rem 1.75rem 2rem" }} className="feedback-body-responsive">
          {submitState === "success" ? (
            <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
              <CheckCircle size={48} color="var(--color-teal)" style={{ margin: "0 auto 1rem" }} />
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>Thank You!</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", marginBottom: "1.5rem" }}>
                Your feedback has been recorded. We appreciate you taking the time to share your thoughts.
              </p>
              <button onClick={onClose} className="btn-primary" style={{ margin: "0 auto" }}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Star rating */}
              <div style={{ marginBottom: "1.25rem" }}>
                <label className="form-label">Overall Experience *</label>
                <input type="hidden" {...register("rating", { valueAsNumber: true })} />
                <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setValue("rating", star, { shouldValidate: true })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      aria-label={`Rate ${star} out of 5`}
                      style={{ background: "none", border: "none", cursor: "pointer", padding: "0.125rem" }}
                    >
                      <Star
                        size={28}
                        fill={star <= (hoveredStar || ratingValue) ? "var(--color-teal)" : "none"}
                        color={star <= (hoveredStar || ratingValue) ? "var(--color-teal)" : "var(--color-border)"}
                        style={{ transition: "fill 0.15s ease, color 0.15s ease" }}
                      />
                    </button>
                  ))}
                </div>
                {errors.rating && (
                  <p className="form-error" role="alert"><AlertCircle size={12} />{errors.rating.message}</p>
                )}
              </div>

              {/* Category */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="feedback-category" className="form-label">Feedback Category *</label>
                <div style={{ position: "relative" }}>
                  <select
                    id="feedback-category"
                    className={`form-input ${errors.category ? "error" : ""}`}
                    style={{ appearance: "none", paddingRight: "2.5rem" }}
                    {...register("category")}
                  >
                    <option value="">Select category…</option>
                    {Object.entries(FEEDBACK_CATEGORY_LABELS).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>
                {errors.category && (
                  <p className="form-error" role="alert"><AlertCircle size={12} />{errors.category.message}</p>
                )}
              </div>

              {/* Comments */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="feedback-comments" className="form-label">Comments *</label>
                <textarea
                  id="feedback-comments"
                  className={`form-input ${errors.comments ? "error" : ""}`}
                  style={{ minHeight: "90px", resize: "vertical" }}
                  placeholder="Share your thoughts…"
                  {...register("comments")}
                />
                {errors.comments && (
                  <p className="form-error" role="alert"><AlertCircle size={12} />{errors.comments.message}</p>
                )}
              </div>

              {/* Optional name */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="feedback-name" className="form-label">Name <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(optional)</span></label>
                <input id="feedback-name" type="text" className="form-input" placeholder="Your name" {...register("name")} autoComplete="name" />
              </div>

              {/* Optional email */}
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="feedback-email" className="form-label">Email <span style={{ color: "var(--color-muted)", fontWeight: 400 }}>(optional)</span></label>
                <input id="feedback-email" type="email" className="form-input" placeholder="For follow-up if needed" {...register("email")} autoComplete="email" />
                {errors.email && (
                  <p className="form-error" role="alert"><AlertCircle size={12} />{errors.email.message}</p>
                )}
              </div>

              {/* Privacy notice */}
              <p style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginBottom: "1rem", lineHeight: 1.5 }}>
                Personal details are optional and used only to follow up on your feedback if needed. See our{" "}
                <Link href="/privacy-policy" target="_blank" style={{ color: "var(--color-teal)" }}>Privacy Policy</Link>.
              </p>

              {/* Error */}
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
                style={{ width: "100%", justifyContent: "center", opacity: submitState === "loading" ? 0.7 : 1 }}
              >
                {submitState === "loading" ? (
                  <><Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> Submitting…</>
                ) : "Submit Feedback"}
              </button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 540px) {
          .feedback-body-responsive {
            padding: 1.125rem 1rem 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
