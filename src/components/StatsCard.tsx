interface StatsCardProps {
  title: string;
  value: string | number;
  color: "blue" | "green" | "red" | "yellow" | "purple";
  subtitle?: string;
}

export default function StatsCard({
  title,
  value,
  color,
  subtitle,
}: StatsCardProps) {
  const colorClasses = {
    blue: "bg-blue-500 text-blue-100",
    green: "bg-green-500 text-green-100",
    red: "bg-red-500 text-red-100",
    yellow: "bg-yellow-500 text-yellow-100",
    purple: "bg-purple-500 text-purple-100",
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses[color]}`}
        ></div>
      </div>
    </div>
  );
}
