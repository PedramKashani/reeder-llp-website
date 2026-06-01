import { NextResponse } from "next/server";
import { LIMITS, isValidEmail } from "@/lib/validation";
import type { ContactFormFields } from "@/types/contact";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const data = body as Partial<ContactFormFields>;
  const honeypot = typeof data.website === "string" ? data.website.trim() : "";
  const website = honeypot;
  if (honeypot !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone =
    typeof data.phone === "string" ? data.phone.trim().slice(0, LIMITS.phone) : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  const errors: string[] = [];
  if (!name || name.length > LIMITS.name) errors.push("name");
  if (!email || email.length > LIMITS.email || !isValidEmail(email))
    errors.push("email");
  if (!message || message.length < LIMITS.messageMin || message.length > LIMITS.message)
    errors.push("message");

  if (errors.length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 400 });
  }

  const formspreeEndpoint =
    process.env.FORMSPREE_ENDPOINT?.trim() ||
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() ||
    "";

  if (!formspreeEndpoint) {
    console.error("[contact-api] Missing Formspree endpoint configuration", {
      hasFormspreeEndpoint: Boolean(process.env.FORMSPREE_ENDPOINT?.trim()),
      hasPublicFormspreeEndpoint: Boolean(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim(),
      ),
    });
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8_000);

  let res: Response;
  try {
    res = await fetch(formspreeEndpoint, {
      method: "POST",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        website,
        _subject: `Website inquiry from ${name}`,
      }),
    });
  } catch (err) {
    console.error("[contact-api] Formspree request failed before response", {
      error: err instanceof Error ? err.message : String(err),
    });
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  } finally {
    clearTimeout(timeoutId);
  }

  if (!res.ok) {
    let formspreeBody = "";
    try {
      formspreeBody = await res.text();
    } catch {
      formspreeBody = "<unable to read response body>";
    }
    console.error("[contact-api] Formspree API responded with error", {
      status: res.status,
      statusText: res.statusText,
      body: formspreeBody.slice(0, 2000),
    });
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
