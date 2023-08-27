import React from 'react'
import { GenerateLandingPageText } from './text'
export default function GeneratePlan() {
  return (
    <div className='flex flex-row justify-center items-center h-screen'>
      <div className='
        flex-1
      bg-primaryColorTwo
        sm:h-[835px]
        sm:ml-20
        sm:rounded-xl'
        >
        <p>
          {GenerateLandingPageText.generatedText}
        </p>
      </div>
      
      <div id='ghost_div' className='flex-1'></div>
    </div>
  )
}
