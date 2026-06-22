/**
 * OG Image Generator
 * 
 * Converts the SVG placeholder to a 1200×630 PNG for social sharing.
 * 
 * Usage:
 *   npx puppeteer browsers install chrome
 *   node scripts/generate-og-image.js
 * 
 * Or simply replace public/og-image.png with your own 1200×630 PNG image.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, '..', 'public', 'og-image.svg');
const pngPath = join(__dirname, '..', 'public', 'og-image.png');

async function generate() {
  try {
    const puppeteer = await import('puppeteer');
    const browser = await puppeteer.default.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });

    const svgContent = readFileSync(svgPath, 'utf-8');
    const html = `<html><body style="margin:0;padding:0">${svgContent}</body></html>`;
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: pngPath, type: 'png' });

    await browser.close();
    console.log(`✅ OG image generated at: ${pngPath}`);
  } catch (err) {
    console.log('⚠️  Puppeteer not available. To generate the PNG:');
    console.log('   1. Install puppeteer: npm install -D puppeteer');
    console.log('   2. Run: node scripts/generate-og-image.js');
    console.log('   Or simply replace public/og-image.png with your own 1200×630 image.');
  }
}

generate();
