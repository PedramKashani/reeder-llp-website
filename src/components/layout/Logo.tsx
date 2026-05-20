import Link from "next/link";
import type { MouseEvent } from "react";
import { LOGO_MARK_DIMENSIONS, LOGO_MARK_SRC } from "@/data/firm";

export function Logo({
  heroMode,
  subtleShrink,
  onHomeClick,
}: {
  heroMode: boolean;
  subtleShrink: boolean;
  onHomeClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const { width, height } = LOGO_MARK_DIMENSIONS;

  return (
    <Link
      href="/"
      onClick={onHomeClick}
      className={
        "inline-flex shrink-0 items-center transition-[filter] duration-500 " +
        (heroMode ? "md:-ml-3" : "-ml-3 sm:-ml-4")
      }
    >
      {/* Native img keeps SVG vector-sharp; explicit dimensions preserve aspect ratio */}
      <img
        src={LOGO_MARK_SRC}
        width={width}
        height={height}
        alt="Reeder McCreary, LLP"
        decoding="async"
        fetchPriority="high"
        className={
          "logo-animate-in block w-auto max-w-[calc(100vw-7rem)] select-none sm:max-w-none " +
          (subtleShrink
            ? "h-8 sm:h-9"
            : "h-9 sm:h-10 md:h-11 lg:h-12") +
          (heroMode
            ? " brightness-[1.12] contrast-[1.14] saturate-[1.05]"
            : "")
        }
      />
    </Link>
  );
}
