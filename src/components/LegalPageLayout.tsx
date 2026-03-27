import Link from "next/link";

export function LegalPageLayout({
  title,
  ctaLabel,
  children,
}: {
  title: string;
  ctaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <h6 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Legal
          </h6>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="prose prose-neutral max-w-none">
          {children}

          <div className="mt-16 border-t border-neutral-200 pt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
