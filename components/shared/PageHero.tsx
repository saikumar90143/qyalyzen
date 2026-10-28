import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import type { BreadcrumbItem } from "@/lib/seo";

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subtext: string;
  breadcrumbs?: BreadcrumbItem[];
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  variant?: "navy" | "teal" | "light";
  badge?: string;
}

export function PageHero({
  eyebrow,
  headline,
  subtext,
  breadcrumbs,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  variant = "navy",
  badge,
}: PageHeroProps) {
  const isDark = variant === "navy" || variant === "teal";

  const backgrounds: Record<string, string> = {
    navy: "linear-gradient(135deg, var(--color-navy) 0%, #162d52 50%, var(--color-navy-light) 100%)",
    teal: "linear-gradient(135deg, var(--color-teal-dark) 0%, var(--color-teal) 100%)",
    light: "var(--color-bg)",
  };

  return (
    <section
      style={{
        background: backgrounds[variant],
        paddingTop: "8rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      {isDark && (
        <div
          className="hero-grid-bg"
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
          aria-hidden="true"
        />
      )}

      {/* Decorative accent circle */}
      {isDark && (
        <div
          style={{
            position: "absolute",
            top: "-6rem",
            right: "-6rem",
            width: "24rem",
            height: "24rem",
            borderRadius: "50%",
            background: "rgba(19,168,158,0.08)",
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      )}

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div style={{ marginBottom: "1.5rem" }}>
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        {badge && (
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                background: "rgba(19,168,158,0.15)",
                color: "var(--color-teal-light)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(19,168,158,0.3)",
              }}
            >
              {badge}
            </span>
          </div>
        )}

        {eyebrow && (
          <p
            className="eyebrow"
            style={{
              color: isDark ? "var(--color-teal-light)" : "var(--color-teal)",
              marginBottom: "0.75rem",
            }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            fontWeight: 800,
            color: isDark ? "var(--color-white)" : "var(--color-heading)",
            maxWidth: "800px",
            marginBottom: "1rem",
            lineHeight: 1.15,
          }}
        >
          {headline}
        </h1>

        <p
          style={{
            fontSize: "var(--text-lg)",
            color: isDark ? "rgba(255,255,255,0.75)" : "var(--color-body)",
            maxWidth: "640px",
            lineHeight: 1.7,
            marginBottom: ctaLabel ? "2rem" : "0",
          }}
        >
          {subtext}
        </p>

        {(ctaLabel || ctaSecondaryLabel) && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
            {ctaLabel && ctaHref && (
              <Link href={ctaHref} className="btn-primary">
                {ctaLabel}
                <ArrowRight size={16} />
              </Link>
            )}
            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Link
                href={ctaSecondaryHref}
                className={isDark ? "btn-ghost-white" : "btn-secondary"}
              >
                {ctaSecondaryLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
