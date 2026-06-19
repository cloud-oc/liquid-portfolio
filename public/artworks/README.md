# Artwork assets

Put portfolio images in this folder when you want to serve them from the site itself.

Recommended structure:

```text
public/artworks/
  project-name/
    cover.webp
    detail-1.webp
    detail-2.webp
```

Use paths like this in `src/content/portfolio.ts`:

```ts
src: "/artworks/project-name/cover.webp"
```

For GitHub project pages with a non-root base path, keep using the same `/artworks/...` path in the config. The app resolves it through Vite during build.
