# Photo Implementation Guide for LPA Landing Page

## Mobile-First Photo Strategy

All photos are optimized for mobile viewing with specific aspect ratios and placements. Here's where each photo goes and the specifications:

---

## 1. FACILITY PHOTOS (4 Photos Required)
**Location:** LandingFacilityShowcase component
**Aspect Ratio:** 16:9 (Landscape)
**Mobile Size:** Full width, ~200px height
**Desktop Size:** Half width, ~300px height

### Photos Needed:
1. **Training Area Photo**
   - Show: Hitting cages, Rapsodo units, HitTrax system
   - Angle: Wide shot showing technology and training space
   - Best: Action shot of athlete using equipment

2. **Strength & Conditioning Photo**
   - Show: Weight room, Olympic platforms, equipment
   - Angle: Dynamic shot showing athletes training
   - Best: Group shot showing professional environment

3. **Video Analysis Room Photo**
   - Show: Screens, technology setup, coaching session
   - Angle: Over-shoulder shot of analysis in progress
   - Best: Coach and athlete reviewing video together

4. **Sports Medicine Photo**
   - Show: Treatment area, assessment tools, professional setup
   - Angle: Clean, professional medical environment
   - Best: Trainer working with athlete

**File Format:** JPG optimized for web
**Recommended Size:** 1200x675px (will auto-resize)
**File Names:** 
- `training-area.jpg`
- `strength-conditioning.jpg`
- `video-analysis.jpg`
- `sports-medicine.jpg`

---

## 2. COACH HEADSHOTS (3 Photos Required)
**Location:** LandingCoaches component
**Aspect Ratio:** 4:5 (Portrait)
**Mobile Size:** ~300px width, ~375px height
**Desktop Size:** ~350px width, ~440px height

### Photos Needed:
1. **Coach Marcus (Director of Pitching)**
   - Professional headshot or action shot coaching
   - Background: Field or training facility
   - Style: Serious, professional, athletic

2. **Coach David (Director of Hitting)**
   - Professional headshot or action shot coaching
   - Background: Batting cage or field
   - Style: Confident, approachable

3. **Coach Sarah (Strength & Conditioning)**
   - Professional headshot or action shot in weight room
   - Background: Gym/training area
   - Style: Strong, professional

**File Format:** JPG optimized for web
**Recommended Size:** 800x1000px (will auto-resize)
**File Names:**
- `coach-marcus.jpg`
- `coach-david.jpg`
- `coach-sarah.jpg`

**Photo Tips:**
- Consistent lighting across all three
- Similar background style (facility-based)
- Professional athletic wear (LPA branded preferred)
- Eye-level camera angle
- Slight smile or confident expression

---

## 3. TESTIMONIAL PHOTOS (3 Photos Optional)
**Location:** LandingSocialProof component
**Aspect Ratio:** 16:9 (Landscape, header banner style)
**Mobile Size:** Full width, ~130px height
**Desktop Size:** Full width, ~160px height

### Photos Needed:
1. **Mike Rodriguez & Son**
   - Parent with athlete at field/facility
   - Casual but professional
   - Shows relationship and pride

2. **Jennifer Martinez & Son**
   - Parent with athlete in training environment
   - Action-oriented or post-training moment
   - Genuine emotion/pride

3. **David Thompson & Son**
   - Parent with athlete, possibly with equipment
   - Could be signing day or training moment
   - Success/achievement feeling

**File Format:** JPG optimized for web
**Recommended Size:** 1200x675px (will auto-resize)
**File Names:**
- `testimonial-rodriguez.jpg`
- `testimonial-martinez.jpg`
- `testimonial-thompson.jpg`

**Note:** These are optional. The testimonials work well without photos. Only add if you have quality, authentic photos that enhance credibility.

---

## 4. ATHLETE ACTION PHOTOS (8+ Photos Recommended)
**Location:** LandingAthletes component (NEW!)
**Aspect Ratio:** 1:1 (Square)
**Mobile:** Horizontal scroll cards (~256px square)
**Desktop:** 4-column grid (~280px square)

### Photos Needed (Mix of these categories):

1. **Pitching Training** (2-3 photos)
   - Athlete mid-delivery with coach watching
   - Close-up of mechanics work
   - Rapsodo screen showing metrics

2. **Hitting Sessions** (2-3 photos)
   - Athlete in batting cage
   - Contact moment with HitTrax visible
   - Coach analyzing swing

3. **Strength Training** (1-2 photos)
   - Athletes in weight room
   - Dynamic movement/explosive work
   - Group training energy

4. **Video Analysis** (1 photo)
   - Athletes watching film with coach
   - Screen showing swing/pitch analysis
   - Learning moment

5. **Team Atmosphere** (1-2 photos)
   - Multiple athletes training together
   - Competitive drills
   - Team energy/camaraderie

6. **Individual Coaching** (1 photo)
   - One-on-one instruction moment
   - Close coach-athlete interaction
   - Focused training

7. **Recovery/Mobility** (1 photo optional)
   - Stretching/mobility work
   - Professional care
   - Preparation focus

8. **Celebration Moments** (1 photo)
   - Commitment announcement
   - Achievement celebration
   - Success/pride moment

**File Format:** JPG optimized for web
**Recommended Size:** 800x800px (will auto-resize)
**File Names Pattern:** `athlete-01.jpg`, `athlete-02.jpg`, etc.

**Photo Style Guide:**
- Action shots preferred over posed
- Show authentic training moments
- Mix of close-ups and wide shots
- Good lighting, sharp focus
- Athletes in LPA gear (branded)
- Show diversity of training
- Energy and intensity visible
- Equipment/technology visible when relevant

**Mobile UX:** 
- Scrollable horizontal gallery
- Swipe-friendly cards
- Quick loading with lazy load
- Touch-optimized spacing

---

## 5. HERO BACKGROUND VIDEO (Already Implemented)
**Location:** LandingHero component
**Current:** `/hero-training.mp4`
**Status:** ✅ Already in place

---

## Implementation Instructions

### To Add Photos:

1. **Place files in:** `public/` folder
   ```
   public/
   ├── training-area.jpg
   ├── strength-conditioning.jpg
   ├── video-analysis.jpg
   ├── sports-medicine.jpg
   ├── coach-marcus.jpg
   ├── coach-david.jpg
   ├── coach-sarah.jpg
   └── (optional testimonial photos)
   ```

2. **Update component code** to replace placeholder divs with:
   ```tsx
   <img 
     src="/training-area.jpg" 
     alt="LPA Training Area with Rapsodo and HitTrax Technology"
     className="w-full h-full object-cover"
     loading="lazy"
   />
   ```

3. **Mobile Optimization Tips:**
   - All images use `loading="lazy"` for performance
   - Aspect ratios are locked for consistent layout
   - Images are set to `object-cover` to prevent distortion
   - Border-radius applied via parent container

---

## Photo Quality Checklist

### ✅ Must Have:
- High resolution (at least 1200px wide)
- Good lighting (bright, professional)
- Sharp focus (not blurry)
- Authentic (real LPA facility/people)
- Athletic/professional vibe
- Properly cropped to aspect ratio

### ❌ Avoid:
- Stock photos (looks fake)
- Low resolution/pixelated
- Dark/poorly lit
- Cluttered backgrounds
- Unrelated content
- Watermarks

---

## Priority Order

If you can only get a few photos immediately, prioritize in this order:

1. **Coach headshots** (highest trust/credibility impact)
2. **Training area photo** (shows main value proposition)
3. **Strength & conditioning photo** (shows professional facility)
4. Other facility photos
5. Testimonial photos (optional, only if authentic)

---

## Current Status

🟡 **Placeholders Active** - All photo positions are marked with gradient placeholders showing:
- Exact dimensions
- Where each photo goes
- What content should be shown

These placeholders are mobile-optimized and will automatically resize when real photos are added.
