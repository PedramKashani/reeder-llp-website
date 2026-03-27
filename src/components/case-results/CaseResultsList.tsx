import { AnimatedSection } from "@/components/AnimatedSection";
import type { CaseResult } from "@/types/caseResult";

export function CaseResultsList({ results }: { results: CaseResult[] }) {
  return (
    <div className="space-y-14 md:space-y-16">
      {results.map((result, i) => (
        <AnimatedSection key={i} as="div" delay={i * 60}>
          <article className="group border-b border-neutral-200 pb-12 md:pb-14 last:border-0 last:pb-0">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
              {result.title}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700 md:text-xl lg:text-2xl">
              {result.description}
            </p>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}
