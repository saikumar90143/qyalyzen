import Link from "next/link";
import { ArrowRight, Home, HelpCircle, FileSearch } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 1.5rem 4rem",
        background: "radial-gradient(ellipse at top, #162d52 0%, var(--color-navy) 100%)",
        color: "var(--color-white)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "var(--radius-full)",
            background: "rgba(19,168,158,0.15)",
            border: "1px solid rgba(19,168,158,0.3)",
            color: "var(--color-teal-light)",
            fontSize: "var(--text-xs)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}
        >
          <HelpCircle size={14} />
          404 Page Not Found
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            color: "var(--color-white)",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          Documentation Not Found
        </h1>

        <p
          style={{
            fontSize: "var(--text-base)",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
          }}
        >
          The page or validation record you are looking for does not exist or may have been relocated.
          Please verify the URL or navigate to one of our core service areas below.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--color-teal)",
              color: "white",
              fontWeight: 600,
              fontSize: "var(--text-sm)",
              padding: "0.75rem 1.75rem",
              borderRadius: "var(--radius-full)",
              textDecoration: "none",
            }}
          >
            <Home size={16} />
            Back to Homepage
          </Link>

          <Link
            href="/validations"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontWeight: 600,
              fontSize: "var(--text-sm)",
              padding: "0.75rem 1.75rem",
              borderRadius: "var(--radius-full)",
              textDecoration: "none",
            }}
          >
            <FileSearch size={16} />
            Validation Services
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
