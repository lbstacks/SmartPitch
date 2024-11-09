import { NotebookPen } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function CvCardItem({cv}) {
  return (
    <Link to={'/dashboard/cv/'+cv.documentId+"/edit"} > 
         <div className='p-14 bg-secondary flex items-center
          justify-center h-[280px] rounded-lg
          border border-primary
          hover:scale-105 transition-all 
          hover:cursor-pointer
          hover:shadow-md
          shadow-primary
          '>
            <NotebookPen />
         </div>
         <h2 className='text-center font-semibold my-1'>{cv.title}</h2>
    </Link>
  )
}

export default CvCardItem
