'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { Client } from "@/components/Client";
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero"
import { Info } from "@/components/Info";
import { OurProjects } from "@/components/OurProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

import Middle from "@/components/Middle";
import { useEffect, useRef } from 'react';
import Logos from '@/components/Logos';



export default function Home() {

  

  return (
    <main className="relative dark:bg-black-100 bg-white-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <Hero />
        <Info />
        <Logos/>
        <Grid/>
        <Middle/>
        <OurProjects/>
        <Client/>    
        <Footer/>
      </div>
    </main>
  );
}
