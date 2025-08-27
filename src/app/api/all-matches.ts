import { getMatchesData } from "../../utils/fileManager";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const matches = await getMatchesData();

    res.status(200).json({
      success: true,
      data: matches.data,
      lastUpdated: matches.lastUpdated,
    });
  } catch (err: any) {
    console.error("Error reading matches:", err);
    res.status(500).json({
      success: false,
      error: "Failed to read matches data",
      message: err.message,
    });
  }
}
