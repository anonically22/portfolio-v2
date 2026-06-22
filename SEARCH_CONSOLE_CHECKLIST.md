# Google Search Console Checklist

**Site:** https://anirbaansarkar.vercel.app  
**Date:** 2026-06-22

---

## 1. Verification

- [x] Google Search Console ownership verification file exists (`public/googlefe3fadf26b673ea1.html`)
- [ ] Verify site ownership in Google Search Console dashboard

---

## 2. Robots.txt

- [x] `robots.txt` exists at `/public/robots.txt`
- [x] Allows all user-agents (`User-agent: *`, `Allow: /`)
- [x] No unnecessary `Disallow` rules
- [x] Sitemap URL included (`Sitemap: https://anirbaansarkar.vercel.app/sitemap.xml`)
- [ ] **Post-deploy:** Verify accessible at `https://anirbaansarkar.vercel.app/robots.txt`
- [ ] **Post-deploy:** Test in Search Console → Settings → robots.txt Tester

---

## 3. Sitemap

- [x] `sitemap.xml` exists at `/public/sitemap.xml`
- [x] Uses real routable URLs (no hash fragments)
- [x] Includes homepage `/`
- [x] Includes project case study pages (`/project/substrack`, `/project/second-look`, `/project/workbench`)
- [x] Valid `<lastmod>`, `<changefreq>`, and `<priority>` tags
- [x] Valid XML format
- [ ] **Post-deploy:** Remove old sitemap submission from Search Console
- [ ] **Post-deploy:** Submit new `sitemap.xml` in Search Console → Sitemaps
- [ ] **Post-deploy:** Verify accessible at `https://anirbaansarkar.vercel.app/sitemap.xml`

---

## 4. Indexing

- [x] `<meta name="robots" content="index, follow">` present
- [x] No `noindex` tags found anywhere
- [x] No `X-Robots-Tag` headers blocking indexing (Vercel default is fine)
- [ ] **Post-deploy:** Run URL Inspection for `https://anirbaansarkar.vercel.app`
- [ ] **Post-deploy:** Click "Request Indexing"
- [ ] **Post-deploy:** Run URL Inspection for each project page

---

## 5. Canonical URLs

- [x] `<link rel="canonical">` present in `index.html` with trailing slash
- [x] Dynamic canonical URLs set via `SEO.jsx` component per route
- [x] No duplicate content concerns (SPA with unique routes)
- [x] HTTPS enforced (Vercel default)

---

## 6. Meta Tags & SEO

- [x] `<title>` optimized with personal branding keywords
- [x] `<meta description>` comprehensive and keyword-rich
- [x] `<meta keywords>` includes target phrases
- [x] All pages have unique titles via dynamic SEO component
- [x] All pages have unique descriptions via dynamic SEO component

---

## 7. Structured Data

- [x] `Person` JSON-LD schema with correct name, jobTitle, URL, sameAs
- [x] `WebSite` JSON-LD schema with name and URL
- [x] `CreativeWork` JSON-LD schema for the portfolio
- [ ] **Post-deploy:** Validate at https://search.google.com/test/rich-results
- [ ] **Post-deploy:** Validate at https://validator.schema.org/

---

## 8. Open Graph & Social Sharing

- [x] All OG tags present (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- [x] Twitter Card tags present (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- [x] `og-image.png` generated and placed in `/public/`
- [ ] **Post-deploy:** Test with https://cards-dev.twitter.com/validator
- [ ] **Post-deploy:** Test with https://developers.facebook.com/tools/debug/
- [ ] **Post-deploy:** Test with https://www.linkedin.com/post-inspector/

---

## 9. Performance & Crawlability

- [x] Lazy loading on below-fold images
- [x] Font preconnect hints for Google Fonts
- [x] Proper semantic HTML structure (`<main>`, `<nav>`, `<section>`, `<footer>`, `<header>`)
- [x] Proper heading hierarchy (single `<h1>` per page)
- [x] Mobile-responsive design
- [ ] **Post-deploy:** Run Lighthouse audit (target: Performance 90+, SEO 100, Accessibility 95+)

---

## 10. Post-Deployment Actions

### Immediate (Day 1)
1. Open [Google Search Console](https://search.google.com/search-console)
2. Navigate to **Sitemaps** → Remove old sitemap if present
3. Submit: `sitemap.xml`
4. Navigate to **URL Inspection** → Inspect `https://anirbaansarkar.vercel.app`
5. Click **Request Indexing**
6. Verify: `https://anirbaansarkar.vercel.app/robots.txt` returns 200
7. Verify: `https://anirbaansarkar.vercel.app/sitemap.xml` returns 200

### Follow-up (Week 1–2)
8. Monitor **Coverage** report for indexing status
9. Check **Core Web Vitals** report
10. Check **Mobile Usability** report
11. Validate Rich Results for structured data
12. Test social sharing previews on LinkedIn, Twitter, WhatsApp, Discord, Slack

### Ongoing
13. Update `sitemap.xml` `<lastmod>` dates when content changes
14. Add new routes to sitemap when adding pages (blog, etc.)
15. Re-submit sitemap after significant content updates
