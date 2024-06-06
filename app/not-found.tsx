import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import { Separator } from "@/components/ui/separator"
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const error = () => {
  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <FloatingNav navItems={navItems}/>
        <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
            <div className='my-28'>
            <h2 className="text-4xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        404- Page Not Found
      </h2>
      <div className="flex flex-row items-center justify-start gap-4 mt-12 max-md:justify-center">
          <Button
            className="rounded-2xl" 
            asChild>
            <Link href="/">Avantula- Home</Link>
          </Button>
          <Button className="rounded-2xl" variant={'destructive'}asChild>
            <Link href="#contact">Contact us</Link>
          </Button>
        </div>
            </div>
            <Separator/>
      <Footer/>
        </div>
    </main>
  )
}

export default error