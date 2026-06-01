import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/firm";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/studio" },
    ],
    sitemap: new URL("/sitemap.xml", SITE_URL).toString(),
  };
}
