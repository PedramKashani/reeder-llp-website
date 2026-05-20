import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Reeder LLP",
  description:
    "Contact Reeder LLP in Los Angeles—phone, business hours, and a secure way to reach our team about new matters, consultations, and general inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
