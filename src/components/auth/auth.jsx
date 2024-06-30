import React, { createContext, useContext, useState } from "react";
import { User } from './User'; // Adjust the import path as necessary

const AuthContext = createContext(null);

const AuthProvider = ({ children, isSignedIn }) => {
  const [user, setUser] = useState(isSignedIn ? { id: 1 } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export default AuthProvider;
