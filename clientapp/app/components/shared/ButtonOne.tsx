import React, { ReactNode } from 'react'

interface IButtonOneProps {
  children:ReactNode
}
export default function ButtonOne(props: IButtonOneProps) {
  
  return (
    <button className='sm:w-[264px] sm:h-[66px] rounded-2xl bg-buttonPrimary'>
      {props.children}
    </button>
  )
}
