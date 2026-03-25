import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practiceAreas";
import { professionals } from "@/data/professionals";

const SITE_URL = "https://www.reedermccreary.com";

const STATIC_ROUTES: string[] = [
  "/",
  "/about",
  "/contact",
  "/practice-areas",
  "/professionals",
  "/case-results",
  "/our-favorite-things",
  "/terms",
  "/privacy-policy",
  "/anti-spam",
];

function toAbsoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const practicePaths = practiceAreas.map((a) => `/practice-areas/${a.slug}`);
  const professionalPaths = professionals.map((p) => `/professionals/${p.slug}`);

  const paths = [
    ...STATIC_ROUTES,
    ...practicePaths,
    ...professionalPaths,
  ];
  const uniquePaths = [...new Set(paths)];

  return uniquePaths.map((path) => ({
    url: toAbsoluteUrl(path),
    lastModified: new Date(),
  }));
}
