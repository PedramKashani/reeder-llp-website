/**
 * Homepage-only editorial rhythm: shared width, gutters, and vertical blocks
 * (asymmetric grid + tokens live in ImageContentSection).
 */
export const EDITORIAL_MAX = "max-w-[90rem]";
export const EDITORIAL_GUTTER = "px-6 sm:px-10 lg:px-14 xl:px-20";
/** First practice block after welcome */
export const EDITORIAL_BLOCK_Y_FIRST = "py-24 md:py-28 lg:py-36";
/** Following blocks: extra air above the hairline divider */
export const EDITORIAL_BLOCK_Y_FOLLOWING =
  "border-t border-white/[0.045] pt-28 pb-24 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32";

export function editorialWelcomeShell(): string {
  return `section-content-in mx-auto w-full ${EDITORIAL_MAX} ${EDITORIAL_GUTTER} py-20 md:py-24 lg:py-28`;
}
