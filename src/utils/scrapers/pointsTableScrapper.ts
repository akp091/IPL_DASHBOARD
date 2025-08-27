import { newPage } from "../puppeteerClient";
import { config } from "../config";

export async function getPointsTableData() {
  let page = null;

  try {
    page = await newPage();

    console.log("Fetching points table...");
    await page.goto(config.urls.pointsTable, {
      waitUntil: "networkidle2",
      timeout: config.performance.pageTimeoutMs,
    });

    const data = await page.$$eval("div.ih-pcard-wrap table", (tables: any) => {
      if (!tables.length) {
        console.log("No table found");
        return [];
      }

      const table = tables[0];

      // Get headers
      const headerCells = table.querySelectorAll("tbody:first-of-type th");
      let headers = [];
      for (let th of headerCells) {
        headers.push(th.innerText.trim());
      }

      // Process rows
      const tableRows = table.querySelectorAll("#pointsdata tr");
      let rows = [];

      for (let i = 0; i < tableRows.length; i++) {
        const tr = tableRows[i];
        const tdCells = tr.querySelectorAll("td");
        let cells = [];

        // Process each cell
        for (let j = 0; j < tdCells.length; j++) {
          const td = tdCells[j];
          const spans = td.querySelectorAll("span");

          if (spans.length > 1) {
            let spanTexts = [];
            for (let s of spans) {
              spanTexts.push(s.innerText.trim());
            }
            cells.push(spanTexts);
          } else {
            cells.push(td.innerText.trim());
          }
        }

        // Create row object
        let rowObj: any = {};
        headers.forEach((h, idx) => {
          if (h) {
            rowObj[h] = cells[idx] || "";
          }
        });

        rows.push(rowObj);
      }

      return rows;
    });

    console.log(`Processed ${data.length} teams`);
    return data;
  } catch (error) {
    console.error("Error in points table scraping:", error);
    throw error;
  } finally {
    if (page) {
      await page.close();
    }
  }
}
