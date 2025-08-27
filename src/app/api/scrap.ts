import { scrapeData } from "../../utils/scrappingManager";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    console.log("Starting scraping process...");

    const result = await scrapeData();

    res.status(200).json({
      success: true,
      message: "Scraping completed successfully",
      data: result,
    });
  } catch (err: any) {
    console.error("Scraping failed:", err);

    res.status(500).json({
      success: false,
      error: "Scraping failed",
      message: err.message,
    });
  }
}
