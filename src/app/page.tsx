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
  console.log("matches :>> ", matches);
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
          </div>
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
            subtitle="Season 2025"
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
        {matches?.upcoming?.length > 0 ? (
          <UpcomingMatches upcomingMatches={matches?.upcoming} />
        ) : (
          <></>
        )}
        {/* Points Table */}
        <PointsTable />
        {/* component for match schedule */}
        <MatchSchedule />
      </div>
    </div>
  );
}
