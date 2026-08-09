"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icons";
import { formatApiError, submitFeedback } from "@/lib/api";
import type { FeedbackType } from "@/lib/api-types";

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

function optional(value: FormDataEntryValue | null): string | undefined {
  const trimmed = String(value ?? "").trim();
  return trimmed || undefined;
}

/**
 * Visitor feedback form.
 * Mock mode: local success UI only. API mode: POST /api/feedback on Express.
 */
export function FeedbackForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: optional(data.get("lastName")),
      email: String(data.get("email") ?? "").trim(),
      phone: optional(data.get("phone")),
      city: optional(data.get("city")),
      country: optional(data.get("country")),
      subject: optional(data.get("subject")),
      type: optional(data.get("type")) ?? "Suggestions",
      message: optional(data.get("message")),
    };

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${baseUrl}/api/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit feedback");
      }

      form.reset();
      setSent(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-surface-muted p-8 text-center shadow-card">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
          <Icon name="mail" size={26} />
        </span>
        <h2 className="mt-4 font-heading text-xl font-semibold text-ink">Thank you for your feedback</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted">
          We appreciate you taking the time to share your suggestions and comments with the Consulate.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Submit more feedback
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-surface p-6 shadow-card md:p-8"
    >
      {error ? (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-notice-border bg-notice-bg px-4 py-3 text-sm text-notice-ink"
        >
          {error}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-notice-ink">*</span>
          </label>
          <input id="firstName" name="firstName" required className={inputClass} placeholder="First name" />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input id="lastName" name="lastName" className={inputClass} placeholder="Last name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail Address <span className="text-notice-ink">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" className={inputClass} placeholder="Phone number" />
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>
            City
          </label>
          <input id="city" name="city" className={inputClass} placeholder="City" />
        </div>
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input id="country" name="country" className={inputClass} placeholder="Country" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input id="subject" name="subject" className={inputClass} placeholder="Subject" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="type" className={labelClass}>
            Message Type
          </label>
          <select id="type" name="type" className={inputClass} defaultValue="Suggestions">
            <option value="Suggestions">Suggestions</option>
            <option value="Comments">Comments</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea id="message" name="message" rows={5} className={inputClass} placeholder="Your message" />
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit feedback"}
        <Icon name="arrowRight" size={16} />
      </button>
    </form>
  );
}
