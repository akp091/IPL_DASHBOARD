import { newPage } from "../puppeteerClient";
import { config } from "../config";

export async function getMatchesData() {
  let page = null;

  try {
    page = await newPage();

    console.log("Navigating to matches page..");
    await page.goto(config.urls.matches, {
      waitUntil: "networkidle2",
      timeout: config.performance.pageTimeoutMs,
    });

    console.log("Waiting for match data to load...");
    await page.waitForSelector("#team_archive li", {
      timeout: config.performance.pageTimeoutMs,
    });

    console.log("Processing match data...");

    // Extract data from each match element with timeout protection
    const matches = await page.$$eval("#team_archive li", (items) => {
      const data = [];

      for (let el of items) {
        try {
          const matchType =
            el.querySelector(".vn-matchOrder")?.textContent?.trim() || "";
          const venue =
            el.querySelector(".vn-venueDet p")?.textContent?.trim() || "";
          const time =
            el.querySelector(".vn-matchDateTime")?.textContent?.trim() || "";
          const result =
            el.querySelector(".vn-ticketTitle")?.textContent?.trim() || "";

          // Team 1 data
          const team1 =
            el
              .querySelector(".vn-shedTeam .vn-teamName h3")
              ?.textContent?.trim() || "";
          const team1Score =
            el.querySelector(".vn-shedTeam p")?.textContent?.trim() || "";
          const team1Logo =
            el.querySelector(".vn-shedTeam img")?.getAttribute("src") || "";

          // Team 2 data
          const team2 =
            el
              .querySelector(".vn-team-2 .vn-teamName h3")
              ?.textContent?.trim() || "";
          const team2Score =
            el.querySelector(".vn-team-2 p")?.textContent?.trim() || "";
          const team2Logo =
            el.querySelector(".vn-team-2 img")?.getAttribute("src") || "";

          data.push({
            matchType,
            venue,
            time,
            result,
            teams: [
              { name: team1, score: team1Score, logo: team1Logo },
              { name: team2, score: team2Score, logo: team2Logo },
            ],
          });
        } catch (error) {
          console.warn("Error processing match element:", error);
          continue;
        }
      }

      return data;
    });

    console.log(`✅ Found ${matches.length} matches`);
    return matches;
  } catch (error) {
    console.error("Error in match scraping:", error);
    throw new Error(
      `Match scraping failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  } finally {
    if (page) {
      try {
        await page.close();
        console.log("Match scraper page closed");
      } catch (closeError) {
        console.warn("rror closing match scraper page:", closeError);
      }
    }
  }
}
