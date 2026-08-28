import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  iconBgColor: string;
  change?: string;
  changeType?: "increase" | "decrease" | "neutral";
}

export function MetricCard({
  title,
  value,
  icon,
  iconBgColor,
  change = "0% from last 7 days",
  changeType = "neutral",
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-start gap-3">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-lg ${iconBgColor}`}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-0.5">{value}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-3">— {change}</p>
    </div>
  );
}
