import fs from "fs";
import path from "path";
import { Match, PointsTableEntry } from "../types";

// Where we store our data files
const DATA_DIR = path.join(process.cwd(), "data");

// Make sure the data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Save matches data to a JSON file
export async function saveMatchesData(data: Match[]) {
  const filePath = path.join(DATA_DIR, "matches.json");

  const fileData = {
    data: data,
    lastUpdated: new Date().toISOString(),
    count: data.length,
  };

  // Write to file
  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
  return fileData;
}

// Save points table data to a JSON file
export async function savePointsTableData(data: PointsTableEntry[]) {
  const filePath = path.join(DATA_DIR, "pointsTable.json");

  const fileData = {
    data: data,
    lastUpdated: new Date().toISOString(),
    count: data.length,
  };

  // Write to file
  fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
  return fileData;
}

// Read matches data from file
export async function getMatchesData() {
  const filePath = path.join(DATA_DIR, "matches.json");

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error("Matches data not found. Please run scraping first.");
  }

  // Read and parse the file
  const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    data: fileData.data,
    lastUpdated: fileData.lastUpdated,
  };
}

// Read points table data from file
export async function getPointsTableData() {
  const filePath = path.join(DATA_DIR, "pointsTable.json");

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error("Points table data not found. Please run scraping first.");
  }

  // Read and parse the file
  const fileData = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return {
    data: fileData.data,
    lastUpdated: fileData.lastUpdated,
  };
}
