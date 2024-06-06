import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'
import { Separator } from "@/components/ui/separator"

const graphic = () => {
    return (
        <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
                    <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
                    <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300 flex'>"At AVANTULA, we specialize in transforming your brand's vision into reality. From social media ads and event promotions to graphic design and lead conversion, our comprehensive suite of services is designed to boost your business growth. Let's hustle together to make your brand shine."</p>
                </div>
                <div className='flex items-center justify-start'>
                    <h2 className='text-3xl font-bold text-nowrap'>Organic Content</h2>
                    <Separator />
                </div>
                <div className='py-2'>
                    <div className='w-full my-5'>
                        <img className='rounded-lg w-full' src="/page-or.png" alt="organic marketing" />
                    </div>
                <div className='py-3 text-neutral-300 flex flex-col'>
                In today's digital age, social media marketing is essential for reaching your target audience. With over 4.76 billion users worldwide, businesses must choose between organic and paid social media. Understanding the pros and cons of each approach is crucial for an effective strategy.
<br />
Recent studies show organic social media generates 100% more leads than paid, while spending on paid social media has increased by 27.7% since 2019. This article will explore the key differences, strengths, and weaknesses of both strategies to help you make informed decisions.
<br />
<span className="mt-2 font-bold text-white">What is Organic Social Media?</span>
Organic social media involves free, non-paid content shared on platforms, relying on engagement and natural growth. It includes posts, photos, videos, and stories that build authentic relationships with your audience. Key benefits include:
<br />
<span className="mt-2 font-bold text-white">Cost-effective:</span> No financial investment required.
Builds loyalty: Engaging with followers fosters community and trust.
Showcases authenticity: Sharing behind-the-scenes and user-generated content humanizes your brand.
However, organic social media can be time-consuming and relies heavily on platform algorithms and high-quality content.
<br />
<span className="mt-2 font-bold text-white">What is Paid Social Media?</span>
Paid social media uses advertising to reach targeted audiences quickly. By using platforms like Facebook and Instagram ads, businesses can target specific demographics, interests, and behaviors. Key benefits include:
<br />
<span className="mt-2 font-bold text-white">Quick reach:</span> Promotes content to new followers, increasing visibility.
Precise targeting: Ensures ads are seen by the right people. <br />
<span className="mt-2 font-bold text-white">Measurable results:</span> Detailed analytics help optimize campaigns and maximize ROI.
However, paid social media can be expensive and requires continuous investment to maintain results.
                </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default graphic