import React from 'react'

function CertificationPreview({cvInfo}) {
  return (
    <div className="my-10">
      <h2 className="text-sm text-center mb-2 font-bold font-mono">Certifications</h2>

      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: cvInfo?.themeColor,
        }}
      />

      {cvInfo?.certifications?.map((certification, index) => (
        <div key={index} className='my-2'>
          <div className='flex items-center gap-3 text-sm'>
            <span className='font-semibold'>{certification?.name}</span>
            <span className='text-gray-500'>||</span>
            <span>{certification?.institution}</span>
            <span className='text-gray-500'>||</span>
            <span>{certification?.yearObtained}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CertificationPreview
