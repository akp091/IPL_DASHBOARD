import { Match } from "@/types";

interface LiveMatchProps {
  liveMatches?: Match[];
  upcomingMatches: Match[];
}

export default function LiveMatch({
  liveMatches,
  upcomingMatches,
}: LiveMatchProps) {
  if (liveMatches?.length > 0) {
    const liveMatch = liveMatches[0];
    return (
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">LIVE MATCH</h2>
          <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
            LIVE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">
              <img src={liveMatch?.teams?.[0]?.logo} alt="team logo" />
            </div>
            <div className="text-sm opacity-90">
              {liveMatch?.teams?.[0]?.name}
            </div>
            {liveMatch?.teams?.[0]?.score && (
              <div className="text-lg font-semibold mt-2">
                {liveMatch?.teams?.[0]?.score}
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold mb-2">VS</div>
            <div className="text-sm opacity-90">{liveMatch.venue}</div>
            <div className="text-xs opacity-75 mt-1">{liveMatch.time}</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-2">
              <img src={liveMatch?.teams?.[1]?.logo} alt="team logo" />
            </div>
            <div className="text-sm opacity-90">
              {liveMatch.teams?.[1]?.name}
            </div>
            {liveMatch.score2 && (
              <div className="text-lg font-semibold mt-2">
                {liveMatch.teams?.[1]?.score}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (upcomingMatches?.length > 0) {
    const nextMatch = upcomingMatches[0];
    return (
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center">NEXT MATCH</h2>
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            UPCOMING
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">
              <img src={nextMatch?.teams?.[0]?.logo} alt="team logo" />
            </div>
            <div className="text-sm opacity-90">
              {nextMatch?.teams?.[0]?.name}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold mb-2">VS</div>
            <div className="text-sm opacity-90">{nextMatch.venue}</div>
            <div className="text-xs opacity-75 mt-1">
              {nextMatch.date} • {nextMatch.time}
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold mb-2">
              <img src={nextMatch?.teams?.[1]?.logo} alt="team logo" />
            </div>
            <div className="text-sm opacity-90">
              {nextMatch?.teams?.[1]?.name}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-6 text-center">
      <h2 className="text-xl font-semibold text-gray-600 mb-2">
        No Matches Scheduled
      </h2>
      <p className="text-gray-500">Check back later for upcoming matches</p>
    </div>
  );
}
