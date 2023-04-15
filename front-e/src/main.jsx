import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import FormUser from './components/FormUser'
import Loginuser from './components/Loginuser'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
  path:'/register',
  element: <FormUser />,
  },
  {
    path:'/login',
    element: <Loginuser />,
  },
  {
    path:'/profile',
    element: <Profile />,
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
