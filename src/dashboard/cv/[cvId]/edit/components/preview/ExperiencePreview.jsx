import React from 'react'

function ExperiencePreview({cvInfo}) {
  return (
    <div className="my-6 sm:my-8 max-w-4xl mx-auto">
      <h2 className="text-base sm:text-lg lg:text-xl text-center mb-4 font-bold font-mono">
        Experience
      </h2>

      <hr className="border-[1.5px] mb-6"
        style={{ borderColor: cvInfo?.themeColor }}
      />

      <div className="space-y-6">
        {cvInfo.experience.map((experience, index) => (
          <div key={index} className='group hover:bg-gray-50 p-4 sm:p-6 rounded-lg transition-all'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>
              <h3 className='font-bold text-sm sm:text-base lg:text-lg'>
                {experience?.title}
              </h3>
              <span className='font-semibold text-sm sm:text-base text-gray-700'>
                {experience?.companyName}
              </span>
            </div>

            <div className='mt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 text-xs sm:text-sm'>
              <span>{experience?.city}, {experience?.state}</span>
              <span className='hidden sm:block'>•</span>
              <span>{experience?.startDate} - {experience?.currentlyWorking ? 'Present' : experience?.endDate}</span>
            </div>

            <p className='mt-3 text-sm sm:text-base leading-relaxed text-gray-700'>
              {experience?.workSummary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperiencePreview
