import React from 'react'
import ButtonOne from '../shared/ButtonOne'
import { Roboto_Font } from '@/app/fonts/Roboto_Bold'
import { textForLandingPage } from './text'

export default function LandingPage() {
  return (
    <div className={Roboto_Font.className}>
      <div className='flex flex-col space-y-10'>
        <div id='LP_Header_Text' className='flex flex-col mt-10 ml-10 sm:mt-[250px] sm:ml-[150px]'>
          <h1 className='text-primaryTextColorTwo sm:text-6xl'>
            Healthy
          </h1>
          <h3 className='sm:text-4xl'>living made easy!</h3>
        </div>

        <div className='sm:max-h-[247px] sm:max-w-[464px] sm:mt-[200px] sm:ml-[150px]'>
          <p id='landingpage_p_tag_text' className='flex justify-center items-center text-xl'>
            {textForLandingPage.productDescription}
          </p>
        </div>

        <div className='sm:mt-[200px] sm:ml-[240px]'>
          <ButtonOne>
            Create Plan
          </ButtonOne>
        </div>
      </div>

    </div>
  )
}
