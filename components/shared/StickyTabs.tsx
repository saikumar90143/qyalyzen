"use client";

import React, { useState } from "react";
import { MessageSquare, FileText } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { FeedbackPanel } from "./FeedbackPanel";

export function StickyTabs() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const openQuote = () => {
    setFeedbackOpen(false);
    setQuoteOpen(true);
  };

  const openFeedback = () => {
    setQuoteOpen(false);
    setFeedbackOpen(true);
  };

  return (
    <>
      {/* Desktop sticky tabs */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "flex-end",
        }}
        className="sticky-tabs-desktop"
        aria-label="Quick actions"
      >
        <button
          onClick={openQuote}
          className="sticky-tab"
          style={{
            background: "var(--color-navy)",
            color: "var(--color-white)",
            position: "relative",
            flexShrink: 0,
          }}
          aria-label="Request a Quote"
          id="sticky-quote-tab"
        >
          <FileText size={14} style={{ transform: "rotate(90deg)" }} />
          <span>Request a Quote</span>
        </button>

        <button
          onClick={openFeedback}
          className="sticky-tab"
          style={{
            background: "var(--color-teal)",
            color: "var(--color-white)",
            position: "relative",
            flexShrink: 0,
          }}
          aria-label="Leave Feedback"
          id="sticky-feedback-tab"
        >
          <MessageSquare size={14} style={{ transform: "rotate(90deg)" }} />
          <span>Feedback</span>
        </button>
      </div>

      {/* Mobile FAB */}
      <div
        className="sticky-tabs-mobile"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1rem",
          zIndex: 60,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          alignItems: "flex-end",
        }}
        aria-label="Quick actions"
      >
        <button
          onClick={openFeedback}
          aria-label="Leave Feedback"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.625rem 1rem",
            background: "var(--color-teal)",
            color: "white",
            border: "none",
            borderRadius: "var(--radius-full)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(19,168,158,0.4)",
            flexShrink: 0,
          }}
        >
          <MessageSquare size={14} />
          Feedback
        </button>
        <button
          onClick={openQuote}
          aria-label="Request a Quote"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.25rem",
            background: "var(--color-navy)",
            color: "white",
            border: "none",
            borderRadius: "var(--radius-full)",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(16,35,63,0.35)",
            flexShrink: 0,
          }}
        >
          <FileText size={16} />
          Request a Quote
        </button>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .sticky-tabs-desktop { display: flex !important; }
          .sticky-tabs-mobile { display: none !important; }
        }
        @media (max-width: 1023px) {
          .sticky-tabs-desktop { display: none !important; }
          .sticky-tabs-mobile { display: flex !important; }
        }
      `}</style>

      {/* Modals */}
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
      {feedbackOpen && <FeedbackPanel onClose={() => setFeedbackOpen(false)} />}
    </>
  );
}
