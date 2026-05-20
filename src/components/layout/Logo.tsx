import Link from "next/link";
import type { MouseEvent } from "react";
import {
  LOGO_MARK_COMPACT_DIMENSIONS,
  LOGO_MARK_COMPACT_SRC,
  LOGO_MARK_DIMENSIONS,
  LOGO_MARK_SRC,
} from "@/data/firm";

const HERO_LOGO_FILTER =
  "brightness-[1.12] contrast-[1.14] saturate-[1.05]";

export function Logo({
  heroMode,
  subtleShrink,
  onHomeClick,
}: {
  heroMode: boolean;
  subtleShrink: boolean;
  onHomeClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const lockup = LOGO_MARK_DIMENSIONS;
  const compact = LOGO_MARK_COMPACT_DIMENSIONS;

  return (
    <Link
      href="/"
      onClick={onHomeClick}
      className={
        "inline-flex shrink-0 items-center transition-[filter] duration-500 " +
        (heroMode ? "md:-ml-3" : "-ml-3 sm:-ml-4")
      }
    >
      <div
        className={
          "logo-animate-in relative transition-[width,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] " +
          (subtleShrink
            ? "h-9 w-9 sm:h-10 sm:w-10"
            : "h-9 w-[min(calc(100vw-7rem),12.75rem)] sm:h-10 sm:w-[14.5rem] md:h-11 md:w-[15.75rem] lg:h-12 lg:w-[17.25rem]")
        }
      >
        <img
          src={LOGO_MARK_SRC}
          width={lockup.width}
          height={lockup.height}
          alt="Reeder McCreary, LLP"
          decoding="async"
          fetchPriority="high"
          className={
            "absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 " +
            (subtleShrink ? "pointer-events-none opacity-0" : "opacity-100") +
            (heroMode ? ` ${HERO_LOGO_FILTER}` : "")
          }
        />
        <img
          src={LOGO_MARK_COMPACT_SRC}
          width={compact.width}
          height={compact.height}
          alt=""
          aria-hidden
          decoding="async"
          className={
            "absolute inset-0 h-full w-full object-contain transition-opacity duration-500 " +
            (subtleShrink ? "opacity-100" : "pointer-events-none opacity-0") +
            (heroMode ? ` ${HERO_LOGO_FILTER}` : "")
          }
        />
      </div>
    </Link>
  );
}
