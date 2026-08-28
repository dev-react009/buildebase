import { Globe, FileText, Users, Info } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

function StatCard({
  title,
  value,
  subtitle,
  description,
  icon,
  iconBgColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <Info className="w-4 h-4 text-gray-400" />
      </div>
      <div className="flex flex-col items-center text-center">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${iconBgColor}`}
        >
          {icon}
        </div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        <p className="text-sm font-medium text-gray-700 mt-1">{subtitle}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
}

export function BottomCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <StatCard
        title="Top Sources"
        value={0}
        subtitle="No traffic sources yet"
        description="Share your product and the world will find it."
        icon={<Globe className="w-6 h-6 text-blue-600" />}
        iconBgColor="bg-blue-50"
      />
      <StatCard
        title="Top Pages"
        value={0}
        subtitle="No page data yet"
        description="Your most visited pages will appear here."
        icon={<FileText className="w-6 h-6 text-rose-500" />}
        iconBgColor="bg-rose-50"
      />
      <StatCard
        title="Recent Signups"
        value={0}
        subtitle="No signups yet"
        description="Be patient. Early days are always quiet."
        icon={<Users className="w-6 h-6 text-amber-500" />}
        iconBgColor="bg-amber-50"
      />
    </div>
  );
}
