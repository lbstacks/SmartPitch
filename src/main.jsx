import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginIn from './auth/LoginIn.jsx';
import path from 'path';
import HomePage from './home/HomePage.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import { ClerkProvider } from '@clerk/clerk-react';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ]
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/sign-in",
    element: <LoginIn />,
  },
]);








createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
          v7_fetcherPersist: true,
          v7_normalizeFormMethod: true,
          v7_partialHydration: true,
          v7_skipActionErrorRevalidation: true,
        }}
      />
    </ClerkProvider>
  </StrictMode>
);