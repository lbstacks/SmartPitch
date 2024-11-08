import React, { useEffect, useState } from 'react'
import AddCv from './components/AddCv'
import { useUser } from '@clerk/clerk-react';
import GlobalApi from '../../server/GlobalApi';
import CvCardItem from './components/CvCardItem';

function Dashboard() {


const {user}=useUser();
const [cvList,setCvList]=useState([]);

useEffect(()=>{
  user && GetCvlist();
},[user])


  const GetCvlist=()=>{
    GlobalApi.GetUserCvs(user?.primaryEmailAddress?.emailAddress).then((res)=>{
      setCvList(res.data.data);
    })

  }



  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='text-3xl font-bold'>My Professional Snapshot</h2>
      <p className='italic font-semibold text-muted-foreground mt-2'>Hassle-free! Just build your CV with simple prompts!</p>

      <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10'>
         <AddCv />
         {cvList.length > 0 && cvList.map((cv,index)=>(
          <CvCardItem cv={cv} key={index} />
      

         ))}
      </div>

    </div>


  )
}

export default Dashboard
