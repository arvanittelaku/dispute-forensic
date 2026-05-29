"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { PhoneField, formatPhoneFromFormData } from "./PhoneField";

const disciplines = [
  "Forensic Accounting",
  "Forensic Engineering / Quantum",
  "Digital Forensics",
  "Forensic Economics",
  "Multiple Disciplines",
  "Not Sure",
];

const disputeTypes = [
  "Commercial Fraud",
  "Construction / Engineering",
  "Cybercrime / Data",
  "Competition Law",
  "IP Theft",
  "Shareholder / Commercial",
  "Professional Negligence",
  "International Arbitration",
  "Matrimonial",
  "Regulatory",
  "Other",
];

const courts = [
  "High Court (Commercial)",
  "High Court (TCC)",
  "ICC / LCIA / ICSID Arbitration",
  "CAT (Competition)",
  "FCA / CMA Regulatory",
  "Family Court",
  "Other",
];

const expertTypes = ["SJE", "Party-appointed", "Not decided"];

const claimValues = [
  "Under £250k",
  "£250k–£1M",
  "£1M–£10M",
  "£10M–£100M",
  "Over £100M",
  "Unknown",
];

const urgencyOptions = [
  "Urgent (within 5 days)",
  "Within 2 weeks",
  "Within 1 month",
  "Planning ahead",
];

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
    if (!formspreeUrl) return false;
    try {
      const data = new FormData(form);
      data.set("phone", formatPhoneFromFormData(data));
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      return res.ok;
    } catch {
      return false;
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = formatPhoneFromFormData(data);

    if (!fullName || !email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email.");
      return;
    }

    const payload = {
      fullName,
      email,
      phone,
      organisation: String(data.get("organisation") || "").trim(),
      discipline: String(data.get("discipline") || "").trim(),
      disputeType: String(data.get("disputeType") || "").trim(),
      court: String(data.get("court") || "").trim(),
      expertType: String(data.get("expertType") || "").trim(),
      claimValue: String(data.get("claimValue") || "").trim(),
      deadline: String(data.get("deadline") || "").trim(),
      urgency: String(data.get("urgency") || "").trim(),
      description: String(data.get("description") || "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      if (res.status === 503 && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (await submitToFormspree(form)) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 rounded border border-border px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="organisation" className={labelClass}>
            Law Firm / Organisation *
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <PhoneField inputClass={inputClass} labelClass={labelClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="discipline" className={labelClass}>
            Forensic Discipline Needed
          </label>
          <select id="discipline" name="discipline" className={inputClass}>
            {disciplines.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="disputeType" className={labelClass}>
            Dispute Type
          </label>
          <select id="disputeType" name="disputeType" className={inputClass}>
            {disputeTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="court" className={labelClass}>
            Court / Forum
          </label>
          <select id="court" name="court" className={inputClass}>
            {courts.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="expertType" className={labelClass}>
            SJE or party-appointed
          </label>
          <select id="expertType" name="expertType" className={inputClass}>
            {expertTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="claimValue" className={labelClass}>
            Approximate claim value
          </label>
          <select id="claimValue" name="claimValue" className={inputClass}>
            {claimValues.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label htmlFor="deadline" className={labelClass}>
            Deadline / hearing date
          </label>
          <input
            id="deadline"
            name="deadline"
            type="date"
            className={inputClass}
          />
        </div>
      </div>

      <div className="min-w-0">
        <label htmlFor="urgency" className={labelClass}>
          Urgency
        </label>
        <select id="urgency" name="urgency" className={inputClass}>
          {urgencyOptions.map((u) => (
            <option key={u} value={u}>
              {u}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief description
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage ?? "Something went wrong. Please email "}{" "}
          <SiteEmailLink className="underline" />.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#1d4ed8] disabled:opacity-60 sm:w-auto sm:text-sm"
      >
        {status === "loading" ? "Submitting…" : "Instruct a Forensic Expert"}
      </button>
    </form>
  );
}
