# Acme Construction

Multi-page static marketing site for **Acme Construction Co.**, a fictional general contractor in Great Bend, Kansas. All business details (names, phone, address, projects, testimonials) are made up for demo purposes.

## Pages

| File            | Page                                                              |
| --------------- | ----------------------------------------------------------------- |
| `index.html`    | Home: hero, services overview, stats, featured projects, testimonial |
| `about.html`    | About Us: company story, values, leadership, credentials          |
| `services.html` | Services: custom homes, commercial, remodels, concrete, process   |
| `work.html`     | Our Work: filterable project gallery                              |
| `faq.html`      | FAQ: grouped questions in collapsible sections                    |
| `contact.html`  | Get in Touch: phone, email, office hours, location, map, estimate form |

## Files

- `assets/css/styles.css`: hand-written stylesheet shared by every page. Design tokens (colors, fonts) are CSS variables at the top of the file.
- `assets/js/main.js`: mobile menu, footer year, Our Work filters, today's hours and the open/closed indicator (computed in Central time), and contact form validation.
- `assets/images/`: photos plus `favicon.svg`.

The header, footer, and CTA band are repeated in each HTML file. If you change the phone number, hours, or nav, update all six pages.

## Contact form

The estimate form validates input and shows a thank-you message, but **it doesn't send anything yet**. Before launch, connect it to Formspree, Netlify Forms, or your own endpoint in `assets/js/main.js`.

## Photos

All photos are from [Unsplash](https://unsplash.com) and fall under the [Unsplash License](https://unsplash.com/license): free for commercial use, no attribution required. They're stored locally at web sizes. Source IDs (view at `https://unsplash.com/photos/<id>`, or on the CDN at `https://images.unsplash.com/photo-<id>`):

| File                   | Unsplash photo ID              |
| ---------------------- | ------------------------------ |
| hero-framer.jpg        | 1646324554833-f0b6a479fa5d     |
| crew-site-walk.jpg     | 1541888946425-d81bb19240f5     |
| framing-aerial.jpg     | 1556156653-e5a7c69cc263        |
| rebar-highrise.jpg     | 1563166423-482a8c14b2d6        |
| concrete-pour.jpg      | 1574757987642-5755f0839101     |
| framer-top-plate.jpg   | 1587582423116-ec07293f0395     |
| carpenter-saw.jpg      | 1589939705384-5185137a7f0f     |
| steel-scaffold.jpg     | 1593313637552-29c2c0dacd35     |
| truss-sky.jpg          | 1603439810849-5e013dc3ce73     |
| rebar-deck.jpg         | 1623489254637-a2dd8375243d     |
| blueprint-review.jpg   | 1632862378103-8248dccb7e3d     |
| stair-framing.jpg      | 1656733911006-fcad49fa0d52     |
| foreman-portrait.jpg   | 1672748341520-6a839e6c05bb     |
| roof-trusses.jpg       | 1676802037786-3697d60497ae     |
| truss-gable.jpg        | 1690719095815-549c60090c9f     |
| two-story-frame.jpg    | 1693639767415-27ff64ce4da2     |
| column-rebar.jpg       | 1694521787162-5373b598945c     |
| masonry-check.jpg      | 1694521787193-9293daeddbaa     |
| block-cutting.jpg      | 1694522362256-6c907336af43     |
| interior-framing.jpg   | 1704742950992-9815a104820c     |

## Before launch

- Replace the placeholder domain `acme-construction.example` in `sitemap.xml` and the email address in the HTML.
- Remove `<meta name="robots" content="noindex, nofollow">` from each page and update `robots.txt` (it currently blocks all crawlers).
- Wire up the contact form (see above).

## Preview

```sh
npm run dev   # or: python3 -m http.server 4173
```

Then open http://localhost:4173.
