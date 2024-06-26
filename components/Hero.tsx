'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './TextGenerateEffect'
import Shimmer from './ui/shimmer-button'
import { MdArrowOutward } from "react-icons/md";


export const Hero = () => {
  return (
    <div id='home' className='py-10 md:pb-20 pt-36 '>
        <div><Spotlight className='top-10 -left-10 md:left-10 md:-top-10 h-screen' fill='white'/>
        </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white-100  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
    <div className='flex justify-center relative my-20 z-10'>
      <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
      <h2 className='uppercase tracking-wider text-xs text-center text-purple-200 max-w-80'>Elevate Your Brand with AVANTULA</h2>
      <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        The Creative Marketing Agency that Work for Your Business Growth
      </h2>
      <TextGenerateEffect className='text-[20px] md:text-1xl lg:text-2xl text-neutral-200' words={'We Hustle For Your Business Growth'}
      />
      <Shimmer handleClick={() => window.location.href = "http://cal.com/avantula"} title='Book a Meet' icon={<MdArrowOutward />} position='right'/>
      </div>
      <h1 className='hidden'>Avantula | The Creative Digital Marketing Agency</h1>
      <p className='hidden'>
        
digital marketing agency

digital marketing

digital marketing services

digital marketing courses

digital marketing courses in nagpur

digital marketing company
Q
digital marketing agency near me

digital marketing agency in mumbai
avantula the creative digital marketing agency nagpur

digital marketing agency in nagpur

top 10 digital marketing companles In nagpur

best digital marketing agency in nagpur

echovme digital nagpur

digital marketing courses in nagpur
Q.
digital marketing agency in mumbai

digital marketing agency near me

best digital marketing classes in nagpur</p>
    </div>
    </div>
  )
}
