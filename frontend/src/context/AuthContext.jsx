// import React, { createContext } from 'react'

// export const authDataContext = createContext();

// function AuthContext({ children }) {
//   const serverUrl = "http://localhost:3000";
//   let value = {
//     serverUrl,
//     // Add other auth-related state and functions here
//   };
//   return (
//     <authDataContext.Provider value={value}>
//       {children}
//     </authDataContext.Provider>
//   );
// }

// export default AuthContext



// AuthContext.js
import { createContext } from 'react';

export const authDataContext = createContext();

export const AuthProvider = ({ children }) => {
  const serverUrl = "http://localhost:3000"; // or from .env

  return (
    <authDataContext.Provider value={{ serverUrl }}>
      {children}
    </authDataContext.Provider>
  );
};
export default AuthProvider;