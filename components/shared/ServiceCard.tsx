"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  href: string;
  variant?: "default" | "featured";
}

export function ServiceCard({
  icon,
  title,
  description,
  highlights,
  href,
  variant = "default",
}: ServiceCardProps) {
  const isFeatured = variant === "featured";

  return (
    <div
      style={{
        background: isFeatured ? "var(--color-navy)" : "var(--color-bg-card)",
        border: `1px solid ${isFeatured ? "transparent" : "var(--color-border)"}`,
        borderRadius: "var(--radius-lg)",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        boxShadow: isFeatured ? "0 8px 32px rgba(16,35,63,0.25)" : "var(--shadow-card)",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-card-hover)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = isFeatured
          ? "0 8px 32px rgba(16,35,63,0.25)"
          : "var(--shadow-card)";
      }}
    >
      {/* Teal accent top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, var(--color-teal) 0%, var(--color-teal-light) 100%)",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "var(--radius-md)",
          background: isFeatured ? "rgba(19,168,158,0.2)" : "var(--color-teal-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          color: "var(--color-teal)",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "var(--text-lg)",
          fontWeight: 700,
          color: isFeatured ? "var(--color-white)" : "var(--color-heading)",
          marginBottom: "0.625rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--text-sm)",
          color: isFeatured ? "rgba(255,255,255,0.7)" : "var(--color-body)",
          lineHeight: 1.6,
          marginBottom: "1.25rem",
        }}
      >
        {description}
      </p>

      {/* Highlights */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "1.5rem",
          flex: 1,
        }}
      >
        {highlights.map((highlight, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "var(--text-xs)",
              color: isFeatured ? "rgba(255,255,255,0.65)" : "var(--color-body)",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--color-teal)",
                flexShrink: 0,
              }}
            />
            {highlight}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href={href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          color: "var(--color-teal)",
          textDecoration: "none",
          marginTop: "auto",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.gap = "0.625rem";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.gap = "0.375rem";
        }}
      >
        Explore Service
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
