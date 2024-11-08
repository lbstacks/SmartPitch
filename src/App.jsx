import { useUser } from '@clerk/clerk-react'
import { Navigate, Outlet } from 'react-router-dom'


function App() {
  const {user, isSignedIn, isLoaded} = useUser();
  
  
  if(!isSignedIn&&isLoaded)
     {
       return <Navigate to="/auth/sign-in" />;
     }

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
