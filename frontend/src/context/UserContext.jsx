import React, { useContext, useState, useEffect, createContext } from 'react'
import axios from 'axios';
import { authDataContext } from './AuthContext';
export const userDataContext = createContext();

function UserContext({ children }) {
  let [userData, setUserData] = useState([]);
  let {serverUrl} =useContext(authDataContext);

   const getCurrentUser = async()=>{
    try {
      let result = await axios.get(`${serverUrl}/api/user/currentUser`, { withCredentials: true });
      setUserData(result.data);
    } catch (error) {
      return console.error("Error fetching current user:", error);
    }
   }


useEffect(() => {
  getCurrentUser();
}, []);

  const value = { userData, setUserData, serverUrl }
  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  )
}

export default UserContext;
// export default userContext;