import { Footer } from '@/components/Footer'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import "@/app/app.css"
import { MdArrowOutward } from "react-icons/md";

const Website = () => {
    return (
        <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <div className='pt-[12vh] pb-10 flex flex-col md:pt-[16vh]'>
                    <h1 className='text-4xl flex items-center sm:text-7xl font-extrabold relative bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-purple-800'>AVANTULA</h1>
                    <p className='left-0 right-0 my-2 text-lg font-bold text-neutral-300'>
                    &quot;Web development is the process of building, creating, and maintaining websites. It encompasses various aspects, including web design, web content development, client-side/server-side scripting, and network security configuration. Web development ranges from creating simple static pages to complex web-based applications, social network services, and e-commerce platforms.&quot;<br /> <span className='text-purple-400'>Provide a platform for businesses to showcase their products and services with Avantula.</span></p>
                </div>
                <div className='flex items-center justify-start'>
                    <h2 className='text-3xl font-bold text-nowrap'>Website Development</h2>
                    <Separator />
                </div>
                <div className='py-2'>
                    <div className="w-full h-full p-10 flex flex-col mx-auto relative">
                        <div className='flex flex-col my-10'>
                            <img className='rounded-xl w-full' src="/web-3.png" alt="" />
                            <div className="flex flex-col mt-2">
                                <h2>Trendy Hippo</h2>
                                <p>Created Trendy Hippo Website to Sell product online for that it requres CMS to manged that and Client required to Manage Fianance also through this website.</p>
                            </div>
                            <a className='flex items-center gap-1 mt-2 underline ' href="http://trendyhippo.live">Live Preview <MdArrowOutward /></a>
                        </div>
                        <div className='flex flex-col my-10'>
                            <img className='rounded-xl w-full' src="/web-2.png" alt="" />
                            <div className="flex flex-col mt-2">
                                <h2>Portfolio Website</h2>
                                <p>Created Portfolio Website to Show Proof of Work online. Client required futuristic aspect and Mordern theme also this Website is made by Client Design- Client share his Figma Design.</p>
                            </div>
                            <a className='flex items-center gap-1 mt-2 underline ' href="https://thissumit.github.io/this_Sumitgithub.io/">Live Preview <MdArrowOutward /></a>
                        </div>
                        <div className='flex flex-col my-10'>
                            <img className='rounded-xl w-full' src="/web-1.png" alt="" />
                            <div className="flex flex-col mt-2">
                                <h2>Freelancers Portfolio Website</h2>
                                <p>Created this Website to show Portfolio of Work and Sell Client Services. Client requirments are to put Client Videos and Reels in it.</p>
                            </div>
                            <a className='flex items-center gap-1 mt-2 underline' href="https://aadityakaranjekar.framer.ai/">Live Preview <MdArrowOutward /></a>
                        </div>
                    </div>

                    <div className='py-3 text-neutral-300 flex flex-col'>

                        <h2>Key Components of Web Development:</h2>
                        <ul>
                            <li><strong>Front-End Development:</strong> Involves the creation of the visual and interactive aspects of a website. Front-end developers ensure that a website is responsive, accessible, and user-friendly.</li>
                            <li><strong>Back-End Development:</strong> Focuses on the server side of a website, managing databases, server logic, and application integration.</li>
                            <li><strong>Full-Stack Development:</strong> Full-stack developers have the versatility to work on both the client side and the server side of a web application.</li>
                            <li><strong>Web Design:</strong> Refers to the visual aesthetics and usability of a website. This includes layout design, color schemes, typography, and overall user experience (UX) design.</li>
                            <li><strong>Content Management Systems (CMS):</strong> Platforms like WordPress, Joomla, and Drupal that allow users to create, manage, and modify website content without needing to code.</li>
                        </ul>

                        <h2>Benefits of Web Development:</h2>
                        <ul>
                            <li>Provides a platform for businesses to showcase their products and services.</li>
                            <li>Enables interaction and engagement with a broader audience.</li>
                            <li>Facilitates e-commerce and online transactions, expanding market reach.</li>
                            <li>Enhances brand visibility and credibility through a professional online presence.</li>
                            <li>Allows for data collection and analysis to understand user behavior and preferences.</li>
                        </ul>

                        <h2>Conclusion:</h2>
                        <p>Overall, web development is a crucial aspect of the digital world, enabling businesses and individuals to create a significant online presence. It combines creativity and technical skills to build functional, user-friendly, and visually appealing websites that meet the needs of users and clients.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Website