import { newPage } from "../puppeteerClient";

export async function getMatchesData() {
  const page = await newPage();

  await page.goto("https://www.iplt20.com/matches/results", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("#team_archive li");

  const html = await page.content();

  console.log("Processing match data...");

  // Extract data from each match element
  const matches = await page.$$eval("#team_archive li", (items) => {
    const data = [];

    for (let el of items) {
      const matchType =
        el.querySelector(".vn-matchOrder")?.textContent.trim() || "";
      const venue =
        el.querySelector(".vn-venueDet p")?.textContent.trim() || "";
      const time =
        el.querySelector(".vn-matchDateTime")?.textContent.trim() || "";
      const result =
        el.querySelector(".vn-ticketTitle")?.textContent.trim() || "";

      // Team 1 data
      const team1 =
        el.querySelector(".vn-shedTeam .vn-teamName h3")?.textContent.trim() ||
        "";
      const team1Score =
        el.querySelector(".vn-shedTeam p")?.textContent.trim() || "";
      const team1Logo =
        el.querySelector(".vn-shedTeam img")?.getAttribute("src") || "";

      // Team 2 data
      const team2 =
        el.querySelector(".vn-team-2 .vn-teamName h3")?.textContent.trim() ||
        "";
      const team2Score =
        el.querySelector(".vn-team-2 p")?.textContent.trim() || "";
      const team2Logo =
        el.querySelector(".vn-team-2 img")?.getAttribute("src") || "";

      // const matchReport = el.querySelector("a.matchReportIcon")?.getAttribute("href") || "";
      // const highlights = el.querySelector("a.matchHLIcon")?.getAttribute("href") || "";
      // const matchCentre = el.querySelector("a.vn-matchBtn")?.getAttribute("href") || "";

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
    }

    return data;
  });

  console.log(`Found ${matches.length} matches`);

  await page.close();
  return matches;
}
