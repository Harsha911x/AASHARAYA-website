# Aashraya — Architecture Website

Production-ready Next.js 15 website for Aashraya, a Bengaluru-based architecture and interior design practice.

## Quick Start

```bash
# 1. Unzip and enter the folder
cd aashraya

# 2. Install dependencies
npm install

# 3. Copy env file and fill in SMTP credentials (see below)
cp .env.example .env.local

# 4. Start dev server
npm run dev
# → http://localhost:3000
```

## ⚡ Setting up contact form email delivery

Enquiries submitted via the contact form are sent to **binduta33@gmail.com** using your own Gmail account as the SMTP sender. This requires a **Gmail App Password** — it takes about 2 minutes to set up.

### Step-by-step Gmail App Password setup

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **Security** in the left sidebar
3. Scroll to **"How you sign in to Google"** → click **2-Step Verification** (you must have this enabled)
4. Scroll to the bottom → click **App passwords**
5. In the dropdown, select **"Other (Custom name)"** → type `Aashraya Website` → click **Generate**
6. Copy the 16-character password shown (e.g. `abcd efgh ijkl mnop`)
7. Open `.env.local` and fill in:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=binduta33@gmail.com
SMTP_PASS=abcdefghijklmnop
```

That's it. Restart the dev server and test the contact form — you should receive an email at binduta33@gmail.com, and the person who submitted also gets an auto-reply.

### What happens when someone submits the form

1. **Email to Aashraya** — sent to binduta33@gmail.com with name, email, phone, and message. Has a "Reply" button that opens an email back to the enquirer.
2. **Auto-reply to enquirer** — a polite acknowledgement from Ashok T K confirming receipt within two working days.

### Testing in development (without SMTP)

If no SMTP env vars are set, the form still works — it logs the submission to the server console and returns a success response. This is safe for development.

---

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add environment variables in Vercel dashboard under **Settings → Environment Variables**:
   - `SMTP_HOST` = `smtp.gmail.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `binduta33@gmail.com`
   - `SMTP_PASS` = *(your 16-char app password)*
   - `NEXT_PUBLIC_BASE_URL` = `https://yourdomain.com`
4. Deploy

---

## Project structure

```
aashraya/
├── app/
│   ├── page.tsx                # Homepage with ServicesSlider
│   ├── about/page.tsx          # About — Ashok T K
│   ├── contact/page.tsx        # Contact form + studio info
│   ├── portfolio/              # Portfolio index + [slug] detail
│   ├── services/[slug]/        # 6 service pages with process steps
│   ├── api/contact/route.ts    # POST → sends email via nodemailer
│   └── sitemap.ts
├── components/
│   ├── Header.tsx              # Sticky transparent header, mobile nav
│   ├── Footer.tsx              # Footer with address + contact
│   ├── Hero.tsx                # Reusable hero section
│   ├── ServicesSlider.tsx      # Auto-advancing services carousel
│   ├── ServiceCard.tsx         # Card used in grid
│   ├── ProjectCard.tsx         # Portfolio card
│   ├── ImageGallery.tsx        # Responsive grid + lightbox
│   └── ContactForm.tsx         # Client-side validated form
├── lib/
│   ├── projects.ts             # Project data helpers
│   └── services.ts             # 6 services with process steps
└── data/projects.json          # 6 sample projects (Unsplash images)
```

## Replacing placeholder content

### Studio info (already updated to Aashraya)
- Address: 171, 1st Floor, Papareddipalya, Annapurneshwari Nagar, Bengaluru 560072
- Phone: +91 99018 15989
- Email: binduta33@gmail.com

### Adding real project photos
Edit `data/projects.json` — replace `src` URLs with your own images hosted on a CDN, or place files in `/public` and use `/images/my-photo.jpg` paths. Update `next.config.js` `remotePatterns` to include your CDN hostname.

### Adding your own projects
Each project in `data/projects.json` needs: `slug`, `title`, `category`, `location`, `year`, `shortDescription`, `description`, `heroImage`, `gallery[]`, `tags[]`.

---

## Image credits
See [images-attribution.md](./images-attribution.md). All placeholder images are from [Unsplash](https://unsplash.com) (free commercial licence).
