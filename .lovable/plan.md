## Camps page + homepage banner updates

Store URL used everywhere a "Register for Camp" button appears:
`https://app.gohighlevel.com/v2/preview/VpToE9H2KPIT69WLTP2x?notrack=true`

### 1. `src/pages/Camps.tsx` — simplify

- **Remove** the entire Section 3 registration form (GHL iframe block, browser-style wrapper, `#register` section, the `form_embed.js` script effect, `GHL_FORM_URL`/`GHL_FORM_ID` constants).
- **Replace** the `campSessions` array with 5 entries (placeholders for dates/times/price):
  - May Camp
  - June Camp
  - July 2-Day Camp — "Two Wednesdays in July"
  - July 3-Day Camp — "Three Wednesdays in July"
  - July 5-Day Camp — "All Five Wednesdays in July"
  - Each card shows: name, dates (placeholder), times (placeholder), `Ages 8–14`, price (placeholder).
- **Remove** the per-card "Register →" button. Cards become purely informational.
- **Replace** hero "Register Now" button + section heading "Pick Your Session" CTA flow:
  - Hero button text → **"Register for Camp"**, links (new tab) to the store URL.
  - Add a large centered CTA block at the bottom of the Camp Dates section (above the Experience section) with heading + **"Register for Camp"** button → store URL (new tab, `rel="noopener noreferrer"`).
- Keep all existing styling, fonts, colors, header, footer, hero video, and Experience section unchanged.

### 2. Homepage banner

- **New component** `src/components/CampBanner.tsx`: thin full-width bar, primary/copper background, white Bebas/Oswald text "Camp Registration Now Open" with a small arrow icon, entire bar is a `<Link to="/camps">`. Responsive (smaller text + padding on mobile).
- **Mount** in `src/pages/Index.tsx` directly above the existing Hero/landing content (below the nav, above hero), so it only appears on the homepage as requested.

### Out of scope

- No design system, color, or typography changes.
- No edits to other pages, nav, or footer.
- No backend / GHL form configuration changes.
