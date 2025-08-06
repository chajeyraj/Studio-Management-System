import React from 'react';
import { invoices } from '../utils/mockData';
export const Invoices: React.FC = () => {
  return <div className="space-y-6 animate-fadeIn relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-animate opacity-5 pointer-events-none -z-10"></div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">
            Invoice Management
          </h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {invoices.map((invoice, index) => <li key={invoice.id} className="p-6 hover:bg-gray-50 animate-fadeIn" style={{
          animationDelay: `${0.1 * index}s`
        }}>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Invoice #{invoice.id}
                  </h3>
                  <p className="text-sm text-gray-500">{invoice.clientName}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(invoice.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    ${invoice.amount}
                  </p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${invoice.status === 'paid' ? 'bg-green-100 text-green-800' : invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </div>
              </div>
            </li>)}
        </ul>
      </div>
    </div>;
};