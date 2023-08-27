import React from 'react'
import { textForBodyPage } from './text'

export default function BodyTypePage() {
  return (
    <div>


      <div className='flex flex-row space-x-28 justify-center items-center'>
        {/* Could potentially abstract this but do we need too it fits the component? */}
        <div className='flex flex-col mt-4 justify-center items-center'>
          <img src='/bodytypes 5.png' alt="bodytype 4 image did not load" className='mt-10'/>
            <h1 className='text-6xl'>Ectomorph</h1>
            <p className=' h-auto sm:w-[361px] mt-4 ml-10'>
            {textForBodyPage.bodyTypeDescriptionEctomorph}
          </p>
        </div>

        <div className='flex flex-col mt-4 justify-center items-center'>
          <img src='/bodytypes 3.png' alt="bodytype 4 image did not load" className='mt-10'/>
            <h1 className='text-6xl'>Ectomorph</h1>
            <p className=' h-auto sm:w-[361px] mt-4 ml-10'>
              {textForBodyPage.bodyTypeDescriptionEndomorph}
          </p>
        </div>

        <div className='flex flex-col mt-4 justify-center items-center'>
          <img src='/bodytypes 4.png' alt="bodytype 4 image did not load" className='mt-10'/>
            <h1 className='text-6xl'>Ectomorph</h1>
            <p className=' h-auto sm:w-[361px] mt-4 ml-10'>
              {textForBodyPage.bodyTypeDescriptionMesomorph}
          </p>
        </div>
      </div>
      
    </div>
  )
}
