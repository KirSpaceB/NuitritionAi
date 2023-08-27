import React from 'react'
interface IMeasurementsProps {
  measurementRequest:string,
  placeHolderExample:string,

}

export default function Measurements(props:IMeasurementsProps) {
  const {measurementRequest, placeHolderExample} = props;
  return (
    <div className='h-screen flex flex-row justify-center items-center'>

      <div className='bg-primaryColorTwo flex-1 sm:h-[492px] sm:ml-20 sm:rounded-xl'>
        <div className='flex flex-col justify-center items-center sm:mt-20 sm:space-y-20'>
          <h1 className='text-xl'>{measurementRequest}</h1>
          <input 
            type="text"
            placeholder={placeHolderExample}
            className='bg-buttonPrimary rounded-md sm:w-[260px] sm:h-[75px]'/>
          <h3>The data input here is used to train future models</h3>
        </div>
      </div>

      <div id='ghost_div' className='flex-1'></div>
      <div id='ghost_div' className='flex-1'></div>

    </div>
  )
}
