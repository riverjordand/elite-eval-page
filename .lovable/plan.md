## Summer Camp Landing Page

Build a new standalone landing page at `/camps` for LPA's summer camp program. Follows LPA's landing-page rules: distraction-free, no main nav, no footer links beyond legal text, conversion-focused.

### Page structure (top to bottom)

1. **Minimal header** — LPA badge logo only (no nav links).
2. **Hero + YouTube video**
   - Bold Bebas headline ("Legendary Summer Camps" / "Built Different. Play Different.")
   - Short subhead aimed at parents + athletes
   - Embedded YouTube video (responsive 16:9 iframe) — placeholder video ID
   - Primary CTA button: "Register Now" (smooth-scrolls to form section)
3. **Section 1 — Camp Dates**
   - Section heading + intro line
   - Grid of camp date cards (3–4 placeholder sessions): session name, date range, age group, location, price
4. **Section 2 — The Camp Experience**
   - Section heading + intro
   - Feature grid (4–6 items with icons): elite coaching, velocity/mechanics work, strength & mobility, college-readiness guidance, facility access, culture
   - Optional photo strip placeholder
5. **Section 3 — Registration Form**
   - GHL iframe embed (placeholder form ID — easy to swap later)
   - Styled to match the Apply page card treatment
6. **Minimal footer** — copyright + Privacy / Terms links only

### Technical details

- New file: `src/pages/Camps.tsx`
- New route in `src/App.tsx`: `<Route path="/camps" element={<Camps />} />` (above catch-all)
- Reuse existing design tokens, Bebas/Oswald typography, dark cinematic styling — match Apply.tsx visual language for the form card
- Load GHL embed script (`https://link.msgsndr.com/js/form_embed.js`) the same way Apply.tsx does
- YouTube embed via standard `<iframe>` with `aspect-video` Tailwind wrapper; placeholder video ID `dQw4w9WgXcQ` (swap later)
- Placeholders clearly marked with comments for: YouTube video ID, camp date entries, GHL form URL/ID
- Page is NOT linked from main Navigation or FooterSection (standalone landing-page rule)
- Add SEO: page `<title>` and meta description via a small head update (or simple document.title effect)

### Out of scope

- Real video, real dates, real form ID (placeholders, you swap in later)
- Backend / database changes
- Adding the page to site navigation
