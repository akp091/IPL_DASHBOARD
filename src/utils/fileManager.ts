import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export async function saveMatchesData(data: any) {
  const filePath = path.join(DATA_DIR, "matches.json");
  const fileData = {
    data: data,
    lastUpdated: new Date().toISOString(),
    count: data.length,
  };

  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
  return fileData;
}

export async function savePointsTableData(data: any) {
  const filePath = path.join(DATA_DIR, "pointsTable.json");
  const fileData = {
    data: data,
    lastUpdated: new Date().toISOString(),
    count: data.length,
  };

  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
  return fileData;
}

export async function getMatchesData() {
  const filePath = path.join(DATA_DIR, "matches.json");

  if (!fs.existsSync(filePath)) {
    throw new Error("Matches data not found. Please run scraping first.");
  }

  const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    data: fileData.data,
    lastUpdated: fileData.lastUpdated,
  };
}

export async function getPointsTableData() {
  const filePath = path.join(DATA_DIR, "pointsTable.json");

  if (!fs.existsSync(filePath)) {
    throw new Error("Points table data not found. Please run scraping first.");
  }

  const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    data: fileData.data,
    lastUpdated: fileData.lastUpdated,
  };
}
