import Header from "@/components/Header";
import LiveMatch from "@/components/LiveMatch";
import UpcomingMatches from "@/components/UpcomingMatches";
import PointsTable from "@/components/PointsTable";
import MatchSchedule from "@/components/MatchSchedule";
import StatsCard from "@/components/StatsCard";

// Static data for the design template
const staticData = {
  totalMatches: 74,
  completedMatches: 45,
  upcomingMatchesCount: 28,
  liveMatchesCount: 1,
  lastUpdated: "2024-08-25T18:42:16.576Z",

  liveMatch: {
    id: "match_1",
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
      id: "match_2",
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
    {
      id: "match_3",
      team1: { id: "dc", name: "Delhi Capitals", shortName: "DC" },
      team2: { id: "pbks", name: "Punjab Kings", shortName: "PBKS" },
      date: "Aug 27",
      time: "7:30 PM",
      venue: "Arun Jaitley Stadium, Delhi",
      status: "upcoming" as const,
    },
    {
      id: "match_4",
      team1: { id: "rr", name: "Rajasthan Royals", shortName: "RR" },
      team2: { id: "srh", name: "Sunrisers Hyderabad", shortName: "SRH" },
      date: "Aug 28",
      time: "7:30 PM",
      venue: "Sawai Mansingh Stadium, Jaipur",
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
    {
      team: {
        id: "rcb",
        name: "Royal Challengers Bangalore",
        shortName: "RCB",
      },
      played: 14,
      won: 9,
      lost: 5,
      tied: 0,
      points: 18,
      netRunRate: 0.387,
      position: 3,
    },
    {
      team: { id: "kkr", name: "Kolkata Knight Riders", shortName: "KKR" },
      played: 14,
      won: 8,
      lost: 6,
      tied: 0,
      points: 16,
      netRunRate: 0.234,
      position: 4,
    },
    {
      team: { id: "dc", name: "Delhi Capitals", shortName: "DC" },
      played: 14,
      won: 7,
      lost: 7,
      tied: 0,
      points: 14,
      netRunRate: -0.123,
      position: 5,
    },
    {
      team: { id: "pbks", name: "Punjab Kings", shortName: "PBKS" },
      played: 14,
      won: 6,
      lost: 8,
      tied: 0,
      points: 12,
      netRunRate: -0.234,
      position: 6,
    },
    {
      team: { id: "rr", name: "Rajasthan Royals", shortName: "RR" },
      played: 14,
      won: 5,
      lost: 9,
      tied: 0,
      points: 10,
      netRunRate: -0.345,
      position: 7,
    },
    {
      team: { id: "srh", name: "Sunrisers Hyderabad", shortName: "SRH" },
      played: 14,
      won: 4,
      lost: 10,
      tied: 0,
      points: 8,
      netRunRate: -0.456,
      position: 8,
    },
    {
      team: { id: "gt", name: "Gujarat Titans", shortName: "GT" },
      played: 14,
      won: 3,
      lost: 11,
      tied: 0,
      points: 6,
      netRunRate: -0.567,
      position: 9,
    },
    {
      team: { id: "lsg", name: "Lucknow Super Giants", shortName: "LSG" },
      played: 14,
      won: 2,
      lost: 12,
      tied: 0,
      points: 4,
      netRunRate: -0.678,
      position: 10,
    },
  ],

  schedule: [
    {
      id: "match_1",
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
    {
      id: "match_2",
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
    {
      id: "match_3",
      team1: { id: "dc", name: "Delhi Capitals", shortName: "DC" },
      team2: { id: "pbks", name: "Punjab Kings", shortName: "PBKS" },
      date: "Aug 27",
      time: "7:30 PM",
      venue: "Arun Jaitley Stadium, Delhi",
      status: "upcoming" as const,
    },
    {
      id: "match_4",
      team1: { id: "rr", name: "Rajasthan Royals", shortName: "RR" },
      team2: { id: "srh", name: "Sunrisers Hyderabad", shortName: "SRH" },
      date: "Aug 28",
      time: "7:30 PM",
      venue: "Sawai Mansingh Stadium, Jaipur",
      status: "upcoming" as const,
    },
    {
      id: "match_5",
      team1: { id: "gt", name: "Gujarat Titans", shortName: "GT" },
      team2: { id: "lsg", name: "Lucknow Super Giants", shortName: "LSG" },
      date: "Aug 29",
      time: "7:30 PM",
      venue: "Narendra Modi Stadium, Ahmedabad",
      status: "upcoming" as const,
    },
    {
      id: "match_6",
      team1: { id: "csk", name: "Chennai Super Kings", shortName: "CSK" },
      team2: {
        id: "rcb",
        name: "Royal Challengers Bangalore",
        shortName: "RCB",
      },
      date: "Aug 24",
      time: "7:30 PM",
      venue: "MA Chidambaram Stadium, Chennai",
      status: "completed" as const,
      result: "CSK won by 6 wickets",
      score1: "173/6",
      score2: "172/8",
    },
    {
      id: "match_7",
      team1: { id: "mi", name: "Mumbai Indians", shortName: "MI" },
      team2: { id: "dc", name: "Delhi Capitals", shortName: "DC" },
      date: "Aug 23",
      time: "7:30 PM",
      venue: "Wankhede Stadium, Mumbai",
      status: "completed" as const,
      result: "MI won by 8 wickets",
      score1: "165/2",
      score2: "164/8",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Last updated: {new Date(staticData.lastUpdated).toLocaleString()}
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Refresh</span>
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Matches"
            value={staticData.totalMatches}
            icon="🏏"
            color="blue"
            subtitle="Season 2024"
          />
          <StatsCard
            title="Completed"
            value={staticData.completedMatches}
            icon="✅"
            color="green"
            subtitle="Finished matches"
          />
          <StatsCard
            title="Upcoming"
            value={staticData.upcomingMatchesCount}
            icon="⏰"
            color="yellow"
            subtitle="Scheduled matches"
          />
          <StatsCard
            title="Live Now"
            value={staticData.liveMatchesCount}
            icon="🔴"
            color="red"
            subtitle="Currently playing"
          />
        </div>

        {/* Live Match / Upcoming Match */}
        <LiveMatch
          liveMatch={staticData.liveMatch}
          upcomingMatches={staticData.upcomingMatches}
        />

        {/* Upcoming Matches */}
        <UpcomingMatches upcomingMatches={staticData.upcomingMatches} />

        {/* Points Table */}
        <PointsTable pointsTable={staticData.pointsTable} />

        {/* Match Schedule */}
        <MatchSchedule schedule={staticData.schedule} />
      </div>
    </div>
  );
}
