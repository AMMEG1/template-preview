/**
 * Actually click every button and see what happens
 */
import { chromium } from "playwright";

const BASE_URL = "http://localhost:3000";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Track 404s
  const errors: string[] = [];
  page.on('response', response => {
    if (response.status() === 404 && !response.url().includes('favicon')) {
      errors.push(`404: ${response.url()}`);
    }
  });

  const pagesToCheck = ["/", "/catalogo", "/producto/1"];

  for (const url of pagesToCheck) {
    console.log(`\n=== Testing buttons on ${url} ===`);
    await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle" });

    // Get all buttons
    const buttons = await page.locator('button').all();
    console.log(`Found ${buttons.length} buttons`);

    for (let i = 0; i < buttons.length; i++) {
      try {
        // Re-navigate to the page (buttons may have changed state)
        await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle" });

        const btns = await page.locator('button').all();
        if (i >= btns.length) break;

        const btn = btns[i];
        const isVisible = await btn.isVisible();
        if (!isVisible) continue;

        const text = await btn.textContent();
        const trimmedText = text?.trim().slice(0, 40) || '[empty]';

        console.log(`  Clicking button ${i + 1}: "${trimmedText}"`);

        const startUrl = page.url();

        // Click the button
        await btn.click({ timeout: 3000 }).catch(() => {});
        await page.waitForTimeout(1000);

        const endUrl = page.url();

        if (endUrl !== startUrl) {
          console.log(`    → Navigated to: ${endUrl}`);

          // Check if it's a 404 page
          const pageContent = await page.content();
          if (pageContent.includes('404') || pageContent.includes('not found')) {
            console.log(`    ❌ THIS IS A 404 PAGE!`);
            errors.push(`Button "${trimmedText}" on ${url} -> 404 at ${endUrl}`);
          }
        }
      } catch (e) {
        // Ignore click errors
      }
    }
  }

  await browser.close();

  console.log("\n=== SUMMARY ===");
  if (errors.length > 0) {
    console.log("❌ Found issues:");
    errors.forEach(e => console.log(`  - ${e}`));
  } else {
    console.log("✅ No 404 issues found with any button clicks");
  }
}

main().catch(console.error);
