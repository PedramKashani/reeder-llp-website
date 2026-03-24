import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";

export default function PracticeSidebar({
  activeSlug,
  phone,
}: {
  activeSlug: string;
  phone?: string;
}) {
  return (
    <div className="space-y-6">
      {phone ? (
        <a
          href={`tel:${phone}`}
          className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-xs uppercase tracking-[0.28em] hover:bg-white/10"
        >
          {phone}
        </a>
      ) : null}

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h4 className="text-sm uppercase tracking-[0.28em] text-white/80">
          Practice Areas
        </h4>
        <div className="mt-4 h-px w-full bg-white/10" />

        <nav className="mt-4">
          <ul className="space-y-2">
            {practiceAreas.map((p) => {
              const active = p.slug === activeSlug;
              return (
                <li key={p.slug}>
                  <Link
                    href={`/practice-areas/${p.slug}`}
                    className={[
                      "block rounded-lg px-3 py-2 text-sm transition",
                      active
                        ? "bg-[#c8a24a] text-black"
                        : "text-white/70 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {p.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Contact form (placeholder – hook to your ASP.NET endpoint later if you want) */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h4 className="text-sm uppercase tracking-[0.28em] text-white/80">
          Contact Our Firm
        </h4>
        <div className="mt-4 grid gap-3">
          <input
            placeholder="Name"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          <input
            placeholder="Phone"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          <input
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          <button className="mt-2 rounded-full bg-[#c8a24a] px-6 py-3 text-xs uppercase tracking-[0.22em] text-black">
            Submit
          </button>
          <p className="text-xs text-white/45">
            Attorney Advertising: Prior results do not guarantee a similar
            outcome.
          </p>
        </div>
      </div>
    </div>
  );
}
