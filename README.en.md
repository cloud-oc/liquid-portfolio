# Liquid Portfolio

[中文](README.md) | [日本語](README.ja.md) | [English](README.en.md)

Liquid Portfolio is a one-page portfolio template for visual creators. It is designed for presenting a profile, services, selected projects, friend links, and a clear contact path. It works well as a starting point for designers, 3D artists, motion designers, and small creative studios.

The template is built with Vite, React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React, and is ready to publish on GitHub Pages. Most editable content lives in `src/content/portfolio.ts`. You can customize the site by replacing copy, project images, links, and media paths without rewriting the page layout.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Quick Start

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customize Profile Content

Main content is managed in:

```text
src/content/portfolio.ts
```

Start with the `profile` object:

```ts
export const profile = {
  name: "Username",
  title: "Username",
  heroTitle: "Hi, I'm Username",
  heroDescription:
    "a visual creator crafting striking brands, web experiences, motion, and unforgettable digital projects",
  aboutTitle: "About me",
  about: "With more than five years of experience...",
  contactLabel: "Contact Me",
  contactEmail: "username@example.com",
  contactUrl: "#footer-contact",
};
```

Common fields to update:

- `name`: the displayed name
- `heroTitle`: the hero headline
- `heroDescription`: the hero supporting text
- `about`: the about section body
- `contactEmail`: the contact email
- `contactUrl`: the button target, for example `mailto:your-name@example.com`

## Customize Navigation and Links

Navigation items live in `navLinks`:

```ts
export const navLinks = [
  { label: "关于我", href: "#about" },
  { label: "商业合作", href: "#services" },
  { label: "艺术作品", href: "#projects" },
  { label: "联系我", href: "#footer-contact" },
];
```

Footer friend links live in `friendLinks`:

```ts
export const friendLinks = [
  { label: "Cloud09", href: "https://cloud09.space" },
];
```

## Add Projects

Projects are managed in the `projects` array. Copy an existing object and replace the values:

```ts
export const projects = [
  {
    id: "project-id",
    number: "04",
    name: "Project Name",
    category: "Client",
    liveUrl: "https://example.com",
    images: {
      leftTop: {
        src: "/artworks/project-name/detail-1.webp",
        alt: "Project detail image",
      },
      leftBottom: {
        src: "/artworks/project-name/detail-2.webp",
        alt: "Project second detail image",
      },
      featured: {
        src: "/artworks/project-name/cover.webp",
        alt: "Project featured image",
      },
    },
  },
];
```

Recommended image location:

```text
public/artworks/project-name/
```

Then reference images with site-relative paths:

```ts
src: "/artworks/project-name/cover.webp"
```

Recommended image sizes:

```text
cover.webp       1600 x 1200 or larger
detail-1.webp    1200 x 800
detail-2.webp    1200 x 1200
```

Use `.webp` or compressed `.jpg` images when possible. Avoid publishing very large raw images directly.

## Customize Services

Services are managed in the `services` array:

```ts
export const services = [
  {
    number: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects...",
  },
];
```

You can add, remove, or reorder items. The page renders the array automatically.

## Replace Audio and Visual Assets

The background music file is:

```text
public/audio/bgm.mp3
```

Project images are best placed in:

```text
public/artworks/
```

Global visual styles are in:

```text
src/styles.css
```

To adjust the liquid-glass surfaces, background atmosphere, or dark theme, start with `.site-backdrop`, `.liquid-glass`, and `.liquid-glass-strong`.

## Deploy to GitHub Pages

The project includes a GitHub Actions deployment workflow:

```text
.github/workflows/deploy.yml
```

Recommended setup:

1. Use `main` as the repository branch.
2. Open `Settings > Pages` in the GitHub repository.
3. Select `GitHub Actions` under `Build and deployment`.
4. Push to `main`; the workflow will build and publish `dist`.

If the repository is named `your-name.github.io`, the site root is `/`, so the default setting works:

```text
VITE_BASE_PATH=/
```

If the repository is a project repository such as `portfolio`, the URL is usually:

```text
https://your-name.github.io/portfolio/
```

In that case, add an Actions variable in the GitHub repository:

```text
Settings > Secrets and variables > Actions > Variables
Name: VITE_BASE_PATH
Value: /portfolio/
```

For local testing, copy `.env.example` to `.env.local` and edit it:

```bash
cp .env.example .env.local
```

```text
VITE_BASE_PATH=/portfolio/
```

## Extension Ideas

- Project detail pages
- Project category filters
- Contact form
- CMS integration
- Language switcher
- Dark / light theme switch
- SEO and Open Graph images
