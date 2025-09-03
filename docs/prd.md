## B2Breeze Marketing Website — Product Requirements Document (PRD)

### 1) Overview — Done

- Product: B2Breeze — “Business, as smooth as a breeze.”
- Purpose: Create a marketing website that clearly communicates value, showcases features, drives conversions (trial/demo signups), and links to the existing web app.
- Primary outcomes:
  - Educate prospects on core capabilities (scanner, wallet, directory, tasks, campaigns, invoices, analytics, conversation recorder).
  - Capture leads (email/demo), encourage trial.
  - Provide social/shareable content and SEO landing pages.

### 2) Target Audience & Positioning — Done

- Audience: Solo operators, SMB teams, and sales/marketing pros who need lightweight tooling to capture leads, manage contacts, plan tasks/campaigns, and generate invoices.
- Positioning: All‑in‑one business workflow hub combining OCR, contact management, analytics, and automation—fast, simple, privacy‑conscious.
- Tagline: “Business, as smooth as a breeze.”
- Primary value props:
  - Digitize business cards instantly with OCR; never lose a contact again.
  - Unified customer directory, tasks, campaigns, and invoicing in one place.
  - Insights and summaries with AI (transcription, analysis, and smart follow‑ups).

### 3) Key Features (from current app) — Done

1. Business Card Scanner (OCR)
2. Business Card Wallet (organized storage)
3. Customer Directory (profiles and history)
4. Task Planner (priorities, due dates, status)
5. Campaign Planner (marketing orchestration)
6. Invoice Generator (templates, exports)
7. Analytics Dashboard (KPIs, charts)
8. Conversation Recorder (record, transcribe, summarize)

Note: AI/ML support is implied by existing utilities (OCR, analysis, transcription). Avoid over‑promising; describe as “AI‑assisted.”

### 4) Success Metrics — Done

- Conversion rate to “Try Free” or “Request Demo.”
- Contact form submissions/newsletter signups.
- Time on page and scroll depth for Home and Features.
- Organic search impressions and clicks for top keywords.

### 5) Information Architecture / Sitemap

- / (Home)
- /features (All features overview)
  - /features/business-card-scanner
  - /features/business-card-wallet
  - /features/customer-directory
  - /features/task-planner
  - /features/campaign-planner
  - /features/invoice-generator
  - /features/analytics-dashboard
  - /features/conversation-recorder
- /pricing (Optional: tiers; otherwise “Contact us for pricing”)
- /demo (Video + booking form)
- /about (Mission, team)
- /blog (Optional; MDX/Markdown)
- /contact (Form + email)
- /legal/privacy and /legal/terms
- /app (Link/redirect into existing web app if hosted together)

### 6) Page Specs & Sample Copy

Home (/)

- Hero
  - H1: “Streamline Your Business Operations”
  - Subcopy: “Welcome to B2Breeze—business, as smooth as a breeze. All‑in‑one platform for modern business management.”
  - Primary CTA: “Try Scanner Now” → /app or in‑page demo
  - Secondary CTA: “Watch Demo” → open video modal (YouTube/Vimeo)
- Social proof row: logo strip or testimonial snippets.
- Features grid (8 cards) with icons (lucide-react) and short blurbs.
- How it works (3 steps): Capture → Organize → Act.
- CTA band: “Get Started Free” and “Schedule Demo.”
- Footer with nav, social, and legal.

Features (/features)

- Intro: “Powerful features for modern business.”
- Section per feature category with anchor links, icon, highlights, and 2–3 screenshots.
- Cross‑links to deep feature pages.

Feature Detail (e.g., /features/business-card-scanner)

- Hero with succinct headline: “Digitize Business Cards Instantly.”
- Bullet benefits: fast OCR, auto‑fields, error fixing, save to Wallet/Directory.
- Short demo video or animated GIF.
- CTA: “Try Scanner Now.”

Pricing (/pricing) — Optional

- If pricing is not finalized, present: “Starter (Free)”, “Pro”, “Team” with feature checklist placeholders. Include “Contact Sales.”

Demo (/demo)

- Embed demo video and Calendly/booking form.
- CTA: “Start Free Trial.”

About (/about)

- Mission, who it’s for, brief story.

Contact (/contact)

- Contact form (name, email, company, message), spam protection.
- Direct email link.

Legal (/legal/privacy, /legal/terms)

- Placeholder policy pages; link from footer.

Blog (/blog) — Optional

- Markdown/MDX posts for SEO and updates.

### 7) Design System & Components

- Tech: React + TailwindCSS. Reuse existing tokens from tailwind.config (CSS variables: --primary, --foreground, etc.).
- Component library: shadcn/ui (already used). Use existing Button, Card, Dialog/Modal, Accordion, Input, Select, etc.
- Icons: lucide-react for all feature and nav icons (already in use).
- Brand: Keep gradient accents and the “B2B” badge motif visible in navbar/hero.
- Layout: Responsive, 3 breakpoints (sm, md, lg+). Max content width ~1200px.
- Imagery: Use product screenshots from the current app (scanner, wallet, analytics). Prepare light/dark mode visuals.

Key Components

- Navbar (with brand, feature links, CTA to “Try Free”).
- Hero section (headline + subcopy + two CTAs + video modal).
- FeatureCard (icon, title, description, CTA).
- TestimonialCard (quote, name, role, avatar).
- PricingCard (plan, price, features, CTA).
- FAQAccordion.
- Footer (nav groups + legal + social).

### 8) Content Guidelines & Copy Blocks

Tagline: “Business, as smooth as a breeze.”

One‑liner: “B2Breeze is your all‑in‑one hub to capture contacts, organize work, and move faster.”

Hero CTA labels

- Primary: “Try Scanner Now”
- Secondary: “Watch Demo”

Feature blurbs (concise)

- Business Card Scanner: “Instant OCR to capture names, titles, emails, and phone numbers.”
- Business Card Wallet: “A searchable, organized library of every card you’ve scanned.”
- Customer Directory: “Rich profiles, history, and quick filters.”
- Task Planner: “Stay on top of priorities, deadlines, and follow‑ups.”
- Campaign Planner: “Plan campaigns, assign tasks, and measure impact.”
- Invoice Generator: “Create professional invoices in minutes.”
- Analytics Dashboard: “See what matters with clean, visual insights.”
- Conversation Recorder: “Record, transcribe, and summarize client calls.”

SEO Titles (suggested)

- Home: “B2Breeze — All‑in‑one business toolkit (OCR, CRM, tasks, invoices)”
- Features: “B2Breeze Features — Scanner, Wallet, Directory, Tasks, Campaigns, Invoices, Analytics, Recorder”
- Pricing: “B2Breeze Pricing — Start free, grow with your team”
- Demo: “B2Breeze Demo — Watch and try it now”

SEO Keywords

- business card scanner, OCR business cards, SMB CRM, task planner, campaign planner, invoice generator, analytics dashboard, call transcription, AI summaries.

### 9) Technical Requirements

- Framework
  - Option A (recommended for SEO): Next.js (App Router), static generation for marketing pages, client routing to /app.
  - Option B (keep single repo): Vite + React with pre‑render (SSG) via vite‑plugin-ssg or host on a static site builder (e.g., Netlify) and deep‑link to the app.
- Styling: TailwindCSS (reuse theme tokens already configured). Dark mode supported.
- Accessibility: WCAG 2.1 AA; keyboard navigable, aria‑labels, focus rings, color contrast.
- Performance: LCP < 2.5s on 4G; lazy‑load below‑the‑fold, compress images, preconnect for fonts, code‑split.
- SEO: Proper <title>, meta description, OpenGraph/Twitter tags, JSON‑LD (Organization + SoftwareApplication), XML sitemap, robots.txt.
- Analytics: GA4 or Plausible; track CTA clicks, form submits, video plays, pricing views.
- Forms: Contact form via serverless function (Edge/Server Actions) or email API (e.g., Resend). Basic spam protection (honeypot/time‑trap).
- Privacy: Cookie banner if analytics uses cookies; privacy and terms pages.
- Internationalization: English first; structure for future locales.

### 10) Integrations & Links

- “Try Free” and “Try Scanner Now” should deep‑link to the existing app (e.g., /app route, or external app domain) and preserve UTM parameters.
- “Watch Demo” opens a modal with an embeddable video (YouTube/Vimeo). Close on ESC and overlay click.
- “Schedule Demo” links to Calendly or booking system.

### 11) Assets Needed

- Logo variants (SVG, light/dark).
- Product screenshots: Scanner, Wallet, Directory, Tasks, Invoices, Analytics, Recorder.
- Demo video (1080p) + 15‑30s teaser clip.
- Team headshots (for About/Testimonial), optional.

### 12) Page Wireframes (concise)

Home

- Navbar
- Hero (H1, subcopy, two CTAs, video button)
- Feature grid (8 cards)
- How it works (3 columns)
- Social proof/testimonials
- CTA band
- Footer

Feature Detail

- Hero (headline + short copy + CTA)
- Benefits list
- Screenshot block or short demo
- FAQ
- CTA

Pricing (optional)

- Plan cards (Starter/Pro/Team)
- Feature comparison
- FAQ
- CTA

### 13) Acceptance Criteria

- Pages implemented per sitemap with responsive layouts.
- Reuses existing shadcn/ui components and Tailwind theme variables.
- Video modal works with ESC and click‑outside to close.
- All CTAs route correctly (Try, Demo, Contact) and fire analytics events.
- Lighthouse (mobile): Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 90, Best Practices ≥ 90.
- Basic SEO in place (titles, descriptions, OG/Twitter, sitemap, robots).
- A11y: Keyboard focus visible, alt text on images, aria‑labels on buttons.

### 14) Risks & Mitigations

- SEO on SPA (if Vite only): Use SSG or deploy with prerender to avoid crawl issues.
- Asset quality: Ensure crisp screenshots and compressed images (WebP/AVIF).
- Feature scope creep: Keep marketing site content descriptive; do not add app complexity.

### 15) Timeline (suggested)

- Week 1: IA, visuals, copy, assets.
- Week 2: Implement Home and Features; wire video modal; add analytics.
- Week 3: Feature detail pages, Contact/Legal, optional Pricing; QA + Lighthouse.

### 16) Deliverables

- Production‑ready marketing website (pages above), hosted (Vercel/Netlify).
- Source code with README for run/build/deploy.
- Media assets and copy in a structured folder.
- Sitemap.xml and robots.txt.

### 17) Notes for Implementation in This Repo

- Keep marketing site as a separate route space (e.g., /site/\*) or separate project (recommended: Next.js marketing + link to existing app). If same project, reuse components from `src/components/ui` and copy from `HomePage` for brand consistency.
- Use the existing visual language: gradient accents, Button and Card variants, lucide icons, and the tagline.

---

Appendix: Sample CTA Copy

- Primary: “Get Started Free”
- Secondary: “Schedule Demo”
- Tertiary: “Explore Features”
