import { NextResponse } from "next/server";
import { getMatchesData } from "../../../utils/fileManager";

// Simple GET endpoint to fetch matches data
export async function GET() {
  try {
    // Get matches from JSON File
    const matches = await getMatchesData();

    // success response
    return NextResponse.json({
      success: true,
      data: matches.data,
      lastUpdated: matches.lastUpdated,
    });
  } catch (error) {
    console.error("Error reading matches:", error);

    // error handling
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to read matches data",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
