import { NextResponse } from "next/server";
import { contactEmail, siteName } from "@/lib/site";

export const runtime = "nodejs";

const resendApiUrl = "https://api.resend.com/emails";
const maxMessageLength = 4000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  business?: unknown;
  website?: unknown;
  need?: unknown;
  budget?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

function toCleanString(value: unknown, maxLength = 500) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function toCleanMessage(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxMessageLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function field(label: string, value: string) {
  return `${label}: ${value || "Not provided"}`;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? contactEmail;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? `${siteName} <onboarding@resend.dev>`;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }

  if (toCleanString(payload.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const name = toCleanString(payload.name, 120);
  const email = toCleanString(payload.email, 180).toLowerCase();
  const business = toCleanString(payload.business, 160);
  const website = toCleanString(payload.website, 250);
  const need = toCleanString(payload.need, 160);
  const budget = toCleanString(payload.budget, 160);
  const message = toCleanMessage(payload.message);

  if (!name || !email || !business || !need || !message) {
    return NextResponse.json(
      { error: "Please fill out the required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const subject = `Website project inquiry: ${business}`;
  const text = [
    field("Name", name),
    field("Email", email),
    field("Business", business),
    field("Website", website),
    field("Need", need),
    field("Budget", budget),
    "",
    "Message:",
    message
  ].join("\n");

  const html = `
    <h2>New website project inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Business:</strong> ${escapeHtml(business)}</p>
    <p><strong>Website:</strong> ${escapeHtml(website || "Not provided")}</p>
    <p><strong>Need:</strong> ${escapeHtml(need)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget || "Not sure yet")}</p>
    <hr />
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "curtis-bitton-web-design/1.0"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text,
      html
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "The message could not be sent. Please email me directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
