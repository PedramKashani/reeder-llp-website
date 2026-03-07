import Link from "next/link";

export default function AntiSpamPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Legal
          </h6>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Anti-Spam Policy
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="prose prose-neutral max-w-none">
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

          <div className="mt-16 border-t border-neutral-200 pt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Report Spam
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
