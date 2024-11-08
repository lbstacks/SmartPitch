import React from 'react'

function EducationPreview({cvInfo}) {
  return (
    <div className="my-6">
      <h2 className="text-sm  text-center  mb-2 font-bold font-mono">Education</h2>

      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: cvInfo?.themeColor,
        }}
      />

      {cvInfo.education.map((education,index)=>(
        <div key={index} className='my-5'>
            <h2 className='text-sm font-bold my-1'>{education?.universityName}</h2>
            <h2 className='text-xs font-mono font-normal my-1'>{education?.city} |   {education?.state}</h2>

            <h2 className='text-xs flex justify-between my-2 font-mono font-semibold'>
                {education?.degree} {education?.major}  
                <span className='text-xs font-mono'>
                    {education?.startDate} - {education?.endDate}
                </span>
            </h2>
        </div>
      ))}
    </div>
  )
}

export default EducationPreview
