// import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { socialMedia } from "@/data"
import { CiMail, CiPhone } from "react-icons/ci"
export function Faq() {
    return (
        <div>

            <div className="py-20 md:py-14 text-lg">
                <h1 className="text-3xl sm:text-5xl font-bold my-4 md:my-8 text-neutral-300">FAQ</h1>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="h-[10vh]">Why to Choose Us</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            We think Out of the Box.
                            Our approach to look every problem is to give a creative solution which helps to grow business.
                            We are a creative agency which help business to create there own brand
                            with the help of original content and by generating leads for them using social media and meta ads.
                            we help businesses to grow world wide by running there ads on socials and building there websites which having amazing and good looking UI.
                            We provide our clients an optimum solution so they can grow exponentially.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="h-[10vh]">Why we are saying creativity? </AccordionTrigger>
                        <AccordionContent className="text-lg">
                            In this era every brand wants to stand out so we help them to create there brand using our thinking and creativity. We know every brand had there story, every founder has there story to display it. We identify there story there needs and use our knowledge and experience to create a content to gain engagement and followers in addition of organic leads. These all are a part of uniqueness and it is come from creativity.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="h-[13vh] text-left">How does our creative approach help businesses establish a unique identity and stand out from the crowd?</AccordionTrigger>
                        <AccordionContent className="text-lg">
                            Our approach to every solution is creative, which helps business to get a identity that is nothing but a uniqueness. We know every brand have there unique identity which make them stand out from crowd so if you also want to stand out lets connect and make a brand.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Separator />
            <div className='flex relative my-10 md:gap-10 gap-5 md:flex-row flex-col justify-between items-center'>
                
                <div className="flex flex-col md:items-start items-center">
<<<<<<< HEAD
                <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold mb-2 relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'> <a href="/"> AVANTULA </a></h1>
=======
                <h1 className='text-4xl flex items-center sm:text-7xl mb-2 font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
>>>>>>> origin/main
                    <p className='text-sm'>© AVANTULA 2024. All Rights Reserved.</p>
                    <div className="flex relative my-3 items-center md:gap-3 gap-6">
                        {socialMedia.map((info) => (
                            <div
                                key={info.id}
                                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                            >
                                <a href={info.link}><img src={info.img} alt="icons" width={20} height={20}></img></a>
                            </div>
                        ))}
                    </div>
                    <p className="font-bold my-2">Proudly Created in Bharat &#127470;&#127475;</p>
                </div>
                <div className='flex flex-col relative md:gap-4 gap-2 overflow-hidden text-sm'>
                    <a href="tel:+919665854768"><p className='flex items-center'><CiPhone className='size-6 gap-2 mr-1' />+91-9665854768</p></a>
                    <a href="mailto:contact@avantula.live"><p className='flex items-center'><CiMail className='size-6 gap-2 mr-1' />contact@avantula.live</p></a>
                </div>
            </div>
            <Separator/>
            <div className="flex overflow-hidden justify-center gap-5 my-3 text-sm text-neutral-300">
                <p>Term & Condition</p>
                <p>Privacy Policy</p>
                <p>Legal</p>
            </div>
        </div>
    )
}
