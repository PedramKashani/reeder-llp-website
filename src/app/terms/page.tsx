import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Reeder McCreary, LLP",
  description:
    "Terms of use for the Reeder McCreary, LLP website, including conditions for accessing content, disclaimers, and limitations applicable to your use of this site.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Legal
          </h6>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Terms of Use
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="prose prose-neutral max-w-none">
          <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
            These Terms of Use (&quot;Terms&quot;) govern your use of this
            website (&quot;Website&quot;). By accessing or using the Website,
            you agree to be bound by these Terms. If you do not agree with any
            part of these Terms, you must not use the Website.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Use of Website
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>1.1.</strong> You must use the Website in accordance with
            these Terms and all applicable laws and regulations.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>1.2.</strong> You agree not to use the Website for any
            unlawful purpose or in any way that could harm, disable, overburden,
            or impair the Website or interfere with any other party&apos;s use
            and enjoyment of the Website.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>1.3.</strong> You agree not to attempt to gain unauthorized
            access to any portion or feature of the Website or any other systems
            or networks connected to the Website.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Legal Advice Disclaimer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.1.</strong> The information provided on the Website is not
            legal advice and should not be relied upon as such. The content on
            these pages is for informational purposes only and is meant as a
            starting point on your search for answers to your legal questions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.2.</strong> The law is constantly changing and evolving.
            We cannot guarantee that all information contained on this Website
            is up-to-date at all times.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.3.</strong> Therefore, we recommend that you contact an
            experienced lawyer in your area to guide you through your legal
            matter.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.4.</strong> When you speak with our lawyers and staff,
            everything you tell us about your case is confidential. However, we
            do not represent you (in court or otherwise) unless and until an
            agreement is signed by both you and us.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.5.</strong> Nothing on this Website should be taken to
            create a lawyer/client relationship.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.6.</strong> We may offer a no-obligation initial
            consultation. This, in no way, obligates us to represent you or to
            answer any specific questions. We reserve the right to deny a
            consultation to anybody, for any reason.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>2.7.</strong> This disclaimer applies to all pages and
            content contained on this Website.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Intellectual Property
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>3.1.</strong> All content, including text, graphics, logos,
            images, and software, on the Website is the property of our law firm
            or its licensors and is protected by copyright and other
            intellectual property laws.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>3.2.</strong> You may not reproduce, modify, distribute,
            display, or otherwise use any content from the Website without the
            prior written consent.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Links to Third-Party Websites
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>4.1.</strong> The Website may contain links to third-party
            websites that are not owned or controlled by us. We have no control
            over, and assume no responsibility for, the content, privacy
            policies, or practices of any third-party websites.
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>4.2.</strong> By using the Website, you acknowledge and
            agree that we shall not be responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with your use of or reliance on any content, goods,
            or services available on or through any third-party websites.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Limitation of Liability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>5.1.</strong> To the fullest extent permitted by law, we and
            our affiliates, officers, directors, employees, agents, and
            licensors shall not be liable for any direct, indirect, incidental,
            special, consequential, or exemplary damages, including but not
            limited to, damages for loss of profits, goodwill, use, data, or
            other intangible losses arising out of or in connection with your
            use of the Website.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Indemnification
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>6.1.</strong> You agree to indemnify and hold harmless our
            law firm affiliates, officers, directors, employees, agents, and
            licensors from and against any and all claims, liabilities, damages,
            losses, costs, expenses, or fees (including reasonable legal fees)
            arising out of or in connection with your use of the Website or any
            violation of these Terms.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Changes to Terms
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>7.1.</strong> We reserve the right to modify or replace
            these Terms at any time.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Governing Law
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>8.1.</strong> These Terms shall be governed by and construed
            in accordance with the laws of the United States, without regard to
            its conflict of law provisions.
          </p>

          <h2 className="mt-12 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
            <strong>9.1.</strong> If you have any questions about these Terms,
            please contact us.
          </p>
          <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
            By using the Website, you agree to abide by these Terms of Use. If
            you do not agree to these Terms, please do not use the Website.
          </p>

          <div className="mt-16 border-t border-neutral-200 pt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
