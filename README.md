# EnzoG10.github.io

Source for my personal homepage. Built with [Astro](https://astro.build) and hosted on GitHub Pages — **completely free**.

Live at: **https://enzog10.github.io/**

---

## 1. About free hosting

GitHub Pages is GitHub's free static site hosting:

- **Free** for personal users with public repos. Private repos work too, but require GitHub Pro.
- **Limits**: ~100 GB bandwidth per month and 10 builds per hour. More than enough for a personal site.
- **CDN**: Global edge delivery via Fastly.
- **Custom domain**: Bring your own domain (e.g. `enzogong.dev`) with auto-issued HTTPS certificates.

No server, no bill, no ops. You just push, and GitHub Actions builds and publishes for you.

---

## 2. First-time deploy

The repo is named `EnzoG10.github.io`, which matches the GitHub user-site convention — Pages serves it from `https://enzog10.github.io/` (root path, no subdirectory).

### 1. Install dependencies and preview locally

```bash
cd homepage
npm install
npm run dev   # preview at http://localhost:4321
```

### 2. Push the code

A git repository is already initialised in this folder, with the first commit made and the remote pointing at `https://github.com/EnzoG10/EnzoG10.github.io.git`. To publish:

```bash
git push -u origin main
```

If this is the first time you push to GitHub from this Mac, you may be prompted to authenticate. Easiest path is the GitHub CLI:

```bash
brew install gh   # if you don't have it
gh auth login     # follow the browser prompt
git push -u origin main
```

### 3. Enable GitHub Pages

In your repo on GitHub:

1. Click **Settings**.
2. In the left sidebar, click **Pages**.
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch").

Then go to the **Actions** tab — you'll see the "Deploy to GitHub Pages" workflow running from your push. When it finishes (green check, ~1 minute), open **https://enzog10.github.io/** and your site is live.

---

## 3. Updating content

Edit, commit, push. GitHub Actions rebuilds and redeploys automatically:

```bash
git add .
git commit -m "update: revise hero copy"
git push
```

Roughly 30–60 seconds later the new version is live.

---

## 4. Where to edit what

Each file below has an `// Edit here` marker near the top:

| What you want to change          | File                                                |
| -------------------------------- | --------------------------------------------------- |
| Name / hero tagline              | `src/components/Hero.astro`                         |
| Bio / sidebar facts              | `src/components/About.astro`                        |
| Project list                     | `src/components/Portfolio.astro`                    |
| Email / social links             | `src/components/Contact.astro`                      |
| SEO title and description        | `src/pages/index.astro`, `src/layouts/Layout.astro` |
| Colors / typography tokens       | `src/styles/global.css`                             |
| Site URL (if username changes)   | `astro.config.mjs` (the `site` field)               |

To add a new section, drop a new `.astro` file into `src/components/` and import it from `src/pages/index.astro`.

---

## 5. Custom domain (optional)

1. In your DNS provider (Cloudflare, Namecheap, etc.) add records pointing to GitHub Pages:
   - Four `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a `CNAME` pointing to `enzog10.github.io`
2. In your repo, go to **Settings → Pages → Custom domain** and enter your domain.
3. Add a `public/CNAME` file containing only your domain, e.g.:
   ```
   enzogong.dev
   ```
4. Wait a few minutes — HTTPS certificates are issued automatically.

---

## 6. Stack notes

- **Astro 4** — modern static site generator. Component syntax similar to React, but ships zero JS by default. Pages load like plain HTML.
- **Vanilla CSS** — no UI framework. All design tokens (colors, radii, shadows) live in `src/styles/global.css`.
- **GitHub Actions** — `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

If you later want a blog (Markdown posts), light/dark toggle, i18n, or comments, Astro has clean answers for all of those — just ask.

---

Have fun ✨
