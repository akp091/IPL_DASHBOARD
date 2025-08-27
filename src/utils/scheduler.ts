import cron from "node-cron";
import { scrapeData } from "./scrappingManager";
import { config } from "./config";

let isRunning = false;
let cronJob: any = null;

export function startScheduler() {
  if (!config.scraping.enabled) {
    console.log("Scraping is disabled in configuration");
    return;
  }

  if (cronJob) {
    console.log("Scheduler already running");
    return;
  }

  console.log("Scraping scheduler initialized");

  // Fix: Run every 5 minutes (not every 60 minutes)
  cronJob = cron.schedule(
    `*/${config.scraping.intervalMinutes} * * * *`,
    async () => {
      if (isRunning) {
        console.log("⏳ Previous scraping still running, skipping...");
        return;
      }

      isRunning = true;
      console.log("Starting scheduled scraping...");

      try {
        const result = await scrapeData();
        console.log("Scheduled scraping completed", result);
      } catch (error) {
        console.error("Scheduled scraping failed:", error);
      } finally {
        isRunning = false;
      }
    }
  );

  console.log(
    `Scheduler set to run every ${config.scraping.intervalMinutes} minutes`
  );
}

export function stopScheduler() {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
    isRunning = false;
    console.log("Scraping scheduler stopped");
  }
}

export function cleanup() {
  stopScheduler();
}
