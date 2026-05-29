export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.disputeforensic.com";

export const SITE_NAME = "DisputeForensic";
export const SITE_EMAIL = "info@disputeforensic.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/dispute-forensic";

export const COLORS = {
  primary: "#1A1F5E",
  accent: "#2563EB",
  highlight: "#94A3B8",
  background: "#FFFFFF",
  sectionAlt: "#F8F9FF",
  border: "#E0E4F4",
  heading: "#1A1F5E",
  body: "#374151",
} as const;
