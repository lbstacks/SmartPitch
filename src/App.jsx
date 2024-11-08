import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/custom/Navbar';


function App() {
  const {user, isSignedIn, isLoaded} = useUser();
  
  
  if(!isSignedIn&&isLoaded)
     {
       return <Navigate to="/auth/sign-in" />;
     }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
