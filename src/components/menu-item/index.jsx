import React from 'react'

const MenuItem = ({text = '', icon}) => {
  return (
    <div className='flex w-full space-x-4 items-center '>
        {icon}
        <span className='text- hover:text-almost-black cursor-pointer'>{ text }</span>
    </div>
  )
}

export default MenuItem