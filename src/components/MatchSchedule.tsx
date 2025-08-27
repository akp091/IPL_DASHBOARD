import { Match } from "@/types";

interface MatchScheduleProps {
  schedule: Match[];
}

async function fetchMatches() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-matches`,
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

export default async function MatchSchedule({ schedule }: MatchScheduleProps) {
  const matches = await fetchMatches();
  console.log("matches :>> ", matches);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">📅</span>
        Match Schedule
      </h2>

      <div className="space-y-6">
        {/* <div key={month}>
          <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">
            {month}
          </h3> */}

        <div className="space-y-3">
          {schedule.map((match) => (
            <div
              key={match.id}
              className={`border rounded-lg p-4 transition-all hover:shadow-md ${
                match.status === "live"
                  ? "border-red-500 bg-red-50"
                  : match.status === "upcoming"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-600">
                          {match.team1.shortName.charAt(0)}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        {match.team1.shortName}
                      </span>
                    </div>

                    <span className="text-gray-500 font-medium">vs</span>

                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-800">
                        {match.team2.shortName}
                      </span>
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-600">
                          {match.team2.shortName.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-2">
                    📍 {match.venue}
                  </div>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">
                      {match.date}
                    </div>
                    <div className="text-sm text-gray-600">{match.time}</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {match.status === "live" && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <span className="animate-pulse mr-1">🔴</span>
                        LIVE
                      </span>
                    )}
                    {match.status === "upcoming" && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        ⏰ UPCOMING
                      </span>
                    )}
                    {match.status === "completed" && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ✅ COMPLETED
                      </span>
                    )}
                  </div>

                  {match.status === "completed" && match.result && (
                    <div className="text-xs text-gray-600 text-right max-w-xs">
                      {match.result}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
