"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-white">
      <h6 className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">
        Something Went Wrong
      </h6>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
        Unexpected Error
      </h1>
      <p className="mt-6 max-w-sm text-center text-base leading-relaxed text-white/50">
        An error occurred while loading this page. You can try again or return
        to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="inline-block border border-white/20 px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-block border border-white/10 px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white/60 transition hover:text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
