import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Navbar() {
  const {user,isSignedIn} = useUser()



  return (
    <div className="p-3 px-5 shadow-md  flex justify-between">
      <Link to={"/"}>
        <img src="/logo.svg" alt="logo" width={100} height={100} />
      </Link>

      {isSignedIn ? (
        <div className='flex items-center gap-2'>
          <Link to={"/dashboard"}>
            <Button variant={'outline'}>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Jump In <ArrowRightIcon /></Button>
        </Link>
      )}
    </div>
  );
}

export default Navbar
