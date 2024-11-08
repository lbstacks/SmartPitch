import React from 'react'

function PersonalDetailsPreview({cvInfo}) {
  return (
    <div className='font-mono'>
      <h2 className="font-bold text-xl text-center">
        {cvInfo?.firstName} {cvInfo?.middleName} {cvInfo?.lastName}
      </h2>
      <h2 className="text-sm text-center font-bold mt-2">{cvInfo?.jobTitle}</h2>
      <h2 className="text-xs text-center font-semibold mt-2">
        {cvInfo?.address}
      </h2>

      <div className="flex justify-between mt-5">
        <h2 className="text-xs text-center font-semibold"> {cvInfo?.phone}</h2> 
        <h2 className="text-xs text-center font-semibold"> {cvInfo?.email}</h2> 
        <h2 className="text-xs text-center font-semibold"> {cvInfo?.linkedin}</h2>
        
      </div>
      <hr className='border-[1.5px] my-2'
      
       style={{
        borderColor: cvInfo?.themeColor
      }}
      />
    </div>
  );
}

export default PersonalDetailsPreview
