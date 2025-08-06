import React from 'react';
export const Calendar: React.FC = () => {
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-animate opacity-5 pointer-events-none -z-10"></div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500">Calendar functionality coming soon.</p>
      </div>
    </div>;
};