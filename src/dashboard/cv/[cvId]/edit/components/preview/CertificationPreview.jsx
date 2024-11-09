import React from 'react'

function CertificationPreview({cvInfo}) {
  return (
    <div className="my-6 sm:my-8 max-w-4xl mx-auto">
      <h2 className="text-base sm:text-lg lg:text-xl text-center mb-4 font-bold font-mono">
        Certifications
      </h2>

      <hr className="border-[1.5px] mb-6"
        style={{ borderColor: cvInfo?.themeColor }}
      />

      <div className="space-y-2">
        {cvInfo?.certifications?.map((certification, index) => (
          <div key={index} className='group hover:bg-gray-50 p-4 sm:p-6 rounded-md transition-all'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-sm sm:text-base lg:text-sm'>
                {certification?.name}
              </h3>
              <span className='text-sm sm:text-base text-gray-700'>
                {certification?.institution}
              </span>
              <span className='text-sm sm:text-base text-gray-700'>
                {certification?.yearObtained}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificationPreview
