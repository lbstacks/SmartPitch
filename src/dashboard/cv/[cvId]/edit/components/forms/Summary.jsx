import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CvInfoContext } from '@/context/CvInfoContext';
import {  Loader, WandSparklesIcon } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import GlobalApi from '../../../../../../../server/GlobalApi';
import { toast } from 'sonner';
import { useParams } from 'react-router-dom';

function Summary({enabledNext}) {
  const {cvInfo, setCvInfo}=useContext(CvInfoContext);
   const [summary, setSummary]=useState();

   const [loading, setLoading]=useState(false);

   const params = useParams();


   useEffect(()=>{
      summary&&setCvInfo({
        ...cvInfo,
        summary:summary
      })

   },[summary])

   const onSave=(e)=>{
    e.preventDefault();
    setLoading(true);

    const data={
        data:{
            summary:summary
        }
    }
    GlobalApi.UpdateCvDetail(params?.cvId,data).then((res)=>{
        console.log(res);
        enabledNext(true);
        setLoading(false);
        toast.success("Summary updated 🎉✨");
    },(error)=>{
        setLoading(false);
    })
   }




  return (
    <div>
      <div className="p-4 sm:p-5 shadow-lg border-t-primary border-t-4 mt-6 sm:mt-10">
        <h2 className="text-lg sm:text-xl font-bold">Summary</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          What your profile like? Tell us!
        </p>

         <form className='mt-5' onSubmit={onSave}>
            <div className='flex justify-between items-end'>
                <label>Add Summary</label>
                <Button variant="outline" size="sm" className="border-primary text-primary"> 
                <WandSparklesIcon className='w-4 h-4' />Spark it Up
                </Button>
            </div>
            <Textarea className='mt-5' required
              onChange={(e)=>setSummary(e.target.value)}/>

              <div className='flex justify-end mt-5'>
              <Button type="submit"
                      disabled={loading}
                    >{loading? <Loader className='animate-spin' />:"Save"}</Button>
              </div>
         </form>
      </div>
    </div>
  );
}

export default Summary
