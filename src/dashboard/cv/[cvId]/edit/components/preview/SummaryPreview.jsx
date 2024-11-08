import React from 'react'

function SummaryPreview({cvInfo}) {
  return (
    <div className='my-6'>
    
      <p className='text-sm font-normal font-mono'>{cvInfo?.summary}</p>
    </div>
    
  )
}

export default SummaryPreview
