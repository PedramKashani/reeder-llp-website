"use client";

import { useMemo, useState } from "react";
import type { Professional } from "@/data/professionals";

export function BioShowMore({ profile }: { profile: Professional }) {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = useMemo(() => {
    return profile.sections.background ?? [];
  }, [profile]);

  if (!paragraphs.length) return null;

  const rest = paragraphs.slice(1);

  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
          Bio
        </div>

        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-neutral-800">
          <p>{paragraphs[0]}</p>
          {expanded &&
            rest.map((p, idx) => (
              <p key={idx} className="text-neutral-700">
                {p}
              </p>
            ))}
        </div>

        {rest.length > 0 ? (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
