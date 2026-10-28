import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const isWhite = variant === "white";

  // Height configurations: aspect ratio is 493 / 146 ≈ 3.377
  const heightMap = {
    sm: 32,
    md: 40,
    lg: 48,
  };
  const height = heightMap[size];
  const width = Math.round(height * (493 / 146));

  if (isWhite) {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "#ffffff",
          padding: "0.45rem 0.85rem",
          borderRadius: "var(--radius-lg)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
          textDecoration: "none",
        }}
        aria-label="Qualyzen — AI Powered Pharma Validation"
      >
        <Image
          src="/images/logo.png?v=3"
          alt="Qualyzen — AI Powered Pharma Validation"
          width={width}
          height={height}
          priority
          unoptimized
          style={{
            height: `${height}px`,
            width: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
      }}
      aria-label="Qualyzen — AI Powered Pharma Validation"
    >
      <Image
        src="/images/logo.png?v=3"
        alt="Qualyzen — AI Powered Pharma Validation"
        width={width}
        height={height}
        priority
        unoptimized
        style={{
          height: `${height}px`,
          width: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
