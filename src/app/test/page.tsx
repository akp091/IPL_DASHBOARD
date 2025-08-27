import Header from "@/components/Header";
import LiveMatch from "@/components/LiveMatch";
import UpcomingMatches from "@/components/UpcomingMatches";
import PointsTable from "@/components/PointsTable";
import MatchSchedule from "@/components/MatchSchedule";
import StatsCard from "@/components/StatsCard";

// Test data for individual component testing
const testData = {
  liveMatch: {
    id: "test_live",
    team1: { id: "csk", name: "Chennai Super Kings", shortName: "CSK" },
    team2: { id: "mi", name: "Mumbai Indians", shortName: "MI" },
    date: "Aug 25",
    time: "7:30 PM",
    venue: "Wankhede Stadium, Mumbai",
    status: "live" as const,
    isLive: true,
    score1: "156/4",
    score2: "142/8",
  },

  upcomingMatches: [
    {
      id: "test_1",
      team1: {
        id: "rcb",
        name: "Royal Challengers Bangalore",
        shortName: "RCB",
      },
      team2: { id: "kkr", name: "Kolkata Knight Riders", shortName: "KKR" },
      date: "Aug 26",
      time: "7:30 PM",
      venue: "Chinnaswamy Stadium, Bangalore",
      status: "upcoming" as const,
    },
  ],

  pointsTable: [
    {
      team: { id: "csk", name: "Chennai Super Kings", shortName: "CSK" },
      played: 14,
      won: 11,
      lost: 3,
      tied: 0,
      points: 22,
      netRunRate: 0.652,
      position: 1,
    },
    {
      team: { id: "mi", name: "Mumbai Indians", shortName: "MI" },
      played: 14,
      won: 10,
      lost: 4,
      tied: 0,
      points: 20,
      netRunRate: 0.523,
      position: 2,
    },
  ],

  schedule: [
    {
      id: "test_1",
      team1: { id: "csk", name: "Chennai Super Kings", shortName: "CSK" },
      team2: { id: "mi", name: "Mumbai Indians", shortName: "MI" },
      date: "Aug 25",
      time: "7:30 PM",
      venue: "Wankhede Stadium, Mumbai",
      status: "live" as const,
      isLive: true,
      score1: "156/4",
      score2: "142/8",
      result: "CSK won by 14 runs",
    },
  ],
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Component Test Page
        </h1>

        {/* Individual Component Tests */}
        <div className="space-y-12">
          {/* StatsCard Test */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              StatsCard Component
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard
                title="Test Stat"
                value={42}
                icon="🧪"
                color="blue"
                subtitle="Test subtitle"
              />
            </div>
          </div>

          {/* LiveMatch Test */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              LiveMatch Component
            </h2>
            <LiveMatch
              liveMatch={testData.liveMatch}
              upcomingMatches={testData.upcomingMatches}
            />
          </div>

          {/* UpcomingMatches Test */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              UpcomingMatches Component
            </h2>
            <UpcomingMatches upcomingMatches={testData.upcomingMatches} />
          </div>

          {/* PointsTable Test */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              PointsTable Component
            </h2>
            <PointsTable pointsTable={testData.pointsTable} />
          </div>

          {/* MatchSchedule Test */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              MatchSchedule Component
            </h2>
            <MatchSchedule schedule={testData.schedule} />
          </div>
        </div>
      </div>
    </div>
  );
}
