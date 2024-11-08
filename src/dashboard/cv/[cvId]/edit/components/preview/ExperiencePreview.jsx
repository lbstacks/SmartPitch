import React from 'react'

function ExperiencePreview({cvInfo}) {
  return (
    <div className="my-6">
      <h2 className="text-sm  text-center  mb-2 font-bold font-mono">Experience</h2>

      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: cvInfo?.themeColor,
        }}
      />

      {cvInfo.experience.map((experience, index) => (
        <div key={index} className='my-5'>
          <h2 className="text-sm font-bold">{experience?.title}</h2>
          <h2 className="text-xs flex justify-between my-2 font-mono font-semibold">
            {experience?.companyName}   |   {experience?.city}|   {experience?.state}
            <span className="text-xs font-mono">
              {experience?.startDate} - {experience?.currentlyWorking?'Present':experience?.endDate}
            </span>
          </h2>
          <p className='text-sm font-normal font-mono my-3'>{experience?.workSummary}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview
