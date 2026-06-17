import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  FIRM_NAME,
  PHONE_E164,
  ADDRESS,
  LOGO_SRC,
} from "@/data/firm";
import { siteUrl } from "@/app/layout";

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

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
