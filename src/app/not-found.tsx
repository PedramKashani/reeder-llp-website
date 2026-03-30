import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-6 text-white">
      <h6 className="text-sm font-medium uppercase tracking-[0.28em] text-white/60">
        404 — Page Not Found
      </h6>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
        Nothing Here
      </h1>
      <p className="mt-6 max-w-sm text-center text-base leading-relaxed text-white/50">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border border-white/20 px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-neutral-950"
      >
        Back to Home
      </Link>
    </div>
  );
}
