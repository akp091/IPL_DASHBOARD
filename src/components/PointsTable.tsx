import { PointsTableEntry } from "@/types";

interface PointsTableProps {
  pointsTable: PointsTableEntry[];
}

export default function PointsTable({ pointsTable }: PointsTableProps) {
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
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Pos
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Team
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">
                P
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">
                W
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">
                L
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">
                T
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">
                Pts
              </th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">
                NRR
              </th>
            </tr>
          </thead>
          <tbody>
            {pointsTable.map((entry, index) => (
              <tr
                key={entry.team.id}
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
                    {entry.position}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600">
                        {entry.team.shortName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {entry.team.shortName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {entry.team.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-center font-semibold text-gray-700">
                  {entry.played}
                </td>
                <td className="py-3 px-4 text-center font-semibold text-green-600">
                  {entry.won}
                </td>
                <td className="py-3 px-4 text-center font-semibold text-red-600">
                  {entry.lost}
                </td>
                <td className="py-3 px-4 text-center font-semibold text-yellow-600">
                  {entry.tied}
                </td>
                <td className="py-3 px-4 text-center font-bold text-blue-600">
                  {entry.points}
                </td>
                <td
                  className={`py-3 px-4 text-center font-mono text-sm ${
                    entry.netRunRate >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {entry.netRunRate >= 0 ? "+" : ""}
                  {entry.netRunRate.toFixed(3)}
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
