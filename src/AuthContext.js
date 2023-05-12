import React, { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const { userId, username } = decodedToken;
        setUser({ userId, username });
      } catch (error) {
        console.error("Invalid token:", error.message);
        setUser(null); // Set user to null if the token is invalid or expired
        localStorage.removeItem("token"); // Remove the invalid token from localStorage
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
