"use client";

import { contactEmail } from "@/lib/site";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <form
      className="glass-card p-5 sm:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const getValue = (name: string) =>
          String(formData.get(name) ?? "").trim();

        setSubmitStatus("submitting");
        setSubmitMessage("");

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: getValue("name"),
              email: getValue("email"),
              business: getValue("business"),
              website: getValue("website"),
              need: getValue("need"),
              budget: getValue("budget"),
              message: getValue("message"),
              companyWebsite: getValue("companyWebsite")
            })
          });

          if (!response.ok) {
            const result = (await response.json().catch(() => null)) as {
              error?: string;
            } | null;

            setSubmitStatus("error");
            setSubmitMessage(
              result?.error ??
                `The form could not be sent. Please email ${contactEmail}.`
            );
            return;
          }

          form.reset();
          setSubmitStatus("success");
          setSubmitMessage("Thanks. I'll review this and reply by email.");
        } catch {
          setSubmitStatus("error");
          setSubmitMessage(
            `The form could not be sent. Please email ${contactEmail}.`
          );
        }
      }}
    >
      <label className="hidden" aria-hidden="true">
        Company website
        <input
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-cream">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-cream">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
            placeholder="you@business.com"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-cream">Business name</span>
          <input
            required
            name="business"
            autoComplete="organization"
            className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
            placeholder="Business or project"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-cream">Website, optional</span>
          <input
            type="url"
            name="website"
            autoComplete="url"
            className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
            placeholder="https://"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-cream">What do you need help with?</span>
          <select
            required
            name="need"
            className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream transition focus:border-emerald"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>New small business website</option>
            <option>Website redesign</option>
            <option>Landing page</option>
            <option>Portfolio or content site</option>
            <option>Custom web app</option>
            <option>Ongoing support</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-cream">Budget range, optional</span>
          <select
            name="budget"
            className="w-full rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream transition focus:border-emerald"
            defaultValue=""
          >
            <option value="">Not sure yet</option>
            <option>Starter scope</option>
            <option>Business website scope</option>
            <option>Custom build or ongoing work</option>
          </select>
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-medium text-cream">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="w-full resize-y rounded-md border border-cream/12 bg-ink/65 px-4 py-3 text-cream placeholder:text-soft transition focus:border-emerald"
          placeholder="Tell me about your business, what you need, and where your current website is falling short."
        />
      </label>
      <button
        type="submit"
        disabled={submitStatus === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald px-5 py-3.5 font-semibold text-[#070806] transition hover:-translate-y-1 hover:bg-cream disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-emerald"
      >
        <Send aria-hidden="true" className="size-4" />
        {submitStatus === "submitting"
          ? "Sending..."
          : submitStatus === "success"
            ? "Message sent"
            : "Tell me about your project"}
      </button>
      <p
        aria-live="polite"
        className={`mt-4 min-h-6 text-sm ${submitStatus === "error" ? "text-copper" : "text-emerald"}`}
      >
        {submitMessage}
      </p>
    </form>
  );
}
