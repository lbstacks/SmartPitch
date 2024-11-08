import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginIn from './auth/LoginIn.jsx';
import path from 'path';
import HomePage from './home/HomePage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ]
  },
  {
    path: "/auth/sign-in",
    element: <LoginIn />,
  },
]);








createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
