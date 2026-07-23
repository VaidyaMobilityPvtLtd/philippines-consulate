"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

/**
 * Contact inquiry form. Presentational for now — shows confirmation on submit.
 * Wire to an API / email service when going live.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-surface-muted p-8 text-center shadow-card md:p-10">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
          <Icon name="mail" size={26} />
        </span>
        <h2 className="mt-4 font-heading text-xl font-semibold text-ink">Message sent</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
          Thank you. The Consulate will review your inquiry and respond during office hours.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-2xl border border-line bg-surface p-6 shadow-card md:p-8"
      noValidate={false}
    >
      <div className="mb-6">
        <h2 className="font-heading text-xl font-semibold text-ink">Send a message</h2>
        <p className="mt-1.5 text-sm text-ink-muted">
          Ask about visas, passports, appointments, or general consular help.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name <span className="text-notice-ink">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-notice-ink">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+977 …"
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className={labelClass}>
            Topic <span className="text-notice-ink">*</span>
          </label>
          <select id="contact-topic" name="topic" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a topic
            </option>
            <option value="visa">Visa &amp; migration</option>
            <option value="passport">Passport service</option>
            <option value="registration">Registration / civil documents</option>
            <option value="appointment">Appointment request</option>
            <option value="general">General inquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-subject" className={labelClass}>
            Subject <span className="text-notice-ink">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            required
            className={inputClass}
            placeholder="Brief subject line"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClass}>
            Message <span className="text-notice-ink">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className={inputClass}
            placeholder="Tell us how we can help…"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-muted">
          We typically respond within 1–2 working days during office hours.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Send message
          <Icon name="arrowRight" size={16} />
        </button>
      </div>
    </form>
  );
}
