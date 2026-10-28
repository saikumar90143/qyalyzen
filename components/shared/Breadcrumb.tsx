"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(allItems)),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.25rem",
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "var(--text-xs)",
            color: "var(--color-muted)",
          }}
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li
                key={item.href}
                style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
              >
                {index === 0 && (
                  <Home size={12} style={{ marginRight: "0.125rem" }} />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    style={{ color: "var(--color-teal)", fontWeight: 500 }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      style={{ color: "var(--color-muted)", textDecoration: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--color-teal)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--color-muted)")
                      }
                    >
                      {item.label}
                    </Link>
                    <ChevronRight size={12} />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
