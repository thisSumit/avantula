"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./button";
import { MdCalendarMonth, MdEmail, MdPhone } from "react-icons/md";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link?: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(true);
 
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
 
      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit fixed z-[100] top-5 md:top-10 inset-x-0 mx-auto px-10 py-3 sm:py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <a href="/"><h2 className="relative h-full uppercase text-xl cursor-pointer font-bold text-neutral-200">avantula</h2></a>
        {navItems.map((navItem: any, idx: number) => (
          
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={ cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            {/* add !cursor-pointer */}
            {/* remove hidden sm:block for the mobile responsive */}
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}

        <Drawer>
        <DrawerTrigger className="border text-nowrap text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white bg-black-100 px-4 py-2 rounded-full">     
          <span>Get in Touch</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-500 to-transparent  h-px" />
        </DrawerTrigger>
        <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold">Get in Touch</DrawerTitle>
          </DrawerHeader>
          <div className="">
            <div className="flex font-bold flex-col items-center gap-3 justify-center">
              <Button
                variant="default"
                className="w-[95%] h-[50px] rounded-xl"
                onClick={() => window.location.href = "http://cal.com/avantula"}
              ><MdCalendarMonth size={'20px'}/> Schedule Meet</Button>
              <Button
                variant="default"
                className="w-[95%] h-[50px] rounded-xl flex gap-1"
                onClick={() => window.location.href = "tel:+919665854768"}
              ><MdPhone size={'20px'}/>Call +91-9665854768</Button>
              <Button
                variant="default"
                className="w-[95%] h-[50px] rounded-xl flex gap-1"
                onClick={() => window.location.href = "mailto:contact@avantula.live"}
              ><MdEmail size={'20px'}/> Email contact@avantula.live</Button>
            </div>
          </div>
          <DrawerFooter>
            <div>
              <p className="text-sm font-bold mb-8">Thanks for Contacting Us</p>
            </div>
          </DrawerFooter>
          </div>
          </DrawerContent>
        </Drawer>
      </motion.div>
    </AnimatePresence>
  );
};


