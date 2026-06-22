# Portfolio SEO, Search Console & Indexing Upgrade

## Project Context

You are a senior React.js, Tailwind CSS, Framer Motion, and SEO engineer.

### Tech Stack

- React.js (JavaScript only, NO TypeScript)
- Tailwind CSS
- Framer Motion
- Vercel Deployment

### Important Requirements

- Preserve existing design language
- Preserve animations
- Preserve layout structure
- Preserve responsiveness
- Do not introduce TypeScript
- Do not break existing functionality
- Follow modern SEO best practices
- Ensure Google Search Console compatibility

---

# Primary Goals

1. Improve Google indexing
2. Fix Search Console issues
3. Improve SEO
4. Improve discoverability
5. Improve social sharing previews
6. Improve accessibility
7. Improve performance
8. Improve Lighthouse scores
9. Improve search ranking for personal branding

---

# Task 1: SEO Audit

Perform a complete SEO audit and generate:

```text
/SEO_AUDIT.md
```

Audit for:

- Missing meta tags
- Missing page titles
- Missing descriptions
- Missing canonical URLs
- Missing Open Graph tags
- Missing Twitter cards
- Missing structured data
- Missing robots.txt
- Missing sitemap configuration
- Accessibility issues
- Semantic HTML issues
- Performance issues
- Crawlability issues
- Search Console compatibility issues

Include recommendations and fixes.

---

# Task 2: Robots.txt

Create:

```text
/public/robots.txt
```

Content:

```txt
User-agent: *
Allow: /

Sitemap: https://anirbaansarkar.vercel.app/sitemap.xml
```

Requirements:

- Ensure file is accessible after deployment
- Verify compatibility with Vercel
- Verify proper HTTP response

---

# Task 3: Sitemap Rebuild

Current sitemap contains hash-based URLs:

```text
#about
#projects
#contact
```

These should not be included in a sitemap.

### Requirements

Detect whether the site is:

#### Option A — Single Page Application

Generate sitemap containing:

```xml
https://anirbaansarkar.vercel.app/
```

#### Option B — Multi Route Site

Generate sitemap containing all real routes:

```xml
/
/about
/projects
/research
/contact
/blog
```

Include:

```xml
<lastmod>
<changefreq>
<priority>
```

Use valid current dates.

Output:

```text
/public/sitemap.xml
```

---

# Task 4: Global SEO System

Create reusable SEO component:

```text
/src/components/SEO.jsx
```

Support:

- title
- description
- keywords
- canonical URL
- og:image
- og:title
- og:description
- twitter:title
- twitter:description
- twitter:image

Allow dynamic usage on all pages.

---

# Task 5: Homepage SEO

Homepage title:

```html
<title>
Anirbaan Sarkar | Software Engineer, Researcher & Data Engineer
</title>
```

Homepage description:

```html
<meta
  name="description"
  content="Portfolio of Anirbaan Sarkar showcasing software engineering, data engineering, research projects, machine learning experiments, publications, and development work."
/>
```

Generate optimized titles and descriptions for:

- Home
- About
- Projects
- Research
- Contact

---

# Task 6: Open Graph & Social Sharing

Implement:

```html
<meta property="og:title" />
<meta property="og:description" />
<meta property="og:image" />
<meta property="og:url" />
<meta property="og:type" />

<meta name="twitter:card" />
<meta name="twitter:title" />
<meta name="twitter:description" />
<meta name="twitter:image" />
```

### Requirements

- Create reusable implementation
- Ensure all pages have previews
- Ensure compatibility with:
  - LinkedIn
  - X/Twitter
  - WhatsApp
  - Discord
  - Slack

If missing:

```text
/public/og-image.png
```

Create placeholder implementation.

---

# Task 7: Structured Data

Implement JSON-LD schema.

### Person Schema

Include:

- name
- jobTitle
- url
- github
- linkedin

### Website Schema

Include:

- website name
- URL
- search visibility information

### Portfolio Schema

Represent the portfolio appropriately using Schema.org.

Inject globally into page head.

---

# Task 8: Semantic HTML

Improve semantic structure.

Replace unnecessary div usage with:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Requirements:

- One H1 per page
- Proper heading hierarchy
- Improve accessibility
- Improve crawlability

---

# Task 9: Accessibility

Ensure:

- Alt text on all images
- ARIA labels where necessary
- Accessible buttons
- Accessible navigation
- Keyboard navigation support
- Proper focus states

Target Lighthouse Accessibility Score:

```text
95+
```

---

# Task 10: Performance Optimization

Audit:

- Images
- Fonts
- Framer Motion usage
- Bundle size
- Render performance

Implement:

```html
loading="lazy"
```

where appropriate.

Optimize:

- Images
- Components
- Motion effects
- Asset loading

Target Lighthouse Performance:

```text
90+
```

---

# Task 11: Search Console Compatibility

Verify:

- robots.txt accessible
- sitemap.xml accessible
- canonical URLs valid
- noindex tags absent
- proper HTTP response codes
- crawlability
- indexing readiness

Generate:

```text
/SEARCH_CONSOLE_CHECKLIST.md
```

Include:

- verification checklist
- indexing checklist
- sitemap checklist
- SEO checklist

---

# Task 12: Analytics Preparation

Prepare optional integration support for:

- Google Analytics 4
- Google Tag Manager

Requirements:

- Environment variable support
- No hardcoded IDs
- Easy future setup

---

# Task 13: Personal Branding SEO

Optimize content naturally around:

```text
Anirbaan Sarkar
Anirbaan Sarkar Portfolio
Anirbaan Sarkar Research
Anirbaan Sarkar Software Engineer
Anirbaan Sarkar Data Engineer
Machine Learning Researcher
Full Stack Developer
```

Apply naturally within:

- Titles
- Meta descriptions
- Headings
- Structured data

Avoid keyword stuffing.

---

# Task 14: Technical SEO Validation

Verify:

- Canonical URLs
- Duplicate content prevention
- Mobile friendliness
- HTTPS consistency
- Metadata completeness
- Search engine compatibility

Generate recommendations for:

- Future blog support
- Future research publication pages
- Future project pages

---

# Deliverables

Generate:

```text
SEO_AUDIT.md
SEARCH_CONSOLE_CHECKLIST.md
```

Implement all required code changes.

Provide a final summary including:

- Files created
- Files modified
- SEO improvements completed
- Search Console improvements completed
- Accessibility improvements completed
- Performance improvements completed
- Lighthouse score expectations
- Remaining manual actions

---

# Manual Actions After Deployment

After deployment:

1. Open Google Search Console
2. Remove old sitemap entry
3. Submit:

```text
sitemap.xml
```

4. Run URL Inspection for:

```text
https://anirbaansarkar.vercel.app
```

5. Click:

```text
Request Indexing
```

6. Verify:

```text
https://anirbaansarkar.vercel.app/robots.txt
https://anirbaansarkar.vercel.app/sitemap.xml
```

7. Monitor indexing status for 1–2 weeks.

---

# Success Criteria

Target Lighthouse Scores:

```text
Performance:     90+
Accessibility:   95+
Best Practices:  95+
SEO:             100
```

The portfolio should be fully optimized for:

- Google Search
- Google Search Console
- Social sharing
- Personal branding
- Future growth and discoverability
- Vercel deployment compatibility