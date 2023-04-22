import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormUser from './components/FormUser'
import Loginuser from './components/Loginuser'
import Profile from './components/Profile'
import Catalog from './components/Catalog'
import LoginProvider from './context/LoginContext'
import UserProvider from './context/UserContext'
import ThemeProvider from './context/ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <UserProvider><FormUser /></UserProvider>,
  },
  {
    path: '/login',
    element: <LoginProvider><Loginuser /></LoginProvider>,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
