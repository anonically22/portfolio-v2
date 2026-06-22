import { useEffect } from 'react';

const BASE_URL = 'https://anirbaansarkar.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const defaults = {
  title: 'Anirbaan Sarkar | Software Engineer, Researcher & Data Engineer',
  description:
    'Portfolio of Anirbaan Sarkar showcasing software engineering, data engineering, research projects, machine learning experiments, publications, and development work.',
  keywords:
    'Anirbaan Sarkar, Software Engineer, Data Engineer, Machine Learning Researcher, Full Stack Developer, React, Portfolio',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterCreator: '@anonically22',
};

/**
 * Lightweight SEO head manager.
 * Dynamically sets document title, meta, and Open Graph tags.
 * Works with Googlebot's JavaScript rendering pipeline.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage,
  ogType,
  twitterCard,
}) => {
  useEffect(() => {
    // ---- Title ----
    document.title = title || defaults.title;

    // ---- Helper: set or create a <meta> tag ----
    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ---- Helper: set or create a <link> tag ----
    const setLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const metaTitle = title || defaults.title;
    const metaDescription = description || defaults.description;
    const metaKeywords = keywords || defaults.keywords;
    const metaOgImage = ogImage || DEFAULT_OG_IMAGE;
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;

    // Standard meta
    setMeta('name', 'description', metaDescription);
    setMeta('name', 'keywords', metaKeywords);

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMeta('property', 'og:title', metaTitle);
    setMeta('property', 'og:description', metaDescription);
    setMeta('property', 'og:image', metaOgImage);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', ogType || defaults.ogType);

    // Twitter Card
    setMeta('name', 'twitter:card', twitterCard || defaults.twitterCard);
    setMeta('name', 'twitter:title', metaTitle);
    setMeta('name', 'twitter:description', metaDescription);
    setMeta('name', 'twitter:image', metaOgImage);
    setMeta('name', 'twitter:creator', defaults.twitterCreator);
  }, [title, description, keywords, canonicalPath, ogImage, ogType, twitterCard]);

  return null; // This component renders nothing visually
};

export default SEO;
