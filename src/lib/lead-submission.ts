import { appendRow, type CellValue } from "@/lib/google-sheets";

/** Shown in outbound webhook JSON as `Brand name`. */
export const BRAND_NAME = "DisputeForensic";

/** Row 1 headers on GOOGLE_SHEET_TAB_NAME, must match buildLeadSheetRow column order */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone Number",
  "Organisation",
  "Forensic Discipline",
  "Dispute Type",
  "Court / Forum",
  "Expert Type",
  "Claim Value",
  "Deadline Date",
  "Urgency",
  "Case Description",
  "Brand Name",
] as const;

export interface LeadSubmission {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  discipline?: string;
  disputeType?: string;
  court?: string;
  expertType?: string;
  claimValue?: string;
  deadline?: string;
  urgency?: string;
  description?: string;
}

export function getLeadWebhookUrl(): string | undefined {
  const url =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  return url?.trim() || undefined;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

function opt(value: unknown): string {
  if (value == null) return "";
  return sanitize(String(value));
}

function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export function parseLeadBody(body: unknown): LeadSubmission | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = opt(b.fullName ?? b.full_name);
  const email = opt(b.email).toLowerCase();

  if (!fullName || !email) return null;

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    organisation: opt(b.organisation),
    discipline: opt(b.discipline),
    disputeType: opt(b.disputeType ?? b.dispute_type),
    court: opt(b.court),
    expertType: opt(b.expertType ?? b.expert_type),
    claimValue: opt(b.claimValue ?? b.claim_value),
    deadline: opt(b.deadline),
    urgency: opt(b.urgency),
    description: opt(b.description),
  };
}

export function buildLeadSheetRow(lead: LeadSubmission): CellValue[] {
  return [
    new Date().toISOString(),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone),
    lead.organisation ?? "",
    lead.discipline ?? "",
    lead.disputeType ?? "",
    lead.court ?? "",
    lead.expertType ?? "",
    lead.claimValue ?? "",
    lead.deadline ?? "",
    lead.urgency ?? "",
    lead.description ?? "",
    BRAND_NAME,
  ];
}

export function buildWebhookPayload(lead: LeadSubmission) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
  };
}

export async function appendLeadToSheet(lead: LeadSubmission): Promise<void> {
  await appendRow(buildLeadSheetRow(lead));
}

export async function notifyLeadWebhook(
  lead: LeadSubmission,
  webhookUrl: string
): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildWebhookPayload(lead)),
      signal: AbortSignal.timeout(12_000),
    });
    return res.ok;
  } catch (err) {
    console.error("Lead webhook failed:", err);
    return false;
  }
}
