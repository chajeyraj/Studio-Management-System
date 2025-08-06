import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, UsersIcon, CameraIcon, PlusCircleIcon, ArrowRightIcon, TrendingUpIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import { bookings, dashboardStats } from '../utils/mockData';
export const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  // Filter bookings for today
  const todaysBookings = bookings.filter(booking => {
    const bookingDate = new Date(booking.date);
    const today = new Date();
    return bookingDate.getDate() === today.getDate() && bookingDate.getMonth() === today.getMonth() && bookingDate.getFullYear() === today.getFullYear();
  });
  return <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="mt-3 sm:mt-0 flex space-x-3">
          <Link to="/bookings/new" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 hover-lift">
            <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5 animate-pulse" aria-hidden="true" />
            New Booking
          </Link>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Bookings */}
        <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md card-hover animate-slideInLeft" style={{
        animationDelay: '0.1s'
      }}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Bookings
                  </dt>
                  <dd>
                    <div className="text-lg font-bold text-gray-900">
                      {dashboardStats.totalBookings}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
            <div className="text-sm">
              <Link to="/bookings" className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center transition-all-medium">
                View all bookings
                <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUpIcon className="h-4 w-4 mr-1 animate-bounce" style={{
              animationDuration: '3s'
            }} />
              <span>12% increase</span>
            </div>
          </div>
        </div>
        {/* Today's Appointments */}
        <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md card-hover animate-slideInLeft" style={{
        animationDelay: '0.2s'
      }}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                <ClockIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Today's Appointments
                  </dt>
                  <dd>
                    <div className="text-lg font-bold text-gray-900">
                      {todaysBookings.length}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
            <div className="text-sm">
              <Link to="/calendar" className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center transition-all-medium">
                View calendar
                <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span>
                Next:{' '}
                {todaysBookings.length > 0 ? new Date(todaysBookings[0].date).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              }) : 'No appointments'}
              </span>
            </div>
          </div>
        </div>
        {/* Equipment Status */}
        <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-md card-hover animate-slideInLeft" style={{
        animationDelay: '0.3s'
      }}>
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                <CameraIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Equipment Status
                  </dt>
                  <dd>
                    <div className="text-lg font-bold text-gray-900">
                      {dashboardStats.equipmentStatus.available} Available
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
            <div className="text-sm">
              <Link to="/equipment" className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center transition-all-medium">
                Manage equipment
                <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex items-center text-sm text-yellow-600">
              <AlertCircleIcon className="h-4 w-4 mr-1 animate-pulse" />
              <span>
                {dashboardStats.equipmentStatus.maintenance} need maintenance
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar and Recent Activity */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 lg:col-span-1 animate-slideInRight" style={{
        animationDelay: '0.1s'
      }}>
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Activity
            </h3>
            <div className="mt-5 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {dashboardStats.recentActivity.map((activity, index) => <li key={activity.id} className="py-4 group transition-all duration-200 hover:bg-gray-50 px-2 rounded-md hover-lift" style={{
                animationDelay: `${0.1 * index}s`
              }}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {activity.type === 'booking' && <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <CalendarIcon className="h-5 w-5 text-blue-600" />
                          </div>}
                        {activity.type === 'invoice' && <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-600" />
                          </div>}
                        {activity.type === 'client' && <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <UsersIcon className="h-5 w-5 text-purple-600" />
                          </div>}
                        {activity.type === 'equipment' && <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                            <CameraIcon className="h-5 w-5 text-yellow-600" />
                          </div>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.message}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
        {/* Calendar Widget */}
        <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 lg:col-span-2 animate-slideInRight" style={{
        animationDelay: '0.2s'
      }}>
          <div className="p-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Upcoming Bookings
            </h3>
            <div className="mt-5 flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {bookings.slice(0, 4).map((booking, index) => <li key={booking.id} className="py-4 group transition-all duration-200 hover:bg-gray-50 px-2 rounded-md hover-lift" style={{
                animationDelay: `${0.1 * index}s`
              }}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${booking.status === 'confirmed' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          <span className="font-medium text-sm">
                            {new Date(booking.date).getDate()}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {booking.clientName}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {booking.serviceType}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(booking.date).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}{' '}
                          -
                          {new Date(booking.endDate).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                        </p>
                      </div>
                      <div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {booking.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                        </span>
                      </div>
                    </div>
                  </li>)}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link to="/bookings" className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center transition-all-medium">
                View all bookings
                <ArrowRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Access Buttons */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <Link to="/bookings/new" className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md hover:border-indigo-300 card-hover animate-fadeIn" style={{
        animationDelay: '0.3s'
      }}>
          <div className="bg-indigo-100 rounded-full p-3 mb-3">
            <CalendarIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">Add Booking</span>
        </Link>
        <Link to="/clients/new" className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md hover:border-indigo-300 card-hover animate-fadeIn" style={{
        animationDelay: '0.4s'
      }}>
          <div className="bg-purple-100 rounded-full p-3 mb-3">
            <UsersIcon className="h-6 w-6 text-purple-600" />
          </div>
          <span className="text-sm font-medium text-gray-900">New Client</span>
        </Link>
        <Link to="/gallery" className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md hover:border-indigo-300 card-hover animate-fadeIn" style={{
        animationDelay: '0.5s'
      }}>
          <div className="bg-green-100 rounded-full p-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-900">
            View Gallery
          </span>
        </Link>
        <Link to="/invoices/new" className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 p-5 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md hover:border-indigo-300 card-hover animate-fadeIn" style={{
        animationDelay: '0.6s'
      }}>
          <div className="bg-blue-100 rounded-full p-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-900">
            Create Invoice
          </span>
        </Link>
      </div>
    </div>;
};