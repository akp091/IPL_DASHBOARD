import { getPointsTableData } from "@/utils/fileManager";
import { NextResponse } from "next/server";

// GET endpoint for points table data
export async function GET() {
  try {
    
    const pointsTable = await getPointsTableData();

    return NextResponse.json({
      success: true,
      data: pointsTable.data,
      lastUpdated: pointsTable.lastUpdated,
    });
  } catch (error) {
    console.error("Error reading points table:", error);

    // Simple error handling
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to read points table data",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
