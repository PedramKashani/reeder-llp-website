export function ProfileCTA() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h4 className="text-3xl font-semibold md:text-4xl">Need Legal Advice?</h4>
          <a
            href="/contact"
            className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
