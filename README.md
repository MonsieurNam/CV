# Nguyen Ngo Nhat Nam Portfolio

Personal portfolio for Nguyen Ngo Nhat Nam, focused on AI research, computer vision, autonomous systems, ADAS, edge AI, and selected publications/projects.

Live site: <https://nguyennhatnam.id.vn>

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- GitHub Pages deployment
- Custom domain via `CNAME`: `nguyennhatnam.id.vn`

## Project Structure

- `src/` - React source code and portfolio sections.
- `public/img/` - source images copied by Vite into `dist/img/` during build.
- `img/` - mirrored image folder for the branch-root static fallback.
- `assets/` - built JS/CSS files committed for branch-root GitHub Pages compatibility.
- `app.html` - Vite HTML entry used in development/build.
- `index.html` - built static HTML served by GitHub Pages from the repository root.
- `scripts/finalize-pages-build.mjs` - renames `dist/app.html` to `dist/index.html`.
- `.github/workflows/deploy.yml` - GitHub Pages build/deploy workflow.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production output:

```bash
npm run build
```

Preview production output:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

## Updating Images

When replacing a project image such as `gdino_tfsign.png`, keep the source and static fallback folders synchronized:

1. Put the image in `public/img/`.
2. Mirror the same image into `img/`.
3. Update the React image path in `src/`, usually as `/img/<filename>`.
4. Run `npm run build`.
5. Copy the new build output from `dist/index.html` to root `index.html`.
6. Copy the new JS/CSS bundle from `dist/assets/` to root `assets/`.
7. Remove old tracked bundle files from `assets/`.
8. Commit and push to `main`.
9. Wait for GitHub Actions Pages workflows to finish successfully.
10. Verify the public URL with cache-busting, for example `https://nguyennhatnam.id.vn/?v=<commit>`.

For the current Traffic Sign Detection project, the image is:

```text
public/img/gdino_tfsign.png
img/gdino_tfsign.png
```

and the public URL is:

```text
/img/gdino_tfsign.png
```

## Deployment

Deployment is handled by GitHub Actions on every push to `main`.

The workflow:

1. Checks out the repository.
2. Installs dependencies with `npm ci`.
3. Builds the site with `npm run build`.
4. Uploads `dist/` to GitHub Pages.
5. Serves the site through `nguyennhatnam.id.vn`.

Manual deployment trigger is also available from GitHub Actions via `workflow_dispatch`.

## Verification Checklist

After a deploy, verify:

- GitHub Actions `Deploy to GitHub Pages` completed successfully.
- GitHub Actions `pages build and deployment` completed successfully.
- `https://nguyennhatnam.id.vn` returns HTTP `200`.
- The HTML points to the latest `/assets/app-*.js` bundle.
- Updated image URLs, such as `/img/gdino_tfsign.png`, return HTTP `200`.
- Updated text appears in the public JS bundle.
- Removed/old text no longer appears in the public JS bundle.

## Current Contact CTA

All `Start a chat` buttons redirect to:

```text
https://zalo.me/0325235826
```
