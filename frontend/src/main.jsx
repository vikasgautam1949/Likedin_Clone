import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './context/AuthContext.jsx'
import UserContext from './context/userContext.jsx'
// import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
    {/* <AuthProvider> */}
    <UserContext>
      <App />
    </UserContext>
    {/* </AuthProvider> */}
  </AuthContext>
  </BrowserRouter>

)
