import React from 'react'
import ButtonOne from '../Reusables/ButtonOne'
import { Roboto_Font } from '@/app/fonts/Roboto_Bold'

export default function LandingPage() {
  return (
    <div className={Roboto_Font.className}>
      <div className='flex flex-col space-y-10'>
        <div id='LP_Header_Text' className='flex flex-col mt-10 ml-10 sm:mt-[250px] sm:ml-[150px]'>
          <h1 className='sm:text-6xl' style={{
            color:'#FB9595'
          }}>
            Health
          </h1>
          <h3 className='sm:text-4xl'>living made easy!</h3>
        </div>

        <div className='sm:max-h-[247px] sm:max-w-[464px] sm:mt-[200px] sm:ml-[150px]'>
          <p className='flex justify-center items-center text-xl'>
            Unlock the future of nutrition with our AI-powered platform, tailored to serve your unique dietary needs and goals. Experience personalized meal planning, real-time nutrient tracking, and science-backed recommendations, all in one place. Elevate your health journey today with the precision and intelligence only our AI nutrition helper can offer."
          </p>
        </div>

        <div className='sm:mt-[200px] sm:ml-[240px]'>
          <ButtonOne text='Create Plan'/>
        </div>
      </div>

    </div>
  )
}
