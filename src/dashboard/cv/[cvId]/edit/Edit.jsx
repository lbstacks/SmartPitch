import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditCv() {
   const params=useParams();



   useEffect(()=>{
    console.log(params);
   },[params])  





  return (
    <div>
        EditCv page 
    </div>
  )
}

export default EditCv
