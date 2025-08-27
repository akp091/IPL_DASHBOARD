import { Match } from "@/types";

interface UpcomingMatchesProps {
  upcomingMatches: Match[];
}

export default function UpcomingMatches({
  upcomingMatches,
}: UpcomingMatchesProps) {
  if (upcomingMatches.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <span className="mr-3">⏰</span>
        Upcoming Matches
      </h2>

      <div className="space-y-4">
        {upcomingMatches.slice(0, 3).map((match) => (
          <div
            key={match.id}
            className="border border-blue-200 rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-blue-300">
                    <span className="text-sm font-bold text-blue-600">
                      {match.team1.shortName.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {match.team1.shortName}
                  </span>
                </div>

                <span className="text-blue-600 font-medium">vs</span>

                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">
                    {match.team2.shortName}
                  </span>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-blue-300">
                    <span className="text-sm font-bold text-blue-600">
                      {match.team2.shortName.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-gray-800">{match.date}</div>
                <div className="text-sm text-gray-600">{match.time}</div>
                <div className="text-xs text-gray-500 mt-1">{match.venue}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {upcomingMatches.length > 3 && (
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            View All {upcomingMatches.length} Upcoming Matches →
          </button>
        </div>
      )}
    </div>
  );
}
