import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ allowedRole }) {
  const { user } = useAuth();

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allowedRole) {
    // Logged in but wrong role
    return <Navigate to="/" replace />;
  }

  return <Outlet />; // Render nested route
}
