import React from 'react';
import { useAuth } from './auth'; // Adjust the import path as necessary
import { Navigate, Redirect } from 'react-router-dom'; // Adjust the import path as necessary

const ProtectedRoute = ({ children }) => {
  const user = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
