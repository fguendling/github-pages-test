# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 static site configured for GitHub Pages deployment. It uses the App Router architecture and generates static HTML/CSS/JS files at build time.

**Key Configuration**: The site is configured with `output: 'export'` and `basePath: "/github-pages-test"` in next.config.js, which means:
- All pages are pre-rendered as static files in the `/out` directory
- The site is served under the `/github-pages-test` path
- Server-side Next.js features (API routes, ISR, SSR) are not available

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Opens at http://localhost:3000. Hot-reload is enabled for live updates.

### Building for Production
```bash
npm run build
```
Generates static files in the `./out` directory ready for GitHub Pages deployment.

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js configuration to check code quality.

### Note on Testing
This project does not have a testing framework configured. If adding tests, consider installing Jest or Vitest with React Testing Library.

## Architecture

### Directory Structure
- `app/` - Next.js App Router directory containing pages and layouts
  - `layout.tsx` - Root layout with metadata (title: "Felix Gündling"), Inter font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind directives and CSS custom properties for light/dark mode
- `public/` - Static assets served from root (images, icons)

### Tech Stack
- **Framework**: Next.js 14.0.3 with App Router
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS 3.3.0 with PostCSS
- **React**: Version 18

### Path Alias
The `@/*` alias maps to the root directory (configured in tsconfig.json), so you can import with `@/app/...` instead of relative paths.

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to main branch:
1. Workflow file: `.github/workflows/nextjs.yml`
2. Node.js 20 is used for builds
3. Build artifacts from `/out` are deployed to GitHub Pages
4. Base path `/github-pages-test` is automatically applied to all routes and assets

## Important Constraints

Because this is a static export for GitHub Pages:
- **No API Routes**: Cannot use Next.js API routes or server-side code
- **No Server-Side Rendering (SSR)**: Only static generation is supported
- **No Incremental Static Regeneration (ISR)**: Pages cannot be revalidated at runtime
- **Client-Side Only**: All dynamic functionality must happen in the browser

See https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#unsupported-features for full details.

## Making Changes

### Adding New Pages
Create new `page.tsx` files in the `app/` directory following App Router conventions. All pages will be statically generated at build time.

### Modifying Styles
- Global styles: Edit `app/globals.css`
- Tailwind configuration: Edit `tailwind.config.ts`
- Component styles: Use Tailwind utility classes directly in JSX

### Changing the Base Path
If the repository name changes, update `basePath` in `next.config.js` to match the new repository name.
