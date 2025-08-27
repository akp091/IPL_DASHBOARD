import { Match } from "@/types";

interface MatchScheduleProps {
  schedule: Match[];
}

async function getMatchSchedule() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-match-schedule`,
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

export default async function MatchSchedule() {
  const schedule = await getMatchSchedule();
  console.log("schedule :>> ", schedule);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        Match Schedule
      </h2>

      <div className="space-y-4">
        {schedule.map((match) => (
          <div
            key={match.time}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {match?.matchType}
                </span>
                <span className="text-sm text-gray-600">{match.venue}</span>
              </div>
              <div className="text-sm text-gray-600">{match.time}</div>
            </div>

            <div className="space-y-4">
              {/* Team 1 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      <img src={match.teams[0].logo} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {match.teams[0].name}
                    </h3>
                    {match.teams[0].score && (
                      <p className="text-lg font-bold text-gray-900">
                        {match.teams[0].score}
                        {/* <span className="text-sm font-normal text-gray-600 ml-2">
                          (20.0 OV)
                        </span> */}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Team 2 */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      <img src={match.teams[1].logo} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {match.teams[1].name}
                    </h3>
                    {match?.teams?.[1]?.score && (
                      <p className="text-lg font-bold text-gray-900">
                        {match?.teams?.[1]?.score}
                        {/* <span className="text-sm font-normal text-gray-600 ml-2">
                          (20.0 OV)
                        </span> */}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Result Section */}
            {match?.result && (
              <div
                className={`mt-4 p-4 ${
                  match?.result?.toLowerCase() == "match abandoned"
                    ? "bg-orange-50 border-orange-200"
                    : match?.result?.toLowerCase() == "no result"
                    ? "bg-yellow-50 border-yellow-200"
                    : "bg-green-50 border-green-200"
                } border  rounded-lg`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-semibold">
                      {match.result}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
