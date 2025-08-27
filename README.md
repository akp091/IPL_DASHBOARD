# IPL Dashboard

A cricket dashboard application built with Next.js that provides real-time IPL match data, live scores, points table, and match schedules through automated web scraping (using Puppeteer and nodejs).

## 🚀 Features

- **Live Match Updates**: cron job is running in backend to scrap data from iplt20.com every 5 minutes
- **Points Table**: This holds the data for the Recent IPL (Season 2025) standings and team rankings.
- **Match Schedule**: A Detailed list of all the scheduled matches wil team info, team logo, date, venue, match type and result (if any)
- **Automated Data Scraping**: Cron job is running every 5 minutes in background, it collects data and dumps into the JSON file, that JSON files serves as a data sourcse for API (kind of fallback)
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Components**: Server and Client Components

### Backend

- **Runtime**: Node.js
- **API Routes**: Next.js API handlers
- **Data Storage**: JSON files (local development)
- **Environment**: Environment variables (.env.local)

### Web Scraping

- **Tool**: Puppeteer
- **Automation**: Headless browser automation
- **Scheduling**: Custom scheduler with retry mechanisms
- **Data Sources**: Cricket websites and IPL official sources (https://iplt20.com)

## 📁 Project Structure

```
ipl-dashboard/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API endpoints
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── LiveMatch.tsx      # Live match display
│   │   ├── MatchSchedule.tsx  # Match schedule list
│   │   ├── PointsTable.tsx    # Points table display
│   │   ├── StatsCard.tsx      # Statistics cards
│   │   └── UpcomingMatches.tsx # Upcoming matches section
│   ├── data/                  # Static data files
│   │   ├── Matches.json       # Match data
│   │   └── PointsTable.json   # Points table data
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Data types and interfaces
│   └── utils/                 # Utility functions
│       ├── fileManager.ts     # File I/O operations
│       ├── puppeteerClient.ts # Puppeteer browser management
│       ├── scheduler.ts       # Automated scraping scheduler
│       └── scrapers/          # Web scraping modules
│           ├── matchScrapper.ts      # Match data scraper
│           └── pointsTableScrapper.ts # Points table scraper
├── public/                    # Static assets
├── .env.local                 # Environment variables
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Package manager
- **Git**: Version control

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd ipl-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   - Copy `.env.example` to `.env.local`
   - Configure the following variables:
     - `PORT`: Application port (default: 5000)
     - `NODE_ENV`: Environment (development/production)
     - Scraping configuration variables

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5000`

### Contact Information

- **Developer**: Ankit Kumar Pandey
- **Email**: ankitpnitj@gmail.com
- **Repository**: https://github.com/akp091
