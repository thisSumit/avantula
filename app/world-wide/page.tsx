'use client'
import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import "@/app/app.css"

const worldW = () => {
    return (
        <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
                    <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
                    <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300 flex'>&quot;At AVANTULA, we specialize in transforming your brand&apos;s vision into reality. From social media ads and event promotions to graphic design and lead conversion, our comprehensive suite of services is designed to boost your business growth. Let&apos;s hustle together to make your brand shine.&quot;</p>
                </div>
                <div className='flex items-center justify-start'>
                    <h2 className='text-3xl font-bold text-nowrap'>World Wide Marketing</h2>
                    <Separator />
                </div>
                <div className='py-2'>
                    <div className='w-full my-5'>
                        <img className='rounded-lg w-full' src="/page-wo.png" alt="world wide marketing" />
                    </div>
                <div className='py-3 text-neutral-300 flex flex-col'>
                <h1>World Wide Digital Marketing</h1>

    <p>In the dynamic landscape of global business, digital marketing stands as a critical pillar for success. Leveraging the power of online platforms, businesses can connect with audiences across the globe, enhance brand visibility, and drive growth through strategic digital initiatives.</p>

    <h2>Our Services</h2>
    <ul>
        <li><strong>Graphic Designing:</strong> We create visually compelling designs that effectively communicate your brand&apos; message and engage your audience.</li>
        <li><strong>Video Editing:</strong> Our team crafts high-quality video content that captivates viewers and tells your brand&apos; story in an impactful way.</li>
        <li><strong>Social Media Marketing:</strong> We develop targeted social media strategies to boost your online presence, foster engagement, and grow your following.</li>
        <li><strong>Organic Content:</strong> Our content creation focuses on delivering valuable, SEO-optimized content that enhances your website&apos; visibility and builds audience trust.</li>
        <li><strong>Website Development:</strong> We design and develop user-friendly websites that provide a seamless user experience and accurately reflect your brand&apos; identity.</li>
        <li><strong>Strategic Planning:</strong> We offer comprehensive strategic planning to ensure your digital marketing efforts align with your business goals and market trends.</li>
    </ul>

    <h2>Conclusion</h2>
    <p>With our specialized services in graphic designing, video editing, social media marketing, organic content, website development, and strategic planning, we help businesses navigate the complexities of digital marketing and achieve global success.</p>
                </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default worldW