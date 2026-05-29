"use client";

import { useCookieConsentOptional } from "./CookieConsentContext";

/**
 * Footer control to reopen cookie preferences at any time (GDPR / CCPA best practice).
 */
export function CookieSettingsButton() {
  const ctx = useCookieConsentOptional();
  if (!ctx) return null;

  return (
    <button
      type="button"
      onClick={ctx.openPreferences}
      className="text-sm text-white/60 transition-colors hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offset-primary focus-visible:outline-white/50"
    >
      Cookie Settings
    </button>
  );
}
