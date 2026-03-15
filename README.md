# fsbackup-docs

Documentation site for [fsbackup](https://github.com/fsbackup/fsbackup) — an rsync-based snapshot backup system for home labs.

Live at **[fsbackup.org](https://fsbackup.org)**

Built with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com). Deployed on Netlify.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Generate the static site:

```bash
npm run generate
```

## Structure

- `content/` — documentation pages (Markdown)
- `app/` — Nuxt app (layouts, components, pages)
- `public/` — static assets (logos, favicons)
- `fsbackup-app/` — git submodule pointing to the main fsbackup repo

## Submodule

The `fsbackup-app/` submodule is used to pull assets (logos, icons) from the main repo at build time.

```bash
git submodule update --init --recursive
```
