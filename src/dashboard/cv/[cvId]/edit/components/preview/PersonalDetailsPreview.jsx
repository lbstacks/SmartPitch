import React from 'react'

function PersonalDetailsPreview({cvInfo}) {
  return (
    <div className='font-mono'>
      <h2 className="font-bold text-lg sm:text-xl text-center">
        {cvInfo?.firstName} {cvInfo?.middleName} {cvInfo?.lastName}
      </h2>
      <h2 className="text-xs sm:text-sm text-center font-bold mt-1 sm:mt-2">{cvInfo?.jobTitle}</h2>
      <h2 className="text-[10px] sm:text-xs text-center font-semibold mt-1 sm:mt-2">
        {cvInfo?.address}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 mt-3 sm:mt-5">
        <h2 className="text-[10px] sm:text-xs text-center font-semibold"> {cvInfo?.phone}</h2> 
        <h2 className="text-[10px] sm:text-xs text-center font-semibold"> {cvInfo?.email}</h2> 
        <h2 className="text-[10px] sm:text-xs text-center font-semibold"> {cvInfo?.linkedin}</h2>
      </div>
      
      <hr className='border-[1.5px] my-1 sm:my-2'
        style={{
          borderColor: cvInfo?.themeColor
        }}
      />
    </div>
  );
}

export default PersonalDetailsPreview
