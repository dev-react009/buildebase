"use client";

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Package,
  MessageSquare,
  DollarSign,
  Puzzle,
  Settings,
  Hexagon,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Analytics", icon: BarChart3, href: "/analytics" },
  { name: "Products", icon: Package, href: "/products" },
  { name: "Feedback", icon: MessageSquare, href: "/feedback" },
  { name: "Revenue", icon: DollarSign, href: "/revenue" },
  { name: "Integrations", icon: Puzzle, href: "/integrations" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-[200px] bg-[#1a1f37] text-white min-h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5">
        <div className="flex items-center justify-center w-8 h-8 bg-indigo-500 rounded-lg">
          <Hexagon className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-semibold">BuildBase</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Motivation Card */}
      <div className="mx-3 mb-4">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4">
          <div className="flex justify-center mb-3">
            <div className="text-3xl">📈</div>
          </div>
          <h4 className="text-center font-semibold text-white mb-1">
            Keep shipping!
          </h4>
          <p className="text-center text-xs text-indigo-100">
            Every line of code brings you closer to something great.
          </p>
        </div>
      </div>

      {/* User Profile */}
      <div className="border-t border-white/10 px-3 py-3">
        <button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-white/10 transition-colors">
          <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full text-sm font-semibold">
            B
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium">Builder</div>
            <div className="text-xs text-gray-400">builder@inpublic.dev</div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </aside>
  );
}
