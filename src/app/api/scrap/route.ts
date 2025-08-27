import { NextResponse } from "next/server";
import { scrapeData } from "../../../utils/scrappingManager";

// endpoint to trigger data scraping, this is not used in UI, but if needed we can run this on click of refresh button from the client component.
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

    //  error handling
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
