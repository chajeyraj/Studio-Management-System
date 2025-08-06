import React, { useState } from 'react';
import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HomeIcon, CalendarIcon, UsersIcon, CameraIcon, ImageIcon, FileTextIcon, SettingsIcon, LogOutIcon, MenuIcon, XIcon, BellIcon, SearchIcon, BookOpenIcon } from 'lucide-react';
export const DashboardLayout: React.FC = () => {
  const {
    user,
    logout,
    isAuthenticated
  } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  const navigation = [{
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon
  }, {
    name: 'Bookings',
    href: '/bookings',
    icon: BookOpenIcon
  }, {
    name: 'Clients',
    href: '/clients',
    icon: UsersIcon
  }, {
    name: 'Calendar',
    href: '/calendar',
    icon: CalendarIcon
  }, {
    name: 'Team',
    href: '/team',
    icon: UsersIcon
  }, {
    name: 'Equipment',
    href: '/equipment',
    icon: CameraIcon
  }, {
    name: 'Gallery',
    href: '/gallery',
    icon: ImageIcon
  }, {
    name: 'Invoices',
    href: '/invoices',
    icon: FileTextIcon
  }, {
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon
  }];
  return <div className="h-screen flex overflow-hidden bg-gray-100 relative">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-moving-gradient pointer-events-none"></div>
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700 animate-slideInLeft">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setSidebarOpen(false)}>
              <span className="sr-only">Close sidebar</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <h1 className="text-xl font-bold text-white">Studio Manager</h1>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map(item => {
              const isActive = location.pathname === item.href;
              return <Link key={item.name} to={item.href} className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-all-medium hover-lift ${isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600'}`} onClick={() => setSidebarOpen(false)}>
                    <item.icon className={`mr-4 flex-shrink-0 h-6 w-6 ${isActive ? 'text-white' : 'text-indigo-300'}`} aria-hidden="true" />
                    {item.name}
                  </Link>;
            })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
            <div className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  {user?.avatar ? <img className="inline-block h-10 w-10 rounded-full" src={user.avatar} alt="" /> : <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center">
                      <span className="text-white font-medium">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>}
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-white">
                    {user?.name}
                  </p>
                  <p className="text-sm font-medium text-indigo-200 capitalize">
                    {user?.role}
                  </p>
                </div>
                <button onClick={logout} className="ml-auto bg-indigo-600 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition-all-medium">
                  <LogOutIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-indigo-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-xl font-bold text-white">Studio Manager</h1>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map(item => {
                const isActive = location.pathname === item.href;
                return <Link key={item.name} to={item.href} className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all-medium hover-lift ${isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600'}`}>
                      <item.icon className={`mr-3 flex-shrink-0 h-5 w-5 ${isActive ? 'text-white' : 'text-indigo-300'}`} aria-hidden="true" />
                      {item.name}
                    </Link>;
              })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    {user?.avatar ? <img className="inline-block h-9 w-9 rounded-full" src={user.avatar} alt="" /> : <div className="h-9 w-9 rounded-full bg-indigo-500 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {user?.name?.charAt(0).toUpperCase()}
                        </span>
                      </div>}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {user?.name}
                    </p>
                    <p className="text-xs font-medium text-indigo-200 capitalize">
                      {user?.role}
                    </p>
                  </div>
                  <button onClick={logout} className="ml-auto bg-indigo-600 p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white transition-all-medium">
                    <LogOutIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden transition-all-medium" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <div className="w-full flex md:ml-0">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm transition-all-medium" placeholder="Search" type="search" />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all-medium">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>;
};