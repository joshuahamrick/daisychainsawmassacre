# daisychainsawmassacre — Portfolio Website

Next.js 16 · Tailwind CSS v4 · Framer Motion · TypeScript

---

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Content Swap-In Guide

### Portrait
1. Add your portrait image to `public/images/portrait/portrait.jpg`
2. Open `components/home/ArtistPortrait.tsx`
3. Set `HAS_PORTRAIT = true`

### Carousel (Homepage artwork)
1. Add images to `public/images/carousel/` (e.g. `piece-1.jpg`, `piece-2.jpg`)
2. Open `data/carouselPieces.ts` — update titles, mediums, years, and `imagePath` values
3. The carousel accepts any number of entries

### Gallery
1. Add images to `public/images/gallery/`
2. Open `data/galleryItems.ts` — add/edit entries
   - `category` must be one of: `"Paintings"` | `"Drawings"` | `"WIP"`
3. Set `HAS_IMAGES = true` in `components/gallery/GalleryItem.tsx`

### Shop
1. Add images to `public/images/shop/`
2. Open `data/shopItems.ts` — add/edit entries including `etsyUrl` and `price`
3. Set `HAS_IMAGES = true` in `components/shop/ShopItem.tsx`

### Social Links
Edit `data/socialLinks.ts` — update the `url` for each platform.

### About Page
Edit `app/about/page.tsx` — update the bio paragraphs and NSA graduation years directly.

---

## Contact Form: Enabling Email Delivery

The form currently logs submissions to the server console. To enable real email delivery:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Add to `.env.local`:
```
RESEND_API_KEY=re_...
```
Then follow the TODO comments in `app/api/contact/route.ts`.

**Option B — Formspree (zero-config)**
Replace the `fetch("/api/contact", ...)` call in `components/contact/ContactForm.tsx`
with a POST to your Formspree endpoint.

---

## Deploying to Vercel

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create daisychainsawmassacre --public --source=. --push
```

Then go to vercel.com → New Project → Import the GitHub repo. Vercel auto-detects Next.js. Every push to `main` triggers a production deploy; PRs get preview URLs.

If using Resend, add `RESEND_API_KEY` to Vercel's Environment Variables.

---

## Project Structure

```
app/                   # Pages (Next.js App Router)
  page.tsx             # Homepage — portrait + carousel
  gallery/page.tsx
  shop/page.tsx
  about/page.tsx
  contact/page.tsx
  api/contact/route.ts # Contact form API endpoint

components/
  layout/Navbar.tsx    # Sticky nav, "DCM" on mobile
  home/                # ArtistPortrait, SocialLinks, ArtworkCarousel
  gallery/             # GalleryGrid, GalleryItem
  shop/                # ShopGrid, ShopItem
  contact/             # ContactForm
  ui/                  # CarouselArrow, PageHeader

data/                  # All content lives here — edit to update the site
  carouselPieces.ts
  galleryItems.ts
  shopItems.ts
  socialLinks.ts

public/images/         # Drop images here
  portrait/
  carousel/
  gallery/
  shop/
```
