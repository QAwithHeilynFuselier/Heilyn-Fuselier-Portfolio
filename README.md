# Heilyn Fuselier — Portfolio

Minimal portfolio built with React, Vite, and Tailwind CSS.

**Live site:** [https://qawithheilynfuselier.github.io/Heilyn-Fuselier-Portfolio/](https://qawithheilynfuselier.github.io/Heilyn-Fuselier-Portfolio/)

## Development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

After changing the site:

```bash
npm run deploy
```

Then in GitHub: **Settings → Pages** — use **one** of these (both work):

| Source | Branch | Folder |
|--------|--------|--------|
| Option A | `gh-pages` | `/ (root)` |
| Option B | `main` | `/docs` |

**Do not** use `main` + `/ (root)` — that serves source code and shows a blank page.

If the site looks blank, open DevTools → Network and confirm JS/CSS load from `/Heilyn-Fuselier-Portfolio/assets/...`.

## Repository

[github.com/QAwithHeilynFuselier/Heilyn-Fuselier-Portfolio](https://github.com/QAwithHeilynFuselier/Heilyn-Fuselier-Portfolio)
