"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Shield,
  CreditCard,
  Activity,
  Settings,
  MoreHorizontal,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
} from "lucide-react";

// Mock user data - in real app, fetch from API
const mockUsers: Record<string, any> = {
  "1": {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: null,
    status: "active",
    role: "Admin",
    plan: "Pro",
    joinedAt: "2024-01-15",
    lastActive: "2024-05-24T14:30:00",
    bio: "Product designer with 8+ years of experience in SaaS products.",
    company: "TechCorp Inc.",
    website: "https://sarahjohnson.design",
    totalSpent: 1249.99,
    ordersCount: 12,
    sessionsCount: 145,
    activityLog: [
      { action: "Logged in", timestamp: "2024-05-24T14:30:00" },
      { action: "Updated profile", timestamp: "2024-05-24T10:15:00" },
      { action: "Made a purchase", timestamp: "2024-05-23T16:45:00" },
      { action: "Changed password", timestamp: "2024-05-20T09:00:00" },
      { action: "Logged in", timestamp: "2024-05-19T11:30:00" },
    ],
  },
  "2": {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    avatar: null,
    status: "active",
    role: "User",
    plan: "Starter",
    joinedAt: "2024-02-20",
    lastActive: "2024-05-23T09:15:00",
    bio: "Software engineer passionate about building great products.",
    company: "StartupXYZ",
    website: null,
    totalSpent: 299.99,
    ordersCount: 3,
    sessionsCount: 67,
    activityLog: [
      { action: "Logged in", timestamp: "2024-05-23T09:15:00" },
      { action: "Viewed dashboard", timestamp: "2024-05-22T14:00:00" },
      { action: "Logged in", timestamp: "2024-05-21T10:30:00" },
    ],
  },
};

const statusColors = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  inactive: "bg-gray-100 text-gray-600 border-gray-200",
  pending: "bg-amber-50 text-amber-700 border-amber-200",
};

const planColors = {
  Starter: "bg-gray-100 text-gray-700",
  Pro: "bg-indigo-50 text-indigo-700",
  Enterprise: "bg-purple-50 text-purple-700",
};

export default function UserDetailPage() {
  const params = useParams();
  const userId = params.id as string;

  // Get user data (in real app, fetch from API)
  const user = mockUsers[userId] || mockUsers["1"];

  return (
    <div>
      {/* Back Button and Actions */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/users"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Users
        </Link>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Ban className="w-4 h-4" />
            Suspend
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-red-200 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <div className="col-span-2 space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-xl font-bold text-gray-900">
                    {user.name}
                  </h1>
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium capitalize border ${
                      statusColors[user.status as keyof typeof statusColors]
                    }`}
                  >
                    {user.status}
                  </span>
                </div>
                <p className="text-gray-500 mb-3">{user.bio}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </span>
                  {user.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4" />
                      {user.phone}
                    </span>
                  )}
                  {user.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {user.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                ${user.totalSpent.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">Total Spent</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {user.ordersCount}
              </p>
              <p className="text-sm text-gray-500">Orders</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {user.sessionsCount}
              </p>
              <p className="text-sm text-gray-500">Sessions</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.floor(
                  (Date.now() - new Date(user.joinedAt).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}
              </p>
              <p className="text-sm text-gray-500">Days Active</p>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">
                Recent Activity
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {user.activityLog.map((activity: any, index: number) => (
                <div
                  key={index}
                  className="px-5 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm text-gray-700">
                      {activity.action}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {new Date(activity.timestamp).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          {/* Account Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">
                Account Info
              </h2>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Role
                </p>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">{user.role}</span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Plan
                </p>
                <span
                  className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                    planColors[user.plan as keyof typeof planColors]
                  }`}
                >
                  {user.plan}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Joined
                </p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">
                    {new Date(user.joinedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  Last Active
                </p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">
                    {new Date(user.lastActive).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
              {user.company && (
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Company
                  </p>
                  <span className="text-sm text-gray-700">{user.company}</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">
                Quick Actions
              </h2>
            </div>
            <div className="p-3">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Mail className="w-4 h-4 text-gray-400" />
                Send Email
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Shield className="w-4 h-4 text-gray-400" />
                Change Role
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <CreditCard className="w-4 h-4 text-gray-400" />
                Change Plan
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4 text-gray-400" />
                Reset Password
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-xl shadow-sm border border-red-100">
            <div className="p-5 border-b border-red-100">
              <h2 className="text-base font-semibold text-red-600">
                Danger Zone
              </h2>
            </div>
            <div className="p-5 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-amber-200 rounded-lg text-sm font-medium text-amber-700 hover:bg-amber-50 transition-colors">
                <Ban className="w-4 h-4" />
                Suspend Account
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-red-200 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                <Trash2 className="w-4 h-4" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
