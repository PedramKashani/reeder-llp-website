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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "officePhone", title: "Office Phone", type: "string" }),
    defineField({ name: "directDial", title: "Direct Dial", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({
      name: "photo",
      title: "Photo (URL or /public path)",
      type: "string",
    }),
    defineField({
      name: "photoSmall",
      title: "Photo Small (URL or /public path)",
      type: "string",
    }),
    defineField({
      name: "photoLarge",
      title: "Photo Large (URL or /public path)",
      type: "string",
    }),
    defineField({
      name: "badgeImages",
      title: "Badge Images",
      type: "array",
      of: [{ type: "string" }],
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
        { name: "background", title: "Background", type: "array", of: [{ type: "string" }] },
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
