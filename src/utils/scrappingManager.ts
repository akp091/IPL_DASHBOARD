import { getMatchesData } from "./scrapers/matchScrapper";
import { getPointsTableData } from "./scrapers/pointsTableScrapper";
import { saveMatchesData, savePointsTableData } from "./fileManager";
import { closeBrowser } from "./puppeteerClient";
import { config } from "./config";

export async function scrapeData() {
  try {
    console.log("Starting data scraping...");

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error("Scraping timeout")),
        config.scraping.timeoutMs
      );
    });

    const scrapingPromise = Promise.all([
      getMatchesData(),
      getPointsTableData(),
    ]);

    const [matches, pointsTable] = (await Promise.race([
      scrapingPromise,
      timeoutPromise,
    ])) as [any[], any[]];

    console.log(
      `Scraped ${matches.length} matches and ${pointsTable.length} teams`
    );

    const [savedMatches, savedPoints] = await Promise.all([
      saveMatchesData(matches),
      savePointsTableData(pointsTable),
    ]);

    return {
      matches: savedMatches,
      pointsTable: savedPoints,
    };
  } catch (error) {
    console.error("Scraping error:", error);
    throw error;
  } finally {
    await closeBrowser();
  }
}
