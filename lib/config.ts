/**
 * Qualyzen — Central Site Configuration
 * ======================================
 * All placeholder values are marked with [PLACEHOLDER].
 * Replace these with real company data before going live.
 *
 * This is the SINGLE file to edit for:
 *  - Company details
 *  - Contact information
 *  - Navigation labels
 *  - Sales & Services page titles / descriptions
 *  - Footer content
 */

export const SITE_CONFIG = {
  /** Company identity */
  name: "Qualyzen",
  tagline: "Confidence in Every Validation. Clarity in Every Report.",
  shortDescription:
    "Qualyzen supports pharmaceutical manufacturers with equipment validation, computerized system assessment, qualification activities, and structured technical documentation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://qualyzen.com", // [PLACEHOLDER] replace with production domain
  defaultOgImage: "/og-image.png",

  /** Contact details — replace all [PLACEHOLDER] values */
  contact: {
    email: "info@qualyzen.com", // [PLACEHOLDER]
    phone: "+91 00000 00000", // [PLACEHOLDER]
    address: {
      line1: "[Office Address Line 1]", // [PLACEHOLDER]
      line2: "[City, State, PIN Code]", // [PLACEHOLDER]
      country: "India", // [PLACEHOLDER]
    },
    businessHours: "Monday – Friday, 9:00 AM – 6:00 PM IST", // [PLACEHOLDER]
    mapEmbedUrl: "", // [PLACEHOLDER] Google Maps embed URL
  },

  /** Social media — replace with actual profiles when available */
  social: {
    linkedin: "", // [PLACEHOLDER]
    twitter: "", // [PLACEHOLDER]
  },

  /** Legal */
  legal: {
    registrationNumber: "", // [PLACEHOLDER]
    gstNumber: "", // [PLACEHOLDER]
  },
} as const;

// ---------------------------------------------------------------------------
// Sales & Services — Configurable placeholder pages
// Change ONLY these objects to update the three editable service pages.
// ---------------------------------------------------------------------------

export const SALES_SERVICES_CONFIG = {
  serviceOne: {
    slug: "service-one",
    title: "Equipment Sales & Support", // [PLACEHOLDER] — Replace with actual service name
    shortDescription:
      "Sourcing, supply, and technical support for pharmaceutical manufacturing and quality-control equipment.", // [PLACEHOLDER]
    heroHeadline: "Equipment Sales & Technical Support", // [PLACEHOLDER]
    heroSubtext:
      "We assist pharmaceutical facilities in identifying, procuring, and commissioning suitable equipment aligned with their process and quality requirements.", // [PLACEHOLDER]
    overview:
      "Qualyzen's equipment support service helps pharmaceutical manufacturing and QA/QC teams identify equipment that fits their process requirements, supports qualification, and aligns with applicable documentation standards. Our team can assist with supplier evaluation, specifications review, and pre-delivery coordination.", // [PLACEHOLDER]
    benefits: [
      "Specification and requirements support", // [PLACEHOLDER]
      "Supplier and product evaluation assistance", // [PLACEHOLDER]
      "Pre-delivery documentation review", // [PLACEHOLDER]
      "Coordination with validation activities", // [PLACEHOLDER]
      "Post-installation support", // [PLACEHOLDER]
    ],
    scope: [
      "Equipment requirement scoping", // [PLACEHOLDER]
      "Technical specification review", // [PLACEHOLDER]
      "Supplier qualification support", // [PLACEHOLDER]
      "Delivery and installation coordination", // [PLACEHOLDER]
      "Handover documentation support", // [PLACEHOLDER]
    ],
    processSteps: [
      {
        number: "01",
        title: "Requirement Discussion",
        description:
          "We understand your process requirements and applicable quality expectations.", // [PLACEHOLDER]
      },
      {
        number: "02",
        title: "Equipment Scoping",
        description:
          "Define equipment specifications, parameters, and supplier criteria.", // [PLACEHOLDER]
      },
      {
        number: "03",
        title: "Evaluation Support",
        description:
          "Assist in evaluating supplier proposals and technical documentation.", // [PLACEHOLDER]
      },
      {
        number: "04",
        title: "Procurement Coordination",
        description:
          "Support order placement, delivery, and installation coordination.", // [PLACEHOLDER]
      },
      {
        number: "05",
        title: "Post-Delivery Support",
        description:
          "Assist with handover, commissioning documentation, and qualification readiness.", // [PLACEHOLDER]
      },
    ],
    faqs: [
      {
        q: "What types of equipment can Qualyzen assist with?", // [PLACEHOLDER]
        a: "We can support a range of pharmaceutical manufacturing and QA/QC equipment. Please contact us with your specific requirements to discuss the scope of available support.", // [PLACEHOLDER]
      },
      {
        q: "Does Qualyzen manufacture equipment?", // [PLACEHOLDER]
        a: "Qualyzen is a service and support organisation. We do not manufacture equipment directly but can assist with supplier selection and procurement coordination.", // [PLACEHOLDER]
      },
      {
        q: "Can equipment procurement be combined with validation support?",
        a: "Yes. We can coordinate equipment sourcing with qualification and validation planning so that documentation and testing activities align from the start.",
      },
    ],
    metaTitle: "Equipment Sales & Support | Qualyzen", // [PLACEHOLDER]
    metaDescription:
      "Qualyzen supports pharmaceutical facilities with equipment sourcing, specification review, supplier evaluation, and procurement coordination.", // [PLACEHOLDER]
  },

  serviceTwo: {
    slug: "service-two",
    title: "Calibration Support Services", // [PLACEHOLDER] — Replace with actual service name
    shortDescription:
      "Calibration management support and documentation assistance for pharmaceutical manufacturing and laboratory instruments.", // [PLACEHOLDER]
    heroHeadline: "Calibration Management & Documentation Support", // [PLACEHOLDER]
    heroSubtext:
      "Supporting pharmaceutical teams with calibration programme management, instrument scheduling, and calibration documentation review.", // [PLACEHOLDER]
    overview:
      "Maintaining calibrated, measurement-ready instruments is fundamental to pharmaceutical product quality and manufacturing consistency. Qualyzen can assist quality and engineering teams with calibration planning, certificate review, out-of-tolerance investigation support, and calibration-related documentation.", // [PLACEHOLDER]
    benefits: [
      "Calibration programme planning support", // [PLACEHOLDER]
      "Certificate and record review", // [PLACEHOLDER]
      "Out-of-tolerance investigation support", // [PLACEHOLDER]
      "Instrument register and schedule management", // [PLACEHOLDER]
      "Calibration documentation templates", // [PLACEHOLDER]
    ],
    scope: [
      "Instrument inventory and categorisation", // [PLACEHOLDER]
      "Calibration schedule development", // [PLACEHOLDER]
      "Calibration certificate review", // [PLACEHOLDER]
      "Out-of-tolerance impact assessment support", // [PLACEHOLDER]
      "Calibration SOP and procedure review", // [PLACEHOLDER]
    ],
    processSteps: [
      {
        number: "01",
        title: "Instrument Scoping",
        description:
          "Review the instrument inventory and calibration requirements.", // [PLACEHOLDER]
      },
      {
        number: "02",
        title: "Programme Planning",
        description:
          "Develop or review the calibration schedule and frequency.", // [PLACEHOLDER]
      },
      {
        number: "03",
        title: "Certificate Review",
        description: "Assess calibration certificates for completeness and traceability.", // [PLACEHOLDER]
      },
      {
        number: "04",
        title: "Deviation Support",
        description:
          "Assist with out-of-tolerance investigations and corrective actions.", // [PLACEHOLDER]
      },
      {
        number: "05",
        title: "Documentation Handover",
        description:
          "Deliver updated records, reports, and programme documentation.", // [PLACEHOLDER]
      },
    ],
    faqs: [
      {
        q: "Does Qualyzen perform calibration directly?", // [PLACEHOLDER]
        a: "Qualyzen provides calibration management support and documentation services. Direct instrument calibration activities depend on the agreed scope. Please contact us to discuss your requirements.", // [PLACEHOLDER]
      },
      {
        q: "What instruments can be covered?", // [PLACEHOLDER]
        a: "Support can cover a broad range of pharmaceutical manufacturing and laboratory instruments. Contact us with your instrument list for a specific discussion.", // [PLACEHOLDER]
      },
      {
        q: "How does calibration support relate to qualification?",
        a: "Calibrated instruments are a prerequisite for qualification activities. Our team can coordinate calibration status with IQ/OQ/PQ planning to ensure readiness.",
      },
    ],
    metaTitle: "Calibration Support Services | Qualyzen", // [PLACEHOLDER]
    metaDescription:
      "Qualyzen provides pharmaceutical calibration management support, certificate review, and calibration documentation services.", // [PLACEHOLDER]
  },

  serviceThree: {
    slug: "service-three",
    title: "Technical Training & Workshop", // [PLACEHOLDER] — Replace with actual service name
    shortDescription:
      "Focused technical training and workshops on validation, qualification, and pharmaceutical quality documentation practices.", // [PLACEHOLDER]
    heroHeadline: "Technical Training & Validation Workshops", // [PLACEHOLDER]
    heroSubtext:
      "Practical, focused training programmes for pharmaceutical QA/QC, engineering, and validation teams on computerized system validation, equipment qualification, and documentation practices.", // [PLACEHOLDER]
    overview:
      "Building internal capability is as important as completing individual validation projects. Qualyzen offers focused technical workshops and training programmes for pharmaceutical quality, validation, and engineering teams, covering validation principles, qualification processes, documentation standards, and practical skills for day-to-day quality work.", // [PLACEHOLDER]
    benefits: [
      "Practical, industry-relevant content", // [PLACEHOLDER]
      "Flexible on-site or virtual delivery", // [PLACEHOLDER]
      "Tailored to your team's specific needs", // [PLACEHOLDER]
      "Documentation and workbook materials included", // [PLACEHOLDER]
      "Post-training support available", // [PLACEHOLDER]
    ],
    scope: [
      "CSV and PLC validation principles", // [PLACEHOLDER]
      "Equipment qualification (IQ/OQ/PQ) overview", // [PLACEHOLDER]
      "Excel spreadsheet validation for pharma", // [PLACEHOLDER]
      "Validation documentation writing skills", // [PLACEHOLDER]
      "Risk-based validation approach", // [PLACEHOLDER]
      "Data integrity awareness", // [PLACEHOLDER]
    ],
    processSteps: [
      {
        number: "01",
        title: "Training Needs Review",
        description:
          "Understand team roles, experience levels, and specific training objectives.", // [PLACEHOLDER]
      },
      {
        number: "02",
        title: "Programme Design",
        description:
          "Tailor training content and format to your organisation's requirements.", // [PLACEHOLDER]
      },
      {
        number: "03",
        title: "Material Preparation",
        description:
          "Develop training workbooks, exercises, and reference documentation.", // [PLACEHOLDER]
      },
      {
        number: "04",
        title: "Training Delivery",
        description:
          "Deliver interactive sessions on-site or virtually as agreed.", // [PLACEHOLDER]
      },
      {
        number: "05",
        title: "Assessment & Feedback",
        description:
          "Gather participant feedback and provide post-training support materials.", // [PLACEHOLDER]
      },
    ],
    faqs: [
      {
        q: "Who should attend Qualyzen's training workshops?", // [PLACEHOLDER]
        a: "Programmes are designed for QA/QC professionals, validation engineers, automation engineers, quality managers, and technical staff involved in pharmaceutical manufacturing and quality systems.", // [PLACEHOLDER]
      },
      {
        q: "Can training be conducted on-site at our facility?", // [PLACEHOLDER]
        a: "Yes. Training can be conducted on-site, virtually, or in a hybrid format depending on your team's location and preferences.", // [PLACEHOLDER]
      },
      {
        q: "Is a certificate issued after training?",
        a: "A training attendance record and completion acknowledgement can be issued upon request. Please discuss certification requirements with us during programme planning.",
      },
    ],
    metaTitle: "Technical Training & Validation Workshops | Qualyzen", // [PLACEHOLDER]
    metaDescription:
      "Qualyzen offers practical pharmaceutical validation and qualification training programmes for QA/QC and engineering teams.", // [PLACEHOLDER]
  },
} as const;
