import { getPointsTableData } from "../../utils/fileManager";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const pointsTable = await getPointsTableData();

    res.status(200).json({
      success: true,
      data: pointsTable.data,
      lastUpdated: pointsTable.lastUpdated,
    });
  } catch (err: any) {
    console.error("Error reading points table:", err);
    res.status(500).json({
      success: false,
      error: "Failed to read points table data",
      message: err.message,
    });
  }
}
