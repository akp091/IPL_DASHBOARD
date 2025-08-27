import Header from "@/components/Header";
import LiveMatch from "@/components/LiveMatch";
import UpcomingMatches from "@/components/UpcomingMatches";
import PointsTable from "@/components/PointsTable";
import MatchSchedule from "@/components/MatchSchedule";
import StatsCard from "@/components/StatsCard";

// Demo data for individual component testing
const demoData = {
  liveMatch: {
    id: "demo_live",
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
      id: "demo_1",
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
      id: "demo_2",
      team1: { id: "dc", name: "Delhi Capitals", shortName: "DC" },
      team2: { id: "pbks", name: "Punjab Kings", shortName: "PBKS" },
      date: "Aug 27",
      time: "7:30 PM",
      venue: "Arun Jaitley Stadium, Delhi",
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
  ],

  schedule: [
    {
      id: "demo_1",
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
      id: "demo_2",
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
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Component Demo
        </h1>

        {/* Stats Cards Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Statistics Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Matches"
              value={74}
              icon="🏏"
              color="blue"
              subtitle="Season 2024"
            />
            <StatsCard
              title="Completed"
              value={45}
              icon="✅"
              color="green"
              subtitle="Finished matches"
            />
            <StatsCard
              title="Upcoming"
              value={28}
              icon="⏰"
              color="yellow"
              subtitle="Scheduled matches"
            />
            <StatsCard
              title="Live Now"
              value={1}
              icon="🔴"
              color="red"
              subtitle="Currently playing"
            />
          </div>
        </section>

        {/* Live Match Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Live Match Component
          </h2>
          <LiveMatch
            liveMatch={demoData.liveMatch}
            upcomingMatches={demoData.upcomingMatches}
          />
        </section>

        {/* Upcoming Matches Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Upcoming Matches Component
          </h2>
          <UpcomingMatches upcomingMatches={demoData.upcomingMatches} />
        </section>

        {/* Points Table Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Points Table Component
          </h2>
          <PointsTable pointsTable={demoData.pointsTable} />
        </section>

        {/* Match Schedule Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Match Schedule Component
          </h2>
          <MatchSchedule schedule={demoData.schedule} />
        </section>
      </div>
    </div>
  );
}
