import React from 'react'

function SummaryPreview({cvInfo}) {
  return (
    <div className='my-3 sm:my-6'>
      <p className='text-xs sm:text-sm font-normal font-mono leading-relaxed'>{cvInfo?.summary}</p>
    </div>
  )
}

export default SummaryPreview
