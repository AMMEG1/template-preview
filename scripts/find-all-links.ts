/**
 * Find ALL hrefs in rendered pages
 */
import { chromium } from "playwright";

const BASE_URL = "http://localhost:3000";

async function main() {
  const browser = await chromium.launch();
  const page = await browser.newContext().then(c => c.newPage());

  const pagesToCheck = ["/", "/catalogo", "/producto/1"];

  for (const url of pagesToCheck) {
    console.log(`\n=== ${url} ===`);
    await page.goto(`${BASE_URL}${url}`, { waitUntil: "networkidle" });

    // Get ALL hrefs
    const hrefs = await page.evaluate(() => {
      const links = document.querySelectorAll('[href]');
      return Array.from(links).map(el => ({
        tag: el.tagName,
        href: el.getAttribute('href'),
        text: el.textContent?.trim().slice(0, 50) || '[no text]',
        class: el.className?.slice(0, 60) || ''
      }));
    });

    // Filter and show relevant links
    const relevantLinks = hrefs.filter(h =>
      h.href &&
      !h.href.startsWith('http') &&
      !h.href.startsWith('/_next') &&
      !h.href.includes('favicon')
    );

    console.log(`Found ${relevantLinks.length} internal links:`);
    for (const link of relevantLinks) {
      // Check if 404
      let status = "?";
      try {
        const fullUrl = link.href?.startsWith('/') ? `${BASE_URL}${link.href}` : link.href;
        if (fullUrl) {
          const resp = await page.request.get(fullUrl);
          status = resp.status().toString();
        }
      } catch {
        status = "err";
      }

      const statusIcon = status === "200" ? "✅" : status === "404" ? "❌" : "⚠️";
      console.log(`  ${statusIcon} [${status}] ${link.href} - "${link.text}"`);
    }
  }

  await browser.close();
}

main().catch(console.error);
