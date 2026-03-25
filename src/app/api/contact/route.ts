import { NextResponse } from "next/server";

const LIMITS = { name: 200, email: 320, phone: 80, message: 10_000 } as const;

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

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

  const data = body as Record<string, unknown>;
  const honeypot = typeof data.website === "string" ? data.website.trim() : "";
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
  if (!message || message.length < 3 || message.length > LIMITS.message)
    errors.push("message");

  if (errors.length > 0) {
    return NextResponse.json({ error: "validation", fields: errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8_000);

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website inquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
  } catch {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  } finally {
    clearTimeout(timeoutId);
  }

  if (!res.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
