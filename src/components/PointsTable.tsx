import { PointsTableEntry } from "@/types";

async function fetchPointsTableData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/points-table`,
    {
      cache: "no-store", // always fetch fresh data
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch matches");
  }

  const data = await res.json();
  return data.data; // array of matches
}

interface PointsTableProps {
  pointsTable: PointsTableEntry[];
}

const fields = [
  "Pos",
  "Team",
  "P",
  "W",
  "L",
  "NR",
  "NRR",
  "PTS",
  "RECENT FORM",
];

export default async function PointsTable({ pointsTable }: PointsTableProps) {
  const matches = await fetchPointsTableData();
  console.log("matches :>> ", matches);
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">🏆</span>
        Points Table
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              {fields.map((field) => (
                <th className="text-left py-3 px-4 font-semibold text-gray-700">
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matches.map((item, index) => (
              <tr
                key={item.pos}
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  index < 4 ? "bg-green-50" : ""
                }`}
              >
                <td className="py-3 px-4 font-semibold">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                      index < 4
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {item.POS}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600">
                        {item.TEAM.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {item.TEAM}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center font-semibold text-gray-700">
                  {item.P}
                </td>
                <td className="py-3 px-4 text-center font-semibold text-green-600">
                  {item.W}
                </td>
                <td className="py-3 px-4 text-center font-semibold text-red-600">
                  {item.L}
                </td>
                <td className="py-3 px-4 text-center font-semibold text-yellow-600">
                  {item.NR}
                </td>
                <td
                  className={`py-3 px-4 text-center font-mono text-sm ${
                    item.NRR >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.NRR >= 0 ? "+" : ""}
                  {item.NRR}
                </td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">
                  {item.PTS}
                </td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">
                  {item["RECENT FORM"].map((data) => (
                    <span
                      className={`px-2 w-8 h-8 bg-gray-200 ${
                        data.toLowerCase() == "w"
                          ? "text-green-600"
                          : "text-red-600"
                      } rounded-full items-center justify-center `}
                    >
                      {data}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
        Top 4 teams qualify for playoffs
      </div>
    </div>
  );
}
