
## Make "Apply Now" Button White with Black Text + Fix Link

### Changes

**1. Footer CTA Band** (`src/components/landing/FooterSection.tsx`)
- Change the "Apply Now" button styling from `bg-black text-white` to `bg-white text-black hover:bg-white/90` for a clean white button with black lettering
- Change the link from `/appointments` to `/apply` so it goes to the student-athlete application page
- Keep the "Schedule a Tour" button pointing to `/appointments` (the tour booking page)

**2. Hero Section** (`src/components/landing/HeroSection.tsx`)
- Change the "Apply Now" button styling to `bg-white text-black hover:bg-white/90` for consistency
- Change the link from `/appointments` to `/apply`

### Technical Details
- Footer "Apply Now" button (line 21-25): Update `Link to="/apply"` and classes to `bg-white text-black hover:bg-white/90`
- Hero "Apply Now" button (line 61-65): Update `Link to="/apply"` and classes to `bg-white text-black hover:bg-white/90`
- All other styling (font, tracking, padding) stays the same
