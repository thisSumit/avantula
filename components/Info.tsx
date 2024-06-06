import { Separator } from "@/components/ui/separator"

import React from 'react'
import Shimmer from "./ui/shimmer-button"
import { MdArrowOutward } from "react-icons/md"
import { Link } from "lucide-react"

export const Info = () => {
  return (
    <div>
        <div id='about' className='sm:pb-14 h-[20vh]'></div>
        <div className='py-10 md:py-20 item-center'>
        <div className=''>
            <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA
            <Separator className="h-[2px] w-[68%] bg-neutral-500" /></h1>
        </div>
        <div>
            <p>&quot;At AVANTULA, we specialize in transforming your brand&apos;s vision into reality. From social media ads and event promotions to graphic design and lead conversion, our comprehensive suite of services is designed to boost your business growth. Let&apos;s hustle together to make your brand shine.&quot;</p>
        </div>
        <a href="/about" className="flex text-sm my-4 items-center gap-1 underline">Learn More <MdArrowOutward/></a>
        </div>
    </div>
  )
}
