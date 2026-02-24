# /public/images

Place licensed photography here when available.

## Expected files

- `hero.jpg` — Main hero image (min 1920×1080, JPEG ~300KB)
- `hero2.jpg` — Secondary hero / about section image
- `gallery-1.jpg` through `gallery-6.jpg` — Gallery photos
- `logo.svg` — Logo for light backgrounds (already present)
- `logo-white.svg` — Logo for dark backgrounds (already present)

## Usage in Astro

Reference via `src="/images/filename.jpg"` in `<img>` tags,
or import from `src/assets/` for build-time optimization via `<Image>`.
