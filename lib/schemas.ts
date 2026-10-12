import { z } from "zod";

// ---------------------------------------------------------------------------
// Quote Request Form Schema
// ---------------------------------------------------------------------------
export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(150, "Company name is too long"),
  email: z
    .string()
    .email("Please enter a valid business email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(25, "Phone number is too long")
    .regex(
      /^[+\d\s\-().]+$/,
      "Phone number may only contain digits, spaces, +, -, (, )"
    ),
  service: z.enum([
    "csv-plc-validation",
    "excel-sheet-validation",
    "equipment-qualification-support",
    "artificial-intelligence",
    "sales-services",
    "other",
  ], { required_error: "Please select a service" }),
  equipmentSystem: z
    .string()
    .max(200, "Description is too long")
    .optional(),
  projectDescription: z
    .string()
    .min(10, "Please provide a brief project description")
    .max(2000, "Description is too long"),
  preferredContact: z.enum(["email", "phone", "either"], {
    required_error: "Please select a preferred contact method",
  }),
  consent: z
    .boolean()
    .refine((v) => v === true, {
      message: "You must agree to the privacy policy to submit this form",
    }),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

// ---------------------------------------------------------------------------
// Contact Form Schema
// ---------------------------------------------------------------------------
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  company: z
    .string()
    .max(150, "Company name is too long")
    .optional(),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .max(25, "Phone number is too long")
    .regex(
      /^[+\d\s\-().]*$/,
      "Phone number may only contain digits, spaces, +, -, (, )"
    )
    .optional()
    .or(z.literal("")),
  service: z
    .enum([
      "csv-plc-validation",
      "excel-sheet-validation",
      "equipment-qualification-support",
      "artificial-intelligence",
      "sales-services",
      "general",
      "other",
    ])
    .optional(),
  message: z
    .string()
    .min(10, "Please provide a brief message")
    .max(2000, "Message is too long"),
  consent: z
    .boolean()
    .refine((v) => v === true, {
      message: "You must agree to the privacy policy to submit this form",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ---------------------------------------------------------------------------
// Feedback Form Schema
// ---------------------------------------------------------------------------
export const feedbackFormSchema = z.object({
  rating: z
    .number()
    .int()
    .min(1, "Please select a rating")
    .max(5, "Rating must be between 1 and 5"),
  category: z.enum([
    "website",
    "service-quality",
    "communication",
    "documentation",
    "general",
  ], { required_error: "Please select a feedback category" }),
  comments: z
    .string()
    .min(5, "Please provide at least a brief comment")
    .max(1000, "Comment is too long"),
  name: z.string().max(100, "Name is too long").optional().or(z.literal("")),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
});

export type FeedbackFormData = z.infer<typeof feedbackFormSchema>;

// ---------------------------------------------------------------------------
// Service label map (for display purposes)
// ---------------------------------------------------------------------------
export const SERVICE_LABELS: Record<string, string> = {
  "csv-plc-validation": "CSV & PLC Validation",
  "excel-sheet-validation": "Excel Sheet Validation",
  "equipment-qualification-support": "Equipment Qualification Support",
  "artificial-intelligence": "Artificial Intelligence",
  "sales-services": "Sales & Services",
  general: "General Enquiry",
  other: "Other",
};

export const CONTACT_METHOD_LABELS: Record<string, string> = {
  email: "Email",
  phone: "Phone",
  either: "Either",
};

export const FEEDBACK_CATEGORY_LABELS: Record<string, string> = {
  website: "Website Experience",
  "service-quality": "Service Quality",
  communication: "Communication",
  documentation: "Documentation",
  general: "General",
};
