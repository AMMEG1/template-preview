import { chromium } from 'playwright';

const STYLES = ['elegante', 'urbano', 'promocional', 'minimalista', 'moderno'];
const PAGE_TYPES = ['landing', 'catalogo', 'producto'];

async function visualAudit() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  console.log('Visual Audit - Capturing all templates...\n');

  for (const style of STYLES) {
    console.log(`\n📸 Style: ${style.toUpperCase()}`);

    for (const pageType of PAGE_TYPES) {
      const page = await context.newPage();

      try {
        // First select the template style
        await page.goto('http://localhost:3000/editor/templates', { waitUntil: 'networkidle' });
        await page.click(`button:has-text("${style.charAt(0).toUpperCase() + style.slice(1)}")`);
        await page.waitForTimeout(500);

        // Navigate to the appropriate page
        let url = 'http://localhost:3000';
        if (pageType === 'catalogo') {
          url = 'http://localhost:3000/catalogo';
        } else if (pageType === 'producto') {
          url = 'http://localhost:3000/producto/1';
        }

        await page.goto(url, { waitUntil: 'networkidle' });
        await page.waitForTimeout(1500); // Wait for images

        // Take screenshot
        const filename = `screenshots/${style}-${pageType}.png`;
        await page.screenshot({
          path: filename,
          fullPage: true
        });

        console.log(`   ✅ ${pageType}: ${filename}`);

      } catch (error) {
        console.error(`   ❌ Error with ${style} ${pageType}:`, error);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log('\n🎉 Visual audit complete! Check screenshots/ folder.');
}

visualAudit().catch(console.error);
