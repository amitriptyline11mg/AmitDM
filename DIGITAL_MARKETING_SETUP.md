# Digital Marketing Setup Guide
**For Amit Rawat — Your Complete Beginner Reference**

This file explains everything you need to know to use, update, and grow this website.
Come back to it whenever you're unsure what to do.

---

## Table of Contents

1. [Website Basics](#1-website-basics)
2. [How to Edit Content](#2-how-to-edit-content)
3. [How to Add a Blog Post](#3-how-to-add-a-blog-post)
4. [SEO Guide](#4-seo-guide)
5. [Google Tag Manager (GTM)](#5-google-tag-manager-gtm)
6. [Google Analytics 4 (GA4)](#6-google-analytics-4-ga4)
7. [Conversion Tracking Reference](#7-conversion-tracking-reference)
8. [Deploying Your Website](#8-deploying-your-website)
9. [Ongoing Maintenance](#9-ongoing-maintenance)

---

## 1. Website Basics

### What each file does

```
AmitDM/
├── index.html              ← Your home page
├── about.html              ← Your about page
├── digital-marketing.html  ← Your learning areas page
├── blog.html               ← Blog listing (shows all posts)
├── contact.html            ← Contact form page
├── blog/
│   ├── *.html              ← Individual blog post pages
├── css/
│   └── style.css           ← ALL the visual design (colours, fonts, spacing)
├── js/
│   └── main.js             ← Interactivity (mobile menu, form handling)
├── images/                 ← Put your photos and images here
├── sitemap.xml             ← List of all pages for Google to find
├── robots.txt              ← Permissions file for search engine crawlers
└── DIGITAL_MARKETING_SETUP.md ← This file!
```

### How the website works (simply)

Every page is an `.html` file. When someone opens a page:
1. The browser reads the HTML (structure and content)
2. The browser loads `css/style.css` (makes it look good)
3. The browser loads `js/main.js` (adds interactivity)

That's it. No server, no database, no backend. These are plain files that work anywhere.

### How to preview the site locally

**Option A (Recommended): VS Code Live Server**
1. Download VS Code (code.visualstudio.com — free)
2. Install the "Live Server" extension (search in Extensions panel)
3. Right-click `index.html` → "Open with Live Server"
4. The site opens in your browser at `http://127.0.0.1:5500`

**Option B: Open directly in browser**
Just double-click any `.html` file in Windows Explorer. The site will open in your browser.
Note: root-relative links (like `/blog.html`) won't work this way — use Live Server instead.

### How to edit text

Open any `.html` file in a text editor (Notepad, VS Code, etc.). Find the text you want
to change and edit it. Save. Refresh your browser.

**To change colours** — open `css/style.css`. At the top, under `:root { }`, you'll see
colour variables like `--color-accent: #6366f1;`. Change the hex colour code there.

---

## 2. How to Edit Content

### Changing your name

Search the entire project for `Amit Rawat` and replace it with your name.
Also update `Amit<span class="nav__logo-dot">.</span>Rawat` in each page's nav.

### Updating placeholders

Search for and replace these placeholders:
- `[YOUR NAME]` → your full name
- `[YOUR EMAIL]` → e.g. hello@yoursite.com
- `amit-digital-marketing.netlify.app` → e.g. amitrawat.com (no https://, no trailing slash)
- `[YOUR-LINKEDIN]` → your LinkedIn username (the part after linkedin.com/in/)
- `[YOUR CITY]` → your location
- `[YOUR-TWITTER]` → your Twitter/X handle (without @)

### Updating your profile photo

1. Save a square photo to the `images/` folder — name it something like `amit-rawat.jpg`
2. Open `about.html`
3. Find the `about-avatar` div (search for "about-avatar")
4. Replace the emoji with: `<img src="images/amit-rawat.jpg" alt="Amit Rawat">`

### Updating the About page bio

Open `about.html`. Look for the `<!-- PLACEHOLDER: -->` comments. Replace each placeholder
section with your real bio text.

### Updating social links

On every page, find the footer and nav social links. Replace `[YOUR-LINKEDIN]` and
`[YOUR-TWITTER]` with your actual profile URLs.

---

## 3. How to Add a Blog Post

**Step 1: Copy an existing post**
In Windows Explorer, go to the `blog/` folder and copy one of the existing `.html` files.
Rename it using your post's URL slug — e.g. `what-is-content-marketing.html`.

Use hyphens (not spaces) and keep it lowercase. Good example: `google-search-console-guide.html`.

**Step 2: Open the new file and update these sections:**

At the top (`<head>` section):
- `<title>` — your post title + "| Amit Rawat"
- `<meta name="description">` — 1–2 sentences, under 160 characters
- `<link rel="canonical">` — the full URL of your post
- `<meta property="og:title">`, `og:description`, `og:url` — same as above
- `<article:published_time>` — today's date (YYYY-MM-DD format)
- JSON-LD structured data — update `headline`, `description`, `datePublished`, `url`, `keywords`

In the post header:
- Breadcrumb final item (`aria-current="page"`)
- `post-header__category` — your category (SEO / Analytics / CRO / Personal)
- `<h1>` — your post title
- `<time datetime="...">` — the date

In the post body:
- Replace all the article content

Related posts section:
- Update to show 3 relevant related articles

**Step 3: Add the post to `blog.html`**
Copy one of the `<article class="blog-card">` blocks in `blog.html` and update:
- `data-category` attribute (analytics / seo / cro / personal)
- Category label, date, title, excerpt, reading time
- `href` pointing to your new post file

**Step 4: Update `sitemap.xml`**
Add a new `<url>` block (copy and paste from an existing one, update the path and date).

**Step 5: Add internal links**
In your new post, link to at least 2–3 other pages/posts on the site.
Also go back to existing posts and add a link to your new post where relevant.

**Why internal linking matters for SEO:**
Internal links help Google discover pages and understand which pages are most important.
They also help readers find related content — improving engagement metrics.

---

## 4. SEO Guide

### Page Titles (the most important on-page SEO element)

Found in each page's `<head>`:
```html
<title>Your Page Title Here | Amit Rawat</title>
```

**Rules:**
- Keep under 60 characters
- Include your primary keyword naturally
- Make it clear and descriptive — it's what appears in Google results
- Each page should have a unique title

**Examples (good):**
- "What Is Google Tag Manager and Why Does It Matter? | Amit Rawat"
- "SEO for Beginners: How Search Engines Actually Work | Amit Rawat"

**Examples (bad):**
- "Blog Post" (too vague)
- "My Site - Digital Marketing - SEO - Analytics - Google - Blog" (keyword stuffing)

### Meta Descriptions

```html
<meta name="description" content="Your description here.">
```

**Rules:**
- Keep under 160 characters
- Write it like an advert — make people want to click
- Include the main topic naturally
- Each page needs a unique description
- Google may override your description with its own snippet — that's OK

### Heading Structure (H1, H2, H3)

Every page should have:
- Exactly **one H1** — the main page/post title
- **H2** for major sections
- **H3** for sub-sections within H2 sections

Don't use headings for visual styling. Use them for structure. Don't skip levels (don't go H1 → H3).

### Canonical URLs

```html
<link rel="canonical" href="https://yourdomain.com/page.html">
```

This tells Google: "this is the official URL of this page". It prevents duplicate content issues.
Once your site is live, replace `amit-digital-marketing.netlify.app` with your real domain in all pages.

### Internal Linking

**What to link:**
- In blog posts, link to other relevant blog posts
- In blog posts, link to relevant pages on the site (e.g. link to `digital-marketing.html#gtm` from a GTM article)
- In page content, link to related resources

**How to add an internal link:**
```html
<a href="blog/seo-for-beginners.html">SEO for Beginners</a>
```
(Use relative paths — no need for the full domain)

### Submitting to Google Search Console

Google Search Console (GSC) is a free tool that shows you how your site performs in Google search.

**Steps:**
1. Go to search.google.com/search-console
2. Click "Add property" → enter your domain
3. Verify ownership (Google will give you options — DNS verification is most reliable)
4. Go to "Sitemaps" → enter `sitemap.xml` → Submit
5. Wait 2–7 days for Google to crawl and index your site
6. After indexing, GSC will show you: search queries, click-through rates, average position, and any errors

**Why this matters:**
Without submitting to GSC, Google may take weeks or months to discover your site. Submitting the
sitemap tells Google: "here are all my pages, please index them".

---

## 5. Google Tag Manager (GTM)

### What GTM is (30 seconds)

GTM is a system that lets you add tracking code to your website without editing the code.
You install it once (two code snippets), and after that, all tracking is managed through the
GTM dashboard at tagmanager.google.com.

**Why this is important for you:** Once GTM is installed, you can track CTA clicks, form
interactions, scroll depth, and much more — all without touching your HTML files again.

### Step 1: Create a GTM account and container

1. Go to **tagmanager.google.com** (sign in with your Google account)
2. Click "Create Account"
3. Account name: your name or brand (e.g. "Amit Rawat")
4. Container name: your domain (e.g. "amitrawat.com")
5. Platform: **Web**
6. Click "Create" → agree to Terms of Service

### Step 2: Get your Container ID

After creating the container, GTM shows you two code snippets and your Container ID.
Your Container ID looks like: **GTM-XXXXXXX** (7 characters after the dash)

**Copy this ID — you'll need it in a moment.**

### Step 3: Add GTM to every page

GTM needs TWO snippets on every page of your website.

**Snippet 1 — goes in the `<head>` section:**
```html
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

**Snippet 2 — goes immediately after the opening `<body>` tag:**
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

**How to add it to this website:**

In each `.html` file (all pages — both root pages and blog/ pages):

1. Find this comment in the `<head>`:
   ```
   <!-- GTM HEAD SNIPPET — uncomment and replace GTM-XXXXXXX when ready -->
   ```

2. Below it, you'll see the GTM code wrapped in `<!-- ... -->` comment markers.
   Remove the `<!--` and `-->` to uncomment the code.
   Replace `GTM-XXXXXXX` with your real Container ID.

3. Find the similar comment near the top of `<body>` and do the same.

4. Repeat for every HTML file. Files to update:
   - `index.html`
   - `about.html`
   - `digital-marketing.html`
   - `blog.html`
   - `contact.html`
   - `blog/what-is-google-tag-manager.html`
   - `blog/seo-for-beginners.html`
   - `blog/google-analytics-vs-google-tag-manager.html`
   - `blog/how-to-measure-conversions.html`
   - `blog/my-digital-marketing-journey.html`
   - (and any future blog posts)

### Step 4: Test with GTM Preview Mode

Before publishing, test your implementation:
1. In GTM, click "Preview" (top right)
2. Enter your website URL
3. GTM opens a debug panel at the bottom of your site
4. You should see "gtm.js" and "gtm.dom" events firing
5. If you see them, GTM is working correctly

### Step 5: Publish your GTM container

1. Click "Submit" in the top right
2. Give your version a name (e.g. "Initial setup")
3. Click "Publish"

**Important:** Changes in GTM only go live when you publish. You can make many changes and test
them in Preview mode before publishing.

### Creating Your First Tag: GA4 Pageview Tracking

Once GTM is installed, set up GA4 through GTM:

1. In GA4, go to Admin → Data Streams → your stream → copy the **Measurement ID** (G-XXXXXXXXXX)
2. In GTM, click "Tags" → "New"
3. Tag type: **Google Analytics: GA4 Configuration**
4. Measurement ID: paste your G-XXXXXXXXXX
5. Trigger: **All Pages**
6. Save → Preview → test → Submit → Publish

That's it — GA4 is now tracking every page view on your site.

### Key GTM Concepts

**Tags** — what fires (e.g. "send a pageview to GA4")
**Triggers** — when it fires (e.g. "on every page load")
**Variables** — dynamic values (e.g. "the URL of the current page")

You combine these: Tag + Trigger = something happens when the condition is met.

---

## 6. Google Analytics 4 (GA4)

### Creating a GA4 account

1. Go to **analytics.google.com**
2. Click "Start measuring"
3. Account name: your name or brand
4. Property name: your website name
5. Choose your country, timezone, currency
6. Business details: choose what fits (personal brand/creator)
7. Create a **Web** data stream → enter your domain
8. Copy the **Measurement ID** (G-XXXXXXXXXX format) — you need this for GTM

### How GA4 connects with GTM

GA4 doesn't add itself to your website — GTM does that job.
The relationship:
1. GTM is installed on your website (the two snippets)
2. You create a GA4 Configuration tag in GTM
3. GTM fires the GA4 code on every page
4. GA4 starts receiving data and shows it in reports

### What events are

An event is any interaction you want to measure. GA4 automatically tracks some events
(page views, scrolls, outbound clicks). You create custom events via GTM for anything else.

Event examples:
- `page_view` — someone visited a page (automatic)
- `scroll` — someone scrolled 90% down (automatic)
- `contact_form_submit` — someone submitted your contact form (custom, via GTM)
- `newsletter_signup` — someone signed up for the newsletter (custom, via GTM)
- `cta_click` — someone clicked a specific button (custom, via GTM)

### What conversions are

A conversion is an event you've marked as important — it represents a successful outcome.
In GA4: Admin → Events → find your event → toggle "Mark as conversion".

### How to test whether tracking works

1. Install the **Google Analytics Debugger** Chrome extension (free)
2. Enable it and visit your website
3. Open Chrome DevTools (F12) → Console tab
4. You should see GA4 events firing (if the extension is active)

Or use **GTM Preview mode** — it shows all tags firing and all events being sent.

Or check GA4 directly: Reports → Realtime. Visit your own site. You should appear as an active user.

---

## 7. Conversion Tracking Reference

### Planned conversion events for this site

| Event Name | What it tracks | How to implement in GTM |
|------------|---------------|------------------------|
| `contact_form_submit` | Contact form submission | GTM Form Submission trigger |
| `newsletter_signup` | Newsletter form submission | GTM Form Submission trigger |
| `cta_click_get_in_touch` | Nav "Get in Touch" CTA click | GTM Click trigger, class = `nav__link--cta` |
| `email_click` | Click on email address | GTM Click trigger, link contains "mailto:" |
| `linkedin_click` | Click to LinkedIn profile | GTM Click trigger, link contains "linkedin.com" |
| `blog_read_90pct` | 90% scroll depth on blog post | GTM Scroll Depth trigger (90%) on blog pages |

### How to mark an event as a conversion in GA4

1. Go to analytics.google.com
2. Go to Admin → Events
3. Find your event in the list
4. Toggle "Mark as conversion" on

### Why conversion tracking matters

Without it, you know how many people visited. With it, you know how many people actually did something.
"10,000 visitors" is meaningless without knowing how many became leads or took action.
Conversion rate = (conversions ÷ sessions) × 100. Optimise for this number.

---

## 8. Deploying Your Website

### Option A: Netlify (Easiest — drag and drop)

1. Go to **netlify.com** and create a free account
2. On the dashboard, you'll see a "Deploy manually" area with a drag-and-drop zone
3. Drag your entire `AmitDM` folder into that zone
4. Netlify deploys your site instantly and gives you a URL like `happy-site-123.netlify.app`
5. In Netlify settings, you can connect a custom domain (e.g. `amitrawat.com`)

**Why Netlify?** It's free, fast, and updates every time you drag a new version of your folder.

### Option B: GitHub + Netlify (More Professional)

This lets Netlify automatically update your site when you change files on GitHub.

**Step 1: Create a GitHub account**
Go to github.com and create a free account.

**Step 2: Create a repository**
1. Click "New repository"
2. Repository name: e.g. `amitrawat-website`
3. Make it **Public** (required for free hosting)
4. Click "Create repository"

**Step 3: Upload your files**
If you're new to git, the easiest way:
1. On your repository page, click "uploading an existing file"
2. Drag all your site files into the upload box
3. Click "Commit changes"

Or if you want to use git properly (type these in a terminal in your AmitDM folder):
```
git init
git add .
git commit -m "Initial website"
git remote add origin https://github.com/YOUR-USERNAME/amitrawat-website.git
git push -u origin main
```

**Step 4: Connect Netlify to GitHub**
1. In Netlify: "New site from Git" → GitHub → choose your repository
2. Deploy settings: leave as default
3. Click "Deploy site"
4. Netlify builds and deploys your site automatically

**Making future updates:**
- Edit your files locally
- Upload the changed files to GitHub (drag and drop, or `git add . && git commit -m "message" && git push`)
- Netlify automatically redeploys

### Connecting a custom domain

1. Buy a domain at a registrar (Namecheap, Google Domains, GoDaddy, etc.)
2. In Netlify: Site Settings → Domain Management → Add custom domain
3. Follow Netlify's DNS instructions (you'll update nameservers at your registrar)
4. Netlify provides a free SSL certificate (HTTPS) automatically

### Updating your domain references after deployment

Once you have a real domain (e.g. amitrawat.com):
1. Use Find & Replace across all files: replace `amit-digital-marketing.netlify.app` with `amitrawat.com`
2. Also update sitemap.xml and robots.txt
3. Redeploy the site

---

## 9. Ongoing Maintenance

### After adding a new blog post

- [ ] Create the HTML file in `blog/` (copy an existing one)
- [ ] Update `blog.html` with a new blog card
- [ ] Update `sitemap.xml` with the new URL
- [ ] Update `index.html` featured posts section if relevant
- [ ] Add internal links from the new post to older posts
- [ ] Add internal links from older posts to the new post
- [ ] Update `<lastmod>` in sitemap.xml for pages you modified

### After updating existing content

- [ ] Update the `<lastmod>` date in sitemap.xml for that page
- [ ] Check that any links in the page still work

### Monthly SEO checklist

- [ ] Check Google Search Console for new search queries and any crawl errors
- [ ] Check GA4 for which pages and posts get the most traffic
- [ ] Review conversion rates — are people clicking CTAs, signing up?
- [ ] Look for opportunities to improve or update older content

### What to replace before launching

Search the project for these and replace them all:
- `amit-digital-marketing.netlify.app` → your real domain
- `[YOUR NAME]` → your name
- `[YOUR EMAIL]` → your email
- `[YOUR-LINKEDIN]` → your LinkedIn username
- `[YOUR-TWITTER]` → your Twitter handle
- `[YOUR CITY]` → your city
- `GTM-XXXXXXX` → your real GTM Container ID (once you have it)
- All `[PLACEHOLDER: ...]` text on the About page and My Journey blog post

---

*This guide was created alongside the website. Update it as you learn.*
*Last updated: 21 August 2026*
