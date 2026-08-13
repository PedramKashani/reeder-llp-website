import { createImageUrlBuilder } from "@sanity/image-url";

const SANITY_CDN_IMAGE =
  /^https:\/\/cdn\.sanity\.io\/images\/([^/]+)\/([^/]+)\//;

const SANITY_FILENAME_DIMENSIONS =
  /-(\d+)x(\d+)\.(?:webp|jpe?g|png|gif)(?:[?#]|$)/i;

/** ~2× a ~350–400px Meet Others card without exposing 3000px originals. */
export const PROFESSIONAL_CARD_IMAGE_WIDTH = 800;

export function parseSanityImageDimensions(
  url: string,
): { width: number; height: number } | undefined {
  const match = url.match(SANITY_FILENAME_DIMENSIONS);
  if (!match) return undefined;

  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width < 1 || height < 1) {
    return undefined;
  }

  return { width, height };
}

export function getResizedSanityImageUrl(
  imageUrl: string,
  width: number = PROFESSIONAL_CARD_IMAGE_WIDTH,
): string {
  const match = imageUrl.match(SANITY_CDN_IMAGE);
  if (!match) return imageUrl;

  try {
    return createImageUrlBuilder({
      projectId: match[1],
      dataset: match[2],
    })
      .image(imageUrl)
      .width(width)
      .fit("max")
      .auto("format")
      .url();
  } catch {
    return imageUrl;
  }
}
