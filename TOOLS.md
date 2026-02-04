# TOOLS.md - Spot and Spike Project Notes

## Project Links

- **Live Site:** https://spot-and-spike.vercel.app
- **GitHub Repo:** pessato-org/spot-and-spike
- **Stripe Dashboard:** https://dashboard.stripe.com

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Payments:** Stripe Checkout
- **Deployment:** Vercel
- **Node:** v22.22.0

## Local Development

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

## Environment Variables

Located in `.env.local`:
- `STRIPE_SECRET_KEY` - Stripe API secret
- `STRIPE_PUBLISHABLE_KEY` - Stripe public key
- `NEXT_PUBLIC_BASE_URL` - Site URL

## Product Catalog

**Leads ($40 AUD each):**
- Midnight Black (#1a1a1a)
- Ocean Blue (#1e3a5f)
- Sage Green (#7d8471)

**Charm Packs ($20-25 AUD, 5 charms each):**
- Adventure, Foodie, Sporty, Beach Bum, Cosmic
- Garden, Music Lover, Gamer, Holiday, Aussie
- Spooky, Royal, Tropical, Retro, Sweet Tooth
- Emoji, Paw Prints, Rainbow, Minimalist, Luxe*

*Luxe Pack is $25 (premium)

## Brand

- **Primary Color:** Amber (#f59e0b)
- **Dark Color:** Gray 900 (#111827)
- **Style:** Premium-playful, minimal but fun

## TODO (from README)

- [ ] Add Stripe API keys
- [ ] Upload real product images
- [ ] Add logo
- [ ] Configure custom domain
- [ ] Stripe webhooks for order fulfillment
- [ ] Email notifications
- [ ] Inventory management
- [ ] Analytics
