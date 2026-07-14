# GNR ECOM LLC

Contemporary retail marketplace template — bold merchandising, navy/red brand system, and the same ecommerce engine (cart, wishlist, search, reviews, checkout demo).

## Brand

- **Store:** GNR ECOM LLC
- **Tagline:** Shop Better. Live Smarter.
- **Stack:** Next.js App Router, React 19, Tailwind CSS v4, Framer Motion, Embla

## Development

```bash
npm install
npm run dev
```

### Product imagery (local only)

Never commit Unsplash API keys. Use a local env file:

```bash
# .env.local (gitignored)
UNSPLASH_ACCESS_KEY=your_key_here

ONLY_SLUGS=noise-cancelling-headphones,smartwatch-fitness npm run images:unsplash
```

Or:

```bash
UNSPLASH_ACCESS_KEY=xxxx node scripts/fetch-unsplash-api.mjs
```
