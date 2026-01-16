/**
 * Script to check all buttons/links for 404 errors
 */
import { chromium } from "playwright";

const BASE_URL = "http://localhost:3000";

const PAGES_TO_CHECK = [
  // Default pages
  "/",
  "/catalogo",
  "/producto/1",
  "/producto/2",
  "/producto/3",
  "/producto/4",
  // Different template styles
  "/?style=elegante",
  "/?style=urbano",
  "/?style=minimalista",
  "/?style=moderno",
  "/?style=promocional",
  "/catalogo?style=elegante",
  "/catalogo?style=urbano",
  "/catalogo?style=minimalista",
  "/catalogo?style=moderno",
  "/catalogo?style=promocional",
  "/producto/1?style=elegante",
  "/producto/1?style=urbano",
  "/producto/1?style=minimalista",
  "/producto/1?style=moderno",
  "/producto/1?style=promocional",
  // Editor pages
  "/editor",
  "/editor/landing",
  "/editor/catalogo",
  "/editor/producto",
  "/editor/templates",
];

async function checkPage(page: any, url: string) {
  console.log(`\n📄 Checking: ${url}`);

  try {
    await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle", timeout: 30000 });
  } catch (e) {
    console.log(`   ⚠️ Page load timeout or error`);
    return [];
  }

  // Find all clickable elements (links and buttons)
  const clickables = await page.locator('a[href], button').all();

  console.log(`   Found ${clickables.length} clickable elements`);

  const issues: string[] = [];

  for (let i = 0; i < clickables.length; i++) {
    const el = clickables[i];

    try {
      const tagName = await el.evaluate((e: Element) => e.tagName.toLowerCase());
      const href = await el.getAttribute('href');
      const text = await el.textContent();
      const trimmedText = text?.trim().slice(0, 40) || '[no text]';
      const className = await el.getAttribute('class') || '';

      // Skip external links and anchors
      if (href && (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel'))) {
        continue;
      }

      // Check for # links (but not anchor links like #section)
      if (href === '#' || href === '#ofertas' || href === '#instagram' || href === '#twitter') {
        issues.push(`   ⚠️  "#" link: "${trimmedText}" -> ${href} (class: ${className.slice(0,50)})`);
        continue;
      }

      // For internal links, check if they return 404
      if (href && href.startsWith('/')) {
        try {
          const response = await page.request.get(`${BASE_URL}${href}`);
          if (response.status() === 404) {
            issues.push(`   ❌ 404: "${trimmedText}" -> ${href}`);
          }
        } catch (e) {
          // Request failed
        }
      }

      // Check buttons that might trigger navigation
      if (tagName === 'button') {
        const onclick = await el.getAttribute('onclick');
        if (onclick && onclick.includes('location')) {
          issues.push(`   ⚠️  Button with onclick: "${trimmedText}"`);
        }
      }
    } catch (e) {
      // Element may have been removed from DOM
    }
  }

  if (issues.length === 0) {
    console.log(`   ✅ All links valid`);
  } else {
    issues.forEach(issue => console.log(issue));
  }

  return issues;
}

async function main() {
  console.log("🔍 Checking all buttons and links for 404 errors...\n");

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const allIssues: string[] = [];

  for (const url of PAGES_TO_CHECK) {
    const issues = await checkPage(page, url);
    allIssues.push(...issues);
  }

  await browser.close();

  console.log("\n" + "=".repeat(50));
  if (allIssues.length === 0) {
    console.log("✅ No 404 issues found!");
  } else {
    console.log(`❌ Found ${allIssues.length} issues total`);
  }
}

main().catch(console.error);
