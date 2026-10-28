import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyTabs } from "@/components/shared/StickyTabs";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#10233f",
};

export const metadata: Metadata = {
  title: {
    default: "Qualyzen | Pharmaceutical Validation & Qualification Services",
    template: "%s | Qualyzen",
  },
  description:
    "Qualyzen supports pharmaceutical manufacturers with equipment validation, CSV and PLC validation, Excel spreadsheet validation, equipment qualification support, and structured technical documentation.",
  keywords: [
    "pharmaceutical equipment validation",
    "CSV validation",
    "PLC validation",
    "computerized system validation",
    "Excel spreadsheet validation",
    "IQ OQ PQ qualification",
    "equipment qualification support",
    "pharmaceutical validation services",
    "GAMP validation",
    "pharmaceutical documentation",
  ],
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StickyTabs />
      </body>
    </html>
  );
}
