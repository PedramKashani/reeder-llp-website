import type { Metadata } from "next";
import { FIRM_NAME, SITE_URL } from "@/data/firm";

export const DEFAULT_OG_IMAGE_PATH =
  "/images/team/team-in-office-2-photoshopped.webp";

const siteUrl = new URL(SITE_URL);

export function resolveOgImageUrl(image?: string): string {
  if (!image?.trim()) {
    return new URL(DEFAULT_OG_IMAGE_PATH, siteUrl).toString();
  }
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }
  return new URL(image.startsWith("/") ? image : `/${image}`, siteUrl).toString();
}

type PageSocialMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildPageSocialMetadata({
  title,
  description,
  path,
  image,
}: PageSocialMetadata): Pick<Metadata, "openGraph" | "twitter"> {
  const imageUrl = resolveOgImageUrl(image);

  return {
    openGraph: {
      title,
      description,
      url: path,
      siteName: FIRM_NAME,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
