import React from 'react';
import { equipment } from '../utils/mockData';
export const Equipment: React.FC = () => {
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-dots pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none -z-10"></div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Equipment</h1>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Equipment Inventory
          </h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {equipment.map((item, index) => <li key={item.id} className="p-6 hover:bg-gray-50 animate-fadeIn" style={{
          animationDelay: `${0.05 * index}s`
        }}>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'available' ? 'bg-green-100 text-green-800' : item.status === 'in_use' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {item.status === 'available' ? 'Available' : item.status === 'in_use' ? 'In Use' : 'Maintenance'}
                </span>
              </div>
            </li>)}
        </ul>
      </div>
    </div>;
};