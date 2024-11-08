import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormSection from './components/FormSection'
import PreviewSection from './components/PreviewSection'
import { CvInfoContext } from '@/context/CvInfoContext'
import dummy from '@/data/dummy'

function EditCv() {
  const params = useParams();
  const [cvInfo,setCvInfo]=useState(dummy);

  useEffect(() => {
   setCvInfo(dummy);
  }, [])

  return (
    <CvInfoContext.Provider value={{cvInfo, setCvInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        {/* Form section */}
        <FormSection />

        {/* Preview section */}
        <PreviewSection />
      </div>
    </CvInfoContext.Provider>
  )
}

export default EditCv
