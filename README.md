# Brent's Towing LLC

Static marketing site for Brent's Towing LLC, a 24/7 emergency towing and roadside assistance company based in Great Bend, Kansas. It keeps a Tailwind CSS build setup available while committing a small production CSS file for fast first loads and strong Lighthouse scores.

## Files

- `index.html` contains the page structure, content sections, and SEO metadata (title, meta description, canonical URL, Open Graph/Twitter tags, and LocalBusiness JSON-LD structured data).
- `assets/css/styles.css` contains the optimized production CSS used by the page.
- `assets/js/main.js` handles the mobile menu, current year, field validation, and mailto contact form.
- `tailwind.config.js` and `src/input.css` are included if you want to rebuild styles with Tailwind.
- `robots.txt` and `sitemap.xml` support search engine crawling and indexing.

## Before launch — replace the placeholder domain

The site doesn't have a live domain yet, so `https://brentstowing.prairiewebstudio.com/` is used as a placeholder in four places. Update all of them to the real production URL once it's known:

- `index.html`: `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`
- `robots.txt`: `Sitemap:` line
- `sitemap.xml`: `<loc>`

## SEO notes

- **Structured data**: `index.html` includes `AutomotiveBusiness` JSON-LD with phone, email, service area (the same cities listed in the Contact section), 24/7 hours, and the four core services. It intentionally omits a street address since this is a mobile/dispatch-based operation. For the strongest local rankings, also set up and verify a **Google Business Profile** as a service-area business — that has more influence on local pack rankings than on-page markup.
- **Images**: the files in `assets/images/` are JPEGs (they were previously misnamed with a `.avif` extension, which risked broken rendering if a server serves them with an `image/avif` content type). For better page-speed scores, convert them to WebP or AVIF with an encoder such as [Squoosh](https://squoosh.app) and add `<picture>` fallbacks.
- **`tire_repair.jpg`**: used on the "Flat Tire Changes & Mobile Repairs" card, but the photo itself shows collision damage to a truck fender, not a tire change. Consider swapping in a photo that matches the service before launch.
- One image, `rain_tow.jpg`, isn't currently referenced anywhere in `index.html`.

## Customize

Update the company name, phone number, email, service area, project photos, and copy in `index.html`. Keep the title, meta description, JSON-LD, and Open Graph tags in sync with any copy changes.

The form currently opens the visitor's email app with a prefilled message addressed to `brentstowing@icloud.com`. For production, consider connecting the form to a service such as Formspree, Netlify Forms, or a custom backend endpoint so submissions don't depend on the visitor's device having an email client configured.

## Preview

Open `index.html` directly in a browser, or run `python3 -m http.server 4173` from this folder and visit `http://localhost:4173`.

## Performance Notes

The template avoids third-party runtime scripts, remote images, layout-shifting media, and blocking JavaScript. Keep images local and compressed, preserve explicit image dimensions, and test production pages with Lighthouse after replacing placeholder content.
