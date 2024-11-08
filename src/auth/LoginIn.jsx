import { SignIn } from '@clerk/clerk-react'
import React from 'react'

function LoginIn() {
  return (
    <div className='flex justify-center items-center my-20'>
       <SignIn />
    </div>
  )
}

export default LoginIn
