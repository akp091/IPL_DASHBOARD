import { getMatchesData } from "./scrapers/matchScrapper";
import { getPointsTableData } from "./scrapers/pointsTableScrapper";
import { saveMatchesData, savePointsTableData } from "./fileManager";
import { closeBrowser } from "./puppeteerClient";

export async function scrapeData() {
  try {
    console.log("Starting data scraping...");

    const [matches, pointsTable] = await Promise.all([
      getMatchesData(),
      getPointsTableData(),
    ]);

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
