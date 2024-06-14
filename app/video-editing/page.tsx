'use client'
import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import { Separator } from "@/components/ui/separator"
import React from 'react'

const video = () => {
  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
          <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
          <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300'>
          &quot;Now a Days Instagram Reels and Youtube Short video takes a part in Marketing instead of long TV ads. Showing right Content and Information to Viewer is Most Important rather than Going through Trends always. Trying New things to attract Viewer is Important&quot;<br /> <span className='text-purple-400'>Create Visuals that Shows Feeling and Emotions of Your products and services with Avantula.</span></p>
        </div>
        <div className='flex items-center mb-5 justify-start'>
          <h2 className='text-3xl font-bold'>Videos</h2>
          <Separator />
        </div>

        <div className='flex flex-row justify-evenly'>
          <div className='relative w-[90%] max-w-6xl rounded-xl mx-3 my-4'><video muted className='w-full' controls playsInline loop autoPlay><source src="/v1.mp4"></source></video></div>
          <div className='relative w-[90%] max-w-6xl rounded-xl mx-3 my-4'><video muted className='w-full' controls playsInline loop autoPlay><source src="/v4.mp4"></source></video></div>
          <div className='relative w-[90%] max-w-6xl rounded-xl mx-3 my-4'><video muted className='w-full' controls playsInline loop autoPlay><source src="/v3.mp4"></source></video></div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='relative w-[90%] max-w-6xl rounded-xl mx-3 my-2'><video className='w-full' muted autoPlay controls playsInline loop><source src="/mockup.mp4"></source></video></div>
          <div className='relative w-[90%] max-w-6xl rounded-xl mx-3 my-2'><video className='w-full' muted autoPlay controls playsInline loop><source src="/v2.mp4"></source></video></div>
          <div className='relative w-[90%] max-w-6xl rounded-xl mx-3 my-4'><video className='w-full' muted autoPlay controls playsInline loop ><source src="/v5.mp4"></source></video></div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default video