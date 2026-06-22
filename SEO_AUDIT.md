# SEO Audit Report — Anirbaan Sarkar Portfolio

**Date:** 2026-06-22  
**URL:** https://anirbaansarkar.vercel.app  
**Auditor:** Automated SEO Analysis

---

## 1. Meta Tags

| Check                     | Before        | After         | Status |
|---------------------------|---------------|---------------|--------|
| `<title>` tag             | Generic title | Keyword-optimized title with personal branding | ✅ Fixed |
| `<meta description>`      | Short, vague  | Detailed with target keywords | ✅ Fixed |
| `<meta keywords>`         | Generic       | Personal branding keywords added | ✅ Fixed |
| Duplicate `<meta charset>`| Present (×2)  | Single instance | ✅ Fixed |
| Duplicate `<meta viewport>`| Present (×2) | Single instance | ✅ Fixed |
| `<meta robots>`           | Present       | Present | ✅ OK |
| `<meta theme-color>`      | Present       | Present | ✅ OK |
| `<meta author>`           | Present       | Present | ✅ OK |
| `<link rel="canonical">`  | Present (missing trailing `/`) | Corrected with trailing slash | ✅ Fixed |

---

## 2. Open Graph Tags

| Check                | Before          | After          | Status |
|----------------------|-----------------|----------------|--------|
| `og:title`           | Product Designer title | Software Engineer & Researcher title | ✅ Fixed |
| `og:description`     | Short           | Comprehensive  | ✅ Fixed |
| `og:image`           | `.jpg` (missing)| `.png` (generated) | ✅ Fixed |
| `og:url`             | Missing `/`     | Trailing slash  | ✅ Fixed |
| `og:type`            | Present         | Present        | ✅ OK |
| `og:site_name`       | Present         | Present        | ✅ OK |
| `og:locale`          | Present         | Present        | ✅ OK |
| `og:image:width`     | 1200            | 1200           | ✅ OK |
| `og:image:height`    | 630             | 630            | ✅ OK |

---

## 3. Twitter Card Tags

| Check                | Before        | After         | Status |
|----------------------|---------------|---------------|--------|
| `twitter:card`       | Present       | Present       | ✅ OK |
| `twitter:title`      | Generic       | Optimized     | ✅ Fixed |
| `twitter:description`| Short         | Descriptive   | ✅ Fixed |
| `twitter:image`      | `.jpg` (missing)| `.png` (generated) | ✅ Fixed |
| `twitter:creator`    | Present       | Present       | ✅ OK |

---

## 4. Structured Data (JSON-LD)

| Schema         | Before                        | After                         | Status |
|----------------|-------------------------------|-------------------------------|--------|
| Person         | Incorrect jobTitle, missing social links | Corrected title, fixed LinkedIn/GitHub/Twitter URLs | ✅ Fixed |
| WebSite        | Had bogus SearchAction        | Removed SearchAction (no search exists) | ✅ Fixed |
| CreativeWork   | Outdated `dateModified`       | Updated to current date       | ✅ Fixed |

---

## 5. Robots.txt

| Check                           | Before         | After          | Status |
|---------------------------------|----------------|----------------|--------|
| File exists                     | ✅              | ✅              | ✅ OK |
| `Allow: /`                      | Present         | Present        | ✅ OK |
| `Disallow: /admin`              | Present (unnecessary) | Removed  | ✅ Fixed |
| Sitemap reference               | Present         | Present        | ✅ OK |

---

## 6. Sitemap

| Check                           | Before                         | After                          | Status |
|---------------------------------|--------------------------------|--------------------------------|--------|
| Valid XML                       | ✅                              | ✅                              | ✅ OK |
| Uses real routes                | ❌ Hash-based URLs (`#about`, `#projects`, `#contact`) | Real routes (`/`, `/project/substrack`, etc.) | ✅ Fixed |
| `<lastmod>` tags                | Present (stale date)           | Updated to current date        | ✅ Fixed |
| `<changefreq>` tags             | Present                        | Present                        | ✅ OK |
| `<priority>` tags               | Present                        | Present                        | ✅ OK |

---

## 7. Semantic HTML

| Check                            | Before       | After        | Status |
|----------------------------------|--------------|--------------|--------|
| `<main>` element                 | Present (Layout.jsx) | Present | ✅ OK |
| `<nav>` element                  | Present      | Present with `aria-label` | ✅ Fixed |
| `<footer>` element               | Present      | Present with `aria-label`s on interactive elements | ✅ Fixed |
| `<section>` elements             | Present      | Present      | ✅ OK |
| `<header>` in ProjectDetail      | Present      | Present      | ✅ OK |
| `<article>` usage                | Not needed (no blog) | N/A  | ✅ OK |
| One `<h1>` per page              | ✅            | ✅            | ✅ OK |
| Proper heading hierarchy         | ✅            | ✅            | ✅ OK |

---

## 8. Accessibility

| Check                              | Before        | After         | Status |
|------------------------------------|---------------|---------------|--------|
| Alt text on all images             | Partial       | All images have descriptive alt text | ✅ Fixed |
| ARIA labels on navigation          | Missing       | Added `aria-label` to `<nav>` and nav regions | ✅ Fixed |
| ARIA labels on buttons             | Missing       | Added to "Back To Top" button | ✅ Fixed |
| ARIA labels on social links        | Missing       | Added to Contact social links | ✅ Fixed |
| Screen reader text for logo        | Missing       | Added `sr-only` span for "as" abbreviation | ✅ Fixed |
| Keyboard navigation                | Functional    | Functional    | ✅ OK |
| Touch target sizes (44×44px min)   | Enforced in CSS | Enforced    | ✅ OK |
| Focus states                       | Default browser + transitions | OK | ✅ OK |

---

## 9. Performance

| Check                          | Before        | After         | Status |
|--------------------------------|---------------|---------------|--------|
| `loading="lazy"` on images     | Only on About profile image | Added to all below-fold images | ✅ Fixed |
| Font preconnect hints          | Present       | Present       | ✅ OK |
| Image `decoding="async"`      | On About only | OK (browser default) | ✅ OK |
| Framer Motion usage            | Acceptable    | Acceptable    | ✅ OK |
| CSS Cumulative Layout Shift    | Has `aspect-ratio` helpers | OK | ✅ OK |

---

## 10. Dynamic SEO (SPA-specific)

| Check                           | Before                  | After                   | Status |
|---------------------------------|-------------------------|-------------------------|--------|
| Dynamic `<title>` updates       | ❌ Static from index.html | ✅ SEO component updates per route | ✅ Fixed |
| Dynamic meta description        | ❌ Static                | ✅ Per-route              | ✅ Fixed |
| Dynamic canonical URL           | ❌ Static                | ✅ Per-route              | ✅ Fixed |
| Dynamic Open Graph tags         | ❌ Static                | ✅ Per-route              | ✅ Fixed |
| Dynamic Twitter Card tags       | ❌ Static                | ✅ Per-route              | ✅ Fixed |

---

## 11. Analytics Readiness

| Check                     | Before | After                               | Status |
|---------------------------|--------|-------------------------------------|--------|
| GA4 support               | ❌      | Placeholder via `VITE_GA_ID` env var | ✅ Added |
| GTM support               | ❌      | Activates via same GA4 script tag    | ✅ Added |
| No hardcoded IDs          | N/A    | ✅ Uses env variables only            | ✅ OK |

---

## 12. Recommendations for Future Growth

### Blog Support
- Add a `/blog` route and corresponding sitemap entries
- Each blog post should use the `SEO` component with unique title/description/canonical
- Add `BlogPosting` JSON-LD schema per post

### Research Publication Pages
- Consider individual pages for each publication at `/research/:slug`
- Add `ScholarlyArticle` JSON-LD schema
- Include DOI links and citation metadata

### Project Detail Pages
- Already implemented with dynamic SEO ✅
- Consider adding `SoftwareApplication` schema for each project

---

## Summary

| Category         | Score |
|------------------|-------|
| **SEO**          | 🟢 Fully optimized |
| **Accessibility**| 🟢 95+ target achievable |
| **Performance**  | 🟢 90+ target achievable |
| **Best Practices**| 🟢 95+ target achievable |
