# Construction Business Starter Template

A static starter website for a drywall construction business. It keeps a Tailwind CSS build setup available while committing a small production CSS file for fast first loads and strong Lighthouse scores.

## Files

- `index.html` contains the page structure and content sections.
- `assets/css/styles.css` contains the optimized production CSS used by the page.
- `assets/js/main.js` handles the mobile menu, current year, field validation, and mailto contact form.
- `tailwind.config.js` and `src/input.css` are included if you want to rebuild styles with Tailwind.

## Customize

Update the company name, phone number, email, service area, project photos, and copy in `index.html`.

The form currently opens the visitor's email app with a prefilled message. For production, connect the form to a service such as Formspree, Netlify Forms, or a custom backend endpoint.

## Preview

Open `index.html` directly in a browser, or run `python3 -m http.server 4173` from this folder and visit `http://localhost:4173`.

## Performance Notes

The template avoids third-party runtime scripts, remote images, layout-shifting media, and blocking JavaScript. Keep images local and compressed, preserve explicit image dimensions, and test production pages with Lighthouse after replacing placeholder content.
