import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { SITE_URL as SITE_URL_STRING, PHONE_E164, ADDRESS } from "@/data/firm";

/** Production site origin — canonical URLs use paths relative to this base in each route’s `alternates.canonical`. */
export const siteUrl = new URL(SITE_URL_STRING);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Reeder McCreary, LLP",
  description:
    "Reeder McCreary, LLP provides litigation, trial, and business counsel for companies, investors, and individuals.",
  openGraph: {
    title: "Reeder McCreary, LLP",
    description:
      "Reeder McCreary, LLP provides litigation, trial, and business counsel for companies, investors, and individuals.",
    siteName: "Reeder McCreary, LLP",
    type: "website",
    images: [
      {
        url: new URL("/images/team/reeder-banner.webp", siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: "Reeder McCreary, LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reeder McCreary, LLP",
    description:
      "Reeder McCreary, LLP provides litigation, trial, and business counsel for companies, investors, and individuals.",
    images: [new URL("/images/team/reeder-banner.webp", siteUrl).toString()],
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Reeder McCreary, LLP",
  url: siteUrl.toString(),
  logo: new URL("/images/logos/rmc-gold-logo.webp", siteUrl).toString(),
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
    <html lang="en" className={manrope.variable}>
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
