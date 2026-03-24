import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reedermccreary.com"),
  title: "Reeder McCreary, LLP",
  description:
    "Reeder McCreary, LLP provides litigation, trial, and business counsel for companies, investors, and individuals.",
  openGraph: {
    title: "Reeder McCreary, LLP",
    description:
      "Reeder McCreary, LLP provides litigation, trial, and business counsel for companies, investors, and individuals.",
    siteName: "Reeder McCreary, LLP",
    type: "website",
  },
};

const cormorant = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorant.variable}>
      <body className={cormorant.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
