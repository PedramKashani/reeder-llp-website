import { defineField, defineType } from "sanity";

export const professionalType = defineType({
  name: "professional",
  title: "Professional",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "legalName",
      title: "Legal Name",
      description:
        "Optional full legal/formal name for SEO and structured data. Display name stays in Name.",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Lower numbers appear first on the Professionals page. Leave blank to sort after ordered entries.",
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "officePhone", title: "Office Phone", type: "string" }),
    defineField({ name: "directDial", title: "Direct Dial", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "photo",
      title: "Headshot",
      type: "image",
      options: { hotspot: true },
      description: "Primary attorney photo used on profile pages and listings.",
    }),
    defineField({
      name: "badgeImages",
      title: "Badge Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "relatedPracticeSlugs",
      title: "Related Practice Slugs",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "object",
      fields: [
        defineField({
          name: "background",
          title: "Bio",
          description:
            "Add one paragraph per item. These paragraphs appear on the attorney profile page.",
          type: "array",
          of: [{ type: "string" }],
        }),
        {
          name: "winningResults",
          title: "Winning Results",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "winningTrialLitigation",
          title: "Winning Trial Litigation",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "winningTransaction",
          title: "Winning Transaction",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "education", title: "Education", type: "array", of: [{ type: "string" }] },
        {
          name: "associations",
          title: "Associations",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "admissions",
          title: "Admissions",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "publications",
          title: "Publications",
          type: "array",
          of: [{ type: "string" }],
        },
        { name: "awards", title: "Awards", type: "array", of: [{ type: "string" }] },
        {
          name: "speakingEngagements",
          title: "Speaking Engagements",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),
  ],
});
