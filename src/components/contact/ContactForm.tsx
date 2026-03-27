"use client";

import { useState } from "react";
import { PHONE } from "@/data/firm";
import { LIMITS, isValidEmail } from "@/lib/validation";
import { Field } from "@/components/ui/Field";
import { TextArea } from "@/components/ui/TextArea";
import type { ContactFieldErrors, ContactApiResponse } from "@/types/contact";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setFormError(null);
    setFieldErrors({});
    setSuccess(false);

    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const website = String(fd.get("website") ?? "").trim();

    const next: typeof fieldErrors = {};
    if (!name) next.name = "Please enter your name.";
    else if (name.length > LIMITS.name) next.name = "Name is too long.";

    if (!email) next.email = "Please enter your email.";
    else if (!isValidEmail(email))
      next.email = "Please enter a valid email address.";
    else if (email.length > LIMITS.email) next.email = "Email is too long.";

    if (!message) next.message = "Please enter a message.";
    else if (message.length < LIMITS.messageMin)
      next.message = "Please enter a longer message.";
    else if (message.length > LIMITS.message)
      next.message = "Message is too long.";

    if (Object.keys(next).length) {
      setFieldErrors(next);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, website }),
      });

      let data: ContactApiResponse = {};
      try {
        data = (await res.json()) as typeof data;
      } catch {
        /* ignore */
      }

      if (res.ok && data.ok) {
        form.reset();
        setSuccess(true);
        return;
      }

      if (res.status === 503 && data.error === "unavailable") {
        setFormError(
          `We couldn't send your message through the site right now. Please call ${PHONE}.`,
        );
        return;
      }

      if (
        res.status === 400 &&
        data.error === "validation" &&
        Array.isArray(data.fields)
      ) {
        const serverFields: typeof fieldErrors = {};
        if (data.fields.includes("name"))
          serverFields.name = "Please check your name.";
        if (data.fields.includes("email"))
          serverFields.email = "Please check your email.";
        if (data.fields.includes("message"))
          serverFields.message = "Please check your message.";
        setFieldErrors(serverFields);
        setFormError("Please review the highlighted fields.");
        return;
      }

      setFormError(`Something went wrong. Please try again or call ${PHONE}.`);
    } catch {
      setFormError(`Something went wrong. Please try again or call ${PHONE}.`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success ? (
        <div
          className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-800"
          role="status"
        >
          Thank you for your message. We will respond as soon as we can.
        </div>
      ) : null}
      {formError ? (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
          role="alert"
        >
          {formError}
        </div>
      ) : null}

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input
          id="contact-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field
          label="Name"
          name="name"
          placeholder="Name"
          error={fieldErrors.name}
        />
        <Field
          label="Phone"
          name="phone"
          placeholder="Phone"
          required={false}
        />
      </div>
      <Field
        label="Email"
        name="email"
        placeholder="Email"
        type="email"
        error={fieldErrors.email}
      />
      <TextArea
        label="Message"
        name="message"
        placeholder="How can we help you?"
        error={fieldErrors.message}
      />
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
        >
          {isSubmitting ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
