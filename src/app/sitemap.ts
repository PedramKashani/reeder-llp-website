import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practiceAreas";
import { professionals } from "@/data/professionals";

const SITE_URL = "https://www.reedermccreary.com";

function toAbsoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/practice-areas",
    "/professionals",
    "/case-results",
  ];

  const practiceRoutes = practiceAreas.map((area) => `/practice-areas/${area.slug}`);
  const professionalRoutes = professionals.map((person) => `/professionals/${person.slug}`);

  return [...staticRoutes, ...practiceRoutes, ...professionalRoutes].map((route) => ({
    url: toAbsoluteUrl(route),
    lastModified: new Date(),
  }));
}
