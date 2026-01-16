import { chromium } from 'playwright';

const STYLES = ['elegante', 'urbano', 'promocional', 'minimalista', 'moderno'];

async function checkLinks() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });

  console.log('Checking links for each style...\n');
  let totalBroken = 0;

  for (const style of STYLES) {
    console.log(`\n🔍 Checking ${style}...`);
    const page = await context.newPage();
    const brokenLinks: string[] = [];

    try {
      // Select the style
      await page.goto('http://localhost:3000/editor/templates', { waitUntil: 'networkidle' });
      await page.click(`button:has-text("${style.charAt(0).toUpperCase() + style.slice(1)}")`);
      await page.waitForTimeout(500);

      // Navigate to preview
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

      // Get all links on the page
      const links = await page.$$eval('a[href]', (anchors) =>
        anchors
          .map((a) => a.getAttribute('href'))
          .filter((href) => href && href.startsWith('/') && !href.startsWith('/editor'))
      );

      const uniqueLinks = [...new Set(links)];
      console.log(`   Found ${uniqueLinks.length} internal links`);

      // Check each link
      for (const link of uniqueLinks) {
        if (!link) continue;

        const response = await page.goto(`http://localhost:3000${link}`, {
          waitUntil: 'domcontentloaded',
          timeout: 5000
        });

        if (!response || response.status() === 404) {
          brokenLinks.push(link);
        }
      }

      if (brokenLinks.length === 0) {
        console.log(`   ✅ All links working!`);
      } else {
        console.log(`   ❌ Broken links found:`);
        brokenLinks.forEach((link) => console.log(`      - ${link}`));
        totalBroken += brokenLinks.length;
      }

    } catch (error) {
      console.error(`   ❌ Error checking ${style}:`, error);
    } finally {
      await page.close();
    }
  }

  await browser.close();

  console.log('\n' + '='.repeat(50));
  if (totalBroken === 0) {
    console.log('🎉 All links working across all styles!');
  } else {
    console.log(`⚠️  Total broken links: ${totalBroken}`);
  }
}

checkLinks().catch(console.error);
