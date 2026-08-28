export function MotivationBanner() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🚀</span>
        <div>
          <p className="font-semibold text-gray-900">
            You're building something awesome!{" "}
          </p>
          <p className="text-sm text-gray-500">
            Every big product starts with zero.
          </p>
        </div>
      </div>
      <button className="px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-medium text-sm rounded-lg transition-colors">
        Keep Building
      </button>
    </div>
  );
}
