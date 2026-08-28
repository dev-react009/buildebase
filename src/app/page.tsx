import { Users, UserPlus, Eye, MousePointer, DollarSign } from "lucide-react";
import {
  Sidebar,
  MetricCard,
  ActivityChart,
  BottomCards,
  DashboardHeader,
  MotivationBanner,
} from "@/components";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <DashboardHeader />

        {/* Metric Cards */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          <MetricCard
            title="Users"
            value={8}
            icon={<Users className="w-5 h-5 text-indigo-600" />}
            iconBgColor="bg-indigo-50"
            change="+12% from last 7 days"
          />
          <MetricCard
            title="Signups"
            value={5}
            icon={<UserPlus className="w-5 h-5 text-indigo-600" />}
            iconBgColor="bg-indigo-50"
            change="+8% from last 7 days"
          />
          <MetricCard
            title="Page Views"
            value={1248}
            icon={<Eye className="w-5 h-5 text-indigo-600" />}
            iconBgColor="bg-indigo-50"
            change="+24% from last 7 days"
          />
          <MetricCard
            title="Clicks"
            value={432}
            icon={<MousePointer className="w-5 h-5 text-indigo-600" />}
            iconBgColor="bg-indigo-50"
            change="+18% from last 7 days"
          />
          <MetricCard
            title="Revenue"
            value="$2,549"
            icon={<DollarSign className="w-5 h-5 text-indigo-600" />}
            iconBgColor="bg-indigo-50"
            change="+32% from last 7 days"
          />
        </div>

        {/* Activity Chart */}
        <div className="mb-8">
          <ActivityChart />
        </div>

        {/* Bottom Stats */}
        <div className="mb-8">
          <BottomCards />
        </div>

        {/* Motivation Banner */}
        <MotivationBanner />
      </main>
    </div>
  );
}
