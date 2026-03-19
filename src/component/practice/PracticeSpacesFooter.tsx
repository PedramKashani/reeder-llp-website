export default function PracticeSpacesFooter() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-xl font-semibold tracking-tight">Sample</h3>
            <div className="mt-6 h-px w-20 bg-[#c8a24a]" />
            <div className="mt-6">
              <img
                alt=""
                className="max-w-[260px] opacity-90"
                src="/images/logos/RMC-Logo-White-Bkgd.webp"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-xl font-semibold tracking-tight">
              Office Location
            </h3>
            <div className="mt-6 h-px w-20 bg-[#c8a24a]" />
            <p className="mt-6 text-[15px] leading-relaxed text-white/75">
              11766 Wilshire Blvd, Suite 1470
              <br />
              Los Angeles, CA 90025
            </p>
            <a
              className="mt-6 inline-block rounded-full border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.22em] text-white/80 hover:bg-white/10 hover:text-white"
              href="tel:310-861-2470"
            >
              310-861-2470
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
