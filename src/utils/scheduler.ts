import { scrapeData } from "./scrappingManager";

let isRunning = false;

export async function startScheduler() {
  console.log("Starting scraping scheduler...");

  // Run every minute
  setInterval(async () => {
    if (isRunning) {
      console.log("Previous scraping still running, skipping...");
      return;
    }

    isRunning = true;

    try {
      console.log("Running scheduled scraping...");
      const result = await scrapeData();
      console.log("Scheduled scraping completed", result);
    } catch (error) {
      console.error("Scheduled scraping failed:", error);
    } finally {
      isRunning = false;
    }
  }, 60000); // 1 minute
}

export function stopScheduler() {
  console.log("Stopping scraping scheduler...");
  isRunning = false;
}
