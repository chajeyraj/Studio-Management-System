import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { Dashboard } from './pages/Dashboard';
import { Bookings } from './pages/Bookings';
import { Clients } from './pages/Clients';
import { Calendar } from './pages/Calendar';
import { Team } from './pages/Team';
import { Equipment } from './pages/Equipment';
import { Gallery } from './pages/Gallery';
import { Invoices } from './pages/Invoices';
import { Settings } from './pages/Settings';
import { DashboardLayout } from './layouts/DashboardLayout';
import { AuthLayout } from './layouts/AuthLayout';
export function App() {
  return <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
            {/* Dashboard Routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/team" element={<Team />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            {/* Redirect root to dashboard or login */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>;
}