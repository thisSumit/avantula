import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import { MdArrowOutward } from 'react-icons/md'

const about = () => {
  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
                    <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
                    <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300'>
                    "At AVANTULA, we specialize in transforming your brand's vision into reality. From social media ads and event promotions to graphic design and lead conversion, our comprehensive suite of services is designed to boost your business growth. Let's hustle together to make your brand shine."</p>
                </div>
        <div className='flex items-center justify-start'>
          <h2 className='text-3xl font-bold text-nowrap'>About Us</h2>
          <Separator />
        </div>
        <div className='w-full'>
          <img className='rounded-lg w-full' src="/Sumit Karanjekar.png" alt="Strategic Planning" />
        </div>
        <div className='py-3 text-lg text-neutral-300 flex flex-col'>
          <div className='flex items-end gap-2'>
          <h2 className='text-2xl font-bold text-purple-400'>Aaditya Karanjekar</h2>
          <p className='italic'>Co-Founder & CEO</p>
          </div>
          <p>Experienced content creator, editor, digital marketer, and graphic designer with a passion for storytelling 've created three short films and collaborated with over 10 clients across India, helping them achieve their goals through impactful and engaging content. Let's Get in Touch and bring your story to life.</p>
          <a className='my-1 underline flex items-center gap-1' href="https://www.linkedin.com/in/aaditya-karanjekar-38bb2520b/">Connect on LinkedIn <MdArrowOutward/></a>
        </div>
        <div className='py-3 text-lg text-neutral-300 flex flex-col'>
          <div className='flex items-end gap-2'>
          <h2 className='text-2xl font-bold text-purple-400'>Sumit Karanjekar</h2>
          <p className='italic'>Co-Founder & COO</p>
          </div>
          <p>Experienced freelancer, editor and graphic designer with a passion for Creativity and Aesthetics. Get in touch for Increase Your Growth.</p>
          <a className='my-1 underline flex items-center gap-1' href="https://www.linkedin.com/in/sumit-karanjekar-119328214/">Connect on LinkedIn <MdArrowOutward/></a>
        </div>
        {/* <div className='flex items-center justify-evenly flex-col md:flex-row gap-5 mb-10'>
            <div className='bordr border-black-300 p-3 w-full'>
            <h2 className='mt-4 mb-1 font-bold'>Aaditya Karanjekar</h2>
                <p className='text-sm'>Co-Founder: AVANTULA</p>
                <img className='w-[40vh]' src="/founder1.jpeg" alt="Aaditya Karanjekar" />
                
                <p className='text-sm'>Experienced content creator, editor, digital marketer, and graphic designer with a passion for storytelling 've created three short films and collaborated with over 10 clients across India, helping them achieve their goals through impactful and engaging content. Let's Get in touch and bring your story to life.</p>
            </div>
            <div className='border border-black-300 p-3 w-full'>
            <h2 className='mt-4 mb-1 font-bold'>Sumit Karanjekar</h2>
                <p className='text-sm'>Co-Founder: AVANTULA</p>
                <img className='w-[40vh] saturate-0' src="/founder2.jpeg" alt="Sumit Karanjekar" />
                
                <p className='text-sm'>Web Developers | UI & UX Designer | GSSoC 2024 Contributer | Ex GBJBuzz
                </p>
            </div>
        </div> */}
        <Footer/>
    </div>
    </main>
  )
}

export default about