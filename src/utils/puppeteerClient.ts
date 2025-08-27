import puppeteer from "puppeteer";

let browser: any = null;

// Get or create browser instance
export async function getBrowser() {
  if (!browser) {
    browser = await puppeteer.launch({
      headless: true,
    });
  }
  console.log("Browser ready!");
  return browser;
}

// Create a new page for scraping
export async function newPage() {
  const browser = await getBrowser();
  const page = await browser.newPage();

  await page.setUserAgent("Chrome/120.0.0.0");

  // await page.waitForTimeout(1000);

  // // Handle popups if they appear
  // try {
  //   await page.click(".close-btn");
  // } catch (e) {
  //   // No popup, continue
  // }

  return page;
}

export async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
    console.log("Browser closed");
  }
}
