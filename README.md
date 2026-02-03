# Spot & Spike 🐕

Premium dog leads with customizable charms. Express your pup's personality with our unique, interchangeable charm system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Payments:** Stripe Checkout (integration ready)
- **Deployment:** Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/checkout/       # Stripe checkout API
│   ├── checkout/           # Checkout flow
│   ├── how-it-works/       # Info page
│   └── products/           # Product pages
├── components/             # React components
├── data/                   # Product data
└── lib/                    # Utilities & context
```

## 🛒 Products

### Dog Leads (3 colors)
- Midnight Black - $40 AUD
- Ocean Blue - $40 AUD
- Sage Green - $40 AUD

### Charm Packs (20 themed packs)
Each pack contains 5 charms - $20-25 AUD

Themes include: Adventure, Foodie, Sporty, Beach Bum, Cosmic, Garden, Music Lover, Gamer, Holiday, Aussie, Spooky, Royal, Tropical, Retro, Sweet Tooth, Emoji, Paw Prints, Rainbow, Minimalist, Luxe

## 💳 Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from https://dashboard.stripe.com/apikeys
3. Copy `.env.example` to `.env.local`
4. Add your Stripe keys:

```env
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5. Uncomment the Stripe code in `src/app/api/checkout/route.ts`
6. Install Stripe: `npm install stripe`

## 🚢 Deployment (Vercel)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📝 TODO

- [ ] Add Stripe API keys
- [ ] Upload real product images
- [ ] Add logo
- [ ] Configure custom domain (spotandspike.com)
- [ ] Set up Stripe webhooks for order fulfillment
- [ ] Add email notifications (order confirmation, shipping)
- [ ] Add inventory management
- [ ] Add analytics (GA4, Plausible, etc.)

## 🎨 Brand Guidelines

- **Primary Color:** Amber (#f59e0b)
- **Dark Color:** Gray 900 (#111827)
- **Style:** Premium-playful, minimal but fun
- **Inspiration:** Jiby Dog Crew + Crocs

## 📄 License

Private - Spot & Spike © 2026
