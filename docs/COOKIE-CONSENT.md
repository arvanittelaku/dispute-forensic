# Cookie consent — DisputeForensic.com

GDPR / ePrivacy / CCPA-informed cookie consent for the Next.js App Router site.

## Architecture

| Layer | Path | Role |
|-------|------|------|
| Consent defaults (SSR-safe) | `src/components/cookies/ConsentDefaultsScript.tsx` | Google Consent Mode v2 `default` denied — `beforeInteractive` |
| Provider / context | `src/components/cookies/CookieConsentContext.tsx` | State, localStorage, `syncTrackingScripts` on change |
| Script loader | `src/lib/cookies/consent-manager.ts` | Inject/remove GA, GTM, Meta, LinkedIn, Hotjar |
| Storage | `src/lib/cookies/storage.ts` | `df-cookie-consent` in localStorage, 12-month expiry |
| UI | `CookieBanner`, `CookiePreferencesPanel`, `CookieSettingsButton` | Fixed overlay — no CLS |
| Root wrapper | `CookieConsentRoot` in `src/app/layout.tsx` | Wires banner + footer preferences modal |

## Environment variables

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=
NEXT_PUBLIC_HOTJAR_ID=
```

Scripts load **only** when the matching category is granted and the ID is set.

## Google Analytics example

1. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`.
2. User accepts **Analytics** (or Accept All).
3. `syncTrackingScripts` loads `gtag/js` and config with `anonymize_ip: true`.
4. Consent Mode updates `analytics_storage` to `granted`.

No GA script is present in the document before consent.

## Google Consent Mode

Defaults (denied) are set in `ConsentDefaultsScript` before any tag runs. On every preference change, `applyGoogleConsentMode()` runs:

- `analytics_storage` ← analytics category  
- `ad_storage`, `ad_user_data`, `ad_personalization` ← marketing  
- `functionality_storage`, `personalization_storage` ← preferences  

## User actions

- **Accept All** — all optional categories on; scripts sync immediately.  
- **Reject Non-Essential** — only necessary; scripts removed and cookies cleared where possible.  
- **Customise Preferences** — per-category toggles; **Save** applies instantly.  
- **Cookie Settings** (footer) — reopen modal anytime after first choice.

## Policy page

`/cookies` — full Cookie Policy aligned with `COOKIE_CATEGORY_LABELS` in `src/lib/cookies/constants.ts`.

## Bump policy version

When categories or third parties change materially, increment `CONSENT_POLICY_VERSION` in `constants.ts` so returning users are prompted again.
