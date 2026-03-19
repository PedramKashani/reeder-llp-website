import "./globals.css";
import { Manrope } from "next/font/google";
import { Header } from "@/component/layout/Header";
import { Footer } from "@/component/layout/Footer";

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
