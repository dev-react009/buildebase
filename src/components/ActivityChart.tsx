"use client";

import { Info, TrendingUp } from "lucide-react";

interface ActivityChartProps {
  period?: string;
}

export function ActivityChart({ period = "Daily" }: ActivityChartProps) {
  const dates = ["May 18", "May 19", "May 20", "May 21", "May 22", "May 23", "May 24"];
  const yLabels = [0, 1, 2, 3, 4];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold text-gray-900">Activity Overview</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
          {period}
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Chart Area */}
      <div className="relative h-[200px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col-reverse justify-between text-xs text-gray-400 w-6">
          {yLabels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        {/* Grid and Chart */}
        <div className="ml-8 h-full">
          {/* Horizontal grid lines */}
          <div className="absolute left-8 right-0 top-0 bottom-8">
            {yLabels.map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-dashed border-gray-100"
                style={{ top: `${(i / (yLabels.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          {/* Empty state */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-900">No data yet</p>
            <p className="text-xs text-gray-500 mt-1 text-center max-w-[200px]">
              Your metrics will show up here once people start using your product.
            </p>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-400 pt-2">
            {dates.map((date) => (
              <span key={date}>{date}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
