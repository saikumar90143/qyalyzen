import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/shared/PageHero";
import { AccordionFaq } from "@/components/shared/AccordionFaq";
import { FinalCta } from "@/components/home/FinalCta";
import {
  ArrowRight,
  Bot,
  Search,
  FileEdit,
  FolderTree,
  FileCheck2,
  Cpu,
  Layers,
  Shield,
  Lock,
  UserCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  KeyRound,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Solutions for Pharmaceutical Validation Workflows | Qualyzen",
  description:
    "Explore AI-assisted documentation workflows, technical document search, and report drafting tools for pharmaceutical validation—built with mandatory human review, strict data confidentiality, and regulatory governance.",
  path: "/validations/artificial-intelligence",
  keywords: [
    "AI pharmaceutical validation",
    "AI pharma validation workflows",
    "validation document automation",
    "GxP AI compliance",
    "pharma technical document retrieval",
    "AI assisted qualification reports",
    "pharmaceutical validation AI governance",
    "computerized system validation AI",
  ],
});

const currentCapabilities = [
  {
    icon: <Bot size={22} />,
    title: "AI-Assisted Documentation Workflows",
    description:
      "Accelerate repetitive authoring tasks, summarize extensive legacy qualification binders, and extract key equipment parameters into structured validation templates.",
    features: [
      "Rapid summarization of voluminous vendor commissioning records",
      "Drafting boilerplate sections for validation plans and protocols",
      "Consistency checking across engineering specifications and test matrices",
    ],
  },
  {
    icon: <Search size={22} />,
    title: "Technical Document Search & Retrieval",
    description:
      "Semantic and natural language search across vast libraries of internal SOPs, equipment manuals, qualification dossiers, and historical deviation databases.",
    features: [
      "Instant location of specific equipment setpoints and calibration tolerances",
      "Cross-referencing historical deviations to prevent recurring issues",
      "Semantic query parsing across multi-thousand-page technical dossiers",
    ],
  },
  {
    icon: <FileEdit size={22} />,
    title: "Report Drafting Assistance",
    description:
      "Automated drafting of qualification summary narrative sections based on pre-compiled test results, deviations, and executed challenge matrices.",
    features: [
      "Structured synthesis of executed test case outcomes",
      "Clear, professional drafting of deviation summaries and resolutions",
      "Automated compilation of executive summaries for QA review",
    ],
  },
  {
    icon: <FolderTree size={22} />,
    title: "Document Classification & Taxonomy",
    description:
      "Intelligent categorization of incoming engineering documentation, certificates of analysis, supplier cut sheets, and calibration records.",
    features: [
      "Automatic indexing into standard GAMP 5 and Annex 15 folder structures",
      "Extraction and tagging of critical equipment metadata and asset tags",
      "Identification of missing lifecycle artifacts and document gaps",
    ],
  },
];

const roadmapCapabilities = [
  {
    icon: <Layers size={22} />,
    title: "Automated Validation Evidence Organisation",
    description:
      "Intelligent computer-vision and layout parsing tools to automatically collate, index, and link test execution screenshots and raw data printouts to corresponding protocol steps.",
    target: "Pilot Testing Stage",
  },
  {
    icon: <FileCheck2 size={22} />,
    title: "AI-Assisted Protocol Generation",
    description:
      "Context-aware protocol generation engines that convert User Requirements Specifications (URS) directly into tailored IQ/OQ test scripts and acceptance criteria.",
    target: "In Development",
  },
  {
    icon: <Cpu size={22} />,
    title: "Custom AI Implementation Consulting",
    description:
      "Advisory services assisting pharmaceutical enterprise quality units in defining safe, compliant, and auditable internal AI adoption roadmaps within regulated GxP environments.",
    target: "Early Access / Scoping",
  },
];

const faqs = [
  {
    q: "How is artificial intelligence applied in pharmaceutical validation?",
    a: "In pharmaceutical validation, AI is utilized to streamline documentation-heavy workflows such as parsing technical manuals, indexing legacy qualification packages, assisting in drafting narrative reports, and performing semantic search across thousands of pages of standard operating procedures. AI serves strictly as an assistive intelligence layer to augment human engineering expertise, rather than an autonomous decision-making engine.",
  },
  {
    q: "Why is qualified human review strictly required for all AI outputs?",
    a: "Under GxP regulations, accountability for equipment qualification and computerized system validation rests exclusively with qualified subject matter experts and Quality Assurance management. AI cannot sign off on validation deliverables. Every document draft, technical summary, or classification produced by AI tools undergoes thorough, line-by-line review, verification, and formal sign-off by credentialed pharmaceutical validation professionals.",
  },
  {
    q: "How does Qualyzen ensure client data confidentiality and protect proprietary formulations?",
    a: "We operate on a zero-training retention standard: client technical documentation and proprietary specifications are never used to train public machine learning models or shared with third parties. All processing occurs in isolated, encrypted enterprise environments adhering to strict confidentiality agreements (NDAs) and role-based access restrictions.",
  },
  {
    q: "What AI capabilities are currently available versus under development?",
    a: "Currently available capabilities include AI-assisted documentation workflows, technical document semantic search, report drafting assistance, and automated document taxonomy classification. Advanced features—such as automated test screenshot reconciliation, end-to-end automated protocol generation from URS, and formal enterprise AI consulting—are currently under active development and pilot testing.",
  },
  {
    q: "How can pharmaceutical companies discuss custom AI pilots or validation projects?",
    a: "You can initiate a discussion by contacting our technical team or requesting a quote. We conduct a preliminary assessment to understand your documentation bottlenecks, data infrastructure, and regulatory constraints, and explore whether our current AI workflows or targeted pilot projects can deliver measurable efficiency gains for your quality department.",
  },
];

export default function ArtificialIntelligencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "AI Solutions for Pharmaceutical Validation",
              "AI-assisted documentation tools and search workflows for pharmaceutical validation with mandatory human review and enterprise data confidentiality.",
              "/validations/artificial-intelligence"
            )
          ),
        }}
      />

      <PageHero
        badge="Emerging Capability"
        eyebrow="Validation Services"
        headline="Artificial Intelligence in Validation"
        subtext="Empowering pharmaceutical validation professionals with AI-assisted documentation workflows, intelligent technical document search, and structured drafting—underpinned by unwavering regulatory governance and human oversight."
        breadcrumbs={[
          { label: "Validations", href: "/validations" },
          { label: "Artificial Intelligence", href: "/validations/artificial-intelligence" },
        ]}
        ctaLabel="Request an AI Consultation"
        ctaHref="/request-quote"
        ctaSecondaryLabel="Contact Qualyzen"
        ctaSecondaryHref="/contact-us"
      />

      {/* Governance & Human-in-the-Loop Primary Banner */}
      <section style={{ background: "var(--color-bg)", paddingTop: "3rem", paddingBottom: "1.5rem" }}>
        <div className="container-site">
          <div
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid var(--color-border)",
              borderLeft: "5px solid var(--color-teal)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              alignItems: "flex-start",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "var(--radius-md)",
                background: "var(--color-teal-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-teal)",
                flexShrink: 0,
              }}
            >
              <UserCheck size={26} />
            </div>
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.2rem 0.6rem",
                  background: "var(--color-teal-muted)",
                  color: "var(--color-teal-dark)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  borderRadius: "var(--radius-full)",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Core Operating Philosophy
              </span>
              <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                Mandatory Human Oversight & Non-Delegable Quality Accountability
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.7, margin: 0 }}>
                In regulated GxP environments, artificial intelligence is an accelerator, not an authority.
                All drafts, data syntheses, and document classifications generated by our assistive AI tools
                require thorough review, verification, and formal sign-off by qualified validation engineers
                and QA specialists. Machine output is never treated as final regulatory truth without human verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Available Section */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  background: "var(--color-teal-muted)",
                  color: "var(--color-teal-dark)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 800,
                  borderRadius: "var(--radius-full)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Available Today
              </span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontWeight: 600 }}>
                Fully operational tools for client engagements
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                lineHeight: 1.25,
              }}
            >
              Currently Available AI Capabilities
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", maxWidth: "700px", lineHeight: 1.7, marginTop: "0.5rem" }}>
              Practical AI workflows deployed to reduce administrative burden, eliminate manual document hunting,
              and accelerate validation reporting cycles.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {currentCapabilities.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-bg-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-teal-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-teal)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  {item.description}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {item.features.map((feat, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "var(--text-xs)", color: "var(--color-body)" }}>
                        <CheckCircle2 size={13} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                        <span style={{ lineHeight: 1.45 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Under Development Section */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site">
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.25rem 0.75rem",
                  background: "rgba(217, 119, 6, 0.12)",
                  color: "var(--color-warning)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 800,
                  borderRadius: "var(--radius-full)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  border: "1px solid rgba(217, 119, 6, 0.3)",
                }}
              >
                Under Development
              </span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontWeight: 600 }}>
                Next-generation capabilities in active research and prototyping
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                lineHeight: 1.25,
              }}
            >
              Future Validation Technologies in Pipeline
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", maxWidth: "700px", lineHeight: 1.7, marginTop: "0.5rem" }}>
              We are actively developing and stress-testing new algorithmic tools for upcoming release.
              Early access pilots are available on a selective basis for progressive quality teams.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {roadmapCapabilities.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-bg)",
                  border: "1px dashed var(--color-border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "2.75rem",
                      height: "2.75rem",
                      borderRadius: "var(--radius-md)",
                      background: "rgba(16, 35, 63, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-navy)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      padding: "0.2rem 0.55rem",
                      background: "rgba(217, 119, 6, 0.1)",
                      color: "var(--color-warning)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 700,
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {item.target}
                  </span>
                </div>

                <h3 style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--color-heading)", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "var(--text-xs)", color: "var(--color-body)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  {item.description}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Clock size={14} color="var(--color-muted)" />
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", fontStyle: "italic" }}>
                    Status: Prototype testing & safety validation
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Confidentiality & Enterprise Governance */}
      <section className="section-py" style={{ background: "var(--color-bg)" }}>
        <div className="container-site">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
            className="two-col-grid"
          >
            {/* Confidentiality */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.25rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-teal-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-teal)",
                  marginBottom: "1.25rem",
                }}
              >
                <Lock size={22} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>
                Strict Data Confidentiality
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                We understand that pharmaceutical validation documents contain sensitive manufacturing formulations,
                equipment layouts, and intellectual property. We protect your confidential information with enterprise-grade
                safeguards:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Zero Training Policy: Client files, text, and parameters are never used to train public or commercial AI models.",
                  "Encrypted Data Lifecycle: AES-256 encryption at rest and TLS 1.3 in transit for all document transmissions.",
                  "Isolated Sandboxes: Workspace segregation ensures absolute separation between different client engagements.",
                  "Strict NDA Alignment: Comprehensive legal nondisclosure safeguards backed by full technical access logging.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "var(--text-xs)", color: "var(--color-body)" }}>
                    <Shield size={14} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance & Auditability */}
            <div
              style={{
                background: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.25rem",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(16, 35, 63, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                }}
              >
                <Eye size={22} />
              </div>
              <h3 style={{ fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--color-heading)", marginBottom: "0.75rem" }}>
                Governance, Traceability & Auditability
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-body)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Regulatory compliance demands transparent provenance. We implement explicit governance controls to ensure
                all AI-assisted workflows remain transparent and inspection-ready:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Traceable Provenance: AI-drafted sections are explicitly tagged and tracked back to source engineering inputs.",
                  "Audit Trail Logging: Comprehensive timestamping of all assistive prompts, outputs, and subsequent human modifications.",
                  "Known Limitation Boundaries: Clear procedural guardrails prohibiting autonomous decisions or mathematical finality.",
                  "Inspection-Ready Dossiers: Supporting documentation detailing tool boundaries, risk assessments, and human review gates.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "var(--text-xs)", color: "var(--color-body)" }}>
                    <CheckCircle2 size={14} color="var(--color-teal)" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page Quote CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%)",
          paddingBlock: "3.5rem",
          color: "var(--color-white)",
        }}
      >
        <div className="container-site">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.2rem 0.625rem",
                  background: "rgba(19,168,158,0.2)",
                  color: "var(--color-teal-light)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 700,
                  borderRadius: "var(--radius-full)",
                  marginBottom: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Consulting & Pilot Inquiries
              </span>
              <h3
                style={{
                  fontSize: "clamp(1.35rem, 2vw, 1.85rem)",
                  fontWeight: 800,
                  color: "var(--color-white)",
                  marginBottom: "0.5rem",
                }}
              >
                Interested in exploring AI validation tools for your facility?
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
                Schedule a confidential consultation with our validation and technology specialists to discuss
                custom document workflows and exploratory pilot projects.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/request-quote" className="btn-primary">
                Request a Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/contact-us" className="btn-ghost-white">
                Contact AI Practice Lead
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-py" style={{ background: "var(--color-bg-card)" }}>
        <div className="container-site" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ marginBottom: "0.75rem", display: "inline-flex" }}>
              Technology FAQ
            </span>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
                fontWeight: 800,
                color: "var(--color-heading)",
                marginBottom: "0.5rem",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "var(--text-base)", color: "var(--color-body)", lineHeight: 1.6 }}>
              Insights into our AI implementation standards, data confidentiality measures, and human review policies.
            </p>
          </div>
          <AccordionFaq items={faqs} />
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/request-quote" className="btn-primary">
              Discuss Your Project Requirements <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />

      <style>{`
        .two-col-grid {
          @media (max-width: 1023px) {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
