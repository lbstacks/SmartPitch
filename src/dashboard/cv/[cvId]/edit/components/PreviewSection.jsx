import React, { useContext } from 'react'
import PersonalDetailsPreview from './preview/PersonalDetailsPreview';
import { CvInfoContext } from '@/context/CvInfoContext';
import SummaryPreview from './preview/SummaryPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationPreview from './preview/EducationPreview';
import SkillsPreview from './preview/SkillsPreview';
import CertificationPreview from './preview/CertificationPreview';
import ReferencesPreview from './preview/ReferencesPreview';

function PreviewSection() {

    const {cvInfo, setCvInfo}=useContext(CvInfoContext);
  return (
    <div className='shadow-lg h-full p-14 border-t-[25px]' 
         style={{
        borderColor: cvInfo?.themeColor
      }}>
        {/* Personal information */}
        <PersonalDetailsPreview cvInfo={cvInfo}/>

        {/* Summary */}
        <SummaryPreview cvInfo={cvInfo}/>

        {/* Work experience */}
        <ExperiencePreview cvInfo={cvInfo}/>

        {/* Education */}
        <EducationPreview cvInfo={cvInfo}/>

        {/* Skills */}
        <SkillsPreview cvInfo={cvInfo}/>

        {/* Certifications */}
        <CertificationPreview cvInfo={cvInfo}/>

        {/* References */}
        <ReferencesPreview cvInfo={cvInfo}/>
    </div>
  )
}

export default PreviewSection
