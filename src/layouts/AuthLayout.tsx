import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export const AuthLayout: React.FC = () => {
  const {
    isAuthenticated
  } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return <div className="min-h-screen flex items-center justify-center bg-gradient-animate p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-dots"></div>
      <div className="absolute inset-0 bg-moving-gradient"></div>
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse" style={{
      animationDelay: '0.5s'
    }}></div>
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            Studio Manager
          </h1>
          <p className="text-gray-600">
            Photography & Videography Studio Management System
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-slideInRight">
          <Outlet />
        </div>
      </div>
    </div>;
};