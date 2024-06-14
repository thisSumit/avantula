import { projects } from '@/data'
import { CircleArrowOutUpRightIcon } from 'lucide-react'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { Separator } from "@/components/ui/separator"

export const OurProjects = () => {
  return (
    <div className='py-10 md:py-20' id='projects'>
        <h1 className='text-3xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8'>
            Hey!, Watch Something Special.
        </h1>
        <div className='md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto my-2 items-center justify-center p-4 gap-8'>
            {projects.map(({id, title, des, img, link})=>(
                <div key={id} className='lg:min-h-[30rem] h-[45vh] flex items-start my-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                    <img src={img} alt={title} className='w-full relative h-fit rounded-xl'/>
                        <div className='flex flex-col relative font-bold text-[18px] mt-2 md:text-2xl md:mx-3 md:px-2 h-auto lg:h-10'>
                        <h2 className='flex justify-start'>{title}</h2> 
                        <p className='font-light justify-center text-neutral-400 text-[14px] md:text-[18px]'>
                        {des}
                        </p>
                        <a href={`https:\\${link}`} className='flex my-2 items-end underline'><p className='flex relative justify-end gap-1 font-light text-lg'>Go to <MdArrowOutward/></p></a>
                        </div>
                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}
