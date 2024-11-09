import React from 'react'

function EducationPreview({cvInfo}) {
  return (
    <div className="my-6 sm:my-8 max-w-4xl mx-auto">
      <h2 className="text-base sm:text-lg lg:text-xl text-center mb-4 font-bold font-mono">
        Education
      </h2>

      <hr className="border-[1.5px] mb-6"
        style={{ borderColor: cvInfo?.themeColor }}
      />

      <div className="space-y-6">
        {cvInfo.education.map((education, index) => (
          <div key={index} className='group hover:bg-gray-50 p-4 sm:p-6 rounded-lg transition-all'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
              <h3 className='font-bold text-sm sm:text-base lg:text-lg'>
                {education?.universityName}
              </h3>
              <span className='text-sm sm:text-base text-gray-600'>
                {education?.city}, {education?.state}
              </span>
            </div>

            <div className='mt-2 flex flex-col sm:flex-row sm:items-center gap-2'>
              <span className='font-semibold text-sm sm:text-base'>
                {education?.degree} {education?.major}
              </span>
              <span className='hidden sm:block text-gray-600'>•</span>
              <span className='text-sm sm:text-base text-gray-600'>
                {education?.startDate} - {education?.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationPreview
