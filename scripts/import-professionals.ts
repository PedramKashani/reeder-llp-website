/**
 * One-time / idempotent import of file-based professionals into Sanity.
 *
 * Requires SANITY_WRITE_TOKEN in .env.local (never commit the token).
 * Leaves photo and badgeImages unset so local file fallback images remain in use.
 */
import { createClient, type SanityClient } from "@sanity/client";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { professionals } from "../src/data/professionals";
import type { Professional } from "../src/types/professional";

function loadEnvLocal(): void {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();
    const value = rawValue.replace(/^(['"])(.*)\1$/, "$2");

    if (key && process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    console.error(`Missing required environment variable: ${name}`);
    console.error("Add it to .env.local before running this script.");
    process.exit(1);
  }
  return value;
}

function validateProfessional(
  professional: Professional,
  index: number,
): string | null {
  if (!professional.name?.trim()) {
    return `index ${index}: missing name`;
  }
  if (!professional.slug?.trim()) {
    return `index ${index}: missing slug`;
  }
  if (!professional.title?.trim()) {
    return `index ${index}: missing title`;
  }
  return null;
}

type SanityProfessionalFields = {
  name: string;
  legalName?: string;
  slug: { _type: "slug"; current: string };
  title: string;
  order: number;
  officePhone?: string;
  directDial?: string;
  email?: string;
  links?: Professional["links"];
  relatedPracticeSlugs?: string[];
  sections: Professional["sections"];
};

function toSanityFields(
  professional: Professional,
  order: number,
): SanityProfessionalFields {
  return {
    name: professional.name.trim(),
    ...(professional.legalName?.trim()
      ? { legalName: professional.legalName.trim() }
      : {}),
    slug: { _type: "slug", current: professional.slug.trim() },
    title: professional.title.trim(),
    order,
    ...(professional.officePhone?.trim()
      ? { officePhone: professional.officePhone.trim() }
      : {}),
    ...(professional.directDial?.trim()
      ? { directDial: professional.directDial.trim() }
      : {}),
    ...(professional.email?.trim() ? { email: professional.email.trim() } : {}),
    ...(professional.links?.length ? { links: professional.links } : {}),
    ...(professional.relatedPracticeSlugs?.length
      ? { relatedPracticeSlugs: professional.relatedPracticeSlugs }
      : {}),
    sections: professional.sections,
  };
}

function documentIdForSlug(slug: string): string {
  return `professional-${slug}`;
}

async function findExistingDocumentId(
  client: SanityClient,
  slug: string,
): Promise<string | null> {
  const existingId = await client.fetch<string | null>(
    `*[_type == "professional" && slug.current == $slug][0]._id`,
    { slug },
  );
  return existingId ?? null;
}

async function importProfessional(
  client: SanityClient,
  professional: Professional,
  order: number,
): Promise<"created" | "updated"> {
  const slug = professional.slug.trim();
  const fields = toSanityFields(professional, order);
  const existingId = await findExistingDocumentId(client, slug);

  if (existingId) {
    await client.patch(existingId).set(fields).commit();
    return "updated";
  }

  await client.create({
    _id: documentIdForSlug(slug),
    _type: "professional",
    ...fields,
  });
  return "created";
}

async function main(): Promise<void> {
  loadEnvLocal();

  const projectId = requireEnv("NEXT_PUBLIC_SANITY_PROJECT_ID");
  const dataset = requireEnv("NEXT_PUBLIC_SANITY_DATASET");
  const token = requireEnv("SANITY_WRITE_TOKEN");
  const apiVersion = process.env.SANITY_API_VERSION?.trim() || "2025-01-01";

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  const created: string[] = [];
  const updated: string[] = [];
  const skipped: string[] = [];
  const errored: string[] = [];

  console.log(
    `Importing ${professionals.length} professionals into Sanity (${projectId}/${dataset})...`,
  );
  console.log("Image fields (photo, badgeImages) are intentionally left empty.\n");

  for (const [index, professional] of professionals.entries()) {
    const slug = professional.slug?.trim() || `(index ${index})`;
    const validationError = validateProfessional(professional, index);

    if (validationError) {
      skipped.push(`${slug} — ${validationError}`);
      console.warn(`SKIP  ${slug} — ${validationError}`);
      continue;
    }

    try {
      const result = await importProfessional(client, professional, index);
      if (result === "created") {
        created.push(slug);
        console.log(`CREATE ${slug} (_id: ${documentIdForSlug(slug)})`);
      } else {
        updated.push(slug);
        console.log(`UPDATE ${slug}`);
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown import error";
      errored.push(`${slug} — ${message}`);
      console.error(`ERROR ${slug} — ${message}`);
    }
  }

  console.log("\n--- Import summary ---");
  console.log(`Created: ${created.length}`);
  created.forEach((slug) => console.log(`  - ${slug}`));
  console.log(`Updated: ${updated.length}`);
  updated.forEach((slug) => console.log(`  - ${slug}`));
  console.log(`Skipped: ${skipped.length}`);
  skipped.forEach((entry) => console.log(`  - ${entry}`));
  console.log(`Errored: ${errored.length}`);
  errored.forEach((entry) => console.log(`  - ${entry}`));

  if (errored.length > 0) {
    process.exit(1);
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : "Unknown fatal error";
  console.error(`Fatal: ${message}`);
  process.exit(1);
});
