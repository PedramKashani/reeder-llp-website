import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";

/** Production site origin — canonical URLs use paths relative to this base in each route’s `alternates.canonical`. */
export const siteUrl = new URL("https://www.reedermccreary.com");

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

const cormorant = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Reeder McCreary, LLP",
  url: siteUrl.toString(),
  logo: new URL("/images/logos/rmc-gold-logo.webp", siteUrl).toString(),
  telephone: "+1-310-861-2470",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className={cormorant.className}>
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
