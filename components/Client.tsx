import React from 'react'
import { InfiniteMovingCards } from './ui/infi-card'
import { testimonials } from '@/data'

export const Client = () => {
  return (
    <div className='py-10 md:py-20' id='testimonials'>
        <div className='flex flex-col'>
            <h1 className='text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>Appreciative Words!</h1>
        </div>
        <div className="dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>
        
        <div className='flex flex-col items-center my-5'>
            <div className='rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'/>
            </div>
            
        </div>
        </div>
    </div>
  )
}
