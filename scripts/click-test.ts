/**
 * Script to actually click buttons and see what happens
 */
import { chromium } from "playwright";

const BASE_URL = "http://localhost:3000";

async function testPage(page: any, url: string) {
  console.log(`\n📄 Testing clicks on: ${url}`);

  await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle" });

  // Find all buttons and links
  const buttons = await page.locator('button').all();
  const links = await page.locator('a[href]').all();

  console.log(`   Buttons: ${buttons.length}, Links: ${links.length}`);

  // Test each button
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    try {
      const text = await btn.textContent();
      const trimmedText = text?.trim().slice(0, 30) || '[no text]';
      const isVisible = await btn.isVisible();

      if (!isVisible) continue;

      // Get current URL before click
      const beforeUrl = page.url();

      // Click and wait a bit
      await btn.click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(500);

      // Check if URL changed
      const afterUrl = page.url();
      if (afterUrl !== beforeUrl) {
        // Check if it's a 404
        const response = await page.request.get(afterUrl);
        if (response.status() === 404) {
          console.log(`   ❌ Button "${trimmedText}" -> 404 at ${afterUrl}`);
        } else {
          console.log(`   ℹ️  Button "${trimmedText}" navigated to ${afterUrl}`);
        }
        // Go back
        await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle" });
      }
    } catch (e) {
      // Ignore errors
    }
  }

  // Check link destinations
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    try {
      const href = await link.getAttribute('href');
      const text = await link.textContent();
      const trimmedText = text?.trim().slice(0, 30) || '[no text]';

      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto')) {
        continue;
      }

      // Check the link destination
      const response = await page.request.get(`${BASE_URL}${href}`);
      if (response.status() === 404) {
        console.log(`   ❌ Link "${trimmedText}" -> 404 at ${href}`);
      }
    } catch (e) {
      // Ignore
    }
  }

  console.log(`   ✅ Done`);
}

async function main() {
  console.log("🖱️ Click testing all interactive elements...\n");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`   Console error: ${msg.text()}`);
    }
  });

  // Listen for navigation to 404
  page.on('response', response => {
    if (response.status() === 404) {
      console.log(`   ❌ 404 response: ${response.url()}`);
    }
  });

  const pages = ["/", "/catalogo", "/producto/1"];

  for (const url of pages) {
    await testPage(page, url);
  }

  await browser.close();
  console.log("\n✅ Click testing complete!");
}

main().catch(console.error);
