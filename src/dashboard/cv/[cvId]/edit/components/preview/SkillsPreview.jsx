import React from 'react'

function SkillsPreview({cvInfo}) {
  return (
    <div className="my-3 sm:my-6">
      <h2 className="text-xs sm:text-sm text-center mb-1 sm:mb-2 font-bold font-mono">Skills</h2>

      <hr
        className="border-[1.5px] my-1 sm:my-2"
        style={{
          borderColor: cvInfo?.themeColor,
        }}
      />

      <div className='flex flex-col gap-2 sm:gap-4'>
        {/* Technical Skills Section */}
        <div>
          <h3 className='text-xs sm:text-sm font-mono font-bold mb-1 sm:mb-2'>Technical Skills:</h3>
          <div>
            {cvInfo?.skills?.technicalSkills.map((skill, index) => (
              <span key={index} className='text-[10px] sm:text-xs font-sans font-normal'>
                {skill?.name}
                {index < cvInfo.skills.technicalSkills.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <h3 className='text-xs sm:text-sm font-mono font-bold mb-1 sm:mb-2'>Soft Skills:</h3>
          <div>
            {cvInfo?.skills?.softSkills.map((skill, index) => (
              <span key={index} className='text-[10px] sm:text-xs font-sans font-normal'>
                {skill?.name}
                {index < cvInfo.skills.softSkills.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPreview
