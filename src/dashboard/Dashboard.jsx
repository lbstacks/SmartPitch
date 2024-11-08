import React from 'react'
import AddCv from './components/AddCv'

function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='text-3xl font-bold'>My Professional Snapshot</h2>
      <p className='italic font-semibold text-muted-foreground mt-2'>Hassle-free! Just build your CV with simple prompts!</p>

      <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10'>
         <AddCv />
      </div>

    </div>


  )
}

export default Dashboard
