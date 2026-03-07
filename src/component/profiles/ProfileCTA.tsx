export function ProfileCTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h4 className="text-2xl font-semibold">Need Legal Advice?</h4>
          <a
            href="/contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
