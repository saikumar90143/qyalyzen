import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  const routes = [
    { url: `${baseUrl}`, lastModified, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/validations`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/validations/csv-plc-validation`, lastModified, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/validations/excel-sheet-validation`, lastModified, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/validations/equipment-qualification-support`, lastModified, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${baseUrl}/validations/artificial-intelligence`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/about-us`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/sales-services`, lastModified, changeFrequency: "monthly" as const, priority: 0.75 },
    { url: `${baseUrl}/sales-services/service-one`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/sales-services/service-two`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/sales-services/service-three`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact-us`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/request-quote`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes;
}
