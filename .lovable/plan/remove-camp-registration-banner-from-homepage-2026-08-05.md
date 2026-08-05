# Remove Camp Registration Banner from Homepage

## Goal
Take the orange "Camp Registration Now Open" bar off the homepage.

## Changes
- `src/pages/Index.tsx`: remove the `<CampBanner />` render and its import.
- `src/components/landing/HeroSection.tsx`: reduce the extra top padding that was added to clear the banner, so the hero headline sits correctly under the nav alone.
- Keep `src/components/CampBanner.tsx` in the project (unused) so it can be re-added later. The `/camps` page itself is untouched and still reachable by direct link.
