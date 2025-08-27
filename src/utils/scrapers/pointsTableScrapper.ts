import { newPage } from "../puppeteerClient.js";

export async function getPointsTableData() {
  const page = await newPage();

  await page.goto("https://www.iplt20.com/points-table/men/2025", {
    waitUntil: "networkidle2",
  });

  // await page.waitForTimeout(1500);

  console.log("Fetching points table...");

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
    const tableRows = table.querySelectorAll("tbody tr");
    let rows = [];

    for (let i = 0; i < tableRows.length; i++) {
      const tr = tableRows[i];
      const tdCells = tr.querySelectorAll("td");
      let cells = [];

      // Process each cell
      for (let j = 0; j < tdCells.length; j++) {
        const td = tdCells[j];
        const spans = td.querySelectorAll("span");

        if (spans.length) {
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

  await page.close();
  return data;
}
