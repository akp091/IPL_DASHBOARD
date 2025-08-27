export const config = {
  scraping: {
    enabled: process.env.NEXT_PUBLIC_SCRAPING_ENABLED === "true",
    intervalMinutes: parseInt(process.env.SCRAPING_INTERVAL_MINUTES || "5", 10),
    timeoutMs: parseInt(process.env.SCRAPING_TIMEOUT_MS || "30000", 10),
  },
  urls: {
    matches:
      process.env.NEXT_PUBLIC_MATCHES_URL ||
      "https://www.iplt20.com/matches/results",
    pointsTable:
      process.env.NEXT_PUBLIC_POINTS_TABLE_URL ||
      "https://www.iplt20.com/points-table/men/2025",
  },
  browser: {
    headless: process.env.BROWSER_HEADLESS !== "false",
    userAgent: process.env.BROWSER_USER_AGENT || "Chrome/120.0.0.0",
  },
  files: {
    dataDirectory: process.env.DATA_DIRECTORY || "./data",
    matchesFile: process.env.MATCHES_FILE || "Matches.json",
    pointsTableFile: process.env.POINTS_TABLE_FILE || "PointsTable.json",
  },
  performance: {
    maxConcurrentPages: parseInt(process.env.MAX_CONCURRENT_PAGES || "3", 10),
    pageTimeoutMs: parseInt(process.env.PAGE_TIMEOUT_MS || "15000", 10),
  },
} as const;

// Type for the config object
export type Config = typeof config;
