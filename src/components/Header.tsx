export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">🏏</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">IPL T20 Dashboard</h1>
              <p className="text-blue-100 text-sm">Live Cricket Updates & Statistics</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-blue-100 text-sm">Indian Premier League 2024</p>
            <p className="text-xs text-blue-200">Real-time match updates</p>
          </div>
        </div>
      </div>
    </header>
  );
}
