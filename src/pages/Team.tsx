import React from 'react';
import { team } from '../utils/mockData';
export const Team: React.FC = () => {
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none -z-10"></div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Team</h1>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Team Members</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {team.map((member, index) => <li key={member.id} className="p-6 hover:bg-gray-50 animate-fadeIn" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {member.avatar ? <img className="h-12 w-12 rounded-full" src={member.avatar} alt={member.name} /> : <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-700 font-medium">
                        {member.name.charAt(0)}
                      </span>
                    </div>}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
            </li>)}
        </ul>
      </div>
    </div>;
};