# Yellow × Acumen Field Trip — Mobile Companion

A minimal, mobile-first, light-mode, sun-readable static site for the Acumen field trip with Yellow Malawi (14 May 2026, Lilongwe).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build a static export (for Vercel)

```bash
npm run build
```

Outputs to `./out/`. Deploy as a static site.

## Structure

- `app/` — pages (cover, journey, story, malawi, memento)
- `content/` — typed data: customers, agents, warehouse, chapters, journey, malawi
- `components/` — small shared UI (NavBar, YellowMark)
- `public/` — images (currently empty; add hero/portrait crops here)

## Brief

See `../we-are-a-malawian-valiant-garden.md` (in your `~/.claude/plans` folder) for the full brief and design rationale.
