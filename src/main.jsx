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
import CheckoutPage from './components/checkout/CheckoutPage';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

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
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider options={{
      "client-id": "AUZq2G0a1m8J9wzoEv71xSFYHXZwLuaDKBmClE1UXlLJHlp0w7KDL6Q5U9l5w3giNQXvufkeLPRoidTS", components: "buttons",
      currency: "USD"
    }}>
      <UserProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserProvider>
    </PayPalScriptProvider>
  </React.StrictMode>,
)
