
import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import "@/app/app.css"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Graphics", 
  description: "Graphics section of Avantula Creative Digital Marketing Agency",
  keywords: 'best digital marketing agency in India, Nagpur, Avantula Graphics'
};

const graphic = () => {
  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
                    <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
                    <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300'>
                    &quot;Graphic Designing help to Attract Customer. It work many time, if One Advertise was slightly different from Majority Advertisement Customer/Viewer attracts to that One Advertise. At end Customer Store that Ad in Mind & Visite that Place/Store&quot;<br /> <span className='text-purple-400'>Attract Customers to Your products and services with Avantula.</span></p>
                </div>
        <div className='flex items-center justify-start'>
          <h2 className='text-3xl font-bold text-nowrap'>Graphic Designing</h2>
          <Separator />
        </div>
        <div className='w-full my-5'>
          <img className='rounded-lg w-full' src="/page-gr.png" alt="Strategic Planning" />
          
        </div>

        <div className="w-full h-full p-10 flex flex-col gap-4 max-w-7xl mx-auto relative">
          <video className='w-full' muted autoPlay controls playsInline loop><source src="/mockup.mp4"></source></video>
          <img src="/g9.png" alt="" />
          <div className='grid grid-cols-2 gap-4'>
          <img src="/g7.png" alt="" />
          <img src="/g8.png" alt="" />
          <img src="/g2.png" alt="" />
          <img src="/g3.png" alt="" />
          <img src="/g4.png" alt="" />
          <img src="/g5.png" alt="" />
          <img src="/g10.png" alt="" />
          <img src="/g11.png" alt="" />
          </div>
        </div>
        

        <div className='py-3 text-neutral-300 flex flex-col'>
          <h1 className="mt-2 font-bold text-white">The Power of Graphics in Marketing</h1>
          <p>Graphics are essential for any marketing strategy because they grab attention, boost memorability, and drive engagement.</p>
          <h2 className="mt-2 font-bold text-white">Key Benefits of Using Graphics:</h2>
          <ul>
            <li>Stronger Reminders: Visuals leave a lasting impression compared to text.</li>
            <li>Product & Service Showcase: Highlight offerings with informative and clickable graphics.</li>
            <li>Increased Engagement: Share graphics strategically on social media to connect with your audience.</li>
          </ul>
          <h2 className="mt-2 font-bold text-white">Taking Action:</h2>
          <ul>
            <li>Create High-Quality Images & Infographics: Invest in visuals that align with your brand identity.</li>
            <li>Utilize Multiple Platforms: Share graphics on social media channels frequented by your target audience.</li>
            <li>Make Graphics Clickable: Link visuals to relevant product pages or landing areas for conversions.</li>
          </ul>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default graphic