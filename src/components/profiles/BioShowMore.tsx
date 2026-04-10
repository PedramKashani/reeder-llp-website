"use client";

import { useMemo, useState } from "react";
import type { Professional } from "@/types/professional";

export function BioShowMore({ profile }: { profile: Professional }) {
  const [expanded, setExpanded] = useState(true);

  const paragraphs = useMemo(() => {
    return profile.sections.background ?? [];
  }, [profile]);

  if (!paragraphs.length) return null;

  const rest = paragraphs.slice(1);

  return (
    <section className="border-b border-white/10 bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-8 py-20 md:px-12 md:py-24 lg:px-16">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
          Bio
        </div>

        <div className="mt-8 w-full max-w-none space-y-6 text-lg leading-[1.75] text-white/[0.82] md:text-xl md:leading-[1.7]">
          <p>{paragraphs[0]}</p>
          {expanded &&
            rest.map((p, idx) => (
              <p key={idx} className="text-white/70">
                {p}
              </p>
            ))}
        </div>

        {rest.length > 0 ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center rounded-xl border border-white/20 bg-transparent px-5 py-3 text-base font-medium text-white transition hover:bg-white/10"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
