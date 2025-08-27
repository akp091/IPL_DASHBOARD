import Header from "@/components/Header";
import LiveMatch from "@/components/LiveMatch";
import UpcomingMatches from "@/components/UpcomingMatches";
import PointsTable from "@/components/PointsTable";
import MatchSchedule from "@/components/MatchSchedule";
import StatsCard from "@/components/StatsCard";

async function getAllMatches() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-matches`
    );

    if (!res.ok) {
      console.log("Failed to fetch matches");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log("error in fetching match data :>> ", error);
  }
}

export default async function Home() {
  const matches = await getAllMatches();
  console.log("allMatches===>>>", matches);
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
              Last updated: {new Date(matches?.lastUpdated).toLocaleString()}
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
            value={
              [...matches?.live, ...matches.upcoming, ...matches.completed]
                .length
            }
            color="blue"
            subtitle="Season 2024"
          />
          <StatsCard
            title="Completed"
            value={matches?.completed?.length}
            color="green"
            subtitle="Finished matches"
          />
          <StatsCard
            title="Upcoming"
            value={matches?.upcoming?.length}
            color="yellow"
            subtitle="Scheduled matches"
          />
          <StatsCard
            title="Live Now"
            value={matches?.live?.length}
            color="red"
            subtitle="Currently playing"
          />
        </div>
        {/* Live Match / Upcoming Match */}
        <LiveMatch
          liveMatches={matches?.live}
          upcomingMatches={matches?.upcoming}
        />
        {/* Upcoming Matches */}
        {matches?.upcoming && (
          <UpcomingMatches upcomingMatches={matches?.upcoming} />
        )}
        {/* Points Table */}
        <PointsTable />
        {/* component for match schedule */}
        <MatchSchedule />
      </div>
    </div>
  );
}
