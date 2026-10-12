/**
 * Navigation structure — single source of truth for all menus
 * Edit dropdown labels, routes, and descriptions here.
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  href: string;
  items: NavItem[];
}

export type NavEntry = NavItem | NavDropdown;

export const isDropdown = (entry: NavEntry): entry is NavDropdown =>
  "items" in entry;

export const NAV_ITEMS: NavEntry[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Validations",
    href: "/validations",
    items: [
      {
        label: "CSV & PLC Validation",
        href: "/validations/csv-plc-validation",
        description:
          "Computerized system validation for PLC, HMI, SCADA and automation systems.",
      },
      {
        label: "Excel Sheet Validation",
        href: "/validations/excel-sheet-validation",
        description:
          "Spreadsheet formula verification, risk assessment, and documentation.",
      },
      {
        label: "Equipment Qualification Support",
        href: "/validations/equipment-qualification-support",
        description:
          "IQ, OQ, and PQ support for pharmaceutical manufacturing equipment.",
      },
      {
        label: "Artificial Intelligence",
        href: "/validations/artificial-intelligence",
        description:
          "AI-assisted documentation workflows and validation support tools.",
      },
    ],
  },
  {
    label: "Sales & Services",
    href: "/sales-services",
    items: [
      {
        label: "Equipment Sales & Support",
        href: "/sales-services/service-one",
        description:
          "Sourcing, supply, and technical support for pharmaceutical equipment.",
      },
      {
        label: "Calibration Support Services",
        href: "/sales-services/service-two",
        description:
          "Calibration programme management and documentation assistance.",
      },
      {
        label: "Technical Training & Workshop",
        href: "/sales-services/service-three",
        description:
          "Validation and qualification training for QA/QC and engineering teams.",
      },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export const FOOTER_VALIDATION_LINKS: NavItem[] = [
  { label: "CSV & PLC Validation", href: "/validations/csv-plc-validation" },
  { label: "Excel Sheet Validation", href: "/validations/excel-sheet-validation" },
  {
    label: "Equipment Qualification",
    href: "/validations/equipment-qualification-support",
  },
  { label: "Artificial Intelligence", href: "/validations/artificial-intelligence" },
];

export const FOOTER_SERVICES_LINKS: NavItem[] = [
  { label: "Equipment Sales & Support", href: "/sales-services/service-one" },
  { label: "Calibration Support", href: "/sales-services/service-two" },
  { label: "Technical Training", href: "/sales-services/service-three" },
];

export const FOOTER_COMPANY_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Validations", href: "/validations" },
  { label: "Sales & Services", href: "/sales-services" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Request a Quote", href: "/request-quote" },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
