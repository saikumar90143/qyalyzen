"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { NAV_ITEMS, isDropdown } from "@/lib/navigation";
import type { NavDropdown } from "@/lib/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDropdown]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = useCallback((label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "var(--shadow-header)" : "none",
        }}
        role="banner"
      >
        <div className="container-site">
          <div style={{ display: "flex", alignItems: "center", height: "4.5rem", gap: "2rem" }}>
            {/* Logo */}
            <Link href="/" aria-label="Qualyzen — Home">
              <Logo />
            </Link>

            {/* Desktop nav */}
            <nav
              role="navigation"
              aria-label="Main navigation"
              style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginLeft: "auto", flex: 1, justifyContent: "center" }}
              className="hidden-mobile"
            >
              {NAV_ITEMS.map((item) =>
                isDropdown(item) ? (
                  <DropdownNavItem
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    onToggle={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    onClose={() => setOpenDropdown(null)}
                  />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      padding: "0.5rem 0.875rem",
                      fontSize: "var(--text-sm)",
                      fontWeight: 500,
                      color: "var(--color-heading)",
                      borderRadius: "var(--radius-md)",
                      transition: "color var(--transition-fast), background var(--transition-fast)",
                    }}
                    className="nav-link"
                    onMouseEnter={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div style={{ marginLeft: "auto" }} className="hidden-mobile">
              <Link href="/request-quote" className="btn-primary" style={{ fontSize: "var(--text-sm)" }}>
                Request a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileOpen((prev) => !prev);
              }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{
                marginLeft: "auto",
                background: "none",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "0.5rem",
                cursor: "pointer",
                color: "var(--color-heading)",
                display: "none",
                minWidth: "44px",
                minHeight: "44px",
                alignItems: "center",
                justifyContent: "center",
                touchAction: "manipulation",
              }}
              className="mobile-hamburger"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{
            position: "fixed",
            top: "4.5rem",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 90,
          }}
        >
          {/* Backdrop overlay below header */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10,24,41,0.55)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: "var(--color-bg-card)",
              borderBottom: "1px solid var(--color-border)",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
              maxHeight: "calc(100vh - 4.5rem)",
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav aria-label="Mobile navigation" style={{ padding: "1rem 0" }}>
              {NAV_ITEMS.map((item) =>
                isDropdown(item) ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                      aria-expanded={mobileExpanded === item.label}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.875rem 1.5rem",
                        background: "none",
                        border: "none",
                        fontSize: "var(--text-base)",
                        fontWeight: 600,
                        color: "var(--color-heading)",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        style={{
                          transition: "transform 0.2s ease",
                          transform:
                            mobileExpanded === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div
                        style={{
                          background: "var(--color-bg)",
                          borderTop: "1px solid var(--color-border-subtle)",
                          borderBottom: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        {item.items.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                            style={{
                              display: "block",
                              padding: "0.75rem 2rem",
                              fontSize: "var(--text-sm)",
                              color: "var(--color-body)",
                              borderBottom: "1px solid var(--color-border-subtle)",
                            }}
                          >
                            <span style={{ fontWeight: 500, color: "var(--color-heading)", display: "block" }}>
                              {child.label}
                            </span>
                            {child.description && (
                              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginTop: "0.125rem", display: "block" }}>
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "0.875rem 1.5rem",
                      fontSize: "var(--text-base)",
                      fontWeight: 500,
                      color: "var(--color-heading)",
                      borderBottom: "1px solid var(--color-border-subtle)",
                    }}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div style={{ padding: "1rem 1.5rem" }}>
                <Link
                  href="/request-quote"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Responsive style tags */}
      <style>{`
        @media (min-width: 1024px) {
          .hidden-mobile { display: flex !important; }
          .mobile-hamburger { display: none !important; }
        }
        @media (max-width: 1023px) {
          .hidden-mobile { display: none !important; }
          .mobile-hamburger { display: inline-flex !important; }
        }
        .nav-link:hover {
          color: var(--color-teal) !important;
          background: var(--color-teal-muted);
        }
      `}</style>
    </>
  );
}

// ---------------------------------------------------------------------------
// Dropdown nav item
// ---------------------------------------------------------------------------
interface DropdownNavItemProps {
  item: NavDropdown;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggle: () => void;
  onClose: () => void;
}

function DropdownNavItem({
  item,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onToggle,
  onClose,
}: DropdownNavItemProps) {
  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.5rem 0.875rem",
          fontSize: "var(--text-sm)",
          fontWeight: 500,
          color: isOpen ? "var(--color-teal)" : "var(--color-heading)",
          background: isOpen ? "var(--color-teal-muted)" : "none",
          border: "none",
          borderRadius: "var(--radius-md)",
          cursor: "pointer",
          transition: "color var(--transition-fast), background var(--transition-fast)",
        }}
      >
        {item.label}
        <ChevronDown
          size={14}
          style={{
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {isOpen && (
        <div
          className="nav-dropdown"
          role="menu"
          aria-label={`${item.label} submenu`}
        >
          {item.items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={onClose}
              style={{
                display: "block",
                padding: "0.625rem 0.875rem",
                borderRadius: "var(--radius-md)",
                transition: "background var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-bg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "var(--text-sm)",
                  fontWeight: 600,
                  color: "var(--color-heading)",
                  marginBottom: "0.125rem",
                }}
              >
                {child.label}
              </span>
              {child.description && (
                <span
                  style={{
                    display: "block",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    lineHeight: 1.4,
                  }}
                >
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
