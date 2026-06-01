import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FIRM_NAME,
  SITE_URL as SITE_URL_STRING,
  PHONE_E164,
  ADDRESS,
  LOGO_SRC,
} from "@/data/firm";

const SITE_DESCRIPTION = `${FIRM_NAME} provides litigation, trial, and business counsel for companies, investors, and individuals.`;

/** Production site origin — canonical URLs use paths relative to this base in each route’s `alternates.canonical`. */
export const siteUrl = new URL(SITE_URL_STRING);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: FIRM_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: FIRM_NAME,
    description: SITE_DESCRIPTION,
    siteName: FIRM_NAME,
    type: "website",
    images: [
      {
        // Keep this pointed at an existing asset to avoid social preview 404s.
        url: new URL(
          "/images/team/team-in-office-2-photoshopped.webp",
          siteUrl,
        ).toString(),
        width: 1200,
        height: 630,
        alt: FIRM_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: FIRM_NAME,
    description: SITE_DESCRIPTION,
    images: [
      new URL(
        "/images/team/team-in-office-2-photoshopped.webp",
        siteUrl,
      ).toString(),
    ],
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/** Refined serif for firm wordmark in header / brand moments */
const firmSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-firm-serif",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: FIRM_NAME,
  url: siteUrl.toString(),
  logo: new URL(LOGO_SRC, siteUrl).toString(),
  telephone: PHONE_E164,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.street}, ${ADDRESS.suite}`,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.zip,
    addressCountry: ADDRESS.country,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${firmSerif.variable}`}>
      <body className={manrope.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
