"use client";

import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/data/firm";
import { ContactForm } from "@/components/contact/ContactForm";
import { InfoCard } from "@/components/contact/InfoCard";
import { ScrollDownButton } from "@/components/ScrollDownButton";

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
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-3 text-white/90 hover:text-white"
            >
              <span className="h-px w-10 bg-white/60" />
              <span className="text-lg tracking-wide">{PHONE}</span>
            </a>
          </div>

          <ScrollDownButton scrollToId="section-heading" />
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
              cta={{ label: "Call Now", href: PHONE_HREF }}
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
              cta={{ label: PHONE, href: PHONE_HREF }}
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
                  href={PHONE_HREF}
                  className="mt-2 block text-lg font-medium text-neutral-950 hover:underline"
                >
                  {PHONE}
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
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-neutral-950 hover:bg-neutral-100"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
