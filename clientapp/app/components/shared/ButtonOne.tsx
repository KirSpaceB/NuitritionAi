import React from 'react'
interface IButtonOneProps {
  text: string
}
export default function ButtonOne(props:IButtonOneProps) {
  const {text} = props
  return (
    <div>
      <button className='sm:w-[264px] sm:h-[66px] rounded-2xl' style={{
        backgroundColor:"#A8BBFF"
      }}>
        {text}
      </button>
    </div>
  )
}
