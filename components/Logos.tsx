'use client'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';
import { Separator } from './ui/separator';

export default function Logos() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
      offset: ['start end', 'end start']
    })
  
    useEffect( () => {
      const lenis = new Lenis()
  
      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
    }, [])
  
    return (
        <main className='w-full relative mb-10 flex md:my-10 flex-col justify-center items-center'>
            <div>
            <h2 className='text-lg my-2 font-bold text-neutral-300 flex relative justify-center items-center text-nowrap'>Our Partners</h2>
            </div>
            <Separator/>
        <div className="w-full grid grid-cols-4 md:flex my-3  gap-7 items-center justify-center saturate-0">
       <img className='md:h-10 h-5' src="https://lh3.googleusercontent.com/aTl166mOYWR13032Y8QI51GsqtPFgy95udiD4zFCsGP2g1qAhSr7zdVTjkEuXu5drwB2Te4FUZWtyo2-YzaKTjTWdsb3NqNDjzJ3OX7GnDrLWwRnddD3=s0-rw-v1" alt="" />
       <img className='md:h-[65px] h-8' src="https://www.sneeze.it/wp-content/uploads/elementor/thumbs/Meta-logo-pwp34lg37zs69a7z0gd2z1p1090e578je84ycg5efw.png" alt="" />
       <img className='md:h-[65px] h-8' src="https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png" alt="" />
       <img className='md:h-8 h-4' src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e8-v2.png.original.png" alt="" />
       <img className='md:h-10 h-5' src="https://www.groovecommerce.com/hs-fs/hubfs/2022%20Website/Primary%20Technologies/shopify-partners-alice-blue.png?width=2504&height=417&name=shopify-partners-alice-blue.png" alt="" />
       <img className='md:h-8 h-3' src="https://www.hrpartner.io/img/landing/slack/slack-logo-white.png" alt="" />
       <img className='md:h-[65px] h-8' src="https://emerging-alliance.net/wp-content/uploads/2024/02/salesforce-partner-logo.png" alt="" />
       <img className='md:h-10 h-5' src="https://madcatmarketing.com.au/wp-content/uploads/2020/12/Mailchimp-Partner-logo-mad-cat-marketing.png" alt="" />
       
      </div>
      <Separator/>
        </main>
    );
  }