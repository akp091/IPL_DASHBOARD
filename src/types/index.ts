export interface Team {
  name: string;
  score: string;
  logo?: string;
}

export interface Match {
  id: string;
  teams: Team[];
  date: string;
  time: string;
  venue: string;
  status: "upcoming" | "live" | "completed";
  result?: string;
  score1?: string;
  score2?: string;
  isLive?: boolean;
}

export interface PointsTableEntry {
  team: Team;
  played: number;
  won: number;
  lost: number;
  tied: number;
  points: number;
  netRunRate: number;
  position: number;
}

export interface IPLData {
  liveMatch?: Match;
  upcomingMatches: Match[];
  pointsTable: PointsTableEntry[];
  schedule: Match[];
  lastUpdated: string;
}

export interface ScrapingResult {
  success: boolean;
  data?: IPLData;
  error?: string;
  timestamp: string;
  source?: "real_scraping" | "dummy_data" | "cached_data";
  warning?: string;
  cacheExpiry?: string;
}
