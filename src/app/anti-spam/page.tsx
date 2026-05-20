import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Anti-Spam Policy | Reeder LLP",
  description:
    "Reeder LLP's policy on unsolicited commercial email and communications, including how we handle marketing messages and respect your inbox.",
  alternates: {
    canonical: "/anti-spam",
  },
};

export default function AntiSpamPage() {
  return (
    <LegalPageLayout title="Anti-Spam Policy" ctaLabel="Report Spam">
      <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
        We have a strict policy against spamming. We forbid the sending of
        unsolicited bulk emails or emails of any kind in connection with the
        marketing of our websites or attorneys.
      </p>
      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        Our definition of spamming is any activity whereby you directly or
        indirectly transmit email messages to any email address that has not
        solicited such email and does not consent to such transmission.
      </p>
      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        In addition, we consider it spamming to post ads in newsgroups in
        violation of the rules of the newsgroup, in posts that are
        off-topic, or in groups that do not explicitly permit ads. This goes
        for the placement of ads on message boards, forums and chat rooms
        against the terms of participation in such sites.
      </p>
      <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
        If you are &quot;spammed&quot; by anyone regarding our website,
        services, or any matters relating to us or our attorneys, please
        report this to us directly.
      </p>
    </LegalPageLayout>
  );
}
