# Portfolio

A production-ready, frontend-only portfolio website built with Next.js, TypeScript, and CSS Modules.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules with custom design tokens
- **Analytics:** Google Analytics 4
- **Contact Form:** Formspree
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with nav, footer, analytics
│   ├── page.tsx          # Home page
│   ├── globals.css       # Design tokens and reset
│   ├── projects/         # Projects page
│   └── contact/          # Contact page
├── components/
│   ├── ui/               # Reusable UI: Button, Card, SectionContainer
│   ├── layout/           # Navbar, Footer, GoogleAnalytics
│   ├── home/             # Hero component
│   ├── projects/         # ProjectCard component
│   └── contact/          # ContactForm component
├── data/
│   └── projects.ts       # Project data (edit this to add your projects)
├── lib/
│   ├── analytics.ts      # GA4 event tracking utilities
│   └── metadata.ts       # SEO metadata helper
└── types/
    └── index.ts          # Shared TypeScript types
```

## Local Setup

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root (use `.env.local.example` as a template):

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (e.g., `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree form endpoint URL |
| `NEXT_PUBLIC_SITE_URL` | Your production URL for SEO metadata |

## Google Analytics 4 Setup

### Step 1: Create a GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (gear icon in the bottom-left)
3. Click **Create Property**
4. Enter your property name (e.g., "Portfolio")
5. Set your timezone and currency
6. Click **Next**, select your business details, then **Create**

### Step 2: Set Up a Web Data Stream

1. In your new property, go to **Admin > Data Streams**
2. Click **Add stream > Web**
3. Enter your website URL and stream name
4. Click **Create stream**
5. Copy the **Measurement ID** (starts with `G-`)

### Step 3: Add to Environment Variables

```bash
# In your .env.local file
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ID-HERE
```

### Step 4: Test Analytics

1. Start your dev server (`npm run dev`)
2. Open your site in the browser
3. In Google Analytics, go to **Reports > Realtime**
4. You should see your visit appear
5. Click project demo/GitHub links and check that custom events appear under **Realtime > Event count by Event name**

### Tracked Events

| Event | Category | Trigger |
|---|---|---|
| `demo_click` | projects | User clicks "View Demo" on a project card |
| `github_click` | projects | User clicks "Source Code" on a project card |
| `form_submit` | contact | User successfully submits the contact form |

## Formspree Setup

1. Go to [Formspree](https://formspree.io/) and create a free account
2. Click **New Form** and give it a name
3. Copy the form endpoint URL (e.g., `https://formspree.io/f/xxxxxxxx`)
4. Add it to your `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

5. Test the form on your local dev server

## Customization

### Adding Your Information

1. **Name and bio:** Edit `src/components/home/Hero.tsx`
2. **Profile photo:** Replace `public/profile-placeholder.svg` with your photo (update the `src` in Hero.tsx)
3. **Projects:** Edit `src/data/projects.ts` with your real projects
4. **Footer links:** Edit `src/components/layout/Footer.tsx`
5. **Site metadata:** Edit `src/app/layout.tsx` and `src/lib/metadata.ts`
6. **Favicon:** Replace `public/favicon.ico` with your own

### Design Tokens

All design tokens (colors, typography, spacing, shadows) are defined in `src/app/globals.css` as CSS custom properties. Modify these to adjust the design system globally.

## Deployment to Vercel

### Option 1: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com/) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Add your environment variables in the Vercel dashboard under **Settings > Environment Variables**
7. Click **Deploy**

### Environment Variables on Vercel

In your Vercel project dashboard:

1. Go to **Settings > Environment Variables**
2. Add each variable from your `.env.local` file
3. Set them for **Production**, **Preview**, and **Development** as needed
4. Redeploy for changes to take effect

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
