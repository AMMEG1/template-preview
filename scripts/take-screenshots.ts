import { chromium } from 'playwright';

const STYLES = ['elegante', 'urbano', 'promocional', 'minimalista', 'moderno'];

async function takeScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  console.log('Starting screenshot capture...\n');

  for (const style of STYLES) {
    console.log(`📸 Capturing ${style}...`);
    const page = await context.newPage();

    try {
      // Go to template selector
      await page.goto('http://localhost:3000/editor/templates', { waitUntil: 'networkidle' });

      // Click on the style card to select it
      await page.click(`button:has-text("${style.charAt(0).toUpperCase() + style.slice(1)}")`);

      // Wait for the selection to register
      await page.waitForTimeout(500);

      // Navigate to the preview page
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

      // Wait for images to load
      await page.waitForTimeout(2000);

      // Take full page screenshot
      await page.screenshot({
        path: `screenshots/${style}-landing.png`,
        fullPage: true
      });

      console.log(`   ✅ ${style}-landing.png saved`);

    } catch (error) {
      console.error(`   ❌ Error capturing ${style}:`, error);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\n🎉 All screenshots captured!');
}

takeScreenshots().catch(console.error);
