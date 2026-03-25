"use client";

import { useState } from "react";
import Image from "next/image";

const HOURS = [
  { day: "Monday", hours: "9am – 5pm" },
  { day: "Tuesday", hours: "9am – 5pm" },
  { day: "Wednesday", hours: "9am – 5pm" },
  { day: "Thursday", hours: "9am – 5pm" },
  { day: "Friday", hours: "9am – 5pm" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const MAP_CENTER = { lat: 34.0479162, lng: -118.4620338 };

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-950">
      <section className="contact-hero relative min-h-[85vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80"
          alt="Law office interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl items-end px-6 pb-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">
              How to
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Contact Us
            </h1>
            <a
              href="tel:310-861-2470"
              className="mt-6 inline-flex items-center gap-3 text-white/90 hover:text-white"
            >
              <span className="h-px w-10 bg-white/60" />
              <span className="text-lg tracking-wide">310-861-2470</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => scrollToId("section-heading")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-xs tracking-[0.3em] text-white backdrop-blur hover:bg-white/15"
            aria-label="Scroll to next section"
          >
            ↓
          </button>
        </div>
      </section>

      <section id="section-heading" className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h5 className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            Need Help?
          </h5>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s Talk
          </h2>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <InfoCard
              title="New Clients"
              body="Looking to speak with our team?"
              cta={{ label: "Call Now", href: "tel:310-861-2470" }}
              className="md:col-span-6"
            />

            <InfoCard
              title="Contact Info"
              body={
                <>
                  <div className="space-y-1">
                    <p className="text-neutral-700">Reeder McCreary, LLP</p>
                    <p className="text-neutral-700">Los Angeles, CA</p>
                  </div>
                </>
              }
              cta={{ label: "310-861-2470", href: "tel:310-861-2470" }}
              className="md:col-span-6"
            />

            <InfoCard
              title="Business Hours"
              body="We are open Monday to Friday, from 9:00 am to 5:00 pm."
              cta={{
                label: "View Hours",
                href: "#section-hours",
                onClick: () => scrollToId("section-hours"),
                variant: "ghost",
              }}
              className="md:col-span-12"
            />

            <InfoCard
              title="General Inquiries"
              body="Send us a message using the form below."
              cta={{
                label: "View Form",
                href: "#section-form",
                onClick: () => scrollToId("section-form"),
                variant: "ghost",
              }}
              className="md:col-span-12"
            />
          </div>
        </div>
      </section>

      <section id="section-hours" className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
            Business Hours
          </h3>
          <ul className="mt-10 divide-y divide-neutral-200 border-t border-neutral-200">
            {HOURS.map((row) => (
              <li
                key={row.day}
                className="flex items-center justify-between py-5"
              >
                <span className="text-sm uppercase tracking-[0.25em] text-neutral-600">
                  {row.day}
                </span>
                <span className="text-sm font-medium text-neutral-900">
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="section-form">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
            Contact Us
          </h3>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src="/images/chris/chris-reeder-3.webp"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-neutral-200 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                  Phone
                </p>
                <a
                  href="tel:310-861-2470"
                  className="mt-2 block text-lg font-medium text-neutral-950 hover:underline"
                >
                  310-861-2470
                </a>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="rounded-2xl border border-neutral-200 p-6 md:p-10">
                <ContactForm />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200">
                <iframe
                  title="Reeder McCreary Map"
                  className="h-[360px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${MAP_CENTER.lat},${MAP_CENTER.lng}&z=14&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta-dark border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h4 className="text-2xl font-semibold tracking-tight text-white">
              Need to speak with someone?
            </h4>
            <a
              href="tel:310-861-2470"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-neutral-950 hover:bg-neutral-100"
            >
              Call 310-861-2470
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

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
    else if (name.length > 200) next.name = "Name is too long.";

    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    else if (email.length > 320) next.email = "Email is too long.";

    if (!message) next.message = "Please enter a message.";
    else if (message.length < 3)
      next.message = "Please enter a longer message.";
    else if (message.length > 10_000) next.message = "Message is too long.";

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

      let data: { ok?: boolean; error?: string; fields?: string[] } = {};
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
          "We couldn’t send your message through the site right now. Please call 310-861-2470.",
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

      setFormError(
        "Something went wrong. Please try again or call 310-861-2470.",
      );
    } catch {
      setFormError(
        "Something went wrong. Please try again or call 310-861-2470.",
      );
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

function InfoCard({
  title,
  body,
  cta,
  className = "",
}: {
  title: string;
  body: React.ReactNode;
  cta: {
    label: string;
    href: string;
    onClick?: () => void;
    variant?: "solid" | "ghost";
  };
  className?: string;
}) {
  const isGhost = cta.variant === "ghost";

  return (
    <div
      className={[
        "rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
        className,
      ].join(" ")}
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-900">
        {title}
      </h3>
      <div className="mt-4 text-neutral-700">{body}</div>
      <div className="mt-6">
        <a
          href={cta.href}
          onClick={(e) => {
            if (!cta.onClick) return;
            e.preventDefault();
            cta.onClick();
          }}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition",
            isGhost
              ? "border border-neutral-300 bg-transparent text-neutral-950 hover:bg-neutral-50"
              : "bg-neutral-950 text-white hover:bg-neutral-800",
          ].join(" ")}
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.35em] text-neutral-500">
        {label}{" "}
        {required ? <span className="text-neutral-400">*</span> : null}
      </span>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className={
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400 " +
          (error ? "border-red-400" : "border-neutral-200")
        }
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.35em] text-neutral-500">
        {label} <span className="text-neutral-400">*</span>
      </span>
      <textarea
        required
        name={name}
        placeholder={placeholder}
        rows={7}
        className={
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400 " +
          (error ? "border-red-400" : "border-neutral-200")
        }
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}
