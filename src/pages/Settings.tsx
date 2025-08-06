import React from 'react';
import { studioSettings } from '../utils/mockData';
export const Settings: React.FC = () => {
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-dots pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none -z-10"></div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Studio Settings</h2>
        </div>
        <div className="p-6 space-y-6">
          <div className="animate-fadeIn" style={{
          animationDelay: '0.1s'
        }}>
            <h3 className="text-sm font-medium text-gray-500">Studio Name</h3>
            <p className="mt-1 text-sm text-gray-900">{studioSettings.name}</p>
          </div>
          <div className="animate-fadeIn" style={{
          animationDelay: '0.2s'
        }}>
            <h3 className="text-sm font-medium text-gray-500">Contact Info</h3>
            <div className="mt-1 text-sm text-gray-900">
              <p>{studioSettings.address}</p>
              <p>{studioSettings.phone}</p>
              <p>{studioSettings.email}</p>
            </div>
          </div>
          <div className="animate-fadeIn" style={{
          animationDelay: '0.3s'
        }}>
            <h3 className="text-sm font-medium text-gray-500">Working Hours</h3>
            <div className="mt-1 text-sm text-gray-900">
              <p>Monday: {studioSettings.workingHours.monday}</p>
              <p>Tuesday: {studioSettings.workingHours.tuesday}</p>
              <p>Wednesday: {studioSettings.workingHours.wednesday}</p>
              <p>Thursday: {studioSettings.workingHours.thursday}</p>
              <p>Friday: {studioSettings.workingHours.friday}</p>
              <p>Saturday: {studioSettings.workingHours.saturday}</p>
              <p>Sunday: {studioSettings.workingHours.sunday}</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};