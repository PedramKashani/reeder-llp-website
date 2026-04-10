import { createClient } from "@sanity/client";
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  isSanityConfigured,
} from "@/lib/sanity/env";

export function getSanityClient() {
  if (!isSanityConfigured()) return null;

  return createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: SANITY_API_VERSION,
    useCdn: true,
    perspective: "published",
  });
}
