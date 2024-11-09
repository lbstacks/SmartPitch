import React from 'react'

function ReferencesPreview({cvInfo}) {
  return (
    <div className="my-6 sm:my-8 max-w-4xl mx-auto">
      <h2 className="text-base sm:text-lg lg:text-xl text-center mb-4 font-bold font-mono">
        References
      </h2>

      <hr className="border-[1.5px] mb-6"
        style={{ borderColor: cvInfo?.themeColor }}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {cvInfo?.references?.map((reference, index) => (
          <div key={index} className='group hover:bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-100 transition-all'>
            <h3 className='font-bold text-sm sm:text-base lg:text-lg mb-3'>
              Reference {index + 1}
            </h3>

            <div className='space-y-2'>
              <p className='text-sm sm:text-base font-semibold'>
                {reference?.name}
              </p>
              <p className='text-sm sm:text-base text-gray-700'>
                {reference?.position}
              </p>
              <p className='text-sm sm:text-base text-gray-700'>
                {reference?.company}
              </p>
              <p className='text-sm sm:text-base text-gray-700'>
                {reference?.phone}
              </p>
              <p className='text-sm sm:text-base text-gray-700'>
                {reference?.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReferencesPreview
