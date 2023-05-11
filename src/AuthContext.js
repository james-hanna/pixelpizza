import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt_decode(token);
      const { userId, username } = decodedToken;
      setUser({ userId, username });
    }
  }, []);

  // Update localStorage when user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user.token);
    } else {
      localStorage.removeItem("token");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
