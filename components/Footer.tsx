import React from 'react'
import Shimmer from './ui/shimmer-button'
import { FaLocationArrow, FaPhone, FaPhoneSlash, FaPhoneSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import { Faq } from './Faq'




export const Footer = () => {
  return (
    <div>

    <footer className='w-full pt-20 pb-10 text-lg' id='contact'>
        <div className='flex relative flex-col items-center'>
            <h1 className='text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>Are You Ready To Take <span className='text-purple-500'>Your Digital Presence To The Next Level</span>?</h1>
            <p className='text-neutral-400'>Reach Out to Us, Let&apos; Discuss How We can help You to Develop Online Presense</p>
            <a href="https://cal.com/avantula" className='cursor-pointer'>
            <Shimmer title='Get in Touch' icon={<FaLocationArrow />} position='right'/>
            </a>
        </div>
        
    </footer>
    <div>
      <h2 className='text-lg font-semibold text-neutral-400'>Hey, We are Hiring!!! Be a part of Our Journey <a href="mailto:avantula.agency@gmail.com" className='underline text-purple-400'>Say Hi and send Resume with Job title.</a></h2>
    </div>
    <Faq/>
    </div>
  )
}
