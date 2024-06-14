'use client'
import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import "@/app/app.css"

const strategic = () => {
    return (
        <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
                    <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
                    <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300 flex'>&quot;At AVANTULA, we specialize in transforming your brand&apos;s vision into reality. From social media ads and event promotions to graphic design and lead conversion, our comprehensive suite of services is designed to boost your business growth. Let&apos;s hustle together to make your brand shine.&quot;</p>
                </div>
                <div className='flex items-center justify-start'>
                    <h2 className='text-3xl font-bold text-nowrap'>Strategic Planning</h2>
                    <Separator />
                </div>
                <div className='py-2'>
                    <div className='w-full my-5'>
                        <img className='rounded-lg w-full' src="/page-st.png" alt="Strategic Planning" />
                    </div>
                <div className='py-3 text-neutral-300 flex flex-col'>
    
        <h1>Strategic Planning</h1>
        <p>Strategic planning is a vital process for organizations to define their direction and make decisions on allocating resources to pursue this direction. It involves setting goals, understanding the current position of the organization, and charting a course to reach the desired future state.</p>
        
        <h2>Key Components of Strategic Planning:</h2>
        <ul>
            <li><strong>Mission Statement:</strong> A concise statement that defines the purpose and reason for an organization&apos; existence.</li>
            <li><strong>External Analysis:</strong> Examination of the organization&apos; external environment, including market trends, competition, and regulatory factors.</li>
            <li><strong>Internal Analysis:</strong> Assessment of the organization&apos; strengths, weaknesses, resources, and capabilities.</li>
            <li><strong>SWOT Analysis:</strong> Identification of Strengths, Weaknesses, Opportunities, and Threats to inform strategic decisions.</li>
            <li><strong>Goal Setting:</strong> Establishing specific, measurable, achievable, relevant, and time-bound (SMART) objectives to guide the organization.</li>
            <li><strong>Strategy Formulation:</strong> Developing strategies to achieve the established goals, considering both short-term and long-term perspectives.</li>
            <li><strong>Implementation Planning:</strong> Creating detailed plans, allocating resources, and defining responsibilities to execute the chosen strategies.</li>
            <li><strong>Monitoring and Evaluation:</strong> Continuously tracking progress, measuring performance against objectives, and making adjustments as needed.</li>
        </ul>
        
        <h2>Benefits of Strategic Planning:</h2>
        <ul>
            <li>Provides a clear sense of direction and purpose for the organization.</li>
            <li>Aligns resources and efforts towards common goals.</li>
            <li>Enhances decision-making by considering long-term implications.</li>
            <li>Facilitates proactive rather than reactive responses to changes in the environment.</li>
            <li>Fosters communication and alignment among stakeholders.</li>
            <li>Improves organizational performance and sustainability.</li>
        </ul>
        
        <p>Overall, strategic planning is a dynamic and iterative process that enables organizations to adapt to changing circumstances while staying focused on their vision and objectives.</p>
                </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default strategic