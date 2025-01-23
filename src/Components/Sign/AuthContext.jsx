// // AuthContext.js
// import React, { createContext, useContext, useState } from 'react';
// import { supabase } from './supabaseClient';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const signIn = async (email, password) => {
//     const { data, error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) throw error;
//     setUser(data.user);
//   };

//   const signOut = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw error;
//     setUser(null);
//   };

//   const signUp = async (email, password) => {
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     if (error) throw error;
//     setUser(data.user);
//   };

//   const resetPassword = async (email) => {
//     const { error } = await supabase.auth.api.resetPasswordForEmail(email);
//     if (error) throw error;
//   };

//   return (
//     <AuthContext.Provider value={{ user, signIn, signOut, signUp, resetPassword }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { supabase } from './supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    console.log('SignIn function called');  // للتحقق من استدعاء الدالة
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setUser(data.user);
  };

  const signOut = async () => {
    console.log('SignOut function called');  // للتحقق من استدعاء الدالة
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
  };

  const signUp = async (email, password) => {
    console.log('SignUp function called');  // للتحقق من استدعاء الدالة
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    setUser(data.user);
  };

  const resetPassword = async (email) => {
    console.log('ResetPassword function called');  // للتحقق من استدعاء الدالة
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, signUp, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

