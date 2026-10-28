"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { SITE_CONFIG } from "@/lib/config";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_VALIDATION_LINKS,
  FOOTER_SERVICES_LINKS,
  LEGAL_LINKS,
} from "@/lib/navigation";

export function Footer() {
  const [year, setYear] = useState<number>(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--color-navy)",
        color: "rgba(255,255,255,0.75)",
        paddingTop: "4rem",
      }}
    >
      <div className="container-site">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 2" }} className="footer-brand-col">
            <Logo variant="white" />
            <p
              style={{
                marginTop: "1rem",
                fontSize: "var(--text-sm)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                maxWidth: "320px",
              }}
            >
              Supporting pharmaceutical manufacturers with equipment validation,
              computerized system assessment, qualification activities, and
              structured technical documentation.
            </p>

            {/* Contact details */}
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <FooterContact icon={<Mail size={14} />} value={SITE_CONFIG.contact.email} href={`mailto:${SITE_CONFIG.contact.email}`} />
              <FooterContact icon={<Phone size={14} />} value={SITE_CONFIG.contact.phone} href={`tel:${SITE_CONFIG.contact.phone}`} />
              <FooterContact
                icon={<MapPin size={14} />}
                value={`${SITE_CONFIG.contact.address.line1}, ${SITE_CONFIG.contact.address.line2}`}
              />
              <FooterContact icon={<Clock size={14} />} value={SITE_CONFIG.contact.businessHours} />
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Company
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-teal-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Validations */}
          <div>
            <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Validations
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {FOOTER_VALIDATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-teal-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 700, color: "var(--color-white)", marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Services
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {FOOTER_SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.65)", transition: "color 0.2s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-teal-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/request-quote" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-teal-light)" }}>
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingBlock: "1.5rem",
            fontSize: "var(--text-xs)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <p>© {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-brand-col {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterContact({
  icon,
  value,
  href,
}: {
  icon: React.ReactNode;
  value: string;
  href?: string;
}) {
  const content = (
    <span style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
      <span style={{ marginTop: "0.125rem", flexShrink: 0 }}>{icon}</span>
      {value}
    </span>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: "none" }}
        onMouseEnter={(e) => ((e.currentTarget.querySelector("span") as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
        onMouseLeave={(e) => ((e.currentTarget.querySelector("span") as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
      >
        {content}
      </a>
    );
  }
  return content;
}
