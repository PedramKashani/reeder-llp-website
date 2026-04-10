import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

const FIRM_SERIF = "var(--font-firm-serif), Georgia, 'Times New Roman', serif";

/** Barely-there separation from hero imagery — serif stays crisp without heavy shadow */
const HERO_WORDMARK_SHADOW = "0 1px 2px rgba(0, 0, 0, 0.32)";

/** Subtle letterpress on light backgrounds */
const LIGHT_STAMP_SHADOW =
  "0 1px 0 rgba(255, 255, 255, 0.95), 0 -1px 0 rgba(0, 0, 0, 0.05)";

export function Logo({
  heroMode,
  subtleShrink,
  hideWordmark = false,
  onHomeClick,
}: {
  heroMode: boolean;
  subtleShrink: boolean;
  hideWordmark?: boolean;
  onHomeClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const heroNameSize = subtleShrink
    ? "clamp(0.9375rem, 1.05vw, 1.0625rem)"
    : "clamp(1.05rem, 1.38vw, 1.35rem)";

  return (
    <Link
      href="/"
      onClick={onHomeClick}
      className={
        "inline-flex items-center gap-2.5 transition-all duration-500 sm:gap-3.5 " +
        (heroMode ? "-ml-2 sm:-ml-3" : "-ml-3 sm:-ml-4")
      }
    >
      <div
        className={
          "grid shrink-0 place-items-center rounded-xl logo-animate-in transition-all duration-500 " +
          (heroMode
            ? (subtleShrink ? "h-14 w-40" : "h-[3.5rem] w-44") +
              " border border-transparent bg-transparent"
            : "h-14 w-40 border border-neutral-200 bg-white")
        }
      >
        <div
          className={
            "relative transition-all duration-500 " +
            (heroMode
              ? subtleShrink
                ? "h-12 w-36"
                : "h-[2.95rem] w-40"
              : "h-12 w-36")
          }
        >
          <Image
            src="/images/logos/rmc-gold-logo.webp"
            alt="Reeder McCreary"
            fill
            priority
            sizes="(max-width: 640px) 150px, 170px"
            className="object-contain opacity-[0.94] drop-shadow-[0_1px_10px_rgba(0,0,0,0.18)]"
          />
        </div>
      </div>

      <div
        className={
          "hidden min-w-0 flex-col justify-center leading-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:flex " +
          (hideWordmark ? "sm:hidden " : "") +
          (heroMode && subtleShrink
            ? "pointer-events-none translate-x-2 opacity-0 blur-[2px]"
            : "")
        }
      >
        {heroMode ? (
          <>
            <span
              className="whitespace-nowrap font-semibold tracking-[0.14em] text-[#ebe6dc] antialiased"
              style={{
                fontFamily: FIRM_SERIF,
                fontSize: heroNameSize,
                textShadow: HERO_WORDMARK_SHADOW,
              }}
            >
              Reeder McCreary
            </span>
            <span className="font-sans mt-1.5 text-[9px] font-medium uppercase tracking-[0.36em] text-[#b8aa94]/88">
              Attorneys at Law
            </span>
          </>
        ) : (
          <>
            <span
              className="whitespace-nowrap font-semibold tracking-[0.12em] text-[#1a1816]"
              style={{
                fontFamily: FIRM_SERIF,
                fontSize: "clamp(0.9375rem, 1.12vw, 1.25rem)",
                textShadow: LIGHT_STAMP_SHADOW,
              }}
            >
              Reeder McCreary
            </span>
            <span className="font-sans mt-1.5 text-[9px] font-medium uppercase tracking-[0.34em] text-[#5c5345]/95">
              Attorneys at Law
            </span>
          </>
        )}
      </div>
    </Link>
  );
}
