'use client'
import React, { ChangeEvent, FormEvent } from 'react';
import { IMeasurements } from './context/MeasurementsData';
import { sendMeasurementsToApi } from '@/app/Api/post_measurements';

interface IMeasurementsProps {
  measurements:IMeasurements,
  updateMeasurements: (type: keyof IMeasurements, value: string) => void;
}

export default function Measurements(props:IMeasurementsProps) {

  const {measurements, updateMeasurements} = props;
  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateMeasurements(name as keyof IMeasurements, value);
  }
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMeasurementsToApi(measurements)
  }

  return (
    <div className='h-screen flex flex-row justify-center items-center'>

      <div className='bg-primaryColorTwo flex-1 sm:h-[492px] sm:ml-20 sm:rounded-xl'>
        <div className='flex flex-col justify-center items-center sm:mt-20 sm:space-y-4'>
          <h1 className='text-xl'>Please Enter Height and Weight</h1>

          <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center space-y-10'>
            <input 
              type="text"
              name='height'
              value={measurements.height}
              placeholder={'Enter Height'}
              onChange={handleChange}
              className='bg-buttonPrimary rounded-md sm:w-[260px] sm:h-[60px]'
            />
            <input 
              type="text"
              name='weight'
              value={measurements.weight}
              placeholder={'Enter Weight'}
              onChange={handleChange}
              className='bg-buttonPrimary rounded-md sm:w-[260px] sm:h-[60px]'
            />
              <button className='bg-buttonPrimary sm:w-[137px] sm:h-[57px] rounded-xl'>
                Submit
              </button>
          </form>

          <h3>The data input here is used to train future models</h3>
        </div>
      </div>

      <div id='ghost_div' className='flex-1'></div>
      <div id='ghost_div' className='flex-1'></div>

    </div>
  )
}
