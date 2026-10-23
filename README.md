# Tskhay & Associates website

The Tskhay & Associates website, built with React and Vite and published with **GitHub Pages**. It has three pages: the homepage, a contact page (`/contact/`), and a thank-you page shown after someone sends the contact form (`/thank-you/`).

Everything happens in GitHub: the files live in this repository, and every change committed to the `main` branch rebuilds and republishes the site within a couple of minutes.

The current site at tskhayandassociates.com is not affected until the domain is pointed at GitHub Pages (last section). Do that only after Konstantin approves the new site.

## What's in this repository

| Path | What it is |
| --- | --- |
| `src/content/site.js` | Every word on the website, plus the contact form setting. Edit text here. |
| `src/content/clients.js` | Client logos and quotes. Empty until approved, so nothing shows. |
| `src/content/caseStudies.js` | Case studies. Empty for now, so nothing shows. |
| `src/components/` | The page sections (header, hero, services and so on). |
| `src/styles.css` | Colors, fonts, spacing and layout. |
| `public/` | Images, favicon, sharing image, robots.txt and sitemap. |
| `contact/index.html`, `thank-you/index.html` | The contact page and the thank-you page. |
| `.github/workflows/deploy.yml` | Tells GitHub how to build and publish the site. |

## Publishing with GitHub Pages

GitHub Pages works on public repositories with a free GitHub account. A private repository needs a paid plan (GitHub Pro or Team). The code contains nothing secret, but keep internal notes (such as the content checklist) out of a public repository.

1. Upload everything inside the project folder to the repository (**Add file** > **Upload files**), all in one drag, then **Commit changes**. The main page should list `contact`, `public`, `src`, `thank-you`, `index.html` and `package.json` directly.
2. Go to **Settings** > **Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Add the workflow file: **Add file** > **Create new file**, type `.github/workflows/deploy.yml` as the name, paste the file's contents, and **Commit changes**.
4. Open the **Actions** tab. A run called "Deploy website to GitHub Pages" starts. When it shows a green check, the site is live. If it shows a red X because Pages wasn't switched on yet, open it and select **Re-run all jobs**.
5. The address appears under **Settings** > **Pages**, in the form `https://ACCOUNT.github.io/REPOSITORY/`.

## Turning on the contact form

GitHub Pages only serves files; it can't receive form messages. The form therefore sends messages through a free form service. Until one is linked, the contact page shows an **Email Us** button instead of the form, so visitors always have a working way to get in touch.

To switch the form on with Formspree (its free plan covers a limited number of messages a month; check formspree.io for current limits):

1. Create a free account at formspree.io using konstantin@tskhayandassociates.com, so messages go to that inbox.
2. Create a new form and copy its address. It looks like `https://formspree.io/f/abcdwxyz`.
3. In GitHub, open `src/content/site.js`, select the pencil icon, find the line `export const formEndpoint = '';` and paste the address between the quotes:
   ```
   export const formEndpoint = 'https://formspree.io/f/abcdwxyz';
   ```
4. **Commit changes**. After the site republishes, the contact page shows the form.
5. Send a test message. Formspree may ask you to confirm the email address the first time. After that, messages arrive by email and in the Formspree dashboard, and the visitor sees the thank-you page.

## Changing text and images

- **Text:** open `src/content/site.js` in GitHub, select the pencil icon, change the words between the quotes, and **Commit changes**. Keep the quote marks and commas as they are.
- **Email or LinkedIn:** change `email` or `linkedin` near the top of `src/content/site.js`.
- **Photos:** replace the file in `public/` with a new one of the same name and shape (`konstantin-tskhay.webp` 800 × 1000, `konstantin-speaking.webp` 800 × 1000, `konstantin-networking.webp` 1200 × 900).
- **Client logos and quotes:** follow the instructions at the top of `src/content/clients.js`.
- **Case studies:** follow the instructions at the top of `src/content/caseStudies.js`.

If a change breaks the build, the Actions tab shows a red X and the live site stays on the last working version. Open the failed run to see the error.

## Connecting tskhayandassociates.com (only after approval)

The domain also carries Konstantin's email. Change only the website records below. Don't change the nameservers, and don't edit or delete MX or TXT records. Screenshot the GoDaddy DNS page before changing anything.

1. In GitHub, go to **Settings** > **Pages** > **Custom domain**, enter `www.tskhayandassociates.com`, and select **Save**.
2. In GoDaddy DNS, replace the existing **A** record for `@` with four A records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`. These are GitHub's published addresses; check GitHub's "Managing a custom domain" page in case they have changed.
3. Set the **CNAME** record for `www` to `ACCOUNT.github.io` (the account that owns this repository).
4. When GitHub shows the DNS check as successful, tick **Enforce HTTPS** under **Settings** > **Pages**.
5. Open **Actions**, select the workflow, and select **Run workflow**, so the site rebuilds for the new address.
6. Check https://tskhayandassociates.com and https://www.tskhayandassociates.com, and send a test email to confirm email still arrives.

## Running it on your computer (optional)

Only needed for bigger design changes. Install Node.js (version 20 or newer) from nodejs.org, then in this folder run `npm install` once and `npm run dev` to preview at http://localhost:5173.

## What was checked

The built site (homepage, contact page and thank-you page) was tested in Chromium at desktop (1440 px) and phone (390 px) widths, served from a sub-folder the way GitHub Pages serves it:

- no console errors, no failed requests, no sideways scrolling
- every menu, button and link points to a page or section that exists
- the contact page shows the Email Us button when no form service is set, and the form submits and opens the thank-you page when one is set (tested against a stand-in service)
- an automated accessibility check (axe-core, WCAG 2 A and AA rules) found no issues

Not tested here: Safari and Firefox, real phones, a real Formspree submission, the GitHub Actions run itself, and the DNS steps.

## Technical notes

- React 18 and Vite 5. The workflow runs `npm ci` and `npm run build` and publishes the `dist` folder.
- The Jost font is bundled with the site, so no external font service is called.
- No tracking, analytics or cookies. Once the form is switched on, it sends the visitor's name, email, company and message to the form service.
