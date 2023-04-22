import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FormUser from './components/FormUser'
import Loginuser from './components/Loginuser'
import Profile from './components/Profile'
import ThemeProvider from './context/ThemeContext';
import UserProvider from './context/UserContext';
import LoginProvider from './context/LoginContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <FormUser />,
  },
  {
    path: '/login',
    element: <Loginuser />,
  },
  {
    path: '/profile',
    element: <UserProvider><Profile /></UserProvider>,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>,
)
