/**
 * Shared layout / rhythm tokens for luxury editorial balance at 100% zoom.
 * Import class strings into components; keep in sync with design direction.
 */

/** Longform reading width (~65–72ch) */
export const LUXURY_PROSE = "max-w-[42rem] w-full";

/** Center prose column inside a full-width padded shell */
export const LUXURY_PROSE_CENTERED = `mx-auto ${LUXURY_PROSE}`;

/** Major vertical section padding (longform / editorial) */
export const SECTION_PAD_MAJOR = "py-20 md:py-28";

/** Stack spacing between major blocks inside a section */
export const STACK_SECTION = "space-y-12 md:space-y-14";

/** Grid gap for card-style lists */
export const GRID_GAP_CARDS = "gap-6 md:gap-7";

/**
 * Kicker aligned with nav label scale (see Header: 11px, tracking ~0.24em).
 */
export const KICKER_LUXURY =
  "text-[11px] font-medium uppercase tracking-[0.24em] text-white/70 md:text-[11px]";
