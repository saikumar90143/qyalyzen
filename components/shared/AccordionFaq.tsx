"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface AccordionFaqProps {
  items: FaqItem[];
  variant?: "default" | "dark";
}

export function AccordionFaq({ items, variant = "default" }: AccordionFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isDark = variant === "dark";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              background: isDark ? "rgba(255,255,255,0.06)" : "var(--color-bg-card)",
              border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              transition: "border-color 0.2s ease",
              borderColor: isOpen ? "var(--color-teal)" : isDark ? "rgba(255,255,255,0.1)" : "var(--color-border)",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "var(--text-sm)",
                fontWeight: 600,
                color: isDark ? "var(--color-white)" : "var(--color-heading)",
                lineHeight: 1.4,
              }}
            >
              <span>{item.q}</span>
              <ChevronDown
                size={16}
                style={{
                  flexShrink: 0,
                  transition: "transform 0.25s ease",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  color: "var(--color-teal)",
                }}
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              style={{
                maxHeight: isOpen ? "500px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <div
                style={{
                  padding: "0 1.25rem 1rem",
                  fontSize: "var(--text-sm)",
                  color: isDark ? "rgba(255,255,255,0.7)" : "var(--color-body)",
                  lineHeight: 1.7,
                  borderTop: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--color-border-subtle)",
                  paddingTop: "0.75rem",
                }}
              >
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
