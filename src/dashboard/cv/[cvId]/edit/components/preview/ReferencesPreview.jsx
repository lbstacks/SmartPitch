import React from 'react'

function ReferencesPreview({cvInfo}) {
  return (
    <div className="my-6">
      <h2 className="text-sm text-center mb-2 font-bold font-mono">References</h2>

      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: cvInfo?.themeColor,
        }}
      />

      <div className='grid grid-cols-2 gap-6'>
        {cvInfo?.references?.map((reference, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <h3 className='text-sm font-bold border-b border-gray-200 pb-1 mb-1'>
              Reference {index + 1}:
            </h3>
            <div className='text-xs font-mono space-y-1'>
              <p className='font-semibold'>{reference?.name}</p>
              <p>{reference?.position}</p>
              <p>{reference?.company}</p>
              <p>{reference?.phone}</p>
              <p>{reference?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReferencesPreview
