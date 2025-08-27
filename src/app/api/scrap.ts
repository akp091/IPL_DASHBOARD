import { NextResponse } from "next/server";
import { scrapeData } from "../../utils/scrappingManager";

// POST endpoint to trigger data scraping
export async function POST() {
  try {
    console.log("Starting scraping process...");

    // Run the scraping
    const result = await scrapeData();

    return NextResponse.json({
      success: true,
      message: "Scraping completed successfully",
      data: result,
    });
  } catch (error) {
    console.error("Scraping failed:", error);

    // Basic error handling
    let errorMessage = "Scraping failed";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: "Scraping failed",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
