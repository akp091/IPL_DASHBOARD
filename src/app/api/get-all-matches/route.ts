import { NextRequest, NextResponse } from "next/server";
import { getMatchesData } from "../../../utils/fileManager";
import { compareDateTime } from "@/utils/commonUtils";

// get method to fetch matches data
export async function GET(req: NextRequest) {
  const searchParams = req?.nextUrl?.searchParams;
  const status = searchParams?.get("status");

  console.log("req.body==>>>>", status);
  try {
    // Get matches from JSON File
    const matches = await getMatchesData();
    let result: any = { live: [], upcoming: [], completed: [] };

    matches?.data?.forEach((match) => {
      if (match?.result) {
        result.completed.push(match);
      } else if (!match.result) {
        if (!compareDateTime(match.time)) {
          result.upcoming.push(match);
        } else {
          result.live.push(match);
        }
      }
    });
    // if (!status) {
    //   return NextResponse.json({
    //     success: true,
    //     data: matches.data,
    //     lastUpdated: matches.lastUpdated,
    //   });
    // }

    // switch (status?.toLowerCase()) {
    //   case "upcoming": {
    //     result = matches.data.filter(
    //       (match) => !match.result && !compareDateTime(match.time)
    //     );
    //     break;
    //   }
    //   case "live": {
    //     result = matches.data.filter(
    //       (match) => !match.result && compareDateTime(match.time)
    //     );
    //     break;
    //   }

    //   case "completed": {
    //     result = matches.data.filter((match) => !!match.result);
    //     break;
    //   }

    //   default: {
    //     return NextResponse.json(
    //       {
    //         success: false,
    //         error: "API Route doesnot exist",
    //         message: "API Route doesnot exist ",
    //       },
    //       { status: 404 }
    //     );
    //   }
    // }
    // success response
    return NextResponse.json({
      success: true,
      data: result,
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
