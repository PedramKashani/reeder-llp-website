"use client";

import { useMemo, useState } from "react";
import type { Professional } from "@/data/professionals";

export function BioShowMore({ profile }: { profile: Professional }) {
  const [expanded, setExpanded] = useState(true);

  const paragraphs = useMemo(() => {
    return profile.sections.background ?? [];
  }, [profile]);

  if (!paragraphs.length) return null;

  const rest = paragraphs.slice(1);

  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto w-full max-w-7xl px-8 py-20 md:px-12 md:py-24 lg:px-16">
        <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Bio
        </div>

        <div className="mt-8 w-full max-w-none space-y-6 text-lg leading-[1.75] text-neutral-800 md:text-xl md:leading-[1.7]">
          <p>{paragraphs[0]}</p>
          {expanded &&
            rest.map((p, idx) => (
              <p key={idx} className="text-neutral-700">
                {p}
              </p>
            ))}
        </div>

        {rest.length > 0 ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-base font-medium text-neutral-900 hover:bg-neutral-50"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
