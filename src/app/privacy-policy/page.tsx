import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Reeder LLP",
  description:
    "How Reeder LLP collects, uses, and protects information when you visit our website or contact the firm, and your choices regarding personal data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" ctaLabel="Contact Us">
      <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
        This Privacy Policy applies to this website and governs data
        collection and usage.
      </p>
      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        By submitting your personal information to us, or interacting with
        our website, you acknowledge and agree to the processing of your
        personal information as set out in this Policy. If you do not agree
        to this Policy, you should not interact with our website.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Collection of Personal Information
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We may collect personal information, such as your name, email
        address, phone number, and state when you voluntarily submit it
        through our website.
      </p>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We collect your Internet Protocol (IP) address. An IP address is a
        number that is assigned to your computer when you use the Internet.
        The IP address data that we collect does not contain any personally
        identifiable information about you and is used to administer our
        site, to determine the numbers of different visitors to the site and
        to gather demographic data. However, when you submit personal
        information via this website, that information becomes identifiable
        and is kept on record as having come from your IP address. This
        information may be used to identify you on subsequent visits to this
        site, and to other sites associated with it, and to personalise your
        user experience.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Use of Personal Information
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We may use your personal information to:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-neutral-700 md:text-lg">
        <li>Respond to your enquiries and fulfill your requests.</li>
        <li>
          Send you newsletters, marketing communications, and other
          information that may be of interest to you.
        </li>
        <li>Improve our website and marketing efforts.</li>
        <li>Conduct research and analysis.</li>
      </ul>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Sharing of Personal Information
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        Where permitted by applicable law, we share your personal
        information for third parties to deliver services or in our
        legitimate interest including third-party service providers who
        perform services on our behalf in connection with this website,
        including website hosting and analytics.
      </p>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We may disclose personal information to regulatory authorities and
        other third parties to comply with a regulatory or legal obligation,
        to enforce our rights, or where we have a good faith belief that it
        is necessary for the protection of a legitimate or vital interest
        such as the safety of a person or property, to the extent permitted
        by applicable law.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Use of Cookies
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        This website uses &quot;cookies&quot; to help personalise your
        experience. For more information, please see our Cookie Notice.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Security of Your Personal Information
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We secure your personal information from unauthorized access, use,
        or disclosure. We use industry-standard security protocols and
        technology to protect your personal information during transmission
        and once it is received. However, no method of transmission over the
        Internet or method of electronic storage is 100% secure. Therefore,
        while we strive to use commercially acceptable means to protect your
        personal information, we cannot guarantee its absolute security.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Data Storage and Processing
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        Regardless of your location, information collected is processed and
        stored in databases located within the United States.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Changes to This Privacy Policy
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We may update this Privacy Policy periodically. We will notify you
        about significant changes in the way we treat personal information
        by updating any privacy information on this page. Your continued use
        of the website and/or services available through this site after
        such modifications will constitute your acknowledgment of the
        modified Privacy Policy and your agreement to abide and be bound by
        that Policy.
      </p>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
        Contact Information
      </h2>
      <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
        We welcome your questions or comments regarding this Privacy
        Policy. If you believe that we have not adhered to this Privacy
        Policy, please contact us immediately.
      </p>
    </LegalPageLayout>
  );
}
