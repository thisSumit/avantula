import React from 'react'
import { TextGenerateEffect } from './TextGenerateEffect'

const Middle = () => {
  return (
    <div>
        <div className='w-full h-[30vh] md:h-full flex items-center'>
            <img className='absolute w-fit' src="footer-grid.svg" alt="" />
            <TextGenerateEffect className='h-[60vh] flex items-center text-3xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8' words={"We're obsessed with helping you reach your full potential."}/>
        </div>
    </div>
  )
}

export default Middle