import React,{useContext} from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { userDataContext } from './context/userContext.jsx'


const App = () => {
  let {userData} = useContext(userDataContext);
  return (
    <Routes>
      {/* <Route path="/" element={userData?<Home />:<Navigate to="/login" />} />
      <Route path="/login" element={userData?<Navigate to="/" />:<Login />} />
      <Route path="/signup" element={userData?<Navigate to="/" />:<Signup />} />
      */}


      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App