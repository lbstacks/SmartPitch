import React, {  useState } from 'react'
import PersonalDetails from './forms/PersonalDetails'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, ArrowRightIcon,  LayoutGridIcon } from 'lucide-react'

function FormSection() {
const [activeFormIndex, setActiveFormIndex]=useState(1);
const [enableNext, setEnableNext]=useState(false);


  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="gap-2 flex">
          <LayoutGridIcon /> Theme
        </Button>

        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeftIcon />
            </Button>
          )}

          <Button
            className="gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            disabled={!enableNext}
          >
            Next <ArrowRightIcon />
          </Button>
        </div>
      </div>

      {/*Personal information  */}
         {activeFormIndex==1? <PersonalDetails enabledNext={(v)=>setEnableNext(v)}/>:null}

      {/* Summary */}

      {/* Work experience */}

      {/* Education */}

      {/* Skills */}

      {/* Certifications */}

      {/* References */}
    </div>
  );
}

export default FormSection
