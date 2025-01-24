import React, { createContext, useContext, useState } from "react";

// Create a Context for authentication
const AuthContext = createContext();

// Provider component that will wrap your app and provide auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info here

  // Simulate sign-in logic
  const signIn = async (email, password) => {
    // Simulate successful sign-in (replace with real authentication logic)
    setUser({ email, name: user.username });
  };

  // Simulate sign-up logic
  const signUp = async (email, password, userInfo) => {
    // Store the username along with other user details
    setUser({
      email,
      name: `${userInfo.firstName} ${userInfo.lastName}`,
      username: userInfo.username,
    });
  };

  // Function to sign out
  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
