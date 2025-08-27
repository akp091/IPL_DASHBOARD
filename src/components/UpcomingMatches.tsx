"use client";

import { useState } from "react";

interface Team {
  name: string;
  shortName: string;
  logo: string;
  score: string | null;
}

interface UpcomingMatch {
  id: string;
  matchType: string;
  venue: string;
  time: string;
  teams: Team[];
  result: string | null;
}

interface UpcomingMatchesProps {
  upcomingMatches?: UpcomingMatch[];
}

export default function UpcomingMatches({
  upcomingMatches,
}: UpcomingMatchesProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Dummy data for demonstration
  // const dummyUpcomingMatches: UpcomingMatch[] = [
  //   {
  //     id: "upcoming_1",
  //     matchType: "UPCOMING",
  //     venue: "Wankhede Stadium, Mumbai",
  //     time: "JUN, TUE 4, 7:30 PM IST",
  //     teams: [
  //       {
  //         name: "Mumbai Indians",
  //         shortName: "MI",
  //         logo: "https://via.placeholder.com/48x48/1e40af/ffffff?text=MI",
  //         score: null,
  //       },
  //       {
  //         name: "Chennai Super Kings",
  //         shortName: "CSK",
  //         logo: "https://via.placeholder.com/48x48/f59e0b/ffffff?text=CSK",
  //         score: null,
  //       },
  //     ],
  //     result: null,
  //   },
  //   {
  //     id: "upcoming_2",
  //     matchType: "UPCOMING",
  //     venue: "Chinnaswamy Stadium, Bangalore",
  //     time: "JUN, WED 5, 7:30 PM IST",
  //     teams: [
  //       {
  //         name: "Royal Challengers Bangalore",
  //         shortName: "RCB",
  //         logo: "https://via.placeholder.com/48x48/dc2626/ffffff?text=RCB",
  //         score: null,
  //       },
  //       {
  //         name: "Kolkata Knight Riders",
  //         shortName: "KKR",
  //         logo: "https://via.placeholder.com/48x48/7c3aed/ffffff?text=KKR",
  //         score: null,
  //       },
  //     ],
  //     result: null,
  //   },
  //   {
  //     id: "upcoming_3",
  //     matchType: "UPCOMING",
  //     venue: "Arun Jaitley Stadium, Delhi",
  //     time: "JUN, THU 6, 7:30 PM IST",
  //     teams: [
  //       {
  //         name: "Delhi Capitals",
  //         shortName: "DC",
  //         logo: "https://via.placeholder.com/48x48/0891b2/ffffff?text=DC",
  //         score: null,
  //       },
  //       {
  //         name: "Punjab Kings",
  //         shortName: "PBKS",
  //         logo: "https://via.placeholder.com/48x48/be185d/ffffff?text=PBKS",
  //         score: null,
  //       },
  //     ],
  //     result: null,
  //   },
  //   {
  //     id: "upcoming_4",
  //     matchType: "UPCOMING",
  //     venue: "Sawai Mansingh Stadium, Jaipur",
  //     time: "JUN, FRI 7, 7:30 PM IST",
  //     teams: [
  //       {
  //         name: "Rajasthan Royals",
  //         shortName: "RR",
  //         logo: "https://via.placeholder.com/48x48/ea580c/ffffff?text=RR",
  //         score: null,
  //       },
  //       {
  //         name: "Sunrisers Hyderabad",
  //         shortName: "SRH",
  //         logo: "https://via.placeholder.com/48x48/059669/ffffff?text=SRH",
  //         score: null,
  //       },
  //     ],
  //     result: null,
  //   },
  //   {
  //     id: "upcoming_5",
  //     matchType: "UPCOMING",
  //     venue: "Narendra Modi Stadium, Ahmedabad",
  //     time: "JUN, SAT 8, 7:30 PM IST",
  //     teams: [
  //       {
  //         name: "Gujarat Titans",
  //         shortName: "GT",
  //         logo: "https://via.placeholder.com/48x48/0d9488/ffffff?text=GT",
  //         score: null,
  //       },
  //       {
  //         name: "Lucknow Super Giants",
  //         shortName: "LSG",
  //         logo: "https://via.placeholder.com/48x48/7c2d12/ffffff?text=LSG",
  //         score: null,
  //       },
  //     ],
  //     result: null,
  //   },
  // ];

  // Show first 3 matches by default, all when expanded
  const displayedMatches = showAll
    ? upcomingMatches
    : upcomingMatches.slice(0, 3);
  const hasMoreMatches = upcomingMatches.length > 3;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          Upcoming Matches
        </h2>

        {hasMoreMatches && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
          >
            <span>
              {showAll ? "Show Less" : `View All (${upcomingMatches.length})`}
            </span>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {displayedMatches.map((match, index) => (
          <div
            key={`${match.time}-${index}`}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {match.matchType}
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
                      <img
                        src={match.teams[0].logo}
                        alt={match.teams[0].name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {match.teams?.[0]?.name}
                    </h3>
                    {match.teams?.[0]?.score && (
                      <p className="text-lg font-bold text-gray-900">
                        {match?.teams[0]?.score}
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
                      {match.teams?.[1]?.logo ? (
                        <img
                          src={match.teams[1].logo}
                          alt={match.teams[1].name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        match.teams?.[1]?.name?.charAt(0) || "T2"
                      )}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {match.teams?.[1]?.name || "Team 2"}
                    </h3>
                    {match.teams?.[1]?.score && (
                      <p className="text-lg font-bold text-gray-900">
                        {match.teams[1].score}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Status */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 font-semibold">
                    UPCOMING MATCH
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {upcomingMatches.length === 0 && (
        <div className="text-center py-8">
          <h3 className="text-lg font-medium text-gray-600 mb-2">
            No Upcoming Matches
          </h3>
          <p className="text-gray-500">
            Check back later for new match schedules
          </p>
        </div>
      )}

      {hasMoreMatches && !showAll && (
        <div className="mt-4 text-center">
          <div className="text-gray-400 text-sm">
            Showing 3 of {upcomingMatches.length} matches
          </div>
        </div>
      )}
    </div>
  );
}
