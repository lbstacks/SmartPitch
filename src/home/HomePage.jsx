import { UserButton } from '@clerk/clerk-react'
import React from 'react'

function HomePage() {
  return (
    <div>
      <h2 className='text-2xl font-bold justify-center items-center flex my-20'> LANDING SCREEN </h2>
       <UserButton />
    </div>
  )
}

export default HomePage
